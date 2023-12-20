const data = [
  { img: "view_logo.svg", type: "Food & Drinks", arrow_img: "arrow.svg" },
  { img: "view_logo.svg", type: "Shopping", arrow_img: "arrow.svg" },
  { img: "view_logo.svg", type: "House", arrow_img: "arrow.svg" },
  { img: "view_logo.svg", type: "Transportation", arrow_img: "arrow.svg" },
  { img: "view_logo.svg", type: "Vehicle", arrow_img: "arrow.svg" },
  {
    img: "view_logo.svg",
    type: "Life & Entertainment",
    arrow_img: "arrow.svg",
  },
  { img: "view_logo.svg", type: "Communication,PC", arrow_img: "arrow.svg" },
  { img: "view_logo.svg", type: "Financial expenses", arrow_img: "arrow.svg" },
  { img: "view_logo.svg", type: "Investment", arrow_img: "arrow.svg" },
  { img: "view_logo.svg", type: "Income", arrow_img: "arrow.svg" },
  { img: "view_logo.svg", type: "Others", arrow_img: "arrow.svg" },
];

export default function Category() {
  return (
    <section className="flex flex-col ">
      <span className="flex flex-row justify-between w-full">
        <h2 className="text-[#1F2937] text-[16px] font-[600]">Category</h2>
        <p className="text-[16px] font-[400] ">Clear</p>
      </span>
      <div className="flex flex-col gap-[8px]">
        {data.map((props, index) => (
          <div className="flex flex-row justify-between w-full" key={index}>
            <span className="flex flex-row w-full gap-[8px]">
              <img src={props.img} className="w-[20px] h-[20px]"></img>
              <p className="text-[#1F2937] font-[400] text-[16px]">
                {props.type}
              </p>
            </span>
            <img src={props.arrow_img}></img>
          </div>
        ))}
        <div className="flex flex-row gap-[8px] text-[#1F2937] text-[16px] font-[400]">
          + Add Category
        </div>
      </div>
    </section>
  );
}
