import { Context } from "@/app/layout";
import { useContext } from "react";

export default function AddCatergoryScroll(props) {
  const {
    category_value,
    setCategoryValue,
    category_name,
    setCategoryName,
    setClickAdd,
    setIsAdd,
    isReady_,
    categoryData,
  } = useContext(Context);
  return (
    <div className="absolute left-0 bottom-[-396px] w-full h-fit max-h-[392px] bg-white flex flex-col rounded-[12px] overflow-scroll">
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
      {isReady_ && categoryData.map((card, index) => (
        <div
          className="h-[56px] w-full p-[16px]"
          key={index}
          onClick={() => {
            setCategoryValue(card.logo);
            setCategoryName(card.name);
          }}
        >
          <div className="flex flex-row w-full h-full items-center gap-[12px]">
            {card.categoryValueAdd}
            <p>{card.categoryInputValue}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
