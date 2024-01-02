"use client";
import { Context } from "@/app/layout";
import { useContext, useState } from "react";
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

const color_data = [
  "#0166FF",
  "#01B3FF",
  "#41CC00",
  "#F9D100",
  "#FF7B01",
  "#AE01FF",
];

export default function AddCatergoryIcons(props) {
  const {
    categoryValueAdd,
    setCategoryValueAdd,
    color_,
    setIconID,
    setColor,
    isIcon,
    setIsIcon,
  } = useContext(Context);

  const style = { color: color_ };
  const data = [
    { icon: <TiHome {...{ style }} />, id: 0 },
    { icon: <MdHomeFilled {...{ style }} />, id: 1 },
    { icon: <RiContactsBook2Fill {...{ style }} />, id: 2 },
    { icon: <MdContactMail {...{ style }} />, id: 3 },
    { icon: <PiLadderFill {...{ style }} />, id: 4 },
    { icon: <PiIntersectSquareFill {...{ style }} />, id: 5 },
    { icon: <FaImage {...{ style }} />, id: 6 },
    { icon: <FaMagnifyingGlassPlus {...{ style }} />, id: 7 },
    { icon: <FaMicrophone {...{ style }} />, id: 8 },
    { icon: <SiMicrosoftexcel {...{ style }} />, id: 9 },
    { icon: <PiNotepadFill {...{ style }} />, id: 10 },
    { icon: <ImMenu {...{ style }} />, id: 11 },
    { icon: <PiLeafFill {...{ style }} />, id: 12 },
    { icon: <PiNumberFiveFill {...{ style }} />, id: 13 },
    { icon: <PiNumberCircleSevenFill {...{ style }} />, id: 14 },
    { icon: <PiRoadHorizonFill {...{ style }} />, id: 15 },
    { icon: <GiSandsOfTime {...{ style }} />, id: 16 },
    { icon: <PiAnchorSimpleBold {...{ style }} />, id: 17 },
    { icon: <PiTriangleFill {...{ style }} />, id: 18 },
    { icon: <PiIntersectBold {...{ style }} />, id: 19 },
    { icon: <BiLogoFlickrSquare {...{ style }} />, id: 20 },
    { icon: <FaBaseballBall {...{ style }} />, id: 21 },
    { icon: <AiFillQuestionCircle {...{ style }} />, id: 22 },
    { icon: <TbSquareRoundedLetterA {...{ style }} />, id: 23 },
    { icon: <BsWatch {...{ style }} />, id: 24 },
    { icon: <PiGlobeSimpleFill {...{ style }} />, id: 25 },
    { icon: <TbLemon {...{ style }} />, id: 26 },
    { icon: <FaPeace {...{ style }} />, id: 27 },
    { icon: <PiToiletPaperFill {...{ style }} />, id: 28 },
    { icon: <FaPencilAlt {...{ style }} />, id: 29 },
  ];
  return (
    <div className="w-[312px] h-[336px] bg-white flex flex-col p-[24px] absolute top-[74px] left-[22px] border-[2px] rounded-lg border-black">
      <div className="grid grid-row-5 grid-cols-6 h-[264px] w-full">
        {data.map((icons, index) => (
          <div
            key={index}
            className="w-[24px] h-[24px] cursor-pointer"
            onClick={() => {
              setCategoryValueAdd(icons.icon);
              setIsIcon(!isIcon);
              setIconID(icons.id)
            }}
          >
            {icons.icon}
          </div>
        ))}
      </div>
      <hr></hr>
      <div className="flex flex-row w-full h-[72px] items-center justify-between">
        {color_data.map((color, index) => (
          <span
            className="w-[24px] h-[24px] rounded-[12px]"
            style={{ backgroundColor: color }}
            key={index}
            onClick={() => {
              setColor(color);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}
