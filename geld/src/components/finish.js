'use clients'
import Link from "next/link";

export default function Finish(props) {
  return (
    <section className="w-full h-screen flex items-center pt-[40px] flex-col">
      <div className="max-w-[240px] min-h-[136px] flex flex-col justify-between items-center">
        <Link href=''>
          <img src="/logo.svg" className="w-[107.65px] h-[40px]"></img>
        </Link>
        <img src="/step3.svg" className="w-full h-[48px]"></img>
      </div>
      <form className="w-[384px] max-w-[384px] min-h-[308px] flex flex-col items-center mt-[241px]">
        <span className="max-w-fit min-h-[96px] flex flex-col items-center justify-between">
          <img src="/finish.svg" className="w-[48px] h-[48px]"></img>
          <h2 className="text-[#0F172A] font-[600] text-[24px]">Good Job!</h2>
        </span>
        <p className="text-[#475569] text-[12px] font-[400] mt-[12px]">
          How much cash do you have in your wallet?
        </p>
        <Link href="/dashboard" className="w-full ">
          <button
            className="w-full h-[48px] m-auto py-[10px] bg-[#0166FF] text-white rounded-[20px] mt-[32px] cursor-pointer"
          >Go to Dashboard</button>
        </Link>
      </form>
    </section>
  );
}
