import React from "react";

function Prestasi() {
  const prestasiData = [
    {
      no: 1,
      nama: "Juara 1 Lomba Matematika",
      tahun: 2023,
      deskripsi: "Mendapatkan juara pertama dalam lomba matematika tingkat nasional.",
    },
    {
      no: 2,
      nama: "Juara 2 Lomba Sains",
      tahun: 2022,
      deskripsi: "Mendapatkan juara kedua dalam lomba sains tingkat provinsi.",
    },
    {
      no: 3,
      nama: "Best Project di Science Fair",
      tahun: 2023,
      deskripsi: "Mendapatkan penghargaan terbaik untuk proyek sains.",
    },
    {
      no: 4,
      nama: "Juara 3 Debat Bahasa Inggris",
      tahun: 2023,
      deskripsi: "Meraih juara ketiga dalam kompetisi debat tingkat regional.",
    },
    {
      no: 5,
      nama: "Penghargaan Seni Rupa",
      tahun: 2023,
      deskripsi: "Mendapatkan penghargaan untuk karya seni rupa terbaik.",
    },
  ];

  return (
    <main className="p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto rounded-lg shadow-md overflow-hidden">
        <h1 className="text-3xl font-semibold font-montserrat text-center my-4">
          PRESTASI
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border bg-orange-300">No</th>
                <th className="py-2 px-4 border">Nama Prestasi</th>
                <th className="py-2 px-4 border bg-orange-300">Tahun</th>
                <th className="py-2 px-4 border">Deskripsi</th>
              </tr>
            </thead>
            <tbody>
              {prestasiData.map((item) => (
                <tr key={item.no} className="border-b hover:bg-gray-100">
                  <td className="py-2 px-4 bg-orange-300">{item.no}</td>
                  <td className="py-2 px-4">{item.nama}</td>
                  <td className="py-2 px-4 bg-orange-300">{item.tahun}</td>
                  <td className="py-2 px-4">{item.deskripsi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default Prestasi;
