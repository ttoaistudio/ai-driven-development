export class ScheduleNotificationsUseCase {
  constructor({ taskRepository, notificationPort }) {
    this.taskRepository = taskRepository;
    this.notificationPort = notificationPort;
  }

  async dueSoon(cutoff) {
    const tasks = await this.taskRepository.findDueBefore(cutoff);
    await this.notificationPort.sendDueSoon(tasks);
  }

  async dueDaily(cutoff) {
    const tasks = await this.taskRepository.findDueBefore(cutoff);
    await this.notificationPort.sendDueDaily(tasks);
  }
}
