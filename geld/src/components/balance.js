'use client'
export default function Balance (props){

    return (
        <section className="w-full h-screen flex items-center pt-[40px] flex-col">
          <div className="max-w-[240px] min-h-[136px] flex flex-col justify-between items-center">
            <img src="/logo.svg" className="w-[107.65px] h-[40px]"></img>
            <img src="/step2.svg" className="w-full h-[48px]"></img>
          </div>
          <form className="w-[384px] max-w-[384px] min-h-[308px] flex flex-col items-center mt-[141px]">
            <span className="max-w-fit min-h-[96px] flex flex-col items-center justify-between">
              <img src="/logo2.svg" className="w-[48px] h-[48px]"></img>
              <h2 className="text-[#0F172A] font-[600] text-[24px]">
                Set up your cash Balance
              </h2>
            </span>
            <span className="max-w-full h-fit flex flex-col gap-[12px] mt-[24px]">
                <input
                  type="text"
                  placeholder="Email"
                  className="w-[384px] h-[64px] text-[#1F2937] text-[16px] font-[600] py-[12px] px-[16px] rounded-[8px] bg-[#D1D5DB]"
                ></input>
              <p className="text-[#475569] text-[12px] font-[400] ">
                How much cash do you have in your wallet?
              </p>
            </span>
            <button
              className="w-full h-[48px] m-auto py-[10px] bg-[#0166FF] text-white rounded-[20px] mt-[32px] cursor-pointer"
              onClick={(event) => {
                event.preventDefault()
                props.setPage_(props.page_ + 1);
              }}
            >Confirm</button>
          </form>
        </section>
      );
}