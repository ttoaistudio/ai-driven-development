import { TaskEntity } from '../../domain/task/TaskEntity.ts';

export class TaskRepository {
  async save(_task: TaskEntity): Promise<void> { throw new Error('NotImplemented'); }
  async findById(_id: string): Promise<TaskEntity | null> { throw new Error('NotImplemented'); }
  async findByUser(_userId: string): Promise<TaskEntity[]> { throw new Error('NotImplemented'); }
  async findDueBefore(_cutoff: Date): Promise<TaskEntity[]> { throw new Error('NotImplemented'); }
}
