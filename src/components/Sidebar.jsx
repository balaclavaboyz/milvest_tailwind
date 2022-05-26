import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {!isOpen ? (
                <button
                    className="fixed z-30 flex items-center cursor-pointer right-10 top-6 md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        fill="#000"
                        viewBox="0 0 100 80"
                        width="40"
                        height="40"
                    >
                        <rect width="100" height="10"></rect>
                        <rect y="30" width="100" height="10"></rect>
                        <rect y="60" width="100" height="10"></rect>
                    </svg>
                </button>
            ) : (
                <button
                    className="z-50 text-xl text-black fixed right-4 top-4 md:hidden"
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    <CloseIcon fontSize="large"/>
                </button>
            )}
            <div
                className={`z-40 top-0 right-0 fixed bg-blue-500 w-[60vw] h-full pt-20 pr-5 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                } ease-in-out duration-300 md:hidden bg-white opacity-70`}
            >
                <div className="flex flex-col text-black font-bold text-right space-y-6 text-2xl">
                    <a href="/" className="">
                        Home
                    </a>
                    <a href="https://milvest.vesti.mobi/">Catálogo/Pedidos</a>
                    <a href="/faq">Faq</a>
                </div>
            </div>
        </>
    );
}
