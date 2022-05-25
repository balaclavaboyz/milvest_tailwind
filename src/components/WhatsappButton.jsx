import React from "react";
import WhatsappSVG from "../img/whatsapp.svg";

export default function WhatsappButton() {
  return (
    <>
      <a
        className="fixed right-6 bottom-4 z-50 w-12"
        href="https://wa.me/5511942419476"
      >
        <img src={WhatsappSVG} alt="link para whatsapp da milvest" />
      </a>
    </>
  );
}
