const Footer = () => {
  return (
    <div className="md:flex justify-between bg-green-700 text-white p-4">
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

      <div className="mt-2 md:mt-0">
        <ul>
          <li className="font-semibold text-lg">
            <a
              href="https://www.workana.com/freelancer/3132f460858aaa17155de8079802b03e"
              target="BLANK"
            >
              Workana
            </a>
          </li>
          {/* <li className="font-semibold text-lg">
            <a
              href="https://www.linkedin.com/in/joustin-ortiz-b9bba3207/"
              target="BLANK"
            >
              Linkedin
            </a>
          </li> */}
          <li className="font-semibold text-lg">
            <a href="https://www.freelancer.com/u/ortizjoustin" target="BLANK">
              Freelancer
            </a>
          </li>
          <li className="font-semibold text-lg">
            <a href="https://es.fiverr.com/joustin_ortiz" target="BLANK">
              Fiverr
            </a>
          </li>
          <li className="font-semibold text-lg">
            <a
              href="https://www.upwork.com/freelancers/~0167f0ad42eff6e641"
              target="BLANK"
            >
              UpWork
            </a>
          </li>
          <li className="font-semibold text-lg">
            <a href="https://github.com/MrJoustinOF" target="BLANK">
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
