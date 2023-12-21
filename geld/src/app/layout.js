"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { createContext, useState } from "react";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const Context = createContext();

export default function RootLayout({ children }) {
  const [clickAdd, setClickAdd] = useState(false);
  const [dashboard, setDashboard] = useState(true);
  const [isExpense, setIsExpense] = useState(true);
  const [isAdd, setIsAdd] = useState(false);

  const router = useRouter();
  return (
    <Context.Provider
      value={{
        clickAdd,
        setClickAdd,
        dashboard,
        setDashboard,
        isExpense,
        setIsExpense,
        isAdd,
        setIsAdd,
      }}
    >
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </Context.Provider>
  );
}
