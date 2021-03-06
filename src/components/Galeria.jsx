import React from "react";

export default function Galeria() {
    function importAll(r) {
        return r.keys().map(r);
    }

    const images = importAll(
        require.context("../img/galeria", false, /\.(png|jpe?g|svg|webp)$/)
    );

    // function for random sizes for images
    const returnRandomWidth = () => {
        const listwidth = [
            "col-span-4",
            "col-span-8",
            "col-span-4",
            "col-span-4",
        ];

        const maximum = listwidth.length;
        const minimum = 0;

        let randomnumber =
            Math.floor(Math.random() * (maximum - minimum)) + minimum;
        return String(listwidth[randomnumber]);
    };
    // end

    return (
        <section className="container mx-auto ">
            <h2 className="text-center text-4xl font-bold pt-8">
                Moda Feminina Atacado Bom Retiro
            </h2>
            <p className="text-center text-2xl pt-2 pb-6">
                Criamos, Produzimos e Vendemos em Atacado
            </p>
            {/* <h2 className="font-bold text-3xl text-center pt-8 pb-12">
                Lançamentos
            </h2> */}
            <div className="grid grid-flow-row-dense grid-cols-12 place-items-center md:grid hidden">
                {images.map((image, index) => (
                    <img
                        className={returnRandomWidth() + " rounded-2xl p-3"}
                        src={image}
                        key={index}
                        alt="images da galeria da milvest"
                    ></img>
                ))}
            </div>
            <div className="flex flex-col place-items-center md:hidden">
                {images.map((image, index) => (
                    <img
                        className={`rounded-2xl p-3`}
                        src={image}
                        key={index}
                        alt="images da galeria da milvest"
                    ></img>
                ))}
            </div>
        </section>
    );
}
