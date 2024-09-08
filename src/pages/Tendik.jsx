import React from "react";
import guru1 from "../assets/img/Guru/arni.jpg"
import guru2 from "../assets/img/Guru/bowo.jpg"
import guru3 from "../assets/img/Guru/joni.jpg"
import guru4 from "../assets/img/Guru/runi.jpg"
import guru5 from "../assets/img/Guru/beli.jpg"
import guru6 from "../assets/img/Guru/ali.jpg"
import guru7 from "../assets/img/Guru/ika.jpg"
import guru8 from "../assets/img/Guru/muslim.jpg"
import guru9 from "../assets/img/Guru/salma.jpg"
import guru10 from "../assets/img/Guru/nurul.jpg"

function Tendik() {
  const dataTendik = [
    { id: 1, name: "Arni, S.Pd", jabatan: "Kepala Sekolah", img: guru1 },
    { id: 2, name: "Guru 2", jabatan: "Jabatan 2", img: guru1 },
    { id: 3, name: "Guru 3", jabatan: "Jabatan 3", img: guru1 },
    { id: 4, name: "Guru 4 ", jabatan: "Jabatan 4", img: guru1 },
    { id: 5, name: "Guru 5", jabatan: "Jabatan 5", img: guru1 },
    // Tambahkan data sesuai kebutuhan
  ];

  return (
    <main className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 bg-gray-400 bg-opacity-5 rounded-lg">
        {dataTendik.map((tendik) => (
          <div key={tendik.id} className="text-center" data-aos="slide-up">
            <img
              src={tendik.img}
              alt={tendik.name}
              className="w-44 h-44 mx-auto rounded-full object-cover border-4 border-gray-300 shadow-lg"
            />
            <div className="mt-4">
              <p className="font-semibold text-lg">{tendik.name}</p>
              <p className="font-normal text-base text-gray-600">
                {tendik.jabatan}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Tendik;
