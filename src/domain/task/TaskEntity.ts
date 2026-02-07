export class TaskEntity {
  constructor({ id, userId, title, status, dueAt = null, tags = [], notes = '' }) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.status = status;
    this.dueAt = dueAt;
    this.tags = tags;
    this.notes = notes;
  }
}
