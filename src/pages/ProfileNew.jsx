import React from "react";
import Navbar from "../components/navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Indentitas from "./Indentitas";
import ex3 from "../assets/img/ex3.jpg";
import Tendik from "./Tendik";
import Sarpras from "./Sarpras";

function ProfileNew() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="p-6 md:p-0"
      data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          {/* Section: Header Image */}
          <div className="relative mb-12">
            <img
              src={ex3}
              alt="Foto Sekolah"
              className="w-full h-96 md:h-[32rem] object-cover rounded-lg shadow-lg"
            />
            <h1 className="absolute bottom-4 left-4 text-3xl md:text-4xl font-bold text-white bg-black bg-opacity-0 px-4 py-2 rounded">
              Profile MTS AL-MANAR
            </h1>
          </div>

          {/* Section: Deskripsi */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg md:text-xl">
              Madrasah Tsanawiyah MTs Al-manar Ciseeng Bogor, merupakan Madrasah Tsanawiyah swasta yang berdiri di Kp. Cibeuteung Udik Kec.Ciseeng Kab. Bogor Jawa Barat mulai tanggal 26 Oktober 1999...
            </p>
            <p className="text-lg md:text-xl">
              Tujuan penyelenggraan pendidikan pada MTs Al-Manar untuk menghasilkan lulusan yang memiliki iman yang kuat dan taqwa kepada Allah SWT, berakhlakul karimah, berilmu yang diamalkan...
            </p>
            <p className="text-lg md:text-xl">
              Tujuan madrasah kami tersebut secara bertahap akan dimonitoring, dievaluasi, dan dikendalikan setiap kurun waktu tertentu...
            </p>
            <ul className="list-disc list-inside text-lg md:text-xl">
              <li>Meyakini, memahami, dan menjalankan ajaran agama yang diyakini dalam kehidupan.</li>
              <li>Memahami dan menjalankan hak dan kewajiban untuk berkarya dan memanfaatkan lingkungan secara bertanggung jawab.</li>
              <li>Berpikir secara logis, kritis, kreatif, inovatif dalam memecahkan masalah...</li>
              <li>Menyenangi dan menghargai seni.</li>
              <li>Menjalankan pola hidup bersih, bugar, dan sehat.</li>
              <li>Berpartisipasi dalam kehidupan sebagai cerminan rasa cinta dan bangga terhadap bangsa dan tanah air.</li>
            </ul>
          </div>

          {/* Section: Identitas Madrasah */}
          <div className="mt-16 border-b-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              IDENTITAS MADRASAH
            </h2>
            <Indentitas />
          </div>

          {/* Section: Tenaga Pendidik */}
          <div className="mt-16">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                TENAGA PENDIDIK
              </h3>
            </div>
            <Tendik />
          </div>

          {/* Section: Sarana dan Prasarana */}
          <div className="mt-16">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                SARANA DAN PRASARANA
              </h3>
            </div>
            <Sarpras />
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProfileNew;
