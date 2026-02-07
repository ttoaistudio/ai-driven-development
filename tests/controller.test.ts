import { describe, it, expect } from 'vitest';
import { Request, Response } from 'express';
import { TaskController } from '../src/interface/http/TaskController.ts';
import { UserController } from '../src/interface/http/UserController.ts';
import { AuthController } from '../src/interface/http/AuthController.ts';
import { CreateTaskUseCase } from '../src/application/task/CreateTaskUseCase.ts';
import { TaskRepository } from '../src/application/task/TaskRepository.ts';
import { CreateUserUseCase } from '../src/application/user/CreateUserUseCase.ts';
import { UserRepository } from '../src/application/user/UserRepository.ts';
import { LoginUseCase } from '../src/application/auth/LoginUseCase.ts';

interface MockResponse extends Response {
  statusCode: number;
  body?: unknown;
}

const mockRes = (): MockResponse => {
  const res: MockResponse = {
    statusCode: 200,
    status(this: MockResponse, code: number) { this.statusCode = code; return this; },
    json(this: MockResponse, body: unknown) { this.body = body; return this; }
  } as MockResponse;
  return res;
};

describe('Controllerの入力バリデーション', () => {
  it('TaskController.createが不正入力で400を返す', async () => {
    const createTaskUseCase = { execute: async () => ({}) } as unknown as CreateTaskUseCase;
    const taskRepository = { findByUser: async () => [] } as unknown as TaskRepository;
    const controller = new TaskController({ createTaskUseCase, taskRepository });

    const req = { body: { title: 'x' } } as unknown as Request;
    const res = mockRes();
    await controller.create(req, res);
    expect(res.statusCode).toBe(400);
  });

  it('UserController.signupが不正入力で400を返す', async () => {
    const createUserUseCase = { execute: async () => ({}) } as unknown as CreateUserUseCase;
    const userRepository = { findByEmail: async () => null } as unknown as UserRepository;
    const controller = new UserController({ createUserUseCase, userRepository });

    const req = { body: { email: 'a@b.com' } } as unknown as Request;
    const res = mockRes();
    await controller.signup(req, res);
    expect(res.statusCode).toBe(400);
  });

  it('AuthController.loginが不正認証で401を返す', async () => {
    const loginUseCase = { execute: async () => null } as unknown as LoginUseCase;
    const controller = new AuthController({ loginUseCase });

    const req = { body: { email: 'a@b.com', password: 'pw' } } as unknown as Request;
    const res = mockRes();
    await controller.login(req, res);
    expect(res.statusCode).toBe(401);
  });
});
