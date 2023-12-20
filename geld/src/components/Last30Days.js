import SelectAll from "./selectAll";

export default function Last30Days() {
  return (
    <section className="w-full h-fit flex flex-col gap-[24px]">
      <div className="w-full h-fit flex flex-col gap-[24px]">
          <div className="flex flex-row w-full h-fit justify-between ">
            <span className="flex flex-row w-full items-center">
              <img src="/arrow_left_30.svg"></img>
              <p>Last 30 Days</p>
              <img src="/arrow_right_30.svg"></img>
            </span>
            <select className="select select-bordered w-full max-w-xs">
              <option>Newest first</option>
              <option>Old</option>
              <option>New</option>
            </select>
          </div>
      </div>
      <SelectAll></SelectAll>
    </section>
  );
}
