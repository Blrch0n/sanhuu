"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { TiHome } from "react-icons/ti";
import { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import useLocalStroge from "@/components/useLocalStroge";
import axios from "axios";
import { AuthProvider } from "@/components/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const Context = createContext();

export default function RootLayout({ children }) {
  const router = useRouter();
  const [isIcon, setIsIcon] = useState(false);
  const [clickAdd, setClickAdd] = useState(false);
  const [isExpense, setIsExpense] = useState(true);
  const [isAdd, setIsAdd] = useState(false);
  const [isprofile, setIsProfile] = useState(false);
  const [category_value, setCategoryValue] = useState("");
  const [category_name, setCategoryName] = useState("");
  const [categoryValueAdd, setCategoryValueAdd] = useState(<TiHome />);
  const [color_, setColor] = useState("#000000");
  const [isSelectAll, setIsSelectAll] = useState(true);

  const usePathName = usePathname();

  return (
    <Context.Provider
      value={{
        signUp,
        clickAdd,
        setClickAdd,
        isExpense,
        setIsExpense,
        isAdd,
        setIsAdd,
        isprofile,
        setIsProfile,
        isIcon,
        setIsIcon,
        category_value,
        setCategoryValue,
        category_name,
        setCategoryName,
        categoryValueAdd,
        setCategoryValueAdd,
        isSelectAll,
        setIsSelectAll,
        color_,
        setColor,
        Login,
        usePathName,
      }}
    >
      <html lang="en">
        <body className={inter.className}><AuthProvider>{children}</AuthProvider></body>
      </html>
    </Context.Provider>
  );
}
