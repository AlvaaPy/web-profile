import React, { useEffect, useState } from "react";
import { MdFacebook, MdOutlineCopyright } from "react-icons/md";
import { FaTiktok, FaInstagram } from "react-icons/fa";

function Footer() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-10">
      <main className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="text-2xl sm:text-3xl font-extrabold font-serif tracking-wider text-orange-400 mb-6 sm:mb-0">
            <h1>AL-MANAR</h1>
          </div>
          <div className="flex flex-col items-center space-y-6 mb-6 sm:mb-0">
            <div className="flex space-x-8 sm:space-x-10">
              <a href="https://www.instagram.com" className="text-3xl sm:text-4xl hover:text-orange-400 transition duration-300">
                <FaInstagram />
              </a>
              <a href="https://www.tiktok.com" className="text-3xl sm:text-4xl hover:text-orange-400 transition duration-300">
                <FaTiktok />
              </a>
              <a href="https://www.facebook.com" className="text-3xl sm:text-4xl hover:text-orange-400 transition duration-300">
                <MdFacebook />
              </a>
            </div>
          </div>
          <div className="w-full sm:w-auto mt-6 sm:mt-0">
            <div className="border-2 border-orange-400 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253712.91093911784!2d106.40374348671871!3d-6.488186499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69dd74a2ebba17%3A0x51c715cd99dc7354!2sMTs%20Al%20Manar!5e0!3m2!1sid!2sid!4v1725766414672!5m2!1sid!2sid"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Lokasi Al-Manar"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center sm:text-end">
          <p className="text-base sm:text-lg">
            {dateTime.toLocaleString("id-ID", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </p>
          <div className="flex justify-center sm:justify-end items-center mt-2 space-x-2">
            <MdOutlineCopyright className="text-lg sm:text-xl" />
            <span className="text-base sm:text-lg">Asror Alva</span>
          </div>
        </div>
      </main>
    </footer>
  );
}

export default Footer;
