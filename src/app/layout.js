import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/topbar";
import Header from "@/components/header";
import Menu from "@/components/menu";
import Footer from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topbar />
        <Header />
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
