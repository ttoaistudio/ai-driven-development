import { describe, it, expect } from 'vitest';
import { LoginUseCase } from '../src/application/auth/LoginUseCase.ts';
import { InMemoryUserRepository } from '../src/infrastructure/persistence/InMemoryUserRepository.ts';
import { AuthService } from '../src/application/auth/AuthService.ts';
import { UserEntity } from '../src/domain/user/UserEntity.ts';


describe('LoginUseCase', () => {
  it('returns token when credentials match', async () => {
    const repo = new InMemoryUserRepository();
    const auth = new AuthService();
    const user = new UserEntity({ id: 'u1', name: 't', email: 'a@b.com', passwordHash: auth.hash('pw') });
    await repo.save(user);

    const usecase = new LoginUseCase({ userRepository: repo, authService: auth });
    const token = await usecase.execute({ email: 'a@b.com', password: 'pw' });
    expect(token).toBe('token-u1');
  });

  it('returns null when user does not exist', async () => {
    const repo = new InMemoryUserRepository();
    const auth = new AuthService();
    const usecase = new LoginUseCase({ userRepository: repo, authService: auth });
    const token = await usecase.execute({ email: 'missing@b.com', password: 'pw' });
    expect(token).toBeNull();
  });

  it('returns null when password is wrong', async () => {
    const repo = new InMemoryUserRepository();
    const auth = new AuthService();
    const user = new UserEntity({ id: 'u1', name: 't', email: 'a@b.com', passwordHash: auth.hash('pw') });
    await repo.save(user);

    const usecase = new LoginUseCase({ userRepository: repo, authService: auth });
    const token = await usecase.execute({ email: 'a@b.com', password: 'wrong' });
    expect(token).toBeNull();
  });
});
