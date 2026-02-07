import { Request, Response } from 'express';
import { TaskDTO } from '../../../application/task/TaskDTO.ts';
import { CreateTaskUseCase } from '../../../application/task/CreateTaskUseCase.ts';
import { TaskRepository } from '../../../application/task/TaskRepository.ts';

export class TaskController {
  constructor(
    private readonly deps: {
      createTaskUseCase: CreateTaskUseCase;
      taskRepository: TaskRepository;
    }
  ) {}

  create = async (req: Request, res: Response) => {
    const { user_id, title, status, due_at, tags, notes } = req.body || {};
    if (!user_id || !title) return res.status(400).json({ error: 'invalid_input' });
    const task = await this.deps.createTaskUseCase.execute({
      id: crypto.randomUUID(),
      userId: user_id,
      title,
      status,
      dueAt: due_at,
      tags,
      notes
    });
    res.json(TaskDTO(task));
  };

  list = async (req: Request, res: Response) => {
    const { user_id } = req.query as { user_id?: string };
    const list = await this.deps.taskRepository.findByUser(user_id as string);
    res.json(list.map(TaskDTO));
  };

  get = async (req: Request, res: Response) => {
    const task = await this.deps.taskRepository.findById(req.params.id);
    if (!task) return res.status(404).json({ error: 'task_not_found' });
    res.json(TaskDTO(task));
  };
}
