// テストケース
import { describe, it, expect } from 'vitest';
import { LoginUseCase } from '../application/auth/LoginUseCase.ts';
import { InMemoryUserRepository } from '../infrastructure/persistence/InMemoryUserRepository.ts';
import { AuthService } from '../application/auth/AuthService.ts';
import { UserEntity } from '../domain/user/UserEntity.ts';


describe('LoginUseCaseの挙動', () => {
  it('正しい認証でトークンが返る', async () => {
    const repo = new InMemoryUserRepository();
    const auth = new AuthService();
    const user = new UserEntity({ id: 'u1', name: 't', email: 'a@b.com', passwordHash: auth.hash('pw') });
    await repo.save(user);

    const usecase = new LoginUseCase({ userRepository: repo, authService: auth });
    const token = await usecase.execute({ email: 'a@b.com', password: 'pw' });
    expect(token).toBe('token-u1');
  });

  it('存在しないユーザーでnullを返す', async () => {
    const repo = new InMemoryUserRepository();
    const auth = new AuthService();
    const usecase = new LoginUseCase({ userRepository: repo, authService: auth });
    const token = await usecase.execute({ email: 'missing@b.com', password: 'pw' });
    expect(token).toBeNull();
  });

  it('パスワード誤りでnullを返す', async () => {
    const repo = new InMemoryUserRepository();
    const auth = new AuthService();
    const user = new UserEntity({ id: 'u1', name: 't', email: 'a@b.com', passwordHash: auth.hash('pw') });
    await repo.save(user);

    const usecase = new LoginUseCase({ userRepository: repo, authService: auth });
    const token = await usecase.execute({ email: 'a@b.com', password: 'wrong' });
    expect(token).toBeNull();
  });
});
