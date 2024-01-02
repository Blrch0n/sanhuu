"use client";
import AddRecords from "@/components/addRecords";
import Dashboard from "@/components/dashboard";
import Header from "@/components/header";
import { useContext, useEffect } from "react";
import { Context } from "../layout";
import { useAuth } from "@/components/providers/AuthProvider";
import { useRouter } from "next/navigation";

export default function Home() {
  const { clickAdd, setClickAdd } = useContext(Context);
  const { isLoggedIn } = useAuth();
  const router = useRouter()

  useEffect(() => {
    if (!isLoggedIn) router.push("/");
  }, [isLoggedIn]);

  if (!isLoggedIn) return null;

  return (
    <section className="w-[fit] h-screen flex flex-col relative bg-[#F3F4F6]">
      <Header></Header>
      <Dashboard></Dashboard>
      {clickAdd && <AddRecords></AddRecords>}
    </section>
  );
}
