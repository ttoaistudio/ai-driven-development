import { Request, Response } from 'express';
import { ScheduleNotificationsUseCase } from '../../application/notification/ScheduleNotificationsUseCase.ts';

export class NotificationController {
  constructor(private readonly deps: { scheduleNotificationsUseCase: ScheduleNotificationsUseCase }) {}

  dueSoon = async (_req: Request, res: Response) => {
    const cutoff = new Date(Date.now() + 60 * 60 * 1000);
    await this.deps.scheduleNotificationsUseCase.dueSoon(cutoff);
    res.json({ ok: true });
  };

  dueDaily = async (_req: Request, res: Response) => {
    const cutoff = new Date(Date.now() + 24 * 60 * 60 * 1000);
    await this.deps.scheduleNotificationsUseCase.dueDaily(cutoff);
    res.json({ ok: true });
  };
}
