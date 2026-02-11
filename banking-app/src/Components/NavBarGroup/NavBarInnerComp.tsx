import { useState } from "react";

import { Link } from "react-router-dom";

import DarkModeToggleComp from "./DarkModeGroup/DarkModeComp";

import { useThirdBankStore } from "../../store/thirdBankStore";

interface navbarLinksListInterface {

  tabName: string;

  tabRoute: string;

};

const NavBarInnerComp = () => {
  
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const [activeTab, setActiveTab] = useState<string>("Home");

  const { theme } = useThirdBankStore();

  const navbarLinksList: navbarLinksListInterface[] = [
  
    { tabName: "Home", tabRoute: "/" },
  
    { tabName: "About", tabRoute: "/about" },
  
    { tabName: "Sign Up", tabRoute: "/sign-up" },
  
    { tabName: "Settings", tabRoute: "/account-settings" },
  
    { tabName: "Opinions", tabRoute: "/client-opinions" },
  
    { tabName: "Contact Us", tabRoute: "/contact-us" }
  
  ];

  const handleLinkClick = (tabName: string) => {
  
    setIsOpen(false);
  
    setActiveTab(tabName);
  
  };

  const mobileMenuBg = (theme === "dark")? "bg-slate-900": "bg-indigo-600";

  return (
  
    <>
    
      <div className="relative">

        <button type="button" className="fixed top-4 right-4 z-50 w-8 h-8 flex flex-col justify-between items-center md:hidden" onClick={() => {

          setIsOpen((prev) => !prev);

        }}>

          <span className={`block h-1 w-full bg-white rounded transition-transform duration-300 ${(isOpen)? "rotate-45 translate-y-3": ""}`}></span>
          
          <span className={`block h-1 w-full bg-white rounded transition-opacity duration-300 ${(isOpen)? "opacity-0": "opacity-100"}`}></span>
          
          <span className={`block h-1 w-full bg-white rounded transition-transform duration-300 ${(isOpen)? "-rotate-45 -translate-y-3": ""}`}></span>

        </button>

        <ul className={`fixed top-0 right-0 h-screen w-64 ${mobileMenuBg} z-40 shadow-lg transform transition-transform duration-300 ${(isOpen)? "translate-x-0": "translate-x-full"} flex flex-col items-start pt-20 px-4 md:static md:h-auto md:w-auto md:flex md:flex-row md:items-center md:translate-x-0 md:top-auto md:right-auto md:px-0 md:pt-0 md:shadow-none md:bg-transparent`}>

          {navbarLinksList.map((i) => (

            <li key={i.tabName} className="w-full md:w-auto text-left hover:scale-105 transition p-2 mb-2 md:mb-0 md:mr-4">
            
              <Link to={i.tabRoute} className={`text-lg font-bold cursor-pointer ${(theme === "dark")? (activeTab === i.tabName)? "text-white": "text-slate-400": "text-white"}`} onClick={() => {

                handleLinkClick(i.tabName);

              }}>{i.tabName}</Link>

            </li>

          ))}

          <li className="w-full md:w-auto p-2 mt-2 md:mt-0">

            <DarkModeToggleComp/>
          
          </li>
        
        </ul>
      
      </div>
    
    </>

  );

};

export default NavBarInnerComp;