import { useCallback, useState } from "react";
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";

const BannerSlider = ({ onSlideChange }) => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliderImages = [
        'https://i.ibb.co/xm5TbBc/image.png',
        'https://i.ibb.co/p1tXBxv/image.png',
        'https://i.ibb.co/3y4S92L/image.png',
        'https://i.ibb.co/xm5TbBc/image.png'
    ];

    const prevSlider = () => {
        const newIndex = currentSlider === 0 ? sliderImages.length - 1 : currentSlider - 1;
        setCurrentSlider(newIndex);
        onSlideChange(newIndex); 
    };

    const nextSlider = useCallback(() => {
        const newIndex = currentSlider === sliderImages.length - 1 ? 0 : currentSlider + 1;
        setCurrentSlider(newIndex);
        onSlideChange(newIndex);
    }, [currentSlider, sliderImages.length, onSlideChange]);

    return (
        <div className="pt-14 max-w-screen-xl mx-auto relative">
            <div className="absolute bottom-[400px] -left-[40px] flex flex-col">
                <button onClick={nextSlider} className="border-2 rounded-full p-2 hover:bg-black hover:text-white">
                    <FiArrowUpRight className="text-2xl" />
                </button>
                <button onClick={prevSlider} className="border-2 rounded-full p-2 hover:bg-black hover:text-white">
                    <FiArrowDownLeft className="text-2xl" />
                </button>
            </div>
            <div className="flex justify-center">
                <div className="relative w-[550px] h-[750px]">
                    {sliderImages.map((slide, index) => (
                        <img
                            key={index}
                            src={slide}
                            className={`absolute inset-0 w-full h-full rounded-3xl border-8 border-transparent object-cover transition-opacity duration-1000 ease-in-out ${index === currentSlider ? 'opacity-100' : 'opacity-0'}`}
                            alt={`Slider - ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BannerSlider;
