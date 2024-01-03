"use client";
import { useEffect, useState } from "react";
import { api } from "@/common/axios";

export default function Profile() {
  const [isProfile, setIsProfile] = useState();

  const as = async () => {
    try {
      const token = localStorage.getItem("token");

      console.log(typeof token);

      const { data } = await api.get("/users", {
        headers: {
          Authorization: token,
        },
      });

      const { profile } = data;

      console.log(profile[0]);

      setIsProfile(profile[0]);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect (async ()=>{
  //   const { data } = await api.get("/users", { item });
  // })
  return (
    <section className="w-full h-screen bg-red-200 flex items-center justify-center">
      <div
        className="w-[400px] h-[500px] bg-white rounded-lg flex flex-col items-center justify-center"
        onClick={() => {
          as();
        }}
      >
        <span>{isProfile && isProfile.id}</span>
        <span>{isProfile && isProfile.name}</span>
        <span>{isProfile && isProfile.email}</span>
      </div>
    </section>
  );
}
