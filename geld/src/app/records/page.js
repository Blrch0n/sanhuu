"use client";
import Last30Days from "@/components/Last30Days";
import AddRecords from "@/components/addRecords";
import AmountRange from "@/components/amount_range";
import Category from "@/components/category";
import Header from "@/components/header";
import Record from "@/components/records";
import Today from "@/components/today";
import Yesterday from "@/components/yesterday";
import { useContext } from "react";
import { Context } from "../layout";

export default function RecordsPage() {
  const {clickAdd, setClickAdd} =useContext(Context);
  return (
    <section className="w-full h-fit bg-[#F3F4F6] min-h-screen">
      <Header></Header>
      <section className="w-full h-fit flex flex-row gap-[24px] py-[24px] px-[120px]">
        <section className="max-w-[283px] h-fit py-[24px] px-[16px] bg-white flex flex-col gap-[40px] rounded-[12px]">
          <Record></Record>
          <Category></Category>
          <AmountRange></AmountRange>
        </section>
        <section className="w-full h-fit flex flex-col">
          <Last30Days></Last30Days>
          <Today></Today>
          <Yesterday></Yesterday>
        </section>
      </section>
      {clickAdd && <AddRecords></AddRecords>}
    </section>
  );
}
