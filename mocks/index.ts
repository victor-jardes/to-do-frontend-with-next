import { mswServer } from "./mswServer";
import { mswWorker } from "./mswWorker";

const IS_BROWSER = typeof window !== "undefined";
export const setupMocks = async () => {
  if (IS_BROWSER) {
    mswWorker.start();
  } else {
    mswServer.listen();
  }
};
