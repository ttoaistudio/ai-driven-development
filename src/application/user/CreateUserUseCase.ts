import { UserEntity } from '../../domain/user/UserEntity.ts';
import { UserRepository } from './UserRepository.ts';

export interface CreateUserInput {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
}

export class CreateUserUseCase {
  constructor(private readonly deps: { userRepository: UserRepository }) {}

  async execute({ id, name, email, passwordHash }: CreateUserInput): Promise<UserEntity> {
    const user = new UserEntity({ id, name, email, passwordHash });
    await this.deps.userRepository.save(user);
    return user;
  }
}
