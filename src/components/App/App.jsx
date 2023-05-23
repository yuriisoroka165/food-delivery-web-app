import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import SharedLayout from "../SharedLayout";

const Shop = lazy(() => import("../../pages/Shop"));
const ShoppingCart = lazy(() => import("../../pages/ShoppingCart"));

function App() {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<Shop />} />
                <Route path="/cart" element={<ShoppingCart />} />
            </Route>
        </Routes>
    );
}

export default App;
