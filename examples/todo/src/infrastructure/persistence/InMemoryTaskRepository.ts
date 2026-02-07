import { TaskRepository } from '../../../application/task/TaskRepository.ts';
import { TaskEntity } from '../../../domain/task/TaskEntity.ts';

export class InMemoryTaskRepository extends TaskRepository {
  private tasks = new Map<string, TaskEntity>();

  async save(task: TaskEntity): Promise<void> { this.tasks.set(task.id, task); }
  async findById(id: string): Promise<TaskEntity | null> { return this.tasks.get(id) || null; }
  async findByUser(userId: string): Promise<TaskEntity[]> {
    return [...this.tasks.values()].filter(t => t.userId === userId);
  }
  async findDueBefore(cutoff: Date): Promise<TaskEntity[]> {
    return [...this.tasks.values()].filter(t => t.dueAt && new Date(t.dueAt) <= cutoff);
  }
}
