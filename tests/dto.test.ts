import { describe, it, expect } from 'vitest';
import { TaskDTO } from '../src/application/task/TaskDTO.ts';
import { UserDTO } from '../src/application/user/UserDTO.ts';


describe('DTOs', () => {
  it('TaskDTO maps fields', () => {
    const dto = TaskDTO({
      id: 't1',
      userId: 'u1',
      title: 'x',
      status: 'todo',
      dueAt: '2025-01-01T00:00:00Z',
      tags: ['a'],
      notes: 'n'
    } as any);
    expect(dto).toEqual({
      id: 't1',
      user_id: 'u1',
      title: 'x',
      status: 'todo',
      due_at: '2025-01-01T00:00:00Z',
      tags: ['a'],
      notes: 'n'
    });
  });

  it('UserDTO maps fields', () => {
    const dto = UserDTO({ id: 'u1', name: 't', email: 'a@b.com' } as any);
    expect(dto).toEqual({ id: 'u1', name: 't', email: 'a@b.com' });
  });
});
