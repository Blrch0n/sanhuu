"use client";
import Balance from "@/components/balance";
import Currency from "@/components/currency";
import Finish from "@/components/finish";
import { useState } from "react";
export default function Home() {
  const [page, setPage] = useState(1);
  
  if (page == 1) {
    return <Currency page_={page} setPage_={setPage}></Currency>;
  } else if (page == 2) {
    return <Balance page_={page} setPage_={setPage}></Balance>;
  } else if (page == 3) {
    return <Finish page_={page} setPage_={setPage}></Finish>;
  }
}
