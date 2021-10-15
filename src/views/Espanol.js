import Navbar from "./../components/Navbar";
import Hero from "./../components/Hero";
import { servicesEs, projectsEs } from "./../data";
import ProjectsCarousel from "./../components/ProjectsCarousel";
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
          {servicesEs.map(({ id, img, title, category, description }) => {
            return (
              <div
                key={id}
                className="w-60 md:w-96 my-4 mx-auto border rounded-lg border-gray-300"
              >
                <img
                  src={img}
                  alt="service-img"
                  className="w-40 my-2 mx-auto"
                />

                <div className="mx-4">
                  <h2 className="text-2xl font-semibold">{title}</h2>
                  <p className="text-lg text-gray-500">{category}</p>
                  <p className="text-justify">{description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8">
          <h2 className="text-center font-semibold text-3xl">
            Proyectos propios que he hecho
          </h2>

          <ProjectsCarousel projects={projectsEs} lang="es" />

          <span id="contact"></span>
          <ContactForm lang="es" />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Espanol;
