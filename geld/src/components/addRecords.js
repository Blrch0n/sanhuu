import { Context } from "@/app/layout";
import { useContext, useState } from "react";
import AddCatergoryScroll from "./add_category";
import { api } from "@/common/axios";

export default function AddRecords() {
  const {
    clickAdd,
    setClickAdd,
    isExpense,
    setIsExpense,
    category_value,
    isReady,
    setIsReady,
    recordData,
    showOn,
    setRecordData,
    category_name,
  } = useContext(Context);

  const [isCategory, setIsCategory] = useState(false);
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const turnOn = async () => {
    try {
      setIsReady(false)
      const token = localStorage.getItem("token");
      console.log(token);
      const { data } = await api.post(
        "/records",
        {
          amount,
          date,
          isExpense,
          time,
          category_value,
          category_name,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      showOn();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="absolute w-full h-full flex items-center justify-center top-0 bg-[#00000080]">
      <form className="w-[792px] h-[512px] bg-white rounded-[12px]">
        <div className="w-full h-[68px] rounded-[12px] bg-white flex items-center px-[24px] justify-between">
          <h2 className="text-[#0F172A] text-[20px] font-[600]">Add Record</h2>
          <img
            src="X.svg"
            className="cursor-pointer"
            onClick={(event) => {
              event.preventDefault();
              clickAdd ? setClickAdd(false) : "";
            }}
          ></img>
        </div>
        <hr></hr>
        <div className="w-full h-full flex">
          <div className="h-[444px] w-[396px] rounded-[12px] px-[24px] py-[20px] flex flex-col gap-[20px]">
            <span className="w-[348px] h-[40px] rounded-[100px] flex flex-row gap-[4px] bg-[#F3F4F6]">
              <button
                className="h-full w-full bg-[#0166FF] rounded-[20px] font-[400]"
                style={{
                  background: isExpense ? "#0166FF" : "#F3F4F6",
                  color: isExpense ? "white" : "black",
                }}
                onClick={(event) => {
                  event.preventDefault();
                  !isExpense ? setIsExpense(true) : "";
                }}
              >
                Expense
              </button>
              <button
                className="h-full w-full bg-[#0166FF] rounded-[20px] font-[400]"
                style={{
                  background: !isExpense ? "#16A34A" : "#F3F4F6",
                  color: !isExpense ? "white" : "black",
                }}
                onClick={(event) => {
                  event.preventDefault();
                  isExpense ? setIsExpense(false) : "";
                }}
              >
                Income
              </button>
            </span>
            <span className="w-full h-[76px] relative">
              <input
                type="text"
                placeholder="₮ 000.00"
                className="w-full h-full bg-[#D1D5DB] px-[16px] rounded-lg pt-[32px] pb-[12px] text-[#9CA3AF] text-[20px] font-[400]"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              ></input>
              <p className="absolute text-[#171717] font-[600] text-[16px] top-[12px] left-[16px]">
                Amount
              </p>
            </span>
            <span className="w-full h-fit flex flex-col gap-[8px]">
              <p className="text-[#1F2937] font-[500] text-[16px]">Category</p>
              <div
                className="select select-bordered w-full max-w-full h-[48px] relative"
                onClick={(e) => {
                  e.preventDefault();
                  setIsCategory(!isCategory);
                }}
              >
                <div className="absolute top-[10px] left-[16px] w-full flex flex-row gap-[12px]">
                  {category_value == "" ? (
                    <p>Choose</p>
                  ) : (
                    <img src={`/${category_value}`}></img>
                  )}
                  <p>{category_name}</p>
                </div>
                {isCategory && <AddCatergoryScroll />}
              </div>
            </span>
            <div className="w-full h-fit flex flex-row gap-[12px]">
              <span className="w-full h-fit flex flex-col gap-[8px]">
                <p className="text-[#1F2937] font-[500] text-[16px]">Date</p>
                <input
                  type="date"
                  className="w-full h-[48px]"
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                ></input>
              </span>
              <span className="w-full h-fit flex flex-col gap-[8px]">
                <p className="text-[#1F2937] font-[500] text-[16px]">Time</p>
                <input
                  type="time"
                  className="w-full h-[48px]"
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                ></input>
              </span>
            </div>
            <input
              type="submit"
              value="Add Record"
              style={{
                background: !isExpense ? "#16A34A" : "#0166FF",
                color: !isExpense ? "white" : "white",
              }}
              className="text-white bg-green-600 rounded-[20px] w-full h-[40px]"
              onClick={(e) => {
                e.preventDefault();
                setClickAdd(false);
                turnOn();
              }}
            ></input>
          </div>
          <div className="w-full h-[444px] rounded-[12px] px-[24px] py-[20px]">
            <span className="w-full h-fit flex flex-col gap-[8px]">
              <p className="text-[#1F2937] text-[16px] font-[500]">Payee</p>
              <input
                type="text"
                placeholder="Write here"
                className="w-full bg-[#D1D5DB] h-[48px] rounded-lg px-[16px] py-[12px]"
              ></input>
            </span>
            <span className="w-full h-fit flex flex-col gap-[8px]">
              <p className="text-[#1F2937] text-[16px] font-[500]">Note</p>
              <textarea
                placeholder="Write here"
                className="w-full h-[280px] rounded-lg p-[16px] bg-[#D1D5DB]"
              ></textarea>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
