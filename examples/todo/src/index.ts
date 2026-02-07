import { createServer } from './interface/http/server.ts';
import { buildContainer } from './shared/container.ts';

const app = createServer(buildContainer());
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`ToDo monolith running on :${PORT}`));
