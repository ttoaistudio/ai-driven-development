import express from 'express';
import { TaskController } from './TaskController.ts';
import { UserController } from './UserController.ts';
import { AuthController } from './AuthController.ts';
import { NotificationController } from './NotificationController.ts';
import { Container } from '../../../shared/container.ts';

export const buildRouter = (container: Container) => {
  const router = express.Router();
  const task = new TaskController(container);
  const user = new UserController(container);
  const auth = new AuthController(container);
  const notification = new NotificationController(container);

  router.post('/auth/login', auth.login);
  router.post('/auth/signup', user.signup);
  router.get('/users/me', user.me);

  router.post('/tasks', task.create);
  router.get('/tasks', task.list);
  router.get('/tasks/:id', task.get);

  router.post('/notifications/due-soon', notification.dueSoon);
  router.post('/notifications/due-daily', notification.dueDaily);

  return router;
};
