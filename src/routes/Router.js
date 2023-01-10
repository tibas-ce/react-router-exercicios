import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import ProfilePage from "../pages/ProfilePage";

export default function Router(){

    return(
        <BrowserRouter>

            <Routes>
                <Route index element={<HomePage/>} />
                <Route path={"profile/"} element={<ProfilePage/>} />
                <Route path="*" element={<ErrorPage/>} />
                <Route path={"/product/:id"} element={<ProductPage/>} />
            </Routes>
        
        </BrowserRouter>
    )
}