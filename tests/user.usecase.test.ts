// テストケース
import { describe, it, expect } from 'vitest';
import { CreateUserUseCase } from '../src/application/user/CreateUserUseCase.ts';
import { InMemoryUserRepository } from '../src/infrastructure/persistence/InMemoryUserRepository.ts';


describe('Userユースケースの挙動', () => {
  it('ユーザーを作成して取得できる', async () => {
    const repo = new InMemoryUserRepository();
    const usecase = new CreateUserUseCase({ userRepository: repo });
    await usecase.execute({ id: 'u1', name: 't', email: 'a@b.com', passwordHash: 'hash(pw)' });

    const found = await repo.findById('u1');
    expect(found?.email).toBe('a@b.com');
  });

  it('存在しないユーザーはnullを返す', async () => {
    const repo = new InMemoryUserRepository();
    const found = await repo.findById('missing');
    expect(found).toBeNull();
  });

  it('メールで検索できる', async () => {
    const repo = new InMemoryUserRepository();
    const usecase = new CreateUserUseCase({ userRepository: repo });
    await usecase.execute({ id: 'u1', name: 't', email: 'a@b.com', passwordHash: 'hash(pw)' });

    const found = await repo.findByEmail('a@b.com');
    expect(found?.id).toBe('u1');
  });
});
