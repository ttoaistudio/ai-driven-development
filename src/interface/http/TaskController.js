import { TaskDTO } from '../../application/task/TaskDTO.js';

export class TaskController {
  constructor({ createTaskUseCase, taskRepository }) {
    this.createTaskUseCase = createTaskUseCase;
    this.taskRepository = taskRepository;
  }

  create = async (req, res) => {
    const { user_id, title, status, due_at, tags, notes } = req.body || {};
    if (!user_id || !title) return res.status(400).json({ error: 'invalid_input' });
    const task = await this.createTaskUseCase.execute({ id: crypto.randomUUID(), userId: user_id, title, status, dueAt: due_at, tags, notes });
    res.json(TaskDTO(task));
  };

  list = async (req, res) => {
    const { user_id } = req.query;
    const list = await this.taskRepository.findByUser(user_id);
    res.json(list.map(TaskDTO));
  };

  get = async (req, res) => {
    const task = await this.taskRepository.findById(req.params.id);
    if (!task) return res.status(404).json({ error: 'task_not_found' });
    res.json(TaskDTO(task));
  };
}
