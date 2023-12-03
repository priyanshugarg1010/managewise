import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

const subscriptionFeatures = [
  {
    tier: "free",
    price: 0,
    features: [
      "Access to all basic features",
      "Reporting and analytics",
      "Up to 5 individual users",
      "Chat and email support",
    ],
  },
  {
    tier: "standard",
    price: 25,
    features: [
      "Access to all basic features",
      "Reporting and analytics",
      "Up to 5 individual users",
      "Chat and email support",
      "3+ integrations",
      "Account performance reporting",
    ],
  },
  {
    tier: "premium",
    price: 42,
    features: [
      "Access to all basic features",
      "Reporting and analytics",
      "Up to 5 individual users",
      "Chat and email support",
      "3+ integrations",
    ],
  },
];

const mapFeature = (features) => {
  return features.map((feature, index) => (
    <div className="flex flex-row justify-start items-center gap-5" key={index}>
      <img
        src="/greenTick.svg"
        alt="green tick mark image"
        className="w-6 h-6"
      />
      <p className="text-descTextColor font-medium leading-8">{feature}</p>
    </div>
  ));
};

const PricingCard = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <div className="flex flex-row gap-5 mt-20 ">
      {subscriptionFeatures.map((subscriptionFeature, index) => (
        <motion.div
          ref={ref}
          style={{ scale: scaleProgress, opacity: opacityProgress }}
          className={`rounded-3xl w-96 h-[450px] bg-[#ededfa] relative ${
            index === 1
              ? "bg-backgroundBlack h-[480px] -mt-[30px]"
              : "bg-[#ededfa]"
          }`}
          key={index}
        >
          <div className="p-5 flex flex-col justify-start gap-5">
            <div className="flex">
              <p className="text-textColor rounded-lg bg-white w-auto text-sm px-2 py-1 font-bold ">
                {subscriptionFeature.tier}
              </p>
            </div>

            <div className="mb-2">
              <span
                className={`font-medium text-6xl ${
                  index === 1 ? "text-white" : ""
                }`}
              >
                ${subscriptionFeature.price}
              </span>
              <span
                className={`text-descTextColor font-medium ${
                  index === 1 ? "text-white" : ""
                }`}
              >
                /month
              </span>
            </div>

            <div className="">{mapFeature(subscriptionFeature.features)}</div>
          </div>

          <div className="p-8 left-0 bottom-0 absolute">
            <div
              className={`px-4 rounded-2xl border w-36 hover:border-zinc-400  h-12 ${
                index === 1
                  ? "text-white bg-blueButton border-blueButton"
                  : "bg-white "
              }`}
            >
              <button
                className={`h-12 w-28  text-black font-semibold  text-lg flex justify-center items-center text-center ${
                  index === 1 ? "text-white bg-blueButton" : ""
                }`}
              >
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PricingCard;
