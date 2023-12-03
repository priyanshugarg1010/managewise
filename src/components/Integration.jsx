import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

const Integration = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <div
      id=""
      className="flex bg-backgroundBlack justify-center items-center flex-col "
    >
      <div className="lg:w-2/4 w-11/12 flex justify-center items-center flex-col">
        <div className="text-blueButton border border-opacity-30 flex   justify-center items-center border-blueButton w-36  bg-white px-2  mt-24 font-semibold font-[inter] text-[12px] tracking-wider py-1 leading-5 rounded-lg">
          🛠 INTERGRATIONS
        </div>
        <h2 className="lg:text-5xl text-3xl font-semibold justify-center items-center text-center  tracking-tight font-[inter] text-white  mt-5">
          Enable
          <span className="text-textColor"> integration </span>
          with other popular tools and platforms{" "}
        </h2>
        <div className=" justify-center items-center text-center text-lg lg:text-xl font-medium text-descTextColor mt-5 w-11/12 lg:w-3/4">
          Seamlessly connect and amplify your workflow by enabling integration
          with a diverse array of widely-used tools and platforms.
        </div>
      </div>

      <motion.div
        ref={ref}
        style={{ scale: scaleProgress, opacity: opacityProgress }}
        className="lg:w-2/4 w-10/12 mt-20"
      >
        <img src="/framer.png" alt="" />
      </motion.div>
    </div>
  );
};

export default Integration;
