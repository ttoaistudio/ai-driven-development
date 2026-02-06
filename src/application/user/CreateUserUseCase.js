import { UserEntity } from '../../domain/user/UserEntity.js';

export class CreateUserUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }

  async execute({ id, name, email, passwordHash }) {
    const user = new UserEntity({ id, name, email, passwordHash });
    await this.userRepository.save(user);
    return user;
  }
}
