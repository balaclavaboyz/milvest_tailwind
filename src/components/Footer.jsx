import React from "react";
import instagram from "../img/black_instagram.svg";
import whatsapp from "../img/black_whatsapp.svg";

export default function Footer() {
  return (
    <section id="footer" className="bg-gray-900">
      <footer>
        <div className="container flex flex-col justify-between mx-auto px-6 py-10 space-y-8 md:flex-row md:space-y-0">
          <div className="flex flex-col items-center justify-between">
            {/* logo da milvest */}
            <p className="font-bold text-gray-700">Milvest</p>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="https://www.instagram.com/milvest_oficial/">
              <img
                src={instagram}
                alt="link para instagram da milvest"
                className="w-8"
              />
            </a>
            <a href="https://wa.me/5511942419476">
              <img src={whatsapp} alt="link para whatsapp" className="w-8" />
            </a>
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

          <div className="flex flex-col text-xs text-gray-500 md:block">
            <p>2022 Peter Kim</p>
            <div>
              <a
                href="https://iconscout.com/icons/whatsapp"
                rel="noreferrer"
                target="_blank"
              >
                Whatsapp Icon
              </a>{" "}
              by{" "}
              <a href="https://iconscout.com/contributors/unicons">
                Unicons Font
              </a>{" "}
              on <a href="https://iconscout.com">IconScout</a>
            </div>
            <div>
              <a
                rel="noreferrer"
                href="https://iconscout.com/icons/instagram"
                target="_blank"
              >
                Instagram Icon
              </a>{" "}
              by{" "}
              <a
                rel="noreferrer"
                href="https://iconscout.com/contributors/unicons"
                target="_blank"
              >
                Unicons Font
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
