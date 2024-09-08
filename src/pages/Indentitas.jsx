import React from "react";
import { Link } from "react-router-dom";

function Indentitas() {
  return (
    <main className="bg-white p-6 rounded-lg shadow-md" data-aos="slide-up">
      <div className="overflow-x-auto" >
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-200 text-gray-700 uppercase font-semibold">
            <tr>
              <th className="px-4 py-2">Nama Madrasah</th>
              <th className="px-4 py-2">Alamat Madrasah</th>
              <th className="px-4 py-2">NPSN</th>
              <th className="px-4 py-2">NSM</th>
              <th className="px-4 py-2">Peringkat Akreditasi</th>
              <th className="px-4 py-2">SK Akreditasi</th>
              <th className="px-4 py-2">Tahun Akreditasi</th>
              <th className="px-4 py-2">Kepala Madrasah</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Website</th>
              <th className="px-4 py-2">
                Jumlah Tenaga Pendidik dan Tenagga Pendidikan
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b hover:bg-gray-100">
              <td className="px-4 py-2">MTS ALMANAR</td>
              <td className="px-4 py-2">
                Jl.Cibeuteung Udik RT 03/03 Des. Cibeuteung udik
              </td>
              <td className="px-4 py-2">20277496</td>
              <td className="px-4 py-2">121232010207</td>
              <td className="px-4 py-2">A</td>
              <td className="px-4 py-2">782/BAN-S/M/SK/2019</td>
              <td className="px-4 py-2">2019</td>
              <td className="px-4 py-2">Arni, S.Pd</td>
              <td className="px-4 py-2">mtsalmanar72@gmail.com</td>
              <td className="px-4 py-2">
                <a
                  href="https://mtsalmanar.gosch.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://mtsalmanar.gosch.id/
                </a>
              </td>
              <td className="px-4 py-2">
                <Link to="/Tendik" className="text-blue-600 hover:underline">
                  21 Orang
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Indentitas;
