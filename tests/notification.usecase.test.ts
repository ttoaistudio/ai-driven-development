// テストケース
import { describe, it, expect } from 'vitest';
import { ScheduleNotificationsUseCase } from '../src/application/notification/ScheduleNotificationsUseCase.ts';
import { InMemoryTaskRepository } from '../src/infrastructure/persistence/InMemoryTaskRepository.ts';
import { TaskEntity } from '../src/domain/task/TaskEntity.ts';

class SpyNotificationPort {
  dueSoonCalls: string[] = [];
  dueDailyCalls: string[] = [];
  async sendDueSoon(tasks: TaskEntity[]) { this.dueSoonCalls = tasks.map(t => t.id); }
  async sendDueDaily(tasks: TaskEntity[]) { this.dueDailyCalls = tasks.map(t => t.id); }
}

describe('ScheduleNotificationsUseCaseの挙動', () => {
  it('期限1時間以内のみ通知する', async () => {
    const repo = new InMemoryTaskRepository();
    const port = new SpyNotificationPort();
    const usecase = new ScheduleNotificationsUseCase({ taskRepository: repo, notificationPort: port });

    const soon = new Date(Date.now() + 30 * 60 * 1000);
    const later = new Date(Date.now() + 5 * 60 * 60 * 1000);

    await repo.save(new TaskEntity({ id: 't1', userId: 'u1', title: 'soon', status: 'todo', dueAt: soon }));
    await repo.save(new TaskEntity({ id: 't2', userId: 'u1', title: 'later', status: 'todo', dueAt: later }));

    await usecase.dueSoon(new Date(Date.now() + 60 * 60 * 1000));

    expect(port.dueSoonCalls).toEqual(['t1']);
  });

  it('24時間以内のみ日次通知する', async () => {
    const repo = new InMemoryTaskRepository();
    const port = new SpyNotificationPort();
    const usecase = new ScheduleNotificationsUseCase({ taskRepository: repo, notificationPort: port });

    const within = new Date(Date.now() + 23 * 60 * 60 * 1000);
    const outside = new Date(Date.now() + 30 * 60 * 60 * 1000);

    await repo.save(new TaskEntity({ id: 't1', userId: 'u1', title: 'within', status: 'todo', dueAt: within }));
    await repo.save(new TaskEntity({ id: 't2', userId: 'u1', title: 'outside', status: 'todo', dueAt: outside }));

    await usecase.dueDaily(new Date(Date.now() + 24 * 60 * 60 * 1000));

    expect(port.dueDailyCalls).toEqual(['t1']);
  });
});
