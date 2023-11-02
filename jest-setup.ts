import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

import loadEnvValues from "./src/utils/loadEnv/loadEnvValues";
import { mswServer } from "./mocks/mswServer";

beforeAll(async () => {
  await loadEnvValues();
  mswServer.listen();
});

afterEach(async () => {
  mswServer.resetHandlers();
});

afterAll(async () => {
  mswServer.close();
});
