import { TaskRepository } from '../task/TaskRepository.ts';
import { NotificationPort } from './NotificationPort.ts';

export class ScheduleNotificationsUseCase {
  constructor(private readonly deps: { taskRepository: TaskRepository; notificationPort: NotificationPort }) {}

  async dueSoon(cutoff: Date): Promise<void> {
    const tasks = await this.deps.taskRepository.findDueBefore(cutoff);
    await this.deps.notificationPort.sendDueSoon(tasks);
  }

  async dueDaily(cutoff: Date): Promise<void> {
    const tasks = await this.deps.taskRepository.findDueBefore(cutoff);
    await this.deps.notificationPort.sendDueDaily(tasks);
  }
}
