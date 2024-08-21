import React from "react";
import Navbar from "../components/navbar";
import ex3 from "../assets/img/ex4.jpg";

function Profile() {
  return (
    <div>
      <Navbar />
      <main className="bg-gray-100">
        <div className="relative h-48 md:h-72 w-full overflow-hidden">
          <img
            src={ex3}
            alt="Profile"
            className="absolute inset-0 object-cover w-full h-auto filter blur-sm"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-4xl md:text-5xl font-montserrat font-semibold tracking-wide text-white">
              Visi dan Misi
            </h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 p-4 md:p-8">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
              VISI
            </h1>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mt-8">
              MISI
            </h1>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <img
            src={ex3}
            alt="Visi"
            className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <section className="">
          <div className="">
            <div className="">
              <h1 className="">Struktur MTs Al-Manar</h1>
            </div>
          </div>
        </section>
        <section className="">
          <div className="">
            <h1 className="">Fasilitas</h1>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Profile;
