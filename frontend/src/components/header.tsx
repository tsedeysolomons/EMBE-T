import React, { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Modal from "@/components/modal";
import AuthPage from "@/features/auth";
import { AppContext } from "@/context/AppProvider";
import { navbar, userDropDown } from "@/constants/constant";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "@/features/auth/login/authSlice";

function Header() {
  //const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

 
  const [dropdown, setDropdown] = useState(false);

  const { modalTitle } = useContext(AppContext);

  const [openMobileMenu, setopenMobileMenu] = useState(false);

  const user = useSelector(selectCurrentToken);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-50">
      <div className="box-border md:box-content bg-yellow-200 p-2 ">
        <h2>
          <ErrorOutlineIcon /> <i className="text-red-600">important:</i>
          update on rain to/from Addis Ababa to Djibouti
        </h2>
      </div>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://sholajobs.com/wp-content/uploads/2023/08/Ethiopian-Railways-Corporation-1.png"
            className="h-8"
            alt="Ethio Rail"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Ethiopian Midir Babur
          </span>
        </a>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            onClick={() => setDropdown(!dropdown)}
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            {user ? (
              <img
                className="w-8 h-8 rounded-full"
                src="https://sholajobs.com/wp-content/uploads/2023/08/Ethiopian-Railways-Corporation-1.png"
                alt="user photo"
              />
            ) : (
              <Modal
                title={modalTitle}
                body={<AuthPage />}
                toggleModal={<Button className="text-white">Login</Button>}
              />
            )}
          </button>

          {user && (
            <div
              className={`z-50 ${
                dropdown ? "absolute" : "hidden"
              } top-12 right-9 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                {userDropDown.map((item) => (
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      {item.lable}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            onClick={() => setopenMobileMenu(!openMobileMenu)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="https://sholajobs.com/wp-content/uploads/2023/08/Ethiopian-Railways-Corporation-1.png"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            !openMobileMenu ? "hidden" : ""
          } w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
            {navbar.map((item, index) => (
              <li>
                <a
                  //href="#"
                  key={item.lable}
                  className="block py-2 px-3 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 hover:text-white hover:bg-blue-700 uppercase"
                >
                  {item.lable}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

