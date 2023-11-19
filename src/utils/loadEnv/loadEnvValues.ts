import { loadEnvConfig } from "@next/env";

const loadEnvValues = async () => {
  const projectDir = process.cwd();
  loadEnvConfig(projectDir);
};

export default loadEnvValues;
