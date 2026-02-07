import { UserEntity } from '../../../domain/user/UserEntity.ts';

export class UserRepository {
  async save(_user: UserEntity): Promise<void> { throw new Error('NotImplemented'); }
  async findById(_id: string): Promise<UserEntity | null> { throw new Error('NotImplemented'); }
  async findByEmail(_email: string): Promise<UserEntity | null> { throw new Error('NotImplemented'); }
}
