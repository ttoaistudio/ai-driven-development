import { TaskEntity } from '../../../domain/task/TaskEntity.ts';

export class NotificationPort {
  async sendDueSoon(_tasks: TaskEntity[]): Promise<void> { throw new Error('NotImplemented'); }
  async sendDueDaily(_tasks: TaskEntity[]): Promise<void> { throw new Error('NotImplemented'); }
}
