import LoadingSpinner from "./components/Layout/UI/Spinner/Spinner";
import Products from "./components/Products/Products";
import { getProducts } from "./lib/getProducts";

export default async function Home() {
  const data = await getProducts();

  return <Products data={data} />;
}
