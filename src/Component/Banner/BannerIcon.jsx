import { HiArrowsUpDown } from "react-icons/hi2";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { CiBookmarkPlus } from "react-icons/ci";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { useState, useEffect } from "react";

const BannerIcon = ({ currentSlideIndex }) => {
    const [showBookmark, setShowBookmark] = useState(false);
    const [slideData, setSlideData] = useState([]);

    useEffect(() => {
        // Example data for each slide
        const data = [
            {
                userRating: "9'5",
                furnitureLab: "8'8",
                User: "User Ratings",
                Product: "Furniture Lab"
            },
            {
                userRating: "8'5",
                furnitureLab: "7'8",
                User: "User Special",
                Product: "Sofa Set Lab"
            },
            {
                userRating: "7'5",
                furnitureLab: "6'8",
                User: "User Ratings",
                Product: "Furniture Lab"
            },
            {
                userRating: "7'5",
                furnitureLab: "6'8",
                User: "User Interfaces",
                Product: "Bad set Lab"
            }
        ];
        setSlideData(data);
    }, []);

    const currentSlide = slideData[currentSlideIndex] || {};

    const toggleBookmark = () => {
        setShowBookmark(!showBookmark);
    };

    return (
        <div className="transition-all duration-1000 ease-in-out">
            <div className="absolute top-80 right-20">
                <div className="border backdrop-blur-lg rounded-full h-12 w-12 flex items-center justify-center">
                    <HiArrowsUpDown className="text-2xl rotate-45" />
                </div>
                <div className="border backdrop-blur-lg rounded-full h-12 w-12 flex items-center justify-center">
                    {showBookmark ? (
                        <BsFillBookmarkPlusFill
                            onClick={toggleBookmark}
                            className="text-2xl cursor-pointer"
                        />
                    ) : (
                        <CiBookmarkPlus
                            onClick={toggleBookmark}
                            className="text-2xl cursor-pointer"
                        />
                    )}
                </div>
                <div className="border backdrop-blur-lg rounded-full h-12 w-12 flex items-center justify-center">
                    <GiCardboardBoxClosed className="text-2xl" />
                </div>
            </div>
            <div className="absolute top-52 right-96 transition-opacity duration-1000 ease-in-out">
                {Object.keys(currentSlide).length > 0 && (
                    <>
                        <div className="flex gap-3 backdrop-blur-xl text-white w-56 items-center justify-center rounded-full py-3 transform transition-transform duration-1000 ease-in-out">
                            <p className="backdrop-blur-xl text-lg border-black font-semibold border w-9 rounded-full h-9 text-center pt-1">{currentSlide.userRating}</p>
                            <p className="text-xl font-semibold underline">{currentSlide.User}</p>
                        </div>
                        <div className="flex gap-3 ml-4 backdrop-blur-xl text-white w-48 items-center justify-center rounded-full py-2 transform transition-transform duration-1000 ease-in-out">
                            <p className="backdrop-blur-xl text-lg border-black font-semibold border w-8 rounded-full h-8 text-center pt-1">{currentSlide.furnitureLab}</p>
                            <p className="text-lg font-semibold underline">{currentSlide.Product}</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default BannerIcon;
