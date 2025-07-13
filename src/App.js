import React from "react";
import ReactDOM from "react-dom/client"
import Home from "./Components/Home";
import Restaurant from "./Components/Restaurant";
import { BrowserRouter, Route, Routes} from "react-router";
import RestaurantMenu from "./Components/RestaurantMenu";
import SeachFood from "./Components/SeachFood";
import SecondaryHome from "./Components/SecondaryHome";
import { store } from "./Stored/stores";
import {Provider} from "react-redux"



function App(){

    return (
        <>
        <Provider store={store}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route element={<SecondaryHome/>}>
            <Route path="/restaurants" element={<Restaurant/>}></Route>
            <Route path="/city/delhi/:id" element={<RestaurantMenu/>}></Route>
            <Route path="/city/delhi/:id/search" element={<SeachFood/>}></Route>
            </Route>
        </Routes>
        </BrowserRouter>
        </Provider>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)