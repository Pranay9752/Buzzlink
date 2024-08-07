import { Inter } from "next/font/google";
import "./globals.css";
import { connectToDatabase } from "@/libs/mongodb";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Buzzlink",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  connectToDatabase()
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
