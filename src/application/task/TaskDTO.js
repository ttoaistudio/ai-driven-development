export const TaskDTO = (task) => ({
  id: task.id,
  user_id: task.userId,
  title: task.title,
  status: task.status,
  due_at: task.dueAt,
  tags: task.tags,
  notes: task.notes,
});
