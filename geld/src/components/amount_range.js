export default function AmountRange() {
  return (
    <div className="w-full h-fit gap-[16px] flex flex-col">
      <h2 className="text-[#1F2937] font-[600] text-[16px]">Amount Range</h2>
      <span className="flex flex-row w-full h-fit gap-[16px]">
        <input
          type="text"
          placeholder="0"
          className="w-full bg-[#D1D5DB] h-[48px] rounded-lg py-[12px] px-[16px] text-[#0F172A]"
        ></input>
        <input
          type="text"
          placeholder="0"
          className="w-full bg-[#D1D5DB] h-[48px] rounded-lg py-[12px] px-[16px] text-[#0F172A]"
        ></input>
      </span>
    </div>
  );
}
