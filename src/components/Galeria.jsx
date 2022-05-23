import React from "react";
import img from "../img/1.webp";
import img2 from "../img/2.webp";

export default function Galeria() {
//   function importAll(r) {
//     let images = {};
//     r.keys().forEach((item, index) => {
//       images[item.replace("./", "")] = r(item);
//     });
//     return images;
//   }

//   const galeria1 = importAll(
//     require.context("../assets/galeria_1", false, /\.(png|jpe?g|svg|webp)$/)
//   );

  return (
    <section className="container mx-auto">
      <div className="flex flex-row items-center">
        {/* titulo e img */}
        <div className="flex flex-col space-y-12">
          <h1 className="text-3xl text-center w-max">
            Bem vindo ao galeria da milvest!
          </h1>
          <div className="w-1/2">
            <img src={img}></img>
            <p className="text-center text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              expedita explicabo earum corrupti, aliquid dolore eum dolorem, ad
              magni quidem ullam optio cum! Incidunt voluptatem, fugiat quaerat
              hic vitae eum!
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="">
            <img src={img2}></img>
          </div>
        </div>
      </div>
    </section>
  );
}
