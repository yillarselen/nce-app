import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Providers from "./components/Providers";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import { getProducts } from "./utils/getProducts";

export const metadata: Metadata = {
  title: "nc-commerce",
  description: "E-commerce assignment",
};

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getProducts();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <Providers productsData={data}>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
