import { Context } from "@/app/layout";
import { Content } from "next/font/google";
import { useContext } from "react";

export default function AddCatergory() {
    const {isAdd,setIsAdd} = useContext(Context)
  return (
    <section className="absolute w-full h-full flex items-center justify-center top-0 bg-[#00000080]">
      <form className="w-[494px] min-h-[236px] bg-white rounded-[12px] flex flex-col">
        <div className="w-full h-[68px] px-[24px] py-[20px] flex rounded-[12px] justify-between">
          <p className="color-[#0F172A] text-[20px] font-[600] ">
            Add Category
          </p>
          <img src="X.svg" className="cursor-pointer" onClick={()=>{
            isAdd ? setIsAdd(false):''
          }}></img>
        </div>
        <hr></hr>
        <div className="flex flex-col gap-[32px] w-full h-fit p-[24px]">
          <div className="flex flex-row gap-[12px]">
            <select className="select select-bordered w-full max-w-[84px]">
              <option selected>Who shot first?</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            <select className="select select-bordered w-full max-w-xs">
              <option selected>Name</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
          <input
            type="submit"
            value="Add Category"
            className="w-full h-[40px] rounded-[20px] bg-green-600 text-white"
          ></input>
        </div>
      </form>
    </section>
  );
}
