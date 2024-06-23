import { FiArrowRight } from "react-icons/fi";


const ProductList = () => {
    return (
        <>
            <div className="-mt-72 pl-5">

                <div className="flex gap-10">

                    <div className=" ">

                        <div>
                            <img className="w-[210px] h-[200px] object-cover rounded-xl border-2" src="https://i.ibb.co/9qFxMZP/image.png" alt="" />
                        </div>
                        <div className="flex gap-14 py-2">
                            <div className="flex gap-2">
                                <p className="text-xl font-semibold">Wraith</p>
                                <p className="font-bold text-xl">.</p>
                                <p className="text-gray-500">$</p>
                                <p className="font-semibold">1100</p>
                            </div>

                            <div>
                                <FiArrowRight className="text-xl font-bold" />
                            </div>
                        </div>

                        <div className="flex">
                            <p className="text-sm pt-1 font-semibold border  border-black w-8 rounded-full h-8 text-center">A</p>
                            <p className="text-sm pt-1 font-semibold border border-black w-8 rounded-full h-8 text-center">FR</p>
                        </div>

                    </div>

                    <div className=" mt-10">

                        <div>
                            <img className="w-[210px] h-[200px] object-cover rounded-xl border-2" src="https://i.ibb.co/WkFsQdT/image.png" alt="" />
                        </div>
                        <div className="flex gap-14 py-2">
                            <div className="flex gap-2">
                                <p className="text-xl font-semibold">Wraith</p>
                                <p className="font-bold text-xl">.</p>
                                <p className="text-gray-500">$</p>
                                <p className="font-semibold">1100</p>
                            </div>

                            <div>
                                <FiArrowRight className="text-xl font-bold" />
                            </div>
                        </div>

                        <div className="flex">
                            <p className="text-sm pt-1 font-semibold border  border-black w-8 rounded-full h-8 text-center">A</p>
                            <p className="text-sm pt-1 font-semibold border border-black w-8 rounded-full h-8 text-center">FR</p>
                        </div>

                    </div>

                </div>



                <div className="flex gap-10 ">

                    <div className="-mt-4 ">

                        <div>
                            <img className="w-[210px] h-[200px] object-cover rounded-xl border-2" src="https://i.ibb.co/nfQnxjm/image.png" alt="" />
                        </div>
                        <div className="flex gap-14 py-2">
                            <div className="flex gap-2">
                                <p className="text-xl font-semibold">Wraith</p>
                                <p className="font-bold text-xl">.</p>
                                <p className="text-gray-500">$</p>
                                <p className="font-semibold">1100</p>
                            </div>

                            <div>
                                <FiArrowRight className="text-xl font-bold" />
                            </div>
                        </div>

                        <div className="flex">
                            <p className="text-sm pt-1 font-semibold border  border-black w-8 rounded-full h-8 text-center">F</p>
                            <p className="text-sm pt-1 font-semibold border border-black w-8 rounded-full h-8 text-center">US</p>
                        </div>

                    </div>

                    <div className=" mt-6">

                        <div>
                            <img className="w-[210px] h-[200px] object-cover rounded-xl border-2" src="https://i.ibb.co/Pz1cxXC/image.png" alt="" />
                        </div>
                        <div className="flex gap-14 py-2">
                            <div className="flex gap-2">
                                <p className="text-xl font-semibold">Wraith</p>
                                <p className="font-bold text-xl">.</p>
                                <p className="text-gray-500">$</p>
                                <p className="font-semibold">1100</p>
                            </div>

                            <div>
                                <FiArrowRight className="text-xl font-bold" />
                            </div>
                        </div>

                        <div className="flex">
                            <p className="text-sm pt-1 font-semibold border  border-black w-8 rounded-full h-8 text-center">B</p>
                            <p className="text-sm pt-1 font-semibold border border-black w-8 rounded-full h-8 text-center">CR</p>
                        </div>

                    </div>

                    <div className="-mt-60 flex flex-col items-center space-y-1">
                        <p className="bg-gray-400 w-1 h-[24px] "></p>
                        <p className="bg-gray-600 w-4 h-4 rounded-full "></p>
                        <p className="bg-gray-400 w-1 h-[70px]"></p>

                    </div>
                </div>

                <div>

                </div>

            </div>
        
        </>
    );
};

export default ProductList;