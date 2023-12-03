import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import TryOutCard from "./TryOutCard";

const Navlinks = () => {
  const links = [
    { name: "Features", href: "#feature" },
    { name: "FAQ", href: "#faq" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <>
      {links.map((link) => {
        return (
          <>
            <HashLink to={link.href} smooth>
              <div
                key={link.name}
                href={link.href}
                className="flex grow items-center justify-center  rounded-md p-2 text-md  hover:text-blueButton font-medium  md:flex-none md:justify-start md:p-2 md:px-3 focus:outline-none "
              >
                <p className="hidden md:block">{link.name}</p>
              </div>
            </HashLink>
          </>
        );
      })}
    </>
  );
};

const Footer = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-backgroundSkin mt-32">
      <div className="flex flex-row justify-between items-center w-4/5 h-full py-20">
        <div className=" p-5 ">
          <img
            src="/logo.png"
            alt="logo image"
            className="w-56 flex items-start"
          />
        </div>

        <div className="">
          <Navlinks />
        </div>
      </div>

      <hr className="h-px  bg-gray-200 border-0 dark:bg-zinc-800 opacity-10 w-4/5" />
      <div className="flex justify-between items-centers w-4/5">
        <p className="p-8">© 2022 ManageWise, Inc.</p>
        <div className="flex flex-row p-8 gap-5">
          <Link to="https://instagram.com">
            <img src="/insta.svg" alt="instagram logo" className="w-6 h-6" />
          </Link>
          <Link to="https://x.com">
            <img src="/x.svg" alt="twitter logo" className="w-6 h-6" />
          </Link>
          <Link to="https://linkedin.com">
            <img src="/linkedin.svg" alt="linkedin logo" className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
