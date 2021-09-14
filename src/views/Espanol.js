import Navbar from "./../components/Navbar";
import Hero from "./../components/Hero";
import { servicesEs, projectsEs } from "./../data";
import SeeMore from "./../components/SeeMore";
import ContactForm from "./../components/ContactForm";
import Footer from "./../components/Footer";

const Espanol = () => {
  return (
    <div>
      <Navbar lang="es" />
      <Hero lang="es" />

      <div className="md:grid grid-cols-2 items-center" id="about">
        <img src="./img/jous.webp" alt="joustin-img" className="mx-auto w-80" />

        <div className="pt-8 mx-8 md:mx-16">
          <h2 className="font-semibold text-2xl">Joustin Ortiz</h2>
          <p className="text-justify">
            Hola mundo! soy Joustin Ortiz, si estas aqui es para saber mas sobre
            mi, te voy a contar algo breve, soy de Ecuador, si, ese pais en la
            mitad del mundo, he sido Dev por alrededor de 1 año, y si, soy un
            Dev Junior, vas a encontrar mas informacion acerca de mi trabajo
            debajo, tengo una gran relacion con las personas con las que
            trabajo, desarrollando mente de liderazgo, como puedes ver hablo
            español pero tengo un nivel B2 de ingles, CEO/CTO de Fate Company,
            completamente autodidacta, y quiero hacer este hobby mi trabajo
          </p>
        </div>
      </div>

      <span id="work"></span>

      <div className="mt-8">
        <h2 className="text-center font-semibold text-3xl">Mis servicios</h2>

        <div className="mt-4 md:grid grid-cols-2">
          {servicesEs.map((service) => {
            return (
              <div className="w-60 md:w-96 my-4 mx-auto border rounded-lg border-gray-300">
                <img
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
            Proyectos propios que he hecho
          </h2>
          <div className="mt-4 md:grid grid-cols-3">
            {projectsEs.map((project) => {
              const { id, img, title, category, description, url, github } =
                project;

              return (
                <div
                  className={
                    id > 2
                      ? "hidden hidden-card w-60 md:w-96 my-4 mx-auto border rounded-lg border-gray-300"
                      : "w-60 md:w-96 my-4 mx-auto border rounded-lg border-gray-300"
                  }
                >
                  <img src={img} alt="service-img" className="w-full p-2" />

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
                        Ver en Github
                      </a>
                      <a
                        href={url}
                        target="BLANK"
                        className="block w-full bg-green-700 my-2 text-white font-semibold text-lg p-2 rounded-lg text-center"
                      >
                        Ver proyecto
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <SeeMore lang="es" />
          <span id="contact"></span>
          <ContactForm lang="es" />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Espanol;
