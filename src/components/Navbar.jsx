import React from "react";
import logo from "../img/logo.webp";
import Sidebar from "./Sidebar";

export default function Navbar() {
    return (
        <>
            <nav className="container mx-auto p-6">
                <div className="flex space-x-6 items-center justify-center text-2xl hidden md:flex">
                    <div className="w-16">
                        <a href="/">
                            <img src={logo} alt="Logo da milvest, link para homepage" />
                        </a>
                    </div>
                    <div className="flex flex-row justify-between space-x-6 ">
                        <a href="/">
                            Home
                        </a>
                        <a href="https://milvest.vesti.mobi/">
                            Catálogo/Pedidos
                        </a>
                        <a href="/faq">Faq</a>
                    </div>
                </div>
                <div className="flex space-x-6 items-center justify-center text-2xl md:hidden">
                    <div className="w-16">
                        <a href="/">
                            <img src={logo} alt="" />
                        </a>
                    </div>
                </div>
                <Sidebar className="md:block" />
            </nav>
        </>
    );
}
