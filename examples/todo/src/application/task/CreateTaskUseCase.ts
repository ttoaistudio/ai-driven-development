import { TaskEntity } from '../../../domain/task/TaskEntity.ts';
import { TaskStatus } from '../../../domain/task/TaskStatus.ts';
import { TaskRepository } from './TaskRepository.ts';

export interface CreateTaskInput {
  id: string;
  userId: string;
  title: string;
  status?: string;
  dueAt?: string | null;
  tags?: string[];
  notes?: string;
}

export class CreateTaskUseCase {
  constructor(private readonly deps: { taskRepository: TaskRepository }) {}

  async execute({ id, userId, title, status = TaskStatus.TODO, dueAt, tags = [], notes = '' }: CreateTaskInput): Promise<TaskEntity> {
    const task = new TaskEntity({ id, userId, title, status, dueAt, tags, notes });
    await this.deps.taskRepository.save(task);
    return task;
  }
}
