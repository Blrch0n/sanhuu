import { Context } from "@/app/layout";
import { useContext } from "react";

export default function LastRecord() {
  const { recordData ,isReady } = useContext(Context);

  return (
    <div className="w-full h-fit bg-white rounded-[12px] px-[24px] py-[16px]">
      <h2 className="text-[#0F172A] font-[600] text-[16px]">Last Records</h2>
      <hr></hr>
      {isReady && recordData.map((card, index) => (
        <div
          className="w-full h-[80px] flex flex-row justify-between items-center bt-[2px] b-black"
          key={index}
        >
          <span className="flex max-w-full min-h-[40px] flex-row gap-[16px]">
            <img src={`/${card.category_value}`} className="w-[40px] h-[40px]"></img>
            <div>
              <h2>{card.category_name}</h2>
              <p>{card.time}</p>
            </div>
          </span>
          <p className="text-[#84CC16] text-[16px] font-[600]">{`${card.amount}₮`}</p>
        </div>
      ))}
    </div>
  );
}
