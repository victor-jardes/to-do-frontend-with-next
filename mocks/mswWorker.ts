import { setupWorker } from "msw";
import { handlers } from "./handlers/handlers";

export const mswWorker = setupWorker(...handlers);
