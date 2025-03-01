import { Routes, Route } from "react-router-dom";
import { Products } from "../pages";
import { TestDataBase } from "../TestDataBase";

export function RouteList() {
    return (
        <div>
            <Routes>
                <Route path="/Products" element={<Products />}> </Route>
                <Route path="/" element={<TestDataBase />}> </Route>
            </Routes>
        </div>
    )
}
