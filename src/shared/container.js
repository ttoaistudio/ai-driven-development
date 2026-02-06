import { InMemoryTaskRepository } from '../infrastructure/persistence/InMemoryTaskRepository.js';
import { InMemoryUserRepository } from '../infrastructure/persistence/InMemoryUserRepository.js';
import { ConsoleNotificationService } from '../infrastructure/notification/ConsoleNotificationService.js';
import { CreateTaskUseCase } from '../application/task/CreateTaskUseCase.js';
import { CreateUserUseCase } from '../application/user/CreateUserUseCase.js';
import { LoginUseCase } from '../application/auth/LoginUseCase.js';
import { AuthService } from '../application/auth/AuthService.js';
import { ScheduleNotificationsUseCase } from '../application/notification/ScheduleNotificationsUseCase.js';

export const buildContainer = () => {
  const taskRepository = new InMemoryTaskRepository();
  const userRepository = new InMemoryUserRepository();
  const notificationPort = new ConsoleNotificationService();
  const authService = new AuthService();

  return {
    taskRepository,
    userRepository,
    notificationPort,
    authService,
    createTaskUseCase: new CreateTaskUseCase({ taskRepository }),
    createUserUseCase: new CreateUserUseCase({ userRepository }),
    loginUseCase: new LoginUseCase({ userRepository, authService }),
    scheduleNotificationsUseCase: new ScheduleNotificationsUseCase({ taskRepository, notificationPort }),
  };
};
