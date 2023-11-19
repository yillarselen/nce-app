import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Providers from "./components/Providers";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";

export const metadata: Metadata = {
  title: "nc-commerce",
  description: "E-commerce assignment",
};

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
