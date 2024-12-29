import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import { OrderFail } from "./components/OrderFail";
import { OrderSuccess } from "./components/OrderSuccess";

export const OrderPage = ({title}) => {
  useEffect(() => {
    document.title = `${title} | CodeBook`
  });

  const { state } = useLocation();

  return (
    <main>
      { state.status ? <OrderSuccess data={state.data}/> : <OrderFail />}
    </main>
  )
}
