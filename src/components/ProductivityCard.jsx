import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

const productiveFeatures = [
  {
    image: "/card.png",
    title: "Cross-Platform Compatibility",
    desc: "Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device.",
  },
  {
    image: "/bell.png",
    title: "Stay Informed with Essential Notifications",
    desc: "Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket.",
  },
  {
    image: "/fire.png",
    title: "Secure Data Encryption at all times",
    desc: "Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times.",
  },
];

const ProductivityCard = () => {
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
    <div className="flex lg:flex-row md:flex-col  flex-col gap-10  md:justify-center  md:items-center">
      {productiveFeatures.map((productiveFeature, index) => (
        <motion.div
          ref={ref}
          style={{ scale: scaleProgress, opacity: opacityProgress }}
          className="flex flex-col  w-[350px]  md:w-4/5  lg:w-[370px] p-8 shadow-lg border-zinc-800 overflow-hidden h-96 bg-cardColor rounded-3xl justify-center items-center"
          key={index}
        >
          <div className="flex justify-center items-center rounded-2xl w-16 h-16 bg-blueButton">
            <img
              src={productiveFeature.image}
              alt={productiveFeature.image}
              className="w-8 h-8"
            />
          </div>
          <div className="text-2xl font-semibold p-2 justify-center items-center text-center  font-[inter] text-white">
            {productiveFeature.title}
          </div>
          <div className="justify-center items-center text-center  text-normal font-medium text-descTextColor mt-4 ">
            {productiveFeature.desc}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductivityCard;
