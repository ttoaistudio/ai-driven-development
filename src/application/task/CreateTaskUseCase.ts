import { TaskEntity } from '../../domain/task/TaskEntity.ts';
import { TaskStatus } from '../../domain/task/TaskStatus.ts';

export class CreateTaskUseCase {
  constructor({ taskRepository }) {
    this.taskRepository = taskRepository;
  }

  async execute({ id, userId, title, status = TaskStatus.TODO, dueAt, tags = [], notes = '' }) {
    const task = new TaskEntity({ id, userId, title, status, dueAt, tags, notes });
    await this.taskRepository.save(task);
    return task;
  }
}
