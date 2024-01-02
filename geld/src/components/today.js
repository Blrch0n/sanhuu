import { Context } from "@/app/layout";
import { useContext, useEffect, useState } from "react";

export default function Today() {
  const { isSelectAll, recordData, isReady, setRecordData } =
    useContext(Context);

  return (
    <section className="w-full h-fit flex flex-col gap-[12px]">
      <h2 className="text-[16px] font-[600]">Today</h2>
      {isReady &&
        recordData.map((card, index) => (
          <div
            className="w-full h-[64px] flex flex-row justify-between items-center bg-white px-[24px] py-[12px] rounded-[12px]"
            key={index}
          >
            <span className="w-full h-[64px] flex flex-row items-center gap-[16px]">
              <input
                type="checkbox"
                className="w-[24px] h-[24px] bg-[#1F2937]"
              ></input>
              <img
                src={`/${card.category_value}`}
                className="w-[40px] h-[40px]"
              ></img>
              <span>
                <p className="text-[16px] font-[400]">{card.category_name}</p>
                <p className="text-[#6B7280] text-[12px] font-[400]">
                  {card.time}
                </p>
              </span>
            </span>
            <p className="text-[#94A3B8] text-[16px] font-[600]">
              {`${card.amount}₮`}
            </p>
          </div>
        ))}
    </section>
  );
}
