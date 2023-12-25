"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { TiHome } from "react-icons/ti";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useLocalStroge from "@/components/useLocalStroge";
import axios from "axios";

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

  const { getItem, setItem } = useLocalStroge("isLogginIn");

  const signUp = async (email, password) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3002/sign-in",
        {
          email,
          password,
        },
        {
          headers: {
            authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFkbWluIiwicGFzc3dvcmQiOiJBZG1pbiIsImlhdCI6MTcwMzUwMjMyMCwiZXhwIjoxNzAzNTg4NzIwfQ.QeXBdovn5c9APBbfMOWNyVI9_bsgpTGW-e_aC26SH8U",
          },
        }
      );

      const { token } = data;

      console.log(token);
    } catch (err) {
      console.log("Error", err);
    }
  };
  const Login = async (name_,email_, password_) => {
    console.log(name_,email_,password_)
    try {
      const { data } = await axios.post("http://localhost:3002/login", {
        email_,
        password_,
        name_,
      });
      const {token_} = data;
      console.log(token_)
    } catch (err) {
      console.log('Error',err)
    }
  };
  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   fetch("http://localhost:3002")
  //     .then((res) => res.text())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log("Error", err);
  //     });
  // }, []);

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
        getItem,
        setItem,
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
      }}
    >
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </Context.Provider>
  );
}
