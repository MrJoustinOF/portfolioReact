import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ lang }) => {
  const [status, setStatus] = useState(false);

  const handleMenu = () => {
    const menu = document.querySelector(".menu-responsive");
    let nav = document.querySelector(".nav-bg");
    let responsiveNav = document.querySelector(".menu-responsive");
    const theme = document.querySelector("#theme");

    if (!status) {
      setStatus(true);
      nav.classList.add("bg-green-700");
      responsiveNav.classList.add("bg-green-700");
      theme.content = "#065f46";
    } else {
      setStatus(false);
      nav.classList.remove("bg-green-700");
      responsiveNav.classList.remove("bg-green-700");
      theme.content = "#1F1D19";
    }

    menu.classList.toggle("hidden");
  };

  return (
    <div className="navbar">
      <nav className="nav-bg text-white p-4 flex justify-between items-center transition-all">
        <h1 className="text-2xl sm:text-3xl font-semibold inline-block">
          <img
            width="0"
            height="0"
            src="./img/glasses.webp"
            alt="logo-joustin"
            className="inline-block w-9 sm:w-12 mr-2"
          />
          Joustin Ortiz
        </h1>

        <img
          width="0"
          height="0"
          src="./img/menu.webp"
          alt="btn-menu"
          className="inline-block md:hidden w-12 m-0 p-0 cursor-pointer btnMenu"
          onClick={handleMenu}
        />

        <div className="hidden md:inline-block text-xl menu">
          <ul className="inline-block">
            <li className="inline-block mx-2 lineEffect">
              <a href="#home">
                {lang === "en" ? "Home" : ""}
                {lang === "es" ? "Inicio" : ""}
              </a>
            </li>
            <li className="inline-block mx-2 lineEffect">
              <a href="#about">
                {lang === "en" ? "About me" : ""}
                {lang === "es" ? "Sobre mi" : ""}
              </a>
            </li>
            <li className="inline-block mx-2 lineEffect">
              <a href="#work">
                {lang === "en" ? "My work" : ""}
                {lang === "es" ? "Mi trabajo" : ""}
              </a>
            </li>
            <li className="inline-block lineEffect">
              <a href="#contact">
                {lang === "en" ? "Contact" : ""}
                {lang === "es" ? "Contacto" : ""}
              </a>
            </li>
            <li className="inline-block">
              <div className="inline-block">
                <div className="dropdown inline-block relative">
                  <button className=" text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span className="mr-1">
                      {lang === "en" ? "Language" : ""}
                      {lang === "es" ? "Idioma" : ""}
                    </span>
                    <svg
                      className="fill-current h-4 w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                    </svg>
                  </button>
                  <ul className="dropdown-menu absolute hidden text-gray-700 pt-2 ">
                    <li className="">
                      <Link
                        to="/"
                        className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      >
                        English
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        to="/es"
                        className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      >
                        Espa??ol
                      </Link>
                    </li>
                    {/* <li className="">
                      <p className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                        Coming soon...
                      </p>
                    </li> */}
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/* Responsive Menu */}
      <div className="hidden menu-responsive text-white text-xl text-center transition-all">
        <ul>
          <li className="mx-2 mb-2 lineEffect">
            <a href="#home">
              {lang === "en" ? "Home" : ""}
              {lang === "es" ? "Inicio" : ""}
            </a>
          </li>
          <li className="mx-2 my-2 lineEffect">
            <a href="#about">
              {lang === "en" ? "About me" : ""}
              {lang === "es" ? "Sobre mi" : ""}
            </a>
          </li>
          <li className=" mx-2 my-2 lineEffect">
            <a href="#work">
              {lang === "en" ? "My work" : ""}
              {lang === "es" ? "Mi trabajo" : ""}
            </a>
          </li>
          <li className="mx-2 my-2 lineEffect">
            <a href="#contact">
              {lang === "en" ? "Contact" : ""}
              {lang === "es" ? "Contacto" : ""}
            </a>
          </li>
          <li className="">
            <div className="">
              <div className="dropdown inline-block relative">
                <button className=" text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                  <span className="mr-1">
                    {lang === "en" ? "Language" : ""}
                    {lang === "es" ? "Idioma" : ""}
                  </span>
                  <svg
                    className="fill-current h-4 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </button>
                <ul className="dropdown-menu abosulte hidden text-white pt-2 ">
                  <li className="">
                    <Link
                      to="/"
                      className="rounded-b hover:bg-green-600 pb-2 px-4 block whitespace-no-wrap"
                    >
                      English
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to="/es"
                      className="rounded-b hover:bg-green-600 py-2 px-4 block whitespace-no-wrap"
                    >
                      Espa??ol
                    </Link>
                  </li>
                  {/* <li className="">
                    <p className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                      Coming soon...
                    </p>
                  </li> */}
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
