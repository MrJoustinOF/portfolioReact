const Hero = (props) => {
  const { lang } = props;

  return (
    <div className="hero">
      <div className="filter-hero flex justify-center items-center">
        <h2 className="text-white text-3xl font-semibold">
          {lang === "en" ? "Hi, I'm Joustin" : ""}
          {lang === "es" ? "Hola, soy Joustin" : ""}.
        </h2>
      </div>
    </div>
  );
};

export default Hero;
