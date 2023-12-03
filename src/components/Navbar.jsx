import { HashLink as Link } from "react-router-hash-link";

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
  return (
    <>
      <div className="p-4 flex flex-row justify-between bg-backgroundSkin after:">
        <div className=" w-44 h-12 ml-2">
          <img src="/logo.png" alt="logo image" />
        </div>

        <div className="lg:flex flex-row justify-between items-center gap-5 z-1 hidden">
          <Navlinks />
          <div className="  rounded-md px-5 py-2 text-bold font-semibold bg-[rgb(255,255,255)] text-lg ">
            <p className=" text-bold">Buy Template</p>
          </div>
        </div>
      </div>
      <hr className="h-px  bg-gray-200 border-0 dark:bg-zinc-800 opacity-10" />
    </>
  );
};

export default Navbar;
