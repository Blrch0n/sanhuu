import Header from "@/components/header";
import Login from "./login/page";
import Card_1 from "@/components/card_1";
import Card_2 from "@/components/card_2";
import Card_3 from "@/components/card_3";
import IncomeExpense from "@/components/income_expense";
import LastRecord from "@/components/last_records";
import Balance from "@/components/balance";
import AddCatergory from "@/components/addCategory";

export default function Home() {
  return (
    <section className="w-[fit] h-[fit] flex flex-col ">
      {/* <Balance></Balance> */}
      <Login></Login>
      {/* <AddCatergory></AddCatergory> */}
      {/* <Header></Header>
      <div className="flex flex-col gap-[24px] w-full px-[120px]">
        <div className="w-full h-fit flex flex-row gap-[20px] mt-[32px]">
          <Card_1></Card_1>
          <Card_2></Card_2>
          <Card_3></Card_3>
        </div>
        <div className="w-full h-fit flex flex-row gap-[24px]"> 
          <IncomeExpense></IncomeExpense>
          <IncomeExpense></IncomeExpense>
        </div>
        <LastRecord></LastRecord>
      </div> */}
    </section>
  );
}
