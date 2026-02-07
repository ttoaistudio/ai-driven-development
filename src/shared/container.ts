import { InMemoryTaskRepository } from '../infrastructure/persistence/InMemoryTaskRepository.ts';
import { InMemoryUserRepository } from '../infrastructure/persistence/InMemoryUserRepository.ts';
import { ConsoleNotificationService } from '../infrastructure/notification/ConsoleNotificationService.ts';
import { CreateTaskUseCase } from '../application/task/CreateTaskUseCase.ts';
import { CreateUserUseCase } from '../application/user/CreateUserUseCase.ts';
import { LoginUseCase } from '../application/auth/LoginUseCase.ts';
import { AuthService } from '../application/auth/AuthService.ts';
import { ScheduleNotificationsUseCase } from '../application/notification/ScheduleNotificationsUseCase.ts';

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
