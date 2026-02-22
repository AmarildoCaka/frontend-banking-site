import { Link } from "react-router-dom";

import { useThirdBankStore } from "../../store/ThirdGroup/thirdBankStore";

import NavBarInnerComp from "./NavBarInnerComp";

const NavBarComp = () => {
  const { theme } = useThirdBankStore();

  return (
    <>
      <nav
        className={`${theme === "dark" ? "bg-slate-900 text-white" : "bg-indigo-600 text-white"} fixed w-full z-50 shadow-md`}
      >
        <div className="container mx-auto flex justify-between items-center px-4 py-2">
          <div className="flex items-center">
            <Link
              to="/"
              className="cursor-pointer hover:scale-105 hover:duration-300"
            >
              <img
                className="w-12 md:w-16 rounded-md shadow-md"
                src="/images/logo.jpg"
                alt="Logo"
              />
            </Link>
          </div>

          <NavBarInnerComp />
        </div>
      </nav>
    </>
  );
};

export default NavBarComp;
