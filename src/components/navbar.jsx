import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-slate-700" : "bg-transparent"
      } text-white p-4`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="ml-1 flex items-center">
          <h1 className="text-2xl ml-12 md:text-3xl font-bold">
            <span className="text-red-500">MTS</span> AL-Manar
          </h1>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
          </button>
        </div>

        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } md:block absolute md:relative top-16 md:right-10 right-0 w-full md:w-auto bg-slate-700 md:bg-transparent md:top-0 transition-all duration-300`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 p-4 md:p-0">
            <li>
              <Link
                to="/"
                className="transition-colors duration-300 font-sans md:font-serif hover:underline hover:underline-offset-4 hover:decoration-red-600"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="#profile"
                className="transition-colors duration-300 hover:underline hover:underline-offset-4 hover:decoration-red-600"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="#contact"
                className="transition-colors duration-300 hover:underline hover:underline-offset-4 hover:decoration-red-600"
              >
                Kegiatan
              </Link>
            </li>
            <li>
              <Link
                to="#news"
                className="transition-colors duration-300 hover:underline hover:underline-offset-4 hover:decoration-red-600"
              >
                Pengumuman
              </Link>
            </li>
            <li>
              <Link
                to="#services"
                className="transition-colors duration-300 hover:underline hover:underline-offset-4 hover:decoration-red-600"
              >
                Prestasi
              </Link>
            </li>
            <li>
              <Link
                to="#faq"
                className="transition-colors duration-300 hover:underline hover:underline-offset-4 hover:decoration-red-600"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}

export default Navbar;
