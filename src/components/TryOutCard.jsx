import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

const TryOutCard = () => {
  const ref = useRef(null);

  const isMobile = window.innerWidth < 768;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  if (isMobile) {
    scaleProgress.set(1);
    opacityProgress.set(1);
  }
  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="w-4/5  flex lg:flex-row flex-col justify-center items-center shadow-xl  mt-32 border  rounded-3xl overflow-hidden"
    >
      <div
        id=""
        className="flex bg-white justify-start items-center flex-col lg:w-2/4 w-11/12 lg:p-28 p-5"
      >
        <div className="">
          <div className="text-blueButton border border-opacity-30 flex lg:justify-start lg:items-start justify-center items-center border-blueButton w-40  bg-white px-2   font-semibold font-[inter] text-[12px] tracking-wider py-1 leading-5 rounded-lg">
            👋 DON{"'"}T MISS OUT
          </div>
          <h2 className="lg:text-5xl text-4xl font-semibold lg:justify-start justify-center items-center lg:text-start text-center  tracking-tight font-[inter] text-backgroundBlack  mt-5">
            Unleash your <span className="text-textColor"> Potential </span>
            with us{" "}
          </h2>
          <div className="  lg:justify-start lg:items-start justify-center items-center  lg:text-start text-center text-xl font-medium text-descTextColor mt-5  ">
            Join our community of ambitious individuals and organizations eager
            to make a difference.
          </div>

          <div className="flex justify-start items-start py-10 h-20">
            <div className="px-12 p-y-5 rounded-2xl bg-blueButton h-14 hover:border-8 duration-200 ease-in-out hover:border-softBlueButton box-content">
              <button
                className="
              h-full w-full  text-white font-semibold text-lg flex justify-center items-center text-center  "
              >
                Try out now{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-2/4 w-9/12 flex justify-center items-start bg-white lg:h-96  lg:mt-40 mt-10 mb-10">
        <div className="text-blueButton border border-opacity-30 flex justify-start items-start border-blueButton w-72 bg-white p-5   font-semibold font-[inter] lg:text-2xl text:xl tracking-wider  leading-5 rounded-lg shadow-2xl">
          200+{" "}
          <span className="text-backgroundBlack font-semibold ml-2">
            Happy users
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default TryOutCard;
