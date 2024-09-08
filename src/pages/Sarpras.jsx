import React from 'react';

function Sarpras() {
  const sarprasData = [
    { no: 1, jenis: "Ruang Kepala Madrasah", jumlah: 1, kondisi: { baik: true, rusakRingan: false, rusakBerat: false } },
    { no: 2, jenis: "Ruang Guru", jumlah: 1, kondisi: { baik: true, rusakRingan: false, rusakBerat: false } },
    { no: 3, jenis: "Tata Usaha", jumlah: 1, kondisi: { baik: true, rusakRingan: false, rusakBerat: false } },
    { no: 4, jenis: "Ruang kelas VII", jumlah: 3, kondisi: { baik: true, rusakRingan: false, rusakBerat: false } },
    { no: 5, jenis: "Ruang kelas VIII", jumlah: 4, kondisi: { baik: true, rusakRingan: false, rusakBerat: false } },
    { no: 6, jenis: "Ruang kelas IX", jumlah: 4, kondisi: { baik: true, rusakRingan: false, rusakBerat: false } },
    { no: 7, jenis: "Ruang Perpustakaan", jumlah: 1, kondisi: { baik: true, rusakRingan: false, rusakBerat: false } },
    { no: 8, jenis: "Ruang kantin", jumlah: 1, kondisi: { baik: true, rusakRingan: false, rusakBerat: false } },
    { no: 9, jenis: "Ruang BK", jumlah: 1, kondisi: { baik: true, rusakRingan: false, rusakBerat: false } },
    { no: 10, jenis: "Ruang Aula", jumlah: 1, kondisi: { baik: true, rusakRingan: false, rusakBerat: false } },
    { no: 11, jenis: "Masjid", jumlah: 1, kondisi: { baik: true, rusakRingan: false, rusakBerat: false } },
    { no: 12, jenis: "Halaman", jumlah: 1, kondisi: { baik: true, rusakRingan: false, rusakBerat: false } },
    { no: 13, jenis: "Ruang OSIS", jumlah: 1, kondisi: { baik: true, rusakRingan: false, rusakBerat: false } },
    { no: 14, jenis: "Kamar Mandi/ WC", jumlah: 12, kondisi: { baik: true, rusakRingan: false, rusakBerat: false } },
    { no: 15, jenis: "Lab Komputer", jumlah: 2, kondisi: { baik: true, rusakRingan: false, rusakBerat: false } },
    { no: 16, jenis: "Lapangan Olahraga", jumlah: 3, kondisi: { baik: true, rusakRingan: false, rusakBerat: false } },
    { no: 17, jenis: "Gudang", jumlah: 1, kondisi: { baik: true, rusakRingan: false, rusakBerat: false } },
    { no: 18, jenis: "Tempat Parkir", jumlah: 2, kondisi: { baik: true, rusakRingan: false, rusakBerat: false } },
  ];

  return (
    <div className="overflow-x-auto p-6" data-aos="slide-up">
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 border-b">NO</th>
            <th className="py-3 px-4 border-b">Jenis Sarpras</th>
            <th className="py-3 px-4 border-b">Jumlah</th>
            <th className="py-3 px-4 border-b">Kondisi Baik</th>
            <th className="py-3 px-4 border-b">Rusak Ringan</th>
            <th className="py-3 px-4 border-b">Rusak Berat</th>
          </tr>
        </thead>
        <tbody>
          {sarprasData.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 px-4 border-b">{item.no}</td>
              <td className="py-2 px-4 border-b">{item.jenis}</td>
              <td className="py-2 px-4 border-b">{item.jumlah}</td>
              <td className="py-2 px-4 border-b">{item.kondisi.baik ? '✔️' : '–'}</td>
              <td className="py-2 px-4 border-b">{item.kondisi.rusakRingan ? '✔️' : '–'}</td>
              <td className="py-2 px-4 border-b">{item.kondisi.rusakBerat ? '✔️' : '–'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Sarpras;
