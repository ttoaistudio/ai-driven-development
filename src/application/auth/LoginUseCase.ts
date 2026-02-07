export class LoginUseCase {
  constructor({ userRepository, authService }) {
    this.userRepository = userRepository;
    this.authService = authService;
  }

  async execute({ email, password }) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) return null;
    if (!this.authService.verify(password, user.passwordHash)) return null;
    return this.authService.token(user.id);
  }
}
