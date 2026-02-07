import { Request, Response } from 'express';
import { AuthDTO } from '../../application/auth/AuthDTO.ts';
import { LoginUseCase } from '../../application/auth/LoginUseCase.ts';

export class AuthController {
  constructor(private readonly deps: { loginUseCase: LoginUseCase }) {}

  login = async (req: Request, res: Response) => {
    const { email, password } = req.body || {};
    const token = await this.deps.loginUseCase.execute({ email, password });
    if (!token) return res.status(401).json({ error: 'invalid_credentials' });
    res.json(AuthDTO(token));
  };
}
