"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { createContext, useContext, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const Context = createContext();

export default function RootLayout({ children }) {
  const [clickAdd, setClickAdd] = useState(false);
  const [isExpense, setIsExpense] = useState(true);
  const [isAdd, setIsAdd] = useState(false);
  const [isprofile, setIsProfile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signUp = async (email, password) => {
    try {
      const res = await fetch("http://localhost:3002/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.status !== 200) {
        throw new Error("Invalid credentials");
      }
      const data = await res.json();
      const { token } = data;

      console.log(token);
    } catch (err) {
      console.log("Error", err);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:3002")
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

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
      }}
    >
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </Context.Provider>
  );
}
