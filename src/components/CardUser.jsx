import React from "react";
    
            const CardUser = ({ data }) => {
                return (
                    <div className="flex-1 max-w-md mx-auto bg-slate-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl font-Montserrat">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0">
                                <img
                                    className="h-full w-full object-contain md:w-48"
                                    src={data.img}
                                    alt={data.nombre}
                                />
                            </div>
                            <div className="p-8">
                                <div className="uppercase tracking-wide text-sm text-cyan-500 font-semibold">
                                    {data.nombre}
                                </div>
                                <div className="block mt-1 text-lg leading-tight font-medium text-black">
                                {data.precio}
                                
                                <div/>
                                
                                </div>
                                <p className="mt-2 text-gray-500 text-sm">{data.marca}</p>
                                <div className="mt-6">
                                    <button className="bg-zinc-700 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">
                                        Añadir al carrito
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            };

    export default CardUser;