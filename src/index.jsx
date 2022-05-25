import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./input.css";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import Politica from "./pages/Politica";
import NoPage from "./pages/NoPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route index element={<Home></Home>}></Route>
        <Route path="faq" element={<Faq></Faq>}></Route>
        <Route path="politica" element={<Politica></Politica>}></Route>
        <Route path="*" element={<NoPage></NoPage>}></Route>
      </Routes>
      <Footer></Footer>
      <WhatsappButton></WhatsappButton>
    </BrowserRouter>
  </React.StrictMode>
);
