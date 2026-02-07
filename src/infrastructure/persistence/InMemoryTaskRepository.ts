import { TaskRepository } from '../../application/task/TaskRepository.ts';

export class InMemoryTaskRepository extends TaskRepository {
  constructor() {
    super();
    this.tasks = new Map();
  }

  async save(task) { this.tasks.set(task.id, task); }
  async findById(id) { return this.tasks.get(id) || null; }
  async findByUser(userId) { return [...this.tasks.values()].filter(t => t.userId === userId); }
  async findDueBefore(cutoff) {
    return [...this.tasks.values()].filter(t => t.dueAt && new Date(t.dueAt) <= cutoff);
  }
}
