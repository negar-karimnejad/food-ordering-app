import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import AuthProvider from "./utils/AuthProvider";
import { getServerSession } from "next-auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EdgeStoreProvider } from "../lib/edgestore";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Food Ordering App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AuthProvider session={session}>
          <EdgeStoreProvider>
            <Navbar />
            {children}
            <ToastContainer />
            <Footer />
          </EdgeStoreProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
