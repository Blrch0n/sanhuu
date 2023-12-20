"use client";
import AddRecords from "@/components/addRecords";
import Dashboard from "@/components/dashboard";
import Header from "@/components/header";
import { useContext } from "react";
import { Context } from "../layout";

export default function Home() {
  const { clickAdd, setClickAdd } = useContext(Context);
  return (
    <section className="w-[fit] h-[fit] flex flex-col relative bg-[#F3F4F6]">
      <Header></Header>
      <Dashboard></Dashboard>
      {clickAdd && <AddRecords></AddRecords>}
    </section>
  );
}
