// テストケース
import { describe, it, expect } from 'vitest';
import { TaskDTO } from '../application/task/TaskDTO.ts';
import { UserDTO } from '../application/user/UserDTO.ts';

interface TaskShape {
  id: string;
  userId: string;
  title: string;
  status: string;
  dueAt: string | null;
  tags: string[];
  notes: string;
}

describe('DTOの変換', () => {
  it('TaskDTOがフィールドを正しく変換する', () => {
    const task: TaskShape = {
      id: 't1',
      userId: 'u1',
      title: 'x',
      status: 'todo',
      dueAt: '2025-01-01T00:00:00Z',
      tags: ['a'],
      notes: 'n'
    };
    const dto = TaskDTO(task);
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

  it('UserDTOがフィールドを正しく変換する', () => {
    const user = { id: 'u1', name: 't', email: 'a@b.com' };
    const dto = UserDTO(user);
    expect(dto).toEqual({ id: 'u1', name: 't', email: 'a@b.com' });
  });
});
