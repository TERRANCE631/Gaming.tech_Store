import { Routes, Route } from "react-router-dom";
import { Keyboards, Mice, Games, Monitors } from "../Pages/Products/components/Categories";
import { ProductDetails, Products, CartPage } from "../Pages";
import { Login, Register } from "../CreateAnAccount";

import { DashboardPage } from "../Pages/Dashboard/DashboardPage";
import { OrderPage } from "../Pages/OrderPage/OrderPage";
import { SecuredRoutes } from "./SecuredRoutes";
import { Home } from "../Pages/Home/Home";
import { NewRelease, TopRated } from "../Pages/Other";

export function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/TopRated" element={<TopRated />}></Route>
        <Route path="/NewRelease" element={<NewRelease />}></Route>
        
        <Route path="/Keyboards" element={<Keyboards apiPath="/products?category=Keyboard" />}></Route>
        <Route path="/Monitors" element={<Monitors apiPath="/products?category=Monitor" />}></Route>
        <Route path="/Mice" element={<Mice apiPath="/products?category=Mouse" />}></Route>
        <Route path="/Games" element={<Games apiPath="/products?category=Games" />}></Route>
        
        <Route path="/Products" element={<Products />}></Route>
        <Route path="/Products/:id" element={<ProductDetails />}></Route>
                
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Login" element={<Login />}></Route>

        <Route path="/CartPage" element={<SecuredRoutes><CartPage /></SecuredRoutes>}></Route>
        <Route path="/DashboardPage" element={<SecuredRoutes><DashboardPage /></SecuredRoutes>}></Route>
        <Route path="/OrderPage" element={<SecuredRoutes><OrderPage /></SecuredRoutes>}></Route>
        
      </Routes>
    </>
  )
}
