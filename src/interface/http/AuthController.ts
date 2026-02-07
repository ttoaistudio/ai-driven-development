import { AuthDTO } from '../../application/auth/AuthDTO.ts';

export class AuthController {
  constructor({ loginUseCase }) { this.loginUseCase = loginUseCase; }

  login = async (req, res) => {
    const { email, password } = req.body || {};
    const token = await this.loginUseCase.execute({ email, password });
    if (!token) return res.status(401).json({ error: 'invalid_credentials' });
    res.json(AuthDTO(token));
  };
}
