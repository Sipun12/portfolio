import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black fixed top-0 w-full h-20 flex items-center justify-between px-6 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/src/assets/logo.png"
          width={40}
          height={40}
          alt="Sipun Meher"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-center gap-10 bg-zinc-800 rounded-2xl h-12 px-6 text-xl font-bold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative transition-all duration-300 px-4 py-2 ${
              isActive
                ? "text-yellow-400 after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-yellow-400 after:transition-all after:duration-300"
                : "text-white hover:text-yellow-400"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) =>
            `relative transition-all duration-300 px-4 py-2 ${
              isActive
                ? "text-yellow-400 after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-yellow-400 after:transition-all after:duration-300"
                : "text-white hover:text-yellow-400"
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/Projects"
          className={({ isActive }) =>
            `relative transition-all duration-300 px-4 py-2 ${
              isActive
                ? "text-yellow-400 after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-yellow-400 after:transition-all after:duration-300"
                : "text-white hover:text-yellow-400"
            }`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            `relative transition-all duration-300 px-4 py-2 ${
              isActive
                ? "text-yellow-400 after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-yellow-400 after:transition-all after:duration-300"
                : "text-white hover:text-yellow-400"
            }`
          }
        >
          Contact
        </NavLink>
      </div>

      {/* Hamburger Menu Button (Toggles Mobile Menu) */}
      <button
        className="md:hidden text-white text-2xl relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </button>

      {/* Mobile Menu (Dropdown Below Hamburger) */}
      {isOpen && (
        <div className="absolute right-6 top-16 bg-zinc-800 rounded-lg p-4 w-48 shadow-lg flex flex-col items-center">
          <NavLink
            to="/"
            className="text-white py-2 hover:text-yellow-400 hover:text-2xl"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/About"
            className="text-white py-2 hover:text-yellow-400 hover:text-2xl"
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className="text-white py-2 hover:text-yellow-400 hover:text-2xl"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/Contact"
            className="text-white py-2 hover:text-yellow-400 hover:text-2xl"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
