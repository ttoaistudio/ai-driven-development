import { describe, it, expect } from 'vitest';
import { TaskController } from '../src/interface/http/TaskController.ts';
import { UserController } from '../src/interface/http/UserController.ts';
import { AuthController } from '../src/interface/http/AuthController.ts';

const mockRes = () => {
  const res: any = {};
  res.statusCode = 200;
  res.status = (code: number) => { res.statusCode = code; return res; };
  res.json = (body: any) => { res.body = body; return res; };
  return res;
};

describe('Controllers validation', () => {
  it('TaskController.create returns 400 on invalid input', async () => {
    const controller = new TaskController({
      createTaskUseCase: { execute: async () => ({}) },
      taskRepository: { findByUser: async () => [] }
    } as any);

    const req: any = { body: { title: 'x' } }; // missing user_id
    const res = mockRes();
    await controller.create(req, res);
    expect(res.statusCode).toBe(400);
  });

  it('UserController.signup returns 400 on invalid input', async () => {
    const controller = new UserController({
      createUserUseCase: { execute: async () => ({}) },
      userRepository: { findByEmail: async () => null }
    } as any);

    const req: any = { body: { email: 'a@b.com' } }; // missing name/password
    const res = mockRes();
    await controller.signup(req, res);
    expect(res.statusCode).toBe(400);
  });

  it('AuthController.login returns 401 on invalid credentials', async () => {
    const controller = new AuthController({
      loginUseCase: { execute: async () => null }
    } as any);

    const req: any = { body: { email: 'a@b.com', password: 'pw' } };
    const res = mockRes();
    await controller.login(req, res);
    expect(res.statusCode).toBe(401);
  });
});
