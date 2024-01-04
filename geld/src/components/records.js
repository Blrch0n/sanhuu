import { useContext } from "react";
import Types from "./types";
import { Context } from "@/app/layout";

export default function Record() {
  const { isAdd, setIsAdd, setsearch } = useContext(Context);

  return (
    <section className="w-full h-fit flex flex-col gap-[24px]">
      <h2 className="text-[24px] font-[600]">Records</h2>
      <div className="flex flex-col w-full gap-[24px]">
        <button
          className="bg-[#0166FF] rounded-[20px] font-[400] text-[16px] text-[#fff] h-[32px]"
          onClick={() => {
            !isAdd ? setIsAdd(true) : "";
          }}
        >
          + Add
        </button>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setsearch(e.target.value);
          }}
          className="bg-[#D1D5DB] rounded-lg w-full h-[32px] px-[16px] py-[4px] text-[16px] font-[400] text-[#A3A3A3]"
        ></input>
      </div>
      <Types></Types>
    </section>
  );
}
