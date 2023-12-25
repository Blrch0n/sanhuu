"use client";
// import { AiFillAlipayCircle } from "react-icons/ai";
import { IoMdHome } from "react-icons/io";
import { MdHomeFilled } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { RiContactsBook2Fill } from "react-icons/ri";
import { MdContactMail } from "react-icons/md";
import { PiLadderFill } from "react-icons/pi";
import { PiIntersectSquareFill } from "react-icons/pi";
import { FaImage } from "react-icons/fa6";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa6";
import { SiMicrosoftexcel } from "react-icons/si";
import { PiNotepadFill } from "react-icons/pi";
import { ImMenu } from "react-icons/im";
import { PiLeafFill } from "react-icons/pi";
import { PiNumberFiveFill } from "react-icons/pi";
import { PiNumberCircleSevenFill } from "react-icons/pi";
import { PiRoadHorizonFill } from "react-icons/pi";
import { GiSandsOfTime } from "react-icons/gi";
import { PiAnchorSimpleBold } from "react-icons/pi";
import { PiTriangleFill } from "react-icons/pi";
import { PiIntersectBold } from "react-icons/pi";
import { BiLogoFlickrSquare } from "react-icons/bi";
import { FaBaseballBall } from "react-icons/fa";
import { AiFillQuestionCircle } from "react-icons/ai";
import { TbSquareRoundedLetterA } from "react-icons/tb";
import { BsWatch } from "react-icons/bs";
import { PiGlobeSimpleFill } from "react-icons/pi";
import { TbLemon } from "react-icons/tb";
import { FaPeace } from "react-icons/fa";
import { PiToiletPaperFill } from "react-icons/pi";
import { FaPencilAlt } from "react-icons/fa";
import { Context } from "@/app/layout";
import { useContext, useState } from "react";
import AddCatergoryIcons from "./add_category_icons";

export default function AddCatergory() {
  const [isIcon, setIsIcon] = useState(false);
  const { isAdd, setIsAdd, categoryValueAdd, setCategoryValueAdd } =
    useContext(Context);
  return (
    <section className="absolute w-full h-full flex items-center justify-center top-0 bg-[#00000080]">
      <div className="w-[494px] min-h-[236px] bg-white rounded-[12px] flex flex-col">
        <div className="w-full h-[68px] px-[24px] py-[20px] flex rounded-[12px] justify-between">
          <p className="color-[#0F172A] text-[20px] font-[600] ">
            Add Category
          </p>
          <img
            src="X.svg"
            className="cursor-pointer"
            onClick={() => {
              isAdd ? setIsAdd(false) : "";
            }}
          ></img>
        </div>
        <hr></hr>
        <div className="flex flex-col gap-[32px] w-full h-fit p-[24px]">
          <div className="flex flex-row gap-[12px]">
            <div
              className="w-[84px] h-[48px] rounded-lg bg-[#F9FAFB] border-[1px] border-[#D1D5DB] flex flex-row max-w-[84px] items-center justify-center gap-[12.39px] relative"
              onClick={() => {
                setIsIcon(!isIcon);
              }}
            >
              <img src="/home.svg" className="w-[24px] h-[24px]"></img>
              <img
                src="/arrow_drop_down.svg"
                className="w-[7.21px] h-[4.6px]"
              ></img>
              {isIcon && <AddCatergoryIcons></AddCatergoryIcons>}
            </div>
            <select className="select select-bordered w-full max-w-xs">
              <option>Name</option>
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
      </div>
    </section>
  );
}
