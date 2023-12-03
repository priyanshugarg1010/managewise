import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

const Feature = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ref2,
    offset: ["0 1", "1.2 1"],
  });
  const scaleProgress = useTransform(scrollYProgress1, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress1, [0, 1], [0.8, 1]);

  const scaleProgress2 = useTransform(scrollYProgress2, [0, 1], [0.8, 1]);
  const opacityProgress2 = useTransform(scrollYProgress2, [0, 1], [0.8, 1]);

  return (
    <div className=" flex justify-center items-center flex-col " id="feature">
      <div className="text-blueButton border border-opacity-30 border-blueButton w-auto bg-white px-2  mt-32 font-semibold font-[inter] text-[12px] tracking-wider py-1 leading-5 rounded-lg">
        🔥 PREMIER FEATURES
      </div>
      <h2 className="text-5xl font-semibold p-2 justify-center items-center text-center  font-[inter] text-backgroundBlack  mt-5">
        Discover our product{"'"}s
        <span className="text-textColor"> Capabilities </span>
      </h2>
      <div className=" justify-center items-center text-center  text-xl font-medium text-descTextColor mt-4  ">
        Don{"'"}t settle for mediocrity - embrace the future of management{" "}
        <br />
        with Manage Wise.
      </div>

      <div className="flex w-4/5 justify-center items-center flex-col mt-20">
        <div className="flex flex-row w- justify-center items-center gap-10">
          <motion.div
            // transition={{ delay: 0.5 }}
            ref={ref2}
            style={{ scale: scaleProgress2, opacity: opacityProgress2 }}
            className="p-10 bg-[#ededfa] text-4xl  font-semibold text-backgroundBlack  w-[45%] leading-[50px] rounded-2xl"
          >
            <div className="p-4 bg-white w-12 h-12 flex justify-center items-center rounded-[16px] my-5 ">
              ⭐️
            </div>
            Boost productivity and streamline workflow with us. Enjoy our
            intuitive interface and robust features.
          </motion.div>

          <motion.div
            // transition={{ delay: 0.5 }}
            ref={ref2}
            style={{ scale: scaleProgress2, opacity: opacityProgress2 }}
            className="bg-white rounded-3xl border w-[50%] h-[420px]"
          >
            <img src="/taskmanagement.png" alt="taskmanagement image" />
            <div className="p-5">
              <h3 className="font-bold text-2xl">Smart Task Management</h3>
              <p className=" text-descTextColor text-normal font-medium ">
                Say goodbye to chaos with our smart task management system
              </p>
            </div>
          </motion.div>
        </div>

        <div className=" flex flex-row justify-between gap-10  items-center mt-20">
          <motion.div
            // transition={{ delay: 0.5 }}
            ref={ref}
            style={{ scale: scaleProgress, opacity: opacityProgress }}
            className="bg-white rounded-3xl border"
          >
            <img src="/schedule.png" alt="schedule image" />
            <div className="p-5">
              <h3 className="font-bold text-2xl">Flexible Scheduling</h3>
              <p className=" text-descTextColor text-normal font-medium ">
                Stay productive with our flexible scheduling system
              </p>
            </div>
          </motion.div>
          <motion.div
            // transition={{ delay: 0.5 }}
            ref={ref}
            style={{ scale: scaleProgress, opacity: opacityProgress }}
            className="bg-white rounded-3xl border"
          >
            <img src="/communication.png" alt="communication image" />
            <div className="p-5">
              <h3 className="font-bold text-2xl">Easy Communication</h3>
              <p className=" text-descTextColor text-normal font-medium ">
                Collaborate seamlessly with your team in real-time
              </p>
            </div>
          </motion.div>
          <motion.div
            // transition={{ delay: 0.5 }}
            ref={ref}
            style={{ scale: scaleProgress, opacity: opacityProgress }}
            className="bg-white rounded-3xl border"
          >
            <img src="/analytics.png" alt="analytics image" />
            <div className="p-5">
              <h3 className="font-bold text-2xl">Analytics</h3>
              <p className=" text-descTextColor text-normal font-medium ">
                Gain valuable insights with our advanced analytics feature
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
