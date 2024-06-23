import React, { useState } from "react";
import Banner from "./Component/Banner/Banner";
import BannerIcon from "./Component/Banner/BannerIcon";
import BannerSlider from "./Component/Banner/BannerSlider";
import Navbar from "./Component/Navbar/Navbar";
import ProductList from "./Component/ProductList/ProductList";
import AboutProduct from "./Component/Tabbutton/AboutProduct";

function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlideIndex(index);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto flex">
        <div className="w-1/2">
          <Banner />
        </div>
        <div className="w-1/2">
          <BannerSlider onSlideChange={handleSlideChange} />
        </div>
      </div>
      <div className="flex">
        <ProductList />
        <AboutProduct />
      </div>
      <BannerIcon currentSlideIndex={currentSlideIndex} />
      
    </>
  );
}

export default App;
