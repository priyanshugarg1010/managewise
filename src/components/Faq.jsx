import { useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

const data = [
  {
    question: "What is Manage Wise and what does it offer?",
    answer:
      "Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.",
  },
  {
    question:
      "Is Manage Wise suitable for small businesses and larger enterprises alike?",
    answer:
      "Yes, Manage Wise is designed to cater to the needs of both small businesses and larger enterprises. Its scalable features and customizable options make it versatile for various business sizes. ",
  },
  {
    question: "Can I access Manage Wise from different devices and platforms?",
    answer:
      "Yes, Manage Wise offers cross-platform compatibility, allowing you to access and use the platform seamlessly on desktops, web browsers, and mobile devices.",
  },
  {
    question: "What kind of support options do you offer to users?",
    answer:
      "We provide responsive customer support via chat and email to assist you with any inquiries, issues, or guidance you may need while using Manage Wise.",
  },
  {
    question: "How secure is the data stored within Manage Wise?",
    answer:
      "Your data's security is a top priority. Manage Wise employs robust data encryption and follows industry best practices to ensure your sensitive information is safe and protected.",
  },
];

const Faq = () => {
  const isMobile = window.innerWidth < 768;

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
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
    <div className="flex lg:mt-32 mt-10 flex-col lg:flex-row lg:w-4/5 w-11/12 justify-center items-center gap-16 ">
      <div
        id="faq"
        className="flex bg-white lg:justify-start lg:items-start justify-center items-center  flex-col  lg:w-1/3 w-11/12 lg:p-5  p-0 relative "
      >
        <div className="text-blueButton border border-opacity-30 flex  lg:justify-start lg:items-start justify-center items-center  border-blueButton w-24  bg-white px-2   font-semibold font-[inter] text-xl tracking-wider py-1 leading-5 rounded-lg">
          🙋‍♀️ FAQ
        </div>
        <h2 className="lg:text-6xl text-3xl font-semibold  lg:justify-start lg:items-start justify-center items-center  lg:text-start text-center lg:px-0 px-32 tracking-tight font-[inter] text-backgroundBlack  mt-5">
          Need <span className="text-textColor"> Answer? </span>
        </h2>
        <div className="  lg:justify-start lg:items-start justify-center items-center  lg:text-start text-center lg:text-xl text-lg font-medium text-descTextColor mt-4  ">
          Check out our most commonly asked questions below to find the
          information you need.
        </div>
      </div>
      <div className="lg:p-5 p-0 lg:w-3/5 w-11/12">
        {data.map((question, index) => (
          <motion.div
            key={index}
            ref={ref}
            style={{ scale: scaleProgress, opacity: opacityProgress }}
          >
            <div className="flex items-start flex-row justify-between  p-5 my-2 rounded-2xl bg-[#ededfa] transition ease-in-out delay-150 duration-500	">
              <div className=" flex flex-col justify-between items-center">
                <div className="">
                  <h2
                    onClick={() => handleToggle(index)}
                    className={`lg:text-2xl text-xl font-bold tracking-normal  flex justify-start cursor-pointer ${
                      openIndex === index ? "text-blueButton" : ""
                    }`}
                  >
                    {question.question}
                  </h2>
                </div>
                <div
                  className={` text-descTextColor font-medium  transition-height ease-in-out dela duration-800	 ${
                    openIndex === index ? "py-6" : ""
                  }`}
                >
                  {openIndex === index && <p>{question.answer}</p>}
                </div>
              </div>

              <div className="flex justify-end items-end">
                <button onClick={() => handleToggle(index)}>
                  {openIndex === index ? (
                    <img
                      src="/close.svg"
                      alt="close image"
                      className="w-8 h-8 flex justify-center items-center"
                    />
                  ) : (
                    <img src="/plus.png" alt="open image" className="w-8 h-8" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
