import { UserRepository } from '../../../application/user/UserRepository.ts';
import { UserEntity } from '../../../domain/user/UserEntity.ts';

export class InMemoryUserRepository extends UserRepository {
  private users = new Map<string, UserEntity>();

  async save(user: UserEntity): Promise<void> { this.users.set(user.id, user); }
  async findById(id: string): Promise<UserEntity | null> { return this.users.get(id) || null; }
  async findByEmail(email: string): Promise<UserEntity | null> {
    return [...this.users.values()].find(u => u.email === email) || null;
  }
}
