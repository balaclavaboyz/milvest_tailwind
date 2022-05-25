import React from "react";
import logo from "../img/logo.webp";

export default function Footer() {
  return (
    <section id="footer" className="bg-gray-900">
      <footer>
        <div className="container flex flex-col justify-between mx-auto px-6 py-10 space-y-8 md:flex-row md:space-y-0">
          <div className="flex flex-col items-center justify-between">
            {/* logo da milvest */}
            <p className="font-bold text-gray-700">Milvest</p>
            <div className="flex justify-center space-x-4">
              <a href="#">
                <img src="" alt="" />
                {/* socal instagram */}
                <img src="" alt="" />
                {/* whatsapp */}
              </a>
            </div>
          </div>

          {/* list of links */}
          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <a
                href="https://milvest.vesti.mobi/"
                className="hover:text-fuchsia-800"
              >
                Catálogo/Pedidos
              </a>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <a href="/faq" className="hover:text-fuchsia-800">
                Faq
              </a>
              <a href="/politica" className="hover:text-fuchsia-800">
                Política de Privacidade
              </a>
            </div>
          </div>

          <div className="hidden text-xs text-gray-500 md:block">2022 Peter Kim</div>
        </div>
      </footer>
    </section>
  );
}
