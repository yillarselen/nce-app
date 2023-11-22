import { promises as fs } from "fs";
import { cache } from "react";

export const getProducts = cache(async () => {
  const file = await fs.readFile(process.cwd() + "/app/data/data.json", "utf8");
  const data = JSON.parse(file);

  return data;
});
