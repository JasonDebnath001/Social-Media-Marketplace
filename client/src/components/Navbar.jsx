import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { BoxIcon, GripIcon, ListIcon, MessageCircleMore } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <nav className="flex items-center justify-between py-3 md:px-16 lg:px-24 xl:px-32 md:py-4 w-full text-gray-900">
      <img
        src={assets.logo}
        alt="Logo"
        className="h-10 cursor-pointer"
        onClick={() => {
          navigate("/");
          scrollTo(0, 0);
        }}
      />
      <div
        id="menu"
        className={`${
          mobileOpen ? "max-md:w-full" : "max-md:w-0"
        } max-md:absolute max-md:top-0 max-md:z-10 max-md:left-0 max-md:transition-all max-md:duration-300 max-md:overflow-hidden max-md:h-full max-md:flex-col max-md:justify-center max-md:bg-black/50 max-md:backdrop-blur flex items-center gap-8 text-sm`}
      >
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className="text-gray-700 hover:text-gray-900 max-md:text-white max-md:hover:text-white"
        >
          Home
        </Link>
        <Link
          to="/marketplace"
          onClick={() => setMobileOpen(false)}
          className="text-gray-700 hover:text-gray-900 max-md:text-white max-md:hover:text-white"
        >
          Marketplace
        </Link>
        <Link
          to={user ? "/messages" : "#"}
          onClick={() => (user ? setMobileOpen(false) : openSignIn())}
          className="text-gray-700 hover:text-gray-900 max-md:text-white max-md:hover:text-white"
        >
          Messages
        </Link>
        <Link
          to={user ? "/my-listings" : "#"}
          onClick={() => (user ? setMobileOpen(false) : openSignIn())}
          className="text-gray-700 hover:text-gray-900 max-md:text-white max-md:hover:text-white"
        >
          My Listings
        </Link>

        <button className="md:hidden text-purple-600 border border-purple-600 px-10 h-10 rounded-full text-sm transition max-md:text-white max-md:border-white">
          Login
        </button>
        <button
          id="close-menu"
          onClick={() => setMobileOpen(false)}
          className="md:hidden text-gray-700 p-2 rounded-md aspect-square font-medium transition border border-gray-200 max-md:text-white max-md:border-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
      {!user ? (
        <button
          onClick={openSignIn}
          className="hidden md:block text-purple-600 border border-purple-600 px-10 h-10 rounded-full text-sm transition"
        >
          Login
        </button>
      ) : (
        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Action
              label="Marketplace"
              labelIcon={<GripIcon size={16} />}
              onClick={() => navigate("/marketplace")}
            />
            <UserButton.Action
              label="Messages"
              labelIcon={<MessageCircleMore size={16} />}
              onClick={() => navigate("/messages")}
            />
            <UserButton.Action
              label="My Listings"
              labelIcon={<ListIcon size={16} />}
              onClick={() => navigate("/my-listings")}
            />
            <UserButton.Action
              label="My Orders"
              labelIcon={<BoxIcon size={16} />}
              onClick={() => navigate("/my-orders")}
            />
          </UserButton.MenuItems>
        </UserButton>
      )}

      <button
        id="open-menu"
        onClick={() => setMobileOpen(true)}
        className="md:hidden text-gray-700 p-2 rounded-md aspect-square font-medium transition border border-gray-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M4 12h16" />
          <path d="M4 18h16" />
          <path d="M4 6h16" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
