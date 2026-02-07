import { UserRepository } from '../../application/user/UserRepository.ts';

export class InMemoryUserRepository extends UserRepository {
  constructor() {
    super();
    this.users = new Map();
  }

  async save(user) { this.users.set(user.id, user); }
  async findById(id) { return this.users.get(id) || null; }
  async findByEmail(email) { return [...this.users.values()].find(u => u.email === email) || null; }
}
