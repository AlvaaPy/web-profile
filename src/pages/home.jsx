import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/navbar";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import ex from "../assets/img/ex2.jpg";
import ex2 from "../assets/img/ex3.jpg";
import Prestasi from "./Prestasi";
import Kegiatan from "./Kegiatan";
import Footer from "../components/Footer";

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
    <div className="">
      <Navbar />
      <main className="relative h-screen">
        <div className="relative h-full w-full">
          <img src={ex} alt="Al-Manar" className="object-cover h-full w-full" />
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

        <section className="py-8 md:py-16 bg-gray-100 border-b-8" id="Profile">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
            <div
              className="flex flex-col justify-center text-justify md:ml-20 md:mr-12 ml-8 mr-7"
              data-aos="fade-up"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
                Selayang Pandang
              </h1>
              <p className="mt-4 text-gray-600">
                Kampus Perguruan Islam/Pesantren Al-Manar berlokasi di desa Cibeuteung Udik, Kecamataan CiSeeng,Kabupaten Bogor. Propinsi Jawa Barat. Kampus ini menempati areal seluas 1,5 ha. Peletakan batu pertama pembangunan tahap pertama pembangunan tahap pertama ruang kelas 12 lokal dn sebuah masjid dilakukan 1 Muharram 1420 H bertepatan dengan 17 April 1999.
              </p>
              <p className="mt-4 text-gray-600">
                Pelaksanaan kegiatan pendidikan semula direncanakan akan dimulai pada tahun ajaran 2000-2001. Akan tetapi atas desakan masyarakat kegiatan pendidikan dimajukan melalui tahun ajaran 1999 sampai 2000 dengan kegiatan awal membuka Madrasah Tsanawiyah dan Madrasah Aliyah.
              </p>
              <Link to="/Profile" className="text-blue-600 mt-4">Proses .....</Link>
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
                className="absolute left-9 md:left-24 z-10 p-2 text-white bg-black bg-opacity-30 rounded-full hover:bg-opacity-75 focus:outline-none"
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
                className="absolute right-9 md:right-24 z-10 p-2 text-white bg-black bg-opacity-30 rounded-full hover:bg-opacity-75 focus:outline-none"
              >
                <MdNavigateNext size={20} />
              </button>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-16 bg-gray-100" id="Kegiatan">
          <div className="container mx-auto" data-aos="fade-up">
            <Kegiatan />
          </div>
        </section>

        {/* <section id="Prestasi">
          <div className="container mx-auto" data-aos="fade-up">
            <Prestasi />
          </div>
        </section> */}
        <Footer />
      </main>
    </div>
  );
}

export default Home;
