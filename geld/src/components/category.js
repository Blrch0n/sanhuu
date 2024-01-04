import { Context } from "@/app/layout";
import { useContext, useState } from "react";

export default function Category() {
  const { isAdd, setIsAdd, categoryData, setSelectCategory, isReady_ } =
    useContext(Context);

  return (
    <section className="flex flex-col ">
      <span className="flex flex-row justify-between w-full">
        <h2
          className="text-[#1F2937] text-[16px] font-[600] cursor-pointer"
          onClick={() => {
            setSelectCategory("");
          }}
        >
          Category
        </h2>
        <p className="text-[16px] font-[400] ">Clear</p>
      </span>
      <div className="flex flex-col gap-[8px]">
        {isReady_ &&
          categoryData.map((props, index) => (
            <div
              className="flex flex-row justify-between w-full cursor-pointer items-center"
              key={index}
              onClick={() => {
                setSelectCategory(props.categoryInputValue);
              }}
            >
              <span className="flex flex-row w-full gap-[8px] h-full items-center">
                <img src="view_logo.svg" className="w-[20px] h-[20px]"></img>
                <p className="text-[#1F2937] font-[400] text-[16px]">
                  {props.categoryInputValue}
                </p>
              </span>
              <img src={props.arrow_img}></img>
            </div>
          ))}
        <div
          className="flex flex-row gap-[8px] text-[#1F2937] text-[16px] font-[400] cursor-pointer"
          onClick={() => {
            !isAdd ? setIsAdd(true) : "";
          }}
        >
          + Add Category
        </div>
      </div>
    </section>
  );
}
