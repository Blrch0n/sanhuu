"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { TiHome } from "react-icons/ti";
import { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AuthProvider } from "@/components/providers/AuthProvider";
import { api } from "@/common/axios";

const inter = Inter({ subsets: ["latin"] });

export const Context = createContext();

export default function RootLayout({ children }) {
  const [isIcon, setIsIcon] = useState(false);
  const [clickAdd, setClickAdd] = useState(false);
  const [isExpense, setIsExpense] = useState(true);
  const [isAdd, setIsAdd] = useState(false);
  const [iconID, setIconID] = useState(0);
  const [isprofile, setIsProfile] = useState(false);
  const [category_value, setCategoryValue] = useState(<TiHome />);
  const [category_name, setCategoryName] = useState("");
  const [categoryValueAdd, setCategoryValueAdd] = useState(<TiHome />);
  const [color_, setColor] = useState("#000000");
  const [isSelectAll, setIsSelectAll] = useState(true);
  const [recordData, setRecordData] = useState();
  const [isReady, setIsReady] = useState(false);
  const [isReady_, setIsReady_] = useState(false);
  const [categoryData, setCategoryData] = useState();
  const [categoryInputValue, setCategoryInputValue] = useState("");

  const [filterType, setFilterType] = useState(["income", "expense"]);

  const usePathName = usePathname();

  const showOn = async () => {
    setIsReady(false);
    try {
      const token = localStorage.getItem("token");
      const { data } = await api.get("/records", {
        headers: {
          Authorization: token,
        },
      });
      const { records } = data;

      setRecordData(records.reverse());
      setIsReady(true);
    } catch (err) {
      console.log(err);
    }
  };
  const AddCatergoryData = async () => {
    try {
      const token = localStorage.getItem("token");
      await api.post(
        "/category",
        {
          iconID,
          color_,
          categoryInputValue,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  const getCategoryData = async () => {
    setIsReady_(false);
    try {
      const token = localStorage.getItem("token");
      const { data } = await api.get("/category", {
        headers: {
          Authorization: token,
        },
      });
      const { userCategory } = data;
      setCategoryData(userCategory.reverse());
      console.log(userCategory);
      setIsReady_(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Context.Provider
      value={{
        clickAdd,
        setClickAdd,
        recordData,
        showOn,
        setRecordData,
        getCategoryData,
        iconID,
        setIconID,
        categoryData,
        isExpense,
        setIsExpense,
        isReady_,
        isReady,
        setIsReady,
        isAdd,
        AddCatergoryData,
        setIsAdd,
        isprofile,
        setIsProfile,
        isIcon,
        setIsIcon,
        filterType,
        setFilterType,
        categoryInputValue,
        setCategoryInputValue,
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
        usePathName,
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <AuthProvider>{children}</AuthProvider>
        </body>
      </html>
    </Context.Provider>
  );
}
