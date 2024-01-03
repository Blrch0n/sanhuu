"use client";
import { Context } from "@/app/layout";
import Link from "next/link";
import { Router, usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { useAuth } from "./providers/AuthProvider";
import { api } from "@/common/axios";

const tabs = ["dashboard", "records"];

export default function Header() {
  const { clickAdd, setClickAdd, isprofile, setIsProfile, usePathName } =
    useContext(Context);
  const { signOut } = useAuth();

  const router = useRouter();
  const pathname = usePathname();

  return (
    <section className="w-full h-[72px] bg-white flex justify-between px-[120px] items-center relative">
      <span className="max-w-fit h-fit flex justify-between items-center gap-[24px]">
        <img src="/dashboard_logo.svg"></img>
        {tabs.map((item) => (
          <Link key={item} href={`/${item}`}>
            <p
              className="text-[#0F172A] text-[16px]"
              style={{ fontWeight: pathname.includes(item) ? "600" : "400" }}
            >
              {item.toUpperCase()}
            </p>
          </Link>
        ))}
      </span>
      <div className="max-w-[163px] h-[40px] flex flex-row gap-[24px] justify-between items-center">
        <button
          className="w-[99px] h-[32px] rounded-[20px] bg-[#0166FF] text-white"
          onClick={() => {
            !clickAdd ? setClickAdd(true) : "";
          }}
        >
          &#43; Records
        </button>
        <div
          className="avatar"
          onClick={() => {
            setIsProfile(!isprofile);
          }}
        >
          <div className="w-[40px] rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </div>
      {isprofile && (
        <div className="w-fit h-fit flex flex-col  gap-[8px] p-[12px] absolute bottom-[-120px] rounded-[12px] right-[120px] bg-white">
          <span
            className="w-[200px] h-[40px] cursor-pointer flex items-center "
            onClick={() => {
              router.push("/user_profile"), setIsProfile(!isprofile);
            }}
          >
            Profile
          </span>
          <span
            className="w-[200px] h-[40px] cursor-pointer flex items-center"
            onClick={() => {
              signOut();
            }}
          >
            Exit
          </span>
        </div>
      )}
    </section>
  );
}
