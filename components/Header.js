import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  LogoutIcon,
  MenuIcon,
  UserCircleIcon,
  MenuAlt2Icon,
  UsersIcon,
} from "@heroicons/react/solid";

const Header = () => {
  return (
    <div
      className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md
    p-5 md:px-10"
    >
      {/*left*/}
      <div
        className="relative flex items-center h-10
      cursor-pointer"
      >
        <Image src="/Airbnb_logo_PNG3.png" alt="logo" width={100} height="10" />
      </div>
      {/*middle*/}
      <div
        className="flex items-center md:border-2 rounded-full py-2
      md:shadow-sm"
      >
        <input
          className="pl-5 flex-grow bg-transparent outline-none text-sm text-gray-400"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon
          className="hidden md:inline-flex h-8 bg-red-400
         text-white rounded-full p-2 cursor-pointer md:mx-2"
        />
      </div>
      {/*right*/}
      <div className="flex space-x-4 items-center text-gray-500 justify-end">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </div>
  );
};

export default Header;
//width={5} height={}
