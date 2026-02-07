import { UserEntity } from '../../domain/user/UserEntity.ts';

export const UserDTO = (user: UserEntity) => ({
  id: user.id,
  name: user.name,
  email: user.email,
});
