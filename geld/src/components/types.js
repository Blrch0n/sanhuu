import { Context } from "@/app/layout";
import { useContext } from "react";

const types = [
  {
    label: "All",
    check: (filterType) => filterType.length === 2,
    value: ["income", "expense"],
  },
  {
    label: "Income",
    check: (filterType) =>
      filterType.length === 1 && filterType[0] === "income",
    value: ["income"],
  },
  {
    label: "Expense",
    check: (filterType) =>
      filterType.length === 1 && filterType[0] === "expense",
    value: ["expense"],
  },
];

export default function Types() {
  const { setFilterType, filterType } = useContext(Context);
  
  return (
    <div className="w-full h-fit flex flex-col">
      <h2 className="text-[#1F2937] text-[16px] font-[600]">Types</h2>
      <div className="flex flex-col w-full h-fit px-[12px] gap-[8px] mt-[16px]">
        {types.map(({ label, check, value }) => (
          <span key={label} className="flex flex-row gap-[8px]">
            <input
              type="radio"
              name="radio-2"
              className="radio radio-primary"
              checked={check(filterType)}
              onChange={() => {
                setFilterType(value);
              }}
            />
            <p>{label}</p>
          </span>
        ))}

        {/* <span className="flex flex-row gap-[8px]">
          <input
            type="radio"
            name="radio-2"
            className="radio radio-primary"
            checked={}
            onChange={() => {
              setFilterType("income");
            }}
          />
          <p>Income</p>
        </span>
        <span className="flex flex-row gap-[8px]">
          <input
            type="radio"
            name="radio-2"
            className="radio radio-primary"
            onChange={() => {
              setFilterType("expense");
            }}
          />
          <p>Expense</p>
        </span> */}
      </div>
    </div>
  );
}
