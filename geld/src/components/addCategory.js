"use client";
import { Context } from "@/app/layout";
import { useContext, useState } from "react";
import AddCatergoryIcons from "./add_category_icons";

export default function AddCatergory() {
  const {
    isAdd,
    setIsAdd,
    categoryValueAdd,
    AddCatergoryData,
    isIcon,
    setIsIcon,
    getCategoryData,
    setCategoryInputValue,
  } = useContext(Context);

  const submitHanler = async () => {
    await AddCatergoryData();
    await getCategoryData();
    setIsAdd(false);
  };

  return (
    <section className="fixed w-full h-screen flex items-center justify-center top-0 bg-[#00000080]">
      <div className="w-[494px] min-h-[236px] bg-white rounded-[12px] flex flex-col">
        <div className="w-full h-[68px] px-[24px] py-[20px] flex rounded-[12px] justify-between">
          <p className="color-[#0F172A] text-[20px] font-[600] ">
            Add Category
          </p>
          <img
            src="/X.svg"
            className="cursor-pointer"
            onClick={() => {
              isAdd ? setIsAdd(false) : "";
            }}
          ></img>
        </div>
        <hr></hr>
        <div className="flex flex-col gap-[32px] w-full h-fit p-[24px] relative ">
          {isIcon && <AddCatergoryIcons></AddCatergoryIcons>}
          <div className="flex flex-row gap-[12px]">
            <div
              className="w-[84px] h-[48px] rounded-lg bg-[#F9FAFB] border-[1px] border-[#D1D5DB] flex flex-row max-w-[84px] items-center justify-center gap-[12.39px]"
              onClick={() => {
                setIsIcon(!isIcon);
              }}
            >
              {categoryValueAdd}
              <img
                src="/arrow_drop_down.svg"
                className="w-[7.21px] h-[4.6px]"
              ></img>
            </div>
            <input
              type="text"
              onChange={(e) => {
                setCategoryInputValue(e.target.value);
              }}
              className="select select-bordered w-full max-w-xs"
            ></input>
          </div>
          <input
            type="submit"
            value="Add Category"
            onClick={() => {
              submitHanler();
            }}
            className="w-full h-[40px] rounded-[20px] bg-green-600 text-white"
          ></input>
        </div>
      </div>
    </section>
  );
}
