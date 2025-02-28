import React from "react";
import { useState,useRef } from "react";
import cake1 from "/src/assets/images/50.jpeg";
import cake2 from "/src/assets/images/51.webp";
import cake3 from "/src/assets/images/53.jpeg";
import cake4 from "/src/assets/images/52.jpeg";
import cake5 from "/src/assets/images/60.jpeg";
import cake6 from "/src/assets/images/56.jpeg";
import cake7 from "/src/assets/images/57.jpeg";
import cake8 from "/src/assets/images/58.jpeg";
import cake9 from "/src/assets/images/55.webp";



// import { FaSearch } from "react-icons/fa";

const cakeImages = [cake1, cake2, cake3, cake4, cake5, cake6,cake7,cake8,cake9];

export default function Home() {
  
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const walk = (e.clientX - startX) * 1.5; 
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };


  return (
    <div className="font-[Roboto] bg-pink-200 min-h-screen">
        <div
        ref={sliderRef}
        className={`p-4 flex gap-6 select-none overflow-hidden ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp} 
      >
        {[
          "48.jpeg", "44.jpeg", "43.jpeg", "20 Fun Baby.jpeg",
          "29.jpeg", "18.jpeg", "45.jpeg", "27.jpeg",
          "41.jpeg", "42.jpeg", "24.jpeg", "37.jpeg"
        ].map((image, index) => (
          <img
            key={index}
            src={`src/assets/images/${image}`}
            alt="Cake"
            className="h-100 w-[270px] object-cover rounded-2xl flex-shrink-0"
          />
        ))}
      </div>

      
      
      <div className="text-center p-6">
        <h2 className="text-4xl text-[#5D4037] font-bold underline">OUR TALE</h2>
        <p className="text-[#5D4037] mt-10 leading-10 text-2xl   mx-auto">
        Egg-free. Vegetarian. Vegan. We Promise! <br />
        Keeping taste and texture our highest priority in construction of our desserts, we bring to you a range of healthy delights that celebrates any occasion in your calendar! There's something for everyone here... From petite desserts to rich cakes to themed cake with celebrations! We make you what you want, in the flavors and flour as per your wish. Pleased to have won many hearts with our vegetarian flag soaring high, we continue with our motto of creating egg-free desserts without any compromise.
        </p>
      </div>
      
      <h2 className="text-4xl text-[#5D4037] text-center my-8 font-bold underline">IN VOGUE</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {["BISCOFF DRIP CAKE", "RASPBERRY CHEESECAKE", "RASAMALAI CAKE", "ELANEER PUDDING", "LEMON CAKE", "FERRERO ROCHER CAKE", "KUNAFA CHOCOLATE", "ROSE MILK CAKE", "CHOCO DREAM CAKE"].map((item, index) => (
          <div key={index} className="p-2 rounded overflow-hidden transform transition-transform duration-300 hover:scale-105 group">
            <div className="relative overflow-hidden">
              <img src={cakeImages[index]} alt={item} className="h-80 w-[350px] object-cover rounded transform transition-transform duration-500 group-hover:scale-110" />
              <div className="bg-[#5D4037] py-4 w-[350px] absolute bottom-0 left-0 transform transition-transform duration-500 group-hover:translate-x-4 group-hover:-translate-y-0">
                <h3 className="text-center text-2xl text-white font-bold transition-transform duration-500 group-hover:translate-x-4">{item}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>


<div className="bg-[#F3C6C6] p-8 rounded-lg shadow-inner max-w-6xl mx-auto mt-8 border border-[#5D4037]">
  <h2 className="text-center text-2xl font-bold text-[#5D4037]">ENQUIRY FORM</h2>
  <p className="text-center text-sm text-gray-700 mt-2">
    Let Us Know About Your Taste!! We Will Customize It Without Any Compromise!!
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
    <input type="text" placeholder="Name" className="p-3 bg-white font-semibold border border-gray-300 rounded-lg w-full" />
    <input type="text" placeholder="Egg/Eggless" className="p-3 bg-white border font-semibold border-gray-300 rounded-lg w-full" />
    <input type="text" placeholder="Contact" className="p-3 bg-white border font-semibold border-gray-300 rounded-lg w-full" />
    <input type="text" placeholder="Which Flour To Be Used?" className="p-3 font-semibold bg-white border border-gray-300 rounded-lg w-full" />

    <input type="email" placeholder="Mail ID" className="p-3 bg-white border font-semibold border-gray-300 rounded-lg" />
    <textarea placeholder="Type Your Customization" className="p-3 bg-white font-semibold border border-gray-300 rounded-lg w-full" ></textarea>

    <input type="text" placeholder="Occasion" className="p-3 bg-white border font-semibold border-gray-300 rounded-lg w-full" />
  </div>

  <button className="block bg-[#5D4037] text-white px-6 py-2 rounded-full mt-6 mx-auto font-bold">
    CONVEY US
  </button>
</div>


    </div>
    
  );
}


