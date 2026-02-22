import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { useThirdBankStore } from "../../store/ThirdGroup/thirdBankStore";

const FooterComp = () => {
  const { theme } = useThirdBankStore();

  return (
    <>
      <footer
        className={`py-8 px-4 ${theme === "light" ? "bg-indigo-600 text-white" : theme === "dark" ? "bg-slate-900 text-white" : "bg-indigo-600 text-white"}`}
      >
        <section className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center lg:items-start gap-4">
              <div className="flex flex-row items-center lg:items-start gap-3">
                <img
                  className="w-16 h-16 rounded-md transform transition duration-300 hover:scale-105 shadow-lg"
                  src="/images/logo.jpg"
                  alt="World Bank Logo"
                />

                <div className="text-center lg:text-left">
                  <h1 className="text-2xl font-bold mb-1">World Bank Inc.</h1>

                  <p className="text-sm font-medium opacity-90">
                    Because life is complicated enough!
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <h1 className="text-lg font-bold mb-4 pb-2 w-full text-center lg:text-left">
                Quick Links
              </h1>

              <ul className="space-y-2 flex flex-col items-center lg:items-start w-full">
                {[
                  "About Us",
                  "Privacy Policy",
                  "Terms & Conditions",
                  "Contact",
                ].map((link, i) => (
                  <li key={i} className="w-full text-center lg:text-left">
                    <a
                      href="/"
                      className="font-medium text-semibold hover:opacity-80 transition cursor-pointer"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <h1 className="text-lg font-bold mb-4 pb-2 w-full text-center lg:text-left">
                Contact Us
              </h1>

              <ul className="space-y-3 flex flex-col items-center lg:items-start w-full">
                {[
                  { icon: "📍", text: "123 World Bank St, Suite 100" },

                  { icon: "✉️", text: "support@world_bank.com" },

                  { icon: "📞", text: "(123) 456-7890" },
                ].map((info, i) => (
                  <li
                    key={i}
                    className="w-full text-center lg:text-left font-semibold flex items-center justify-center lg:justify-start gap-2"
                  >
                    <span>{info.icon}</span>

                    <span className="text-sm">{info.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <h1 className="text-lg font-bold mb-4 pb-2 w-full text-center lg:text-left">
                Follow Us On
              </h1>

              <div className="flex justify-center lg:justify-start gap-4 flex-wrap">
                {[
                  { id: 1, icon: <FaFacebookF size={20} /> },

                  { id: 2, icon: <FaTwitter size={20} /> },

                  { id: 3, icon: <FaInstagram size={20} /> },

                  { id: 4, icon: <FaLinkedinIn size={20} /> },
                ].map((social) => (
                  <a
                    key={social.id}
                    href="/"
                    className="p-1 transform transition duration-300 text-white hover:scale-105 cursor-pointer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <p className="text-xs mt-4 opacity-80 text-center lg:text-left border-t-2 border-white p-2">
                Connect with us on social media for updates and news!
              </p>
            </div>
          </div>

          <div className="border-t border-white border-opacity-30 mt-8 pt-6">
            <p className="text-sm text-center font-semibold opacity-90">
              &copy; 2025 World Bank Inc. All rights reserved.
            </p>
          </div>
        </section>
      </footer>
    </>
  );
};

export default FooterComp;
