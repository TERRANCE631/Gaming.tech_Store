import { useEffect, useState } from "react";
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty";

export const DashboardPage = ({ title }) => {

  useEffect(() => {
    document.title = `${title} | CodeBook`
  });

  const [orders, setOrders] = useState([]);
  const token = JSON.parse(sessionStorage.getItem("token"));
  const cbid = JSON.parse(sessionStorage.getItem("cbid"));

  useEffect(() => {
    async function fetchOrders() {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/660/orders?user.id=${cbid}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
      });
      const data = await response.json();
      setOrders(data);
    }

    fetchOrders();
  }, [token, cbid])

  return (
    <main>

      <section>
        <p className="text-2xl text-center font-semibold my-10">Your Recent Orders</p>
      </section>

      <section>
        {orders.length && orders.map((order) => (
          <DashboardCard key={order.id} order={order} />
        ))}
      </section>

      <section>
        {!orders.length && <DashboardEmpty />}
      </section>

    </main>
  )
}
