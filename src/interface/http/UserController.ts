import { UserDTO } from '../../application/user/UserDTO.ts';

export class UserController {
  constructor({ createUserUseCase, userRepository }) {
    this.createUserUseCase = createUserUseCase;
    this.userRepository = userRepository;
  }

  me = async (req, res) => {
    const id = req.header('x-user-id');
    const user = await this.userRepository.findById(id);
    if (!user) return res.status(404).json({ error: 'user_not_found' });
    res.json(UserDTO(user));
  };

  signup = async (req, res) => {
    const { name, email, password } = req.body || {};
    if (!name || !email || !password) return res.status(400).json({ error: 'invalid_input' });
    const exists = await this.userRepository.findByEmail(email);
    if (exists) return res.status(409).json({ error: 'email_exists' });
    const user = await this.createUserUseCase.execute({ id: crypto.randomUUID(), name, email, passwordHash: `hash(${password})` });
    res.json({ user: UserDTO(user), token: `token-${user.id}` });
  };
}
