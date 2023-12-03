import { useRef } from "react";
import Feature from "./Feature";
import Pricing from "./Pricing";
import Productivity from "./Productivity";
import TryOutCard from "./TryOutCard";
import Testimonials from "./Testimonials";
import TestimonialCards from "./TestimonialCards";
import Faq from "./Faq";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";

const Home = () => {
  const isMobile = window.innerWidth < 768;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  if (isMobile) {
    scaleProgress.set(1);
    opacityProgress.set(1);
  }

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
          className="lg:text-7xl md:text-6xl  text-5xl font-semibold p-2 justify-center items-center text-center tracking-tight font-[inter] text-backgroundBlack  sm:leading-snug lg:leading-tight lg:w-4/5 w-11/12"
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
          className="lg:w-2/4 w-10/12  justify-center items-center text-center  text-xl  font-medium text-descTextColor mt-8  "
        >
          Powerful management platform designed to streamline your business
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
          className="justify-between lg:w-1/3 w-4/5  gap-5 lg:gap-0 p-5 flex sm:flex-row h-28 items-center mb-10 flex-col"
        >
          <div className="px-12 p-y-5 rounded-2xl bg-blueButton h-14 hover:border-8 duration-200 ease-in hover:border-softBlueButton box-content">
            <button
              className="
         lg:h-full lg:w-full m-5 lg:m-0 lg:mt-0 mt-3.5 text-white font-semibold text-lg flex justify-center items-center text-center  "
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

        <div className="rounded-[30px] overflow-hidden shadow-3xl relative lg:w-[1200px] lg:h-[600px] w-80 h-52  object-cover mt-10 lg:mt-0  ">
          <img
            ref={ref}
            style={{ scale: scaleProgress, opacity: opacityProgress }}
            src="/managewise.png"
            alt="managewise dashboard image"
            className="transform scale- transition-transform duration-300 ease-in-out lg:w-full lg:h-full  w-80 h-52"
          />
        </div>

        <Feature />
        <Productivity />
        <Faq />
        <Pricing />

        <div className="flex lg:justify-start lg:items-start flex-col">
          <Testimonials />
        </div>
        <TestimonialCards />

        <TryOutCard />
      </div>
    </>
  );
};

export default Home;
