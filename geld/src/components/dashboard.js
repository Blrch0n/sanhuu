import Card_1 from "./card_1";
import Card_2 from "./card_2";
import Card_3 from "./card_3";
import IncomeExpense from "./income_expense";
import LastRecord from "./last_records";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-[24px] w-full px-[120px] m-auto">
      <div className="w-full h-fit flex flex-row gap-[20px] mt-[32px]">
        <Card_1/>
        <Card_2/>
        <Card_3/>
      </div>
      <div className="w-full h-fit flex flex-row gap-[24px]">
        <IncomeExpense/>
        <IncomeExpense/>
      </div>
      <LastRecord/>
    </div>
  );
}
