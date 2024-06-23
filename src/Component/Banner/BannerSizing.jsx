import { useState } from "react";

const BannerSizing = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div>
          <div className="flex items-center">
                <div className="">
                   <div className="flex">
                        <p className="border  w-7  h-7 text-center pt-1 hover:bg-black hover:text-white cursor-pointer rounded-full border-gray-400 text-sm text-gray-400">S</p>
                        <p className="border  w-7  h-7 text-center pt-1 hover:bg-black hover:text-white cursor-pointer rounded-full border-gray-400 text-sm text-gray-400">M</p>
                   </div>
                    <div className="flex">
                        <p className="border  w-7  h-7 text-center pt-1 hover:bg-black hover:text-white cursor-pointer rounded-full border-gray-400 text-sm text-gray-400">L</p>
                        <p className="border w-7 h-7 text-center pt-1 hover:bg-black hover:text-white cursor-pointer rounded-full border-gray-800 text-sm ">XL</p>
                    </div>
                </div>

                <div className="px-5">
                   <div className="py-1">
                        <label htmlFor="BasicSwitch_NavigateUI" className="relative flex h-fit w-20  items-center  rounded-full border border-gray-400">
                            <input type="checkbox" className="peer/toggle hidden" id="BasicSwitch_NavigateUI" />
                            <div className="absolute inset-0 z-10 w-0 rounded-full duration-200 peer-checked/toggle:w-full peer-checked/toggle:bg-sky-200"></div>
                            <div className="z-20 size-5 rounded-full bg-sky-600 duration-200 peer-checked/toggle:translate-x-14"></div>
                        </label>
                   </div>

                   <div>
                        <button onClick={() => setToggle((prev) => !prev)} className={`flex h-5 w-20 items-center rounded-full border border-gray-400 ${toggle ? '' : null}`}>
                            <div className={`size-4 w-7 rounded-full bg-gray-400 duration-200 ${toggle ? 'translate-x-12' : 'translate-x-0'}`}></div>
                        </button>
                   </div>
                </div>

                <div className="px-5">
                    <img className="w-12" src="https://i.ibb.co/k2YyHM1/image-removebg-preview-87.png" alt="" />
                </div>
                <div className="border border-gray-400 rounded-full h-16 pt-3 px-2">
                    <img className="w-7 " src="https://i.ibb.co/t4JC5n2/image.png" alt="" />
                </div>

                <div className="mt-1">
                    <button className="border px-12  py-4 border-gray-400 hover:bg-black hover:text-white rounded-full font-semibold">Buy</button>
                </div>
          </div>
        </div>
    );
};

export default BannerSizing;