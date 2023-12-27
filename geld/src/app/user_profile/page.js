"use client";
import { useEffect } from "react";
import { api } from "@/common/axios";

export default function Profile() {
  const as = async () => {
    try {
      const authorization = localStorage.getItem("token");
      const { data } = await api.post("/users", {
        authorization,
      });
      const { profile } = data;

      console.log(profile);
    } catch (error) {
      console.log(error);
    }
  };
  as();

  // useEffect (async ()=>{
  //   const { data } = await api.get("/users", { item });
  // })
  return (
    <section className="w-full h-screen bg-red-200 flex items-center justify-center">
      <div className="w-[400px] h-[500px] bg-white rounded-lg flex items-center justify-center"></div>
    </section>
  );
}
