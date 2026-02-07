import { NotificationPort } from '../../application/notification/NotificationPort.ts';
import { TaskEntity } from '../../domain/task/TaskEntity.ts';

export class ConsoleNotificationService extends NotificationPort {
  async sendDueSoon(tasks: TaskEntity[]): Promise<void> {
    if (tasks.length) console.log('[notify] due soon', tasks.map(t => t.id));
  }
  async sendDueDaily(tasks: TaskEntity[]): Promise<void> {
    if (tasks.length) console.log('[notify] due daily', tasks.map(t => t.id));
  }
}
