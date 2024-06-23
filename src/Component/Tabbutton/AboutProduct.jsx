import './AboutProduct.css';

const AboutProduct = () => {
    return (
        <div className="absolute right-[500px] -bottom-52 main">
            <div className="button-container grid lg:grid-cols-3 gap-2 mb-10 box">
                <button className="border-2 px-2 py-1 rounded-full hover:bg-black hover:text-white text-gray-800">Table</button>
                <button className="border-2 px-2 py-2 border-black rounded-full hover:bg-black hover:text-white text-black text-xl">Sofa</button>
                <button className="border-2 px-4 py-2 rounded-full hover:bg-black hover:text-white text-gray-800">Cupboard</button>
                <button className="border-2 px-4 py-2 rounded-full hover:bg-black hover:text-white text-gray-800">Bookshelf</button>
                <button className="border-2 px-4 py-2 rounded-full hover:bg-black hover:text-white text-gray-800">Chair</button>
                <button className="border-2 px-4 py-2 rounded-full hover:bg-black hover:text-white text-gray-800">Bed</button>
            </div>
            <span className="shape"></span>
            <p className="text-4xl desi text-center font-serif pt-2 -mt-10 mb-3 z-10">Summer Collection</p>
        </div>
    );
};

export default AboutProduct;
