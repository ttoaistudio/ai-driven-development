import { describe, it, expect } from 'vitest';
import { CreateTaskUseCase } from '../src/application/task/CreateTaskUseCase.ts';
import { InMemoryTaskRepository } from '../src/infrastructure/persistence/InMemoryTaskRepository.ts';


describe('CreateTaskUseCase', () => {
  it('creates task and stores in repository', async () => {
    const repo = new InMemoryTaskRepository();
    const usecase = new CreateTaskUseCase({ taskRepository: repo });
    const task = await usecase.execute({ id: 't1', userId: 'u1', title: 'hello' });
    const found = await repo.findById('t1');
    expect(found?.title).toBe('hello');
    expect(task.userId).toBe('u1');
  });
});