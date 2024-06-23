import BannerSizing from "./BannerSizing";

const Banner = () => {
    return (
        <div className="max-w-screen-xl mx-auto space-y-16 py-12">
            <div className="  font-serif">
                <span className="text-9xl font-medium text-black">Sn</span>
                <span className="text-9xl font-medium relative text-black lowercase">0                
                </span>
                <span className="text-black absolute text-8xl font-bold left-[230px] pt-5">/</span>
                <span className="text-9xl font-medium text-black">wFlake</span>
                <h1 className="text-5xl">Sofa -<span className="italic pl-1 text-4xl text-gray-900">  $ 1100</span></h1>
             </div>
             <div>
                <p className="font-medium">"Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/> Ipsum assumenda possimus animi sint ratione repellat optio <br/> eaque perferendis tempora sit! "</p>
             </div>

           {/* ----------------- Toggle button and size design  ------------------------------ */}
             <div>
                <BannerSizing/>
             </div>

        </div>
    );
};

export default Banner;
