import React, { Fragment } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ProjectsCarousel = ({ projects, lang }) => {
  return (
    <Fragment>
      <OwlCarousel
        className="owl-theme"
        loop
        autoplay
        autoplayTimeout={2000}
        autoplayHoverPause
        margin={10}
        responsive={{
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
          },
        }}
      >
        {projects.map(
          ({ id, img, title, category, description, url, github }) => {
            return (
              <div key={id} className="item">
                <div className="w-60 md:w-96 my-4 mx-auto border rounded-lg border-gray-300">
                  <img
                    width="0"
                    height="0"
                    src={img}
                    alt="service-img"
                    className="w-full p-2"
                  />

                  <div className="mx-4">
                    <h2 className="text-2xl font-semibold">{title}</h2>
                    <p className="text-lg text-gray-500">{category}</p>
                    <p className="text-justify">{description}</p>

                    <div>
                      <a
                        href={github}
                        target="BLANK"
                        className="block w-full bg-green-700 hover:bg-green-800 my-2 text-white font-semibold text-lg p-2 rounded-lg text-center transition-all"
                      >
                        {lang === "en" ? "View on Github" : ""}
                        {lang === "es" ? "Ver en Github" : ""}
                      </a>
                      <a
                        href={url}
                        target="BLANK"
                        className="block w-full bg-green-700 my-2 hover:bg-green-800 text-white font-semibold text-lg p-2 rounded-lg text-center transition-all"
                      >
                        {lang === "en" ? "View project" : ""}
                        {lang === "es" ? "Ver proyecto" : ""}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </OwlCarousel>
    </Fragment>
  );
};

export default ProjectsCarousel;
