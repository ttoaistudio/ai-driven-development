export class NotificationController {
  constructor({ scheduleNotificationsUseCase }) {
    this.scheduleNotificationsUseCase = scheduleNotificationsUseCase;
  }

  dueSoon = async (req, res) => {
    const cutoff = new Date(Date.now() + 60 * 60 * 1000);
    await this.scheduleNotificationsUseCase.dueSoon(cutoff);
    res.json({ ok: true });
  };

  dueDaily = async (req, res) => {
    const cutoff = new Date(Date.now() + 24 * 60 * 60 * 1000);
    await this.scheduleNotificationsUseCase.dueDaily(cutoff);
    res.json({ ok: true });
  };
}
