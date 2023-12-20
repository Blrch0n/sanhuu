import Types from "./types";

export default function Record() {
  return (
    <section className="w-full h-fit flex flex-col gap-[24px]">
      <h2 className="text-[24px] font-[600]">Records</h2>
      <div className="flex flex-col w-full gap-[24px]">
        <button className="bg-[#0166FF] text-white rounded-[20px] font-[400] text-[16px] text-[#fff]">
          + Add
        </button>
        <input
          type="text"
          placeholder="Search"
          className="bg-[#D1D5DB] rounded-lg w-full h-[32px] px-[16px] py-[4px] text-[16px] font-[400] text-[#A3A3A3]"
        ></input>
      </div>
      <Types></Types>
    </section>
  );
}
