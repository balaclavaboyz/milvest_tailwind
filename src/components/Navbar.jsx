import React from "react";
import logo from "../img/logo.webp";

export default function Navbar() {
  return (
    <>
      <nav className="container mx-auto p-6">
        <div className="flex space-x-6 items-center justify-center text-2xl">
          <div className="w-16">
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="flex flex-row justify-between space-x-6 ">
            <a href="/" className="">
              Home
            </a>
            <a href="https://milvest.vesti.mobi/">Catálogo/Pedidos</a>
            <a href="/faq">Faq</a>
          </div>
        </div>
      </nav>
    </>
  );
}
