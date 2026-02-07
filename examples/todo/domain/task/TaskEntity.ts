export interface TaskProps {
  id: string;
  userId: string;
  title: string;
  status: string;
  dueAt?: string | null;
  tags?: string[];
  notes?: string;
}

export class TaskEntity {
  id: string;
  userId: string;
  title: string;
  status: string;
  dueAt: string | null;
  tags: string[];
  notes: string;

  constructor({ id, userId, title, status, dueAt = null, tags = [], notes = '' }: TaskProps) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.status = status;
    this.dueAt = dueAt;
    this.tags = tags;
    this.notes = notes;
  }
}
