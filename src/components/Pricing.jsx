import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="flex justify-center items-center flex-col w-10/12"
    >
      <div className="text-blueButton border border-opacity-30 border-blueButton w-24  bg-white px-2  mt-32 font-semibold font-[inter] text-[12px] tracking-wider py-1 leading-5 rounded-lg">
        💲 PRICING
      </div>
      <h2 className="lg:text-6xl text-3xl font-semibold lg:p-2 p-5 justify-center items-center text-center  tracking-tight font-[inter] text-backgroundBlack  mt-5">
        Select your ideal
        <span className="text-textColor"> Pricing </span>
        plan
      </h2>
      <div className=" justify-center items-center text-center  lg:text-xl text-lg font-medium text-descTextColor lg:mt-4  lg:w-2/4">
        At Manage Wise, we believe in providing you with pricing plans that
        adapt to your unique needs.
      </div>
      <div className="flex flex-col sm:flex-row">
        <PricingCard />
      </div>
    </div>
  );
};

export default Pricing;
