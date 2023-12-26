import { Context } from "@/app/layout";
import { useContext } from "react";

const data = [
  { logo: "home.svg", name: "Home" },
  { logo: "gift.svg", name: "Gift" },
  { logo: "food_add.svg", name: "Food" },
  { logo: "drinnk.svg", name: "Drink" },
  { logo: "taxi.svg", name: "Taxi" },
  { logo: "shopping.svg", name: "Shopping" },
  { logo: "home.svg", name: "Home" },
  { logo: "gift.svg", name: "Gift" },
  { logo: "food_add.svg", name: "Food" },
  { logo: "drinnk.svg", name: "Drink" },
  { logo: "taxi.svg", name: "Taxi" },
  { logo: "shopping.svg", name: "Shopping" },
];

export default function AddCatergoryScroll(props) {
  const {
    category_value,
    setCategoryValue,
    category_name,
    setCategoryName,
    setClickAdd,
    setIsAdd,
  } = useContext(Context);
  return (
    <div className="absolute left-0 bottom-[-396px] w-full h-fit max-h-[392px] bg-white flex flex-col rounded-[12px] overflow-scroll">
      <div
        className="h-[56px] w-full p-[16px]"
        onClick={() => {
          setClickAdd(false), setIsAdd(true);
        }}
      >
        <div className="flex flex-row w-full h-full items-center gap-[12px]">
          <img src="add_category.svg" className="w-[24px] h-[24px]"></img>
          <p>Add Category</p>
        </div>
      </div>
      <hr></hr>
      {data.map((card, index) => (
        <div
          className="h-[56px] w-full p-[16px]"
          key={index}
          onClick={() => {
            setCategoryValue(card.logo);
            setCategoryName(card.name);
          }}
        >
          <div className="flex flex-row w-full h-full items-center gap-[12px]">
            <img src={card.logo} className="w-[24px] h-[24px]"></img>
            <p>{card.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
