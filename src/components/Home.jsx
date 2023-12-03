import { useEffect, useRef, useState } from "react";
import Feature from "./Feature";
import Pricing from "./Pricing";
import Productivity from "./Productivity";
import TryOutCard from "./TryOutCard";
import Testimonials from "./Testimonials";
import TestimonialCards from "./TestimonialCards";
import Faq from "./Faq";
import { motion } from "framer-motion";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const defaultWidth = 1100;
  const defaultHeight = 670;

  // Calculate the scaling factor based on the scroll position
  const scaleFactor = 1 + scrollPosition * 0.001;

  // Calculate the increased width and height
  const increasedWidth = 100 * scaleFactor; // Adjust the initial width as needed
  const increasedHeight = 100 * scaleFactor;

  const ref = useRef(null);

  return (
    <>
      <div className="bg-gradient-to-b from-backgroundSkin via-white to-white flex justify-center items-center flex-col ">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1.5,
            delay: 0.7,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="text-blueButton border border-opacity-30 border-blueButton w-auto bg-white px-2  mt-28 font-semibold font-[inter] text-[12px] tracking-wider py-1 leading-5 rounded-lg"
        >
          👋 WELCOME TO MANAGE WISE!{" "}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1.5,
            delay: 0.7,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="text-7xl font-semibold   p-2 justify-center items-center text-center tracking-tight font-[inter] text-backgroundBlack   w-4/5"
        >
          Empower your business with{" "}
          <span className="text-textColor"> Strategic </span>
          insights
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1.5,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="w-2/4  justify-center items-center text-center  text-xl font-medium text-descTextColor mt-8  "
        >
          Powerful management platform designed to streamline your business
          <br />
          operations, boost productivity, and drive success
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1.5,
            delay: 0.6,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="justify-between w-1/3 p-5 flex flex-row h-28 items-center mb-10"
        >
          <div className="px-12 p-y-5 rounded-2xl bg-blueButton h-14 hover:border-8 duration-200 ease-in hover:border-softBlueButton box-content">
            <button
              className="
         h-full w-full  text-white font-semibold text-lg flex justify-center items-center text-center  "
            >
              Get Started{" "}
            </button>
          </div>
          <div className="px-12 p-y-5 rounded-2xl border border-zinc-400 hover:border-zinc-800 bg-white h-14">
            <button
              className="
          h-14 w-32  text-black font-semibold  text-lg flex justify-center items-center text-center "
            >
              Watch Demo{" "}
            </button>
          </div>
        </motion.div>

        <div className="rounded-[30px] overflow-hidden shadow-3xl relative min-w-[1200px] min-h-[600px]">
          <img
            ref={ref}
            src="/managewise.png"
            alt="managewise dashboard image"
            className="transform scale- transition-transform duration-300 ease-in-out"
            style={{
              width: `${defaultWidth + increasedWidth}px`,
              height: `${defaultHeight + increasedHeight}px`,
            }}
          />
        </div>

        <Feature />
        <Productivity />
        <Faq />
        <Pricing />

        <div className="flex justify-start items-start flex-col">
          <Testimonials />
        </div>
        <TestimonialCards />

        <TryOutCard />
      </div>
    </>
  );
};

export default Home;
