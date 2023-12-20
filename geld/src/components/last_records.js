const data = [1, 2, 3, 4, 5];
export default function LastRecord() {
  return (
    <div className="w-full h-fit bg-red-200 rounded-[12px] px-[24px] py-[16px]">
      <h2 className="text-[#0F172A] font-[600] text-[16px]">Last Records</h2>
      <hr></hr>
      {data.map((card, index) => (
        <div
          className="w-full h-[80px] flex flex-row justify-between items-center bt-[2px] b-black"
          key={index}
        >
          <span className="flex max-w-full min-h-[40px] flex-row gap-[16px]">
            <img src="record_logo.svg" className="w-[40px] h-[40px]"></img>
            <div>
              <h2>Lending & Renting</h2>
              <p>3 hours ago</p>
            </div>
          </span>
          <p className="text-[#84CC16] text-[16px] font-[600]">-1,000₮</p>
        </div>
      ))}
    </div>
  );
}
