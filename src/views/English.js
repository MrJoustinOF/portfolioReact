import Navbar from "./../components/Navbar";
import Hero from "./../components/Hero";
import { servicesEn, projectsEn } from "./../data";
import SeeMore from "./../components/SeeMore";
import ContactForm from "./../components/ContactForm";
import Footer from "./../components/Footer";

const English = () => {
  return (
    <div>
      <Navbar lang="en" />
      <span id="home"></span>
      <Hero lang="en" />

      <div className="md:grid grid-cols-2 items-center" id="about">
        <img
          width="0"
          height="0"
          src="./img/jous.webp"
          alt="joustin-img"
          className="mx-auto w-80"
        />

        <div className="pt-8 mx-8 md:mx-16">
          <h2 className="font-semibold text-2xl">Joustin Ortiz</h2>
          <p className="text-justify">
            Hello World! I'm Joustin Ortiz, if you are here is to know more
            about me, so, I'll tell you something brief, I'm from Ecuador, yes!
            that country in the middle of world, I've been dev since for about
            year, and yes, I'm a Junior Developer, you'll find more information
            about my work below, I have a great relation with people I work
            with, leader mind on development, as you can see I'm a Native
            Spanish speaker but I'm B2 English level, Fate Company's CEO/CTO,
            completely self-learner, and I want to make this hobby my job
          </p>
        </div>
      </div>

      <span id="work"></span>

      <div className="mt-8">
        <h2 className="text-center font-semibold text-3xl">My services</h2>

        <div className="mt-4 md:grid grid-cols-2">
          {servicesEn.map((service) => {
            return (
              <div
                key={service.id}
                className="w-60 md:w-96 my-4 mx-auto border rounded-lg border-gray-300"
              >
                <img
                  width="0"
                  height="0"
                  src={service.img}
                  alt="service-img"
                  className="w-40 my-2 mx-auto"
                />

                <div className="mx-4">
                  <h2 className="text-2xl font-semibold">{service.title}</h2>
                  <p className="text-lg text-gray-500">{service.category}</p>
                  <p className="text-justify">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8">
          <h2 className="text-center font-semibold text-3xl">
            My own projects I've made
          </h2>
          <div className="mt-4 md:grid grid-cols-3">
            {projectsEn.map((project) => {
              const { id, img, title, category, description, url, github } =
                project;

              return (
                <div
                  key={id}
                  className={
                    id > 2
                      ? "hidden hidden-card w-60 md:w-96 my-4 mx-auto border rounded-lg border-gray-300"
                      : "w-60 md:w-96 my-4 mx-auto border rounded-lg border-gray-300"
                  }
                >
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
                        className="block w-full bg-green-700 my-2 text-white font-semibold text-lg p-2 rounded-lg text-center"
                      >
                        View on Github
                      </a>
                      <a
                        href={url}
                        target="BLANK"
                        className="block w-full bg-green-700 my-2 text-white font-semibold text-lg p-2 rounded-lg text-center"
                      >
                        View project
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <SeeMore lang="en" />
          <span id="contact"></span>
          <ContactForm lang="en" />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default English;
