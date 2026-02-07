import express from 'express';
import { buildRouter } from './router.ts';

export const createServer = (container) => {
  const app = express();
  app.use(express.json());
  app.use(buildRouter(container));
  return app;
};
