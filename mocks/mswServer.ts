import { setupServer } from "msw/node";

import { handlers } from "./handlers/handlers";

export const mswServer = setupServer(...handlers);
