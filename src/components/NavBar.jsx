import React from "react";
import { Search, Globe, Menu, User } from "lucide-react";
import { Link } from "react-router";
import { useAuth } from "../hooks/AuthProvider";

export default function AirbnbNavbar() {
  const { user, logout } = useAuth();

  return (
    <header className="w-full shadow-sm sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-[#FF385C] text-2xl font-bold">
              airbnb
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center justify-between border rounded-full shadow-sm px-4 py-2 w-[350px] hover:shadow-md cursor-pointer">
            <span className="text-sm font-medium">Anywhere</span>
            <span className="mx-2">|</span>
            <span className="text-sm font-medium">Any week</span>
            <span className="mx-2">|</span>
            <span className="text-sm text-gray-500">Add guests</span>
            <button className="ml-2 bg-[#FF385C] p-2 rounded-full text-white">
              <Search size={16} />
            </button>
          </div>

          {/* Right Menu */}
          <div className="flex items-center space-x-4">
            {user ? (
              <button
                onClick={logout}
                className="hidden md:inline text-sm font-medium px-3 py-2 rounded-full hover:bg-gray-100"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hidden md:inline text-sm font-medium px-3 py-2 rounded-full hover:bg-gray-100"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="hidden md:inline text-sm font-medium px-3 py-2 rounded-full hover:bg-gray-100"
                >
                  Signup
                </Link>
              </>
            )}

            <a
              href="/host"
              className="hidden md:inline text-sm font-medium px-3 py-2 rounded-full hover:bg-gray-100"
            >
              Airbnb your home
            </a>

            <button className="p-2 rounded-full hover:bg-gray-100">
              <Globe size={20} />
            </button>

            <div className="flex items-center border rounded-full p-2 cursor-pointer hover:shadow-md">
              <Menu size={18} className="mr-2" />
              <User size={18} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
