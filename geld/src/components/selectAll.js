export default function SelectAll(props) {
  return (
    <section className="w-full h-fit flex flex-col ">
      <div className="w-full h-[48px] flex flex-row justify-between items-center rounded-[12px] bg-white px-[24px] py-[12px]">
        <span className="w-full h-[48px] flex flex-row items-center gap-[16px]">
          <input
            type="checkbox"
            className="w-[24px] h-[24px] bg-[#1F2937]"
          ></input>
          <p className="text-[16px] font-[400]">Select All</p>
        </span>
        <p className="text-[#94A3B8] text-[16px] font-[600]">-35,500₮</p>
      </div>
      
    </section>
  );
}
