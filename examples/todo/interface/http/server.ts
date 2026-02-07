import express from 'express';
import { buildRouter } from './router.ts';
import { Container } from '../../shared/container.ts';

export const createServer = (container: Container) => {
  const app = express();
  app.use(express.json());
  app.use(buildRouter(container));
  return app;
};
