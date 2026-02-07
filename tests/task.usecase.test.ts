import { describe, it, expect } from 'vitest';
import { CreateTaskUseCase } from '../src/application/task/CreateTaskUseCase.ts';
import { InMemoryTaskRepository } from '../src/infrastructure/persistence/InMemoryTaskRepository.ts';


describe('Task UseCases', () => {
  it('creates and retrieves task', async () => {
    const repo = new InMemoryTaskRepository();
    const usecase = new CreateTaskUseCase({ taskRepository: repo });
    await usecase.execute({ id: 't1', userId: 'u1', title: 'task' });

    const found = await repo.findById('t1');
    expect(found?.title).toBe('task');
  });

  it('returns null for missing task', async () => {
    const repo = new InMemoryTaskRepository();
    const found = await repo.findById('missing');
    expect(found).toBeNull();
  });

  it('filters by user', async () => {
    const repo = new InMemoryTaskRepository();
    const usecase = new CreateTaskUseCase({ taskRepository: repo });
    await usecase.execute({ id: 't1', userId: 'u1', title: 'a' });
    await usecase.execute({ id: 't2', userId: 'u2', title: 'b' });

    const list = await repo.findByUser('u1');
    expect(list.map(t => t.id)).toEqual(['t1']);
  });
});
