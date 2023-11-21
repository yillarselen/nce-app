import { promises as fs } from "fs";

export async function getProducts() {
  const file = await fs.readFile(process.cwd() + "/app/data/data.json", "utf8");
  const data = JSON.parse(file);

  return data;
}
