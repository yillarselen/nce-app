import { promises as fs } from "fs";
import Products from "./components/Products/Products";

export async function getProducts() {
  const file = await fs.readFile(process.cwd() + "/app/data/data.json", "utf8");
  const data = JSON.parse(file);
  return data;
}

export default async function Home() {
  const data = await getProducts();

  return <Products data={data} />;
}
