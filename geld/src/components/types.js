export default function Types() {
  return (
    <div className="w-full h-fit flex flex-col">
      <h2 className="text-[#1F2937] text-[16px] font-[600]">Types</h2>
      <div className="flex flex-col w-full h-fit px-[12px] gap-[8px] mt-[16px]">
        <span className="flex flex-row gap-[8px]">
          <input type="radio" name="radio-2" className="radio radio-primary" />
          <p>All</p>
        </span>
        <span className="flex flex-row gap-[8px]">
          <input type="radio" name="radio-2" className="radio radio-primary" />
          <p>Income</p>
        </span>
        <span className="flex flex-row gap-[8px]">
          <input type="radio" name="radio-2" className="radio radio-primary" />
          <p>Expense</p>
        </span>
      </div>
    </div>
  );
}
