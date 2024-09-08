import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ex from "../assets/img/ex2.jpg";
import ex4 from "../assets/img/ex4.jpg";
import ex5 from "../assets/img/ex5.jpg";
import ex6 from "../assets/img/ex6.jpg";
import ex7 from "../assets/img/ex7.jpg";
import ex8 from "../assets/img/ex8.jpg";
import ex9 from "../assets/img/ex9.jpg";
import ex10 from "../assets/img/ex10.jpg";
import ex11 from "../assets/img/ex11.jpg";
import ex12 from "../assets/img/ex12.jpg";
import extra from "../assets/img/extra.jpg";
import ks from "../assets/img/Guru/arni.jpg";
import { Link } from "react-router-dom";

function Kegiatan() {
  const navigate = useNavigate();

  const kegiatanItems = [
    {
      src: extra,
      alt: "Kegiatan 1",
      description: "Extrakulikuler Pramuka",
    },
    {
      src: ex,
      alt: "Kegiatan 2",
      description: "Upacara hari Senin",
    },
    {
      src: ex4,
      alt: "Kegiatan 3",
      description: "Upacara 17 Agustus",
    },
    {
      src: ex5,
      alt: "Kegiatan 1",
      description: "Lomba Futsal ",
    },
    {
      src: ex6,
      alt: "Kegiatan 2",
      description: "Study Tour kelas 9",
    },
    {
      src: ex7,
      alt: "Kegiatan 3",
      description: "Study Tour kelas 9",
    },
    {
      src: ex8,
      alt: "Kegiatan 1",
      description: "Study Tour kelas 9",
    },
    {
      src: ex9,
      alt: "Kegiatan 2",
      description: "Study Tour kelas 9",
    },
    {
      src: ex10,
      alt: "Kegiatan 3",
      description: "Study Tour kelas 9",
    },
    {
      src: ex11,
      alt: "Kegiatan 3",
      description: "Memperingati Maulid Nabi",
    },
    {
      src: ex12,
      alt: "Kegiatan 3",
      description: "",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="">
      <div className="container mx-auto" data-aos="fade-up">
        <div className="md:mb-16 mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            <span className="block text-gray-700">KEGIATAN</span>
            <span className="block text-gray-700">MTS AL-MANAR</span>
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="flex overflow-x-auto space-x-6 snap-x snap-mandatory scrollbar-hide px-4 md:px-0 md:w-5/6 md:h-2/6">
            {kegiatanItems.map((item, index) => (
              <div
                key={index}
                className="snap-center flex-shrink-0 w-64 h-64 md:w-80 md:h-80 bg-white shadow-lg rounded-lg overflow-hidden relative group"
                data-aos="slide-left"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover cursor-pointer transition-transform duration-300 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center px-4">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start mt-16 px-4 md:px-0">
        <div
          className="md:w-3/5 md:ml-14 md:mr-12 ml-8 mr-7 bg-gray-50 p-6 rounded-lg border-l-4 border-indigo-500"
          data-aos="slide-right"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Kata Kepala Sekolah
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            alias dicta dolor rerum rem itaque culpa, eum incidunt assumenda?
            Impedit repellat quas libero dolorem iste eligendi dignissimos sunt
            error minima. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Iste necessitatibus aperiam sequi culpa consequatur sunt unde,
            fugiat consequuntur eius quisquam accusantium veniam nulla corrupti
            rerum molestiae nostrum id fugit recusandae?
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
            nostrum autem dolores illum optio dignissimos accusantium ut, ullam
            culpa consectetur aliquam animi doloribus nisi sint omnis,
            consequatur, quisquam quibusdam voluptate?
          </p>
          <div className="mt-9">
            <button
              onClick={() => {
                window.location.href = "https://wa.me/6285709999570";
              }}
              className="p-3 md:p-4 bg-orange-400 w-full md:w-auto text-white rounded-full hover:bg-orange-500 focus:outline-none"
            >
              Tanyakan kepada kami
            </button>
          </div>
        </div>
        <div className="md:w-2/5 flex flex-col items-center md:items-end group">
          <div className="relative">
            <img
              src={ks}
              alt="Kepala Sekolah"
              className="object-cover md:mr-14 h-72 w-72 md:h-96 md:w-96 rounded-full border-4 border-gray-300 transition-transform duration-300 transform group-hover:scale-105"
              data-aos="zoom-in"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-90 transition-opacity duration-300 rounded-full bg-black bg-opacity-50 w-96 h-96">
              <p className="text-white text-xl font-semibold p-2 rounded-lg mt-40">
                Arni, S.Pd
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Kegiatan;
