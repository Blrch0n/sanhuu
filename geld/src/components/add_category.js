import { Context } from "@/app/layout";
import { useContext, useState } from "react";
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

export default function AddCatergoryScroll(props) {
  const {
    setCategoryValue,
    setCategoryName,
    setIconID,
    setIsAdd,
    isReady_,
    categoryData,
  } = useContext(Context);

  const data = [
    { icon: <TiHome />, id: 0 },
    { icon: <MdHomeFilled />, id: 1 },
    { icon: <RiContactsBook2Fill />, id: 2 },
    { icon: <MdContactMail />, id: 3 },
    { icon: <PiLadderFill />, id: 4 },
    { icon: <PiIntersectSquareFill />, id: 5 },
    { icon: <FaImage />, id: 6 },
    { icon: <FaMagnifyingGlassPlus />, id: 7 },
    { icon: <FaMicrophone />, id: 8 },
    { icon: <SiMicrosoftexcel />, id: 9 },
    { icon: <PiNotepadFill />, id: 10 },
    { icon: <ImMenu />, id: 11 },
    { icon: <PiLeafFill />, id: 12 },
    { icon: <PiNumberFiveFill />, id: 13 },
    { icon: <PiNumberCircleSevenFill />, id: 14 },
    { icon: <PiRoadHorizonFill />, id: 15 },
    { icon: <GiSandsOfTime />, id: 16 },
    { icon: <PiAnchorSimpleBold />, id: 17 },
    { icon: <PiTriangleFill />, id: 18 },
    { icon: <PiIntersectBold />, id: 19 },
    { icon: <BiLogoFlickrSquare />, id: 20 },
    { icon: <FaBaseballBall />, id: 21 },
    { icon: <AiFillQuestionCircle />, id: 22 },
    { icon: <TbSquareRoundedLetterA />, id: 23 },
    { icon: <BsWatch />, id: 24 },
    { icon: <PiGlobeSimpleFill />, id: 25 },
    { icon: <TbLemon />, id: 26 },
    { icon: <FaPeace />, id: 27 },
    { icon: <PiToiletPaperFill />, id: 28 },
    { icon: <FaPencilAlt />, id: 29 },
  ];
  console.log(categoryData);

  const findData = (props) => {
    const objData = data.find((obj) => {
      return obj.id === props.iconID;
    });
    return objData.icon;
  };
  return (
    <div className="absolute left-0 bottom-[-396px] w-full bg-white border-[2px] border-black h-[392px] justify-start flex flex-col rounded-[12px] overflow-scroll">
      <div
        className="h-[56px] w-full p-[16px]"
        onClick={() => {
          setIsAdd(true);
        }}
      >
        <div className="flex flex-row w-full h-full items-center gap-[12px]">
          <img src="add_category.svg" className="w-[24px] h-[24px]"></img>
          <p>Add Category</p>
        </div>
      </div>
      <hr></hr>
      {isReady_ &&
        categoryData.map((card, index) => (
          <div
            className="h-[56px] w-full p-[16px]"
            key={index}
            onClick={() => {
              setCategoryValue(findData(card));
              setIconID(card.iconID)
              setCategoryName(card.categoryInputValue);
            }}
          >
            <div className="flex flex-row w-full h-full items-center gap-[12px]">
              {findData(card)}
              <p>{card.categoryInputValue}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
