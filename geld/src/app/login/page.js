"use client";
import { Content } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { Context } from "../layout";

export default function Login() {
  const { signUp } = useContext(Context);

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const router = useRouter();

  return (
    <section className="w-[100%] h-screen flex bg-[#0166FF] justify-start">
      <span className="w-[50%] h-full bg-white pt-[276.84px] pl-[222px]">
        <form className="max-w-[384px] min-h-[554.31px] flex flex-col items-center gap-[40px]">
          <img src="logo.svg" className="w-[92.34px] h-[34.31px]"></img>
          <div className="max-w-fit h-fit flex justify-center flex-col">
            <h2 className="text-[#0F172A] text-[24px] font-[600] m-auto">
              Welcome Back
            </h2>
            <p className="text-[#334155] text-[16px] font-[400]">
              Welcome back,Please enter your details
            </p>
          </div>
          <div className="w-full h-fit flex flex-col gap-[16px]">
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className="w-full h-[48px] px-[16px] py-[12px] bg-[#F3F4F6] text-[#D1D5DB] rounded-[8px]"
            ></input>
            <input
              type="password"
              placeholder="Password"
              className="w-full h-[48px] px-[16px] py-[12px] bg-[#F3F4F6] text-[#D1D5DB] rounded-[8px]"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <input
              type="submit"
              value="Log in"
              className="w-full h-[48px] m-auto py-[10px] bg-[#0166FF] text-white rounded-[20px]"
              onClick={(event) => {
                event.preventDefault();
                signUp(username, password);
              }}
            ></input>
          </div>
          <span className="max-w-fit h-fit text-[16px] text-[#0F172A] font-[400]">
            Already have account?
            <Link
              href="/signup"
              className="text-[#0166FF] text-[16px] font-[400]"
            >
              Log in
            </Link>
          </span>
        </form>
      </span>
    </section>
  );
}
