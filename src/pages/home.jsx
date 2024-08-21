import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import ex from "../assets/img/ex2.jpg";
import ex2 from "../assets/img/ex3.jpg";
import extra from "../assets/img/extra.jpg";
import Prestasi from "./Prestasi";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const photos = [ex, ex2]; // Array of photos
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <Navbar />
      <main className="relative h-screen">
        <div className="relative h-full w-full">
          <img
            src={ex}
            alt="Al-Manar"
            className="object-cover h-full w-full"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-30">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>
            <p className="relative text-2xl md:text-3xl font-roboto font-semibold">
              Selamat Datang
            </p>
            <h1 className="relative text-4xl md:text-6xl lg:text-7xl font-bold font-poppins mt-2 text-orange-400 tracking-wide">
              MTS AL-Manar
            </h1>
            <p className="relative text-lg md:text-xl font-georgia mt-4">
              Bogor, Jawa Barat
            </p>
          </div>
        </div>

        <section
          className="py-8 md:py-16 bg-gray-100 border-b-8"
          id="Profile"
        >
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
            <div className="flex flex-col justify-center text-justify md:ml-20 md:mr-12 ml-8 mr-7" data-aos="fade-up">
              <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
                Profil MTS Al-Manar
              </h1>
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae alias dicta dolor rerum rem itaque culpa, eum
                incidunt assumenda? Impedit repellat quas libero dolorem iste
                eligendi dignissimos sunt error minima. Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Iste necessitatibus aperiam
                sequi culpa consequatur sunt unde, fugiat consequuntur eius
                quisquam accusantium veniam nulla corrupti rerum molestiae
                nostrum id fugit recusandae?
              </p>
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                nostrum autem dolores illum optio dignissimos accusantium ut,
                ullam culpa consectetur aliquam animi doloribus nisi sint
                omnis, consequatur, quisquam quibusdam voluptate?
              </p>
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => navigate("/Profile")}
                  className="p-3 md:p-4 bg-orange-400 w-3/5 md:w-2/5 text-white rounded-full hover:bg-orange-500 focus:outline-none" 
                  data-aos="slide-right"
                >
                  Lihat Profil
                </button>
              </div>
            </div>
            <div
              className="relative flex justify-center items-center"
              data-aos="fade-up"
            >
              <button
                onClick={goToPrevious}
                className="absolute left-0 md:left-24  z-10 p-2 text-white bg-black bg-opacity-30 rounded-full hover:bg-opacity-75 focus:outline-none"
              >
                <MdNavigateBefore size={20} />
              </button>
              <img
                src={photos[currentIndex]}
                alt={`Foto ${currentIndex + 1}`}
                className="object-cover h-72 w-72 md:h-96 md:w-96 rounded-full border-4 border-gray-300"
              />
              <button
                onClick={goToNext}
                className="absolute right-0 md:right-24 z-10 p-2 text-white bg-black bg-opacity-30 rounded-full hover:bg-opacity-75 focus:outline-none"
              >
                <MdNavigateNext size={20} />
              </button>
            </div>
          </div>
        </section>

        <section
          className="py-8 md:py-16 bg-gray-100"
          id="Kegiatan"
        >
          <div className="container mx-auto" data-aos="fade-up">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
              KEGIATAN MTS AL-MANAR
            </h1>
            <div className="flex justify-center">
              <div className="flex overflow-x-auto space-x-6 snap-x snap-mandatory scrollbar-hide px-4 md:px-0 md:w-5/6 md:h-2/6">
                {[
                  {
                    src: extra,
                    alt: "Kegiatan 1",
                    description: "Kegiatan 1 Deskripsi",
                  },
                  {
                    src: ex,
                    alt: "Kegiatan 2",
                    description: "Kegiatan 2 Deskripsi",
                  },
                  {
                    src: ex2,
                    alt: "Kegiatan 3",
                    description: "Kegiatan 3 Deskripsi",
                  },
                  {
                    src: extra,
                    alt: "Kegiatan 1",
                    description: "Kegiatan 1 Deskripsi",
                  },
                  {
                    src: ex,
                    alt: "Kegiatan 2",
                    description: "Kegiatan 2 Deskripsi",
                  },
                  {
                    src: ex2,
                    alt: "Kegiatan 3",
                    description: "Kegiatan 3 Deskripsi",
                  },
                  {
                    src: extra,
                    alt: "Kegiatan 1",
                    description: "Kegiatan 1 Deskripsi",
                  },
                  {
                    src: ex,
                    alt: "Kegiatan 2",
                    description: "Kegiatan 2 Deskripsi",
                  },
                  {
                    src: ex2,
                    alt: "Kegiatan 3",
                    description: "Kegiatan 3 Deskripsi",
                  },
                ].map((item, index) => (
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
            <div className="">
              <div className="">
                <Prestasi/>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
