import { UserRepository } from '../user/UserRepository.ts';
import { AuthService } from './AuthService.ts';

export interface LoginInput {
  email: string;
  password: string;
}

export class LoginUseCase {
  constructor(private readonly deps: { userRepository: UserRepository; authService: AuthService }) {}

  async execute({ email, password }: LoginInput): Promise<string | null> {
    const user = await this.deps.userRepository.findByEmail(email);
    if (!user) return null;
    if (!this.deps.authService.verify(password, user.passwordHash)) return null;
    return this.deps.authService.token(user.id);
  }
}
