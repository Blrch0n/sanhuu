'use client'

export default function Card_1() {
  return (
    <div className="w-full min-h-[216px] bg-blue-200 rounded-[18px] p-[32px] flex flex-col justify-between ">
      <img src="/logo.svg" className="w-[80px] h-[30px]"></img>
      <div className="w-full h-fit flex justify-between items-center">
        <span className="flex flex-col min-h-[56px] max-w-fit">
            <p className="font-[400] text-[16px]">Cash</p>
            <p className="font-[600] text-[24px] ">10,000,00</p>
        </span>
        <img src="/card_logo_1.svg" className="w-[40px] h-[40px]"></img>
      </div>
    </div>
  )
}
