import React from "react";
import banner from "../img/banner.webp";
import StartIcon from "@mui/icons-material/Start";

export default function Banner() {
  return (
    <>
      <div
        className="relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundPosition: "50%",
          height: "800px",
          backgroundImage: ` url(${banner})`,
        }}
      >
        <div
          style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
          className="absolute top-0 bottom-0 right-0 left-0 w-full h-full overflow-hidden"
        >
          <div class="flex justify-center items-center h-full">
            <div class="text-center text-white px-6 md:px-12">
              <h1 class="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                Para Cada Estação <br />
                <span>Um Look Diferente</span>
              </h1>
              <a href="https://milvest.vesti.mobi/">
                <button
                  type="button"
                  class="inline-block px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <StartIcon></StartIcon>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
