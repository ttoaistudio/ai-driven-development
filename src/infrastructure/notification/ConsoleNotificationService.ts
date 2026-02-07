import { NotificationPort } from '../../application/notification/NotificationPort.ts';

export class ConsoleNotificationService extends NotificationPort {
  async sendDueSoon(tasks) { if (tasks.length) console.log('[notify] due soon', tasks.map(t=>t.id)); }
  async sendDueDaily(tasks) { if (tasks.length) console.log('[notify] due daily', tasks.map(t=>t.id)); }
}
