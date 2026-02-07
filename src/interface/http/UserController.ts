import { Request, Response } from 'express';
import { UserDTO } from '../../application/user/UserDTO.ts';
import { CreateUserUseCase } from '../../application/user/CreateUserUseCase.ts';
import { UserRepository } from '../../application/user/UserRepository.ts';

export class UserController {
  constructor(
    private readonly deps: {
      createUserUseCase: CreateUserUseCase;
      userRepository: UserRepository;
    }
  ) {}

  me = async (req: Request, res: Response) => {
    const id = req.header('x-user-id');
    if (!id) return res.status(400).json({ error: 'invalid_input' });
    const user = await this.deps.userRepository.findById(id);
    if (!user) return res.status(404).json({ error: 'user_not_found' });
    res.json(UserDTO(user));
  };

  signup = async (req: Request, res: Response) => {
    const { name, email, password } = req.body || {};
    if (!name || !email || !password) return res.status(400).json({ error: 'invalid_input' });
    const exists = await this.deps.userRepository.findByEmail(email);
    if (exists) return res.status(409).json({ error: 'email_exists' });
    const user = await this.deps.createUserUseCase.execute({
      id: crypto.randomUUID(),
      name,
      email,
      passwordHash: `hash(${password})`
    });
    res.json({ user: UserDTO(user), token: `token-${user.id}` });
  };
}
