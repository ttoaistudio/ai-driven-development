import express from "express";
import { v4 as uuid } from "uuid";

const app = express();
app.use(express.json());

// ---- In-memory data (sample only) ----
const users = new Map();
const tasks = new Map();

// ---- Helpers ----
const now = () => new Date().toISOString();

// ---- Auth ----
app.post("/auth/signup", (req, res) => {
  const { name, email, password } = req.body || {};
  if (!name || !email || !password) return res.status(400).json({ error: "invalid_input" });
  if ([...users.values()].find((u) => u.email === email)) return res.status(409).json({ error: "email_exists" });

  const id = uuid();
  users.set(id, { id, name, email, password_hash: `hash(${password})`, created_at: now() });
  return res.json({ token: `token-${id}`, user: { id, name, email } });
});

app.post("/auth/login", (req, res) => {
  const { email, password } = req.body || {};
  const user = [...users.values()].find((u) => u.email === email);
  if (!user) return res.status(401).json({ error: "invalid_credentials" });
  if (user.password_hash !== `hash(${password})`) return res.status(401).json({ error: "invalid_credentials" });
  return res.json({ token: `token-${user.id}` });
});

// ---- Users ----
app.get("/users/me", (req, res) => {
  // NOTE: sample only. normally read token.
  const id = req.header("x-user-id");
  const user = users.get(id);
  if (!user) return res.status(404).json({ error: "user_not_found" });
  return res.json({ id: user.id, name: user.name, email: user.email });
});

// ---- Tasks ----
app.post("/tasks", (req, res) => {
  const { user_id, title, status = "todo", due_at = null, tags = [], notes = "" } = req.body || {};
  if (!user_id || !title) return res.status(400).json({ error: "invalid_input" });
  if (!users.get(user_id)) return res.status(404).json({ error: "user_not_found" });

  const id = uuid();
  const task = { id, user_id, title, status, due_at, tags, notes, created_at: now(), updated_at: now() };
  tasks.set(id, task);
  return res.json(task);
});

app.get("/tasks", (req, res) => {
  const { user_id } = req.query;
  const list = [...tasks.values()].filter((t) => (user_id ? t.user_id === user_id : true));
  return res.json(list);
});

app.get("/tasks/:id", (req, res) => {
  const task = tasks.get(req.params.id);
  if (!task) return res.status(404).json({ error: "task_not_found" });
  return res.json(task);
});

app.patch("/tasks/:id", (req, res) => {
  const task = tasks.get(req.params.id);
  if (!task) return res.status(404).json({ error: "task_not_found" });

  const next = { ...task, ...req.body, updated_at: now() };
  tasks.set(task.id, next);
  return res.json(next);
});

app.delete("/tasks/:id", (req, res) => {
  const ok = tasks.delete(req.params.id);
  return res.json({ ok });
});

// ---- Notifications (in-process scheduler mock) ----
setInterval(() => {
  const soon = new Date(Date.now() + 60 * 60 * 1000);
  const dueSoon = [...tasks.values()].filter((t) => t.due_at && new Date(t.due_at) <= soon);
  if (dueSoon.length) console.log("[notify] due soon:", dueSoon.map((t) => t.id));
}, 15 * 60 * 1000);

setInterval(() => {
  const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const dueTomorrow = [...tasks.values()].filter((t) => t.due_at && new Date(t.due_at) <= tomorrow);
  if (dueTomorrow.length) console.log("[notify] due within 24h:", dueTomorrow.map((t) => t.id));
}, 24 * 60 * 60 * 1000);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`ToDo monolith running on :${PORT}`));
