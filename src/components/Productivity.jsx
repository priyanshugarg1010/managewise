import ProductivityCard from "./ProductivityCard";
import Integration from "./Integration";

const Productivity = () => {
  return (
    <div
      id=""
      className="flex bg-backgroundBlack justify-start items-center flex-col mt-32 w-full lg:w-[100%] "
    >
      <div className="lg:w-4/5  w-full">
        <div className="text-blueButton border border-opacity-30 flex justify-start items-start border-blueButton w-32  bg-white px-2  mt-24 font-semibold font-[inter] text-[12px] tracking-wider py-1 leading-5 rounded-lg lg:ml-0 ml-5">
          🤩 AND MORE...
        </div>
        <h2 className="lg:text-5xl text-3xl lg:p-0 p-5 font-semibold justify-start items-center text-start  tracking-tight font-[inter] text-white  lg:mt-5">
          Explore an array of features that elevate your
          <span className="text-textColor"> Productivity </span>
          to new heights
        </h2>
        <div className=" justify-start items-start text-start  text-xl font-medium text-descTextColor lg:mt-4 -mt-2 lg:p-0 p-5">
          Discover the tools that will revolutionize the way you
          <br />
          manage and optimize your operations
        </div>
      </div>
      <div className="flex sm:flex-row flex-col lg:w-4/5  lg:mt-20 mt-10 ">
        <ProductivityCard />
      </div>

      <div className="">
        <Integration />
      </div>
    </div>
  );
};

export default Productivity;
