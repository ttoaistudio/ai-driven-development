// テストケース
import { describe, it, expect } from 'vitest';
import { CreateTaskUseCase } from '../application/task/CreateTaskUseCase.ts';
import { InMemoryTaskRepository } from '../infrastructure/persistence/InMemoryTaskRepository.ts';


describe('Taskユースケースの挙動', () => {
  it('タスクを作成して取得できる', async () => {
    const repo = new InMemoryTaskRepository();
    const usecase = new CreateTaskUseCase({ taskRepository: repo });
    await usecase.execute({ id: 't1', userId: 'u1', title: 'task' });

    const found = await repo.findById('t1');
    expect(found?.title).toBe('task');
  });

  it('存在しないタスクはnullを返す', async () => {
    const repo = new InMemoryTaskRepository();
    const found = await repo.findById('missing');
    expect(found).toBeNull();
  });

  it('ユーザーでフィルタできる', async () => {
    const repo = new InMemoryTaskRepository();
    const usecase = new CreateTaskUseCase({ taskRepository: repo });
    await usecase.execute({ id: 't1', userId: 'u1', title: 'a' });
    await usecase.execute({ id: 't2', userId: 'u2', title: 'b' });

    const list = await repo.findByUser('u1');
    expect(list.map(t => t.id)).toEqual(['t1']);
  });
});
