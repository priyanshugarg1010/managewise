import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const links = [
  { name: "Features", href: "#feature" },
  { name: "FAQ", href: "#faq" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
];
const Navlinks = () => {
  return (
    <>
      {links.map((link) => {
        return (
          <>
            <Link to={link.href} smooth>
              <div
                key={link.name}
                href={link.href}
                className="flex grow items-center justify-center  rounded-md  p-5 text-lg hover:text-blueButton font-normal  md:flex-none md:justify-start md:p-2 md:px-3 focus:outline-none "
              >
                <p className="hidden md:block">{link.name}</p>
              </div>
            </Link>
            <div className="flex justify-center items-center bg-gray-400 w-1 h-1 opacity-50"></div>
          </>
        );
      })}
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="p-4 flex flex-row justify-between bg-backgroundSkin relative">
        <div className=" w-44 h-12 ml-2">
          <img src="/logo.png" alt="logo image" />
        </div>

        <div className="lg:hidden  flex justify-center items-center flex-col ">
          <button onClick={() => setIsOpen(!isOpen)}>
            <img src="/menu.svg" alt="menu image" className="w-8 h-8" />
          </button>
          <div
            className={` absolute top-16 right-0 border border-solid border-gray-500 bg-white text-gray-500 p-5 rounded-2xl flex flex-col gap-5 font-light w-52               ${
              isOpen ? "block " : "hidden"
            }`}
          >
            {links.map((link) => {
              return (
                <>
                  <Link to={link.href} smooth>
                    <div
                      key={link.name}
                      href={link.href}
                      className="flex grow items-center justify-center  rounded-md   text-lg hover:text-blueButton font-normal  md:flex-none md:justify-start  focus:outline-none "
                    >
                      <p className="lg:hidden block">{link.name}</p>
                    </div>
                  </Link>
                </>
              );
            })}
            <div className="  rounded-md px-5 py-2 text-bold font-semibold bg-blueButton text-lg ">
              <a href="#" className=" text-bold text-white">
                Buy Template
              </a>
            </div>
          </div>
        </div>

        <div className="lg:flex flex-row justify-between items-center gap-5 z-1 hidden">
          <Navlinks />
          <div className="  rounded-md px-5 py-2 text-bold font-semibold bg-[rgb(255,255,255)] text-lg ">
            <a href="#" className=" text-bold">
              Buy Template
            </a>
          </div>
        </div>
      </div>
      <hr className="h-px  bg-gray-200 border-0 dark:bg-zinc-800 opacity-10" />
    </>
  );
};

export default Navbar;
