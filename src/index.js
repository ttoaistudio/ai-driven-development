import { createServer } from './interface/http/server.js';
import { buildContainer } from './shared/container.js';

const app = createServer(buildContainer());
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`ToDo monolith running on :${PORT}`));
