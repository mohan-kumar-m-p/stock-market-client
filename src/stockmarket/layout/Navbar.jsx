import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function NavList() {

  return (
    <ul className="bg-white my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li className="p-1 font-medium">
        <Link to={'/stockmarket/company/list'} className="flex items-center p-2 rounded hover:bg-gray-200">
          <span>Stocks</span>
        </Link>
      </li>
      <li className="p-1 font-medium">
        <Link className="flex items-center p-2 rounded hover:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
          </svg>
        </Link>
      </li>
      <li className="p-1 font-medium">
        <Link className="flex items-center p-2 rounded hover:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-messenger" viewBox="0 0 16 16">
            <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.64.64 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.64.64 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76m5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
          </svg>
        </Link>
      </li>
      <li className="p-1 font-medium">
        <Link  className="flex items-center p-2 rounded hover:bg-gray-200">
          <span>Account</span>
        </Link>
      </li>
    </ul>
  );
}

export function NavbarWithSearch() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <nav className="flex justify-between items-center mx-auto max-w-screen-xl px-6 bg-white shadow-lg drop-shadow shadow-gray border-2 mt-2 rounded">
        <Link to="/" className="text-xl font-semibold">Stock Market</Link>
        <div className="hidden lg:flex">
          <NavList />
        </div>
        <button onClick={() => setOpenNav(!openNav)} className="lg:hidden">
          {openNav ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </nav>

      {openNav && (
        <div className="lg:hidden">
          <NavList />
        </div>
      )}
    </>
  );
}
