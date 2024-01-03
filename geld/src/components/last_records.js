import { Context } from "@/app/layout";
import { useContext } from "react";

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

export default function LastRecord() {
  const { recordData, isReady } = useContext(Context);
  const findData = (props) => {
    const objData = data.find((obj) => {
      return obj.id === props.iconID;
    });
    return objData.icon;
  };
  return (
    <div className="w-full min-h-[400px] bg-white rounded-[12px] px-[24px] py-[16px] flex flex-col">
      <h2 className="text-[#0F172A] font-[600] text-[16px]">Last Records</h2>
      <hr></hr>
      {isReady &&
        recordData.map((card, index) => (
          <div
            className="w-full h-[80px] flex flex-row justify-between items-center bt-[2px] b-black"
            key={index}
          >
            <span className="flex max-w-full min-h-[40px] flex-row gap-[16px]">
              <div className="w-[40px] h-[40px] rounded-[50%] bg-blue-500 flex items-center justify-center">
                {findData(card)}
              </div>
              <div>
                <h2>{card.category_name}</h2>
                <p>{card.time}</p>
              </div>
            </span>
            <p className="text-[#84CC16] text-[16px] font-[600]">{`${card.amount}₮`}</p>
          </div>
        ))}
    </div>
  );
}
