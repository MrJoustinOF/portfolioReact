import { useState } from "react";

const ContactForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { lang } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    let errs = [];
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      errs.push(
        `${lang === "en" ? "All fields are required" : ""}${
          lang === "es" ? "Todos los campos son obligatorios" : ""
        }`
      );
    }

    if (!/^\w+@\w+\.\w+$/.test(email)) {
      errs.push(
        `${lang === "en" ? "Your email isn't valid" : ""}${
          lang === "es" ? "Tu email no es valido" : ""
        }`
      );
    }

    if (message.length < 20) {
      errs.push(
        `${lang === "en" ? "Send a bit more information! please" : ""}${
          lang === "es" ? "Manda un poco mas de informacion! porfavor" : ""
        }`
      );
    }

    const contactForm = document.querySelector(".contactForm");
    const div = document.createElement("div");
    const errsDiv = document.querySelector(".errsDiv");
    if (errs.length > 0) {
      div.classList.add("errsDiv");
      errsDiv?.remove();

      for (let i = 0; i < errs.length; i++) {
        div.innerHTML =
          div.innerHTML +
          `<h2 class="text-red-400 text-xl font-semibold">${errs[i]}</h2>`;
      }

      contactForm.appendChild(div);
    } else {
      const data = { name, email, message };
      const submitBtn = document.querySelector(".submitBtn");
      const loader = document.createElement("div");
      loader.innerHTML = `<div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4 mt-2 mx-auto md:mx-0"></div>`;

      contactForm.appendChild(loader);
      submitBtn.remove();
      errsDiv?.remove();

      fetch("https://ur-apis-center.herokuapp.com/api/portfolio", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          if (json.status === "Client saved") {
            const loaderToRemove = document.querySelector(".loader");
            loaderToRemove.remove();

            div.innerHTML = `<h2 class="text-center md:text-left font-semibold text-xl mt-2">${
              lang === "en"
                ? "Thanks for writing me! I'll contact you later"
                : ""
            }${
              lang === "es" ? "Gracias por escribirme! Te contactare luego" : ""
            }</h2>`;
            contactForm.appendChild(div);
          }
        });
    }
  };

  return (
    <div className="md:grid grid-cols-2 bg-green-800 text-white px-4 py-8 mt-4">
      <h2 className="text-center font-semibold text-4xl">
        {lang === "en" ? "Contact me" : ""}
        {lang === "es" ? "Escribeme" : ""}
      </h2>
      <form onSubmit={handleSubmit} className="contactForm">
        <div className="my-4">
          <label
            htmlFor="name"
            className="text-2xl flex justify-center md:justify-start"
          >
            {lang === "en" ? "Name" : ""}
            {lang === "es" ? "Nombre" : ""}
          </label>
          <input
            className="mt-1 w-60 md:w-72 h-12 p-2 text-black block mx-auto md:mx-0"
            value={name}
            onChange={(data) => setName(data.target.value)}
            name="name"
            id="name"
          />
        </div>

        <div className="my-4">
          <label
            htmlFor="email"
            className="text-2xl flex justify-center md:justify-start"
          >
            Email
          </label>
          <input
            className="mt-1 w-60 md:w-72 h-12 p-2 text-black block mx-auto md:mx-0"
            value={email}
            onChange={(data) => setEmail(data.target.value)}
            name="email"
            id="email"
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="message"
            className="text-2xl flex justify-center md:justify-start"
          >
            {lang === "en" ? "Message" : ""}
            {lang === "es" ? "Mensaje" : ""}
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            onChange={(data) => setMessage(data.target.value)}
            defaultValue={message}
            className="mt-1 w-60 md:w-72 p-2 text-black block mx-auto md:mx-0"
          >
            {/* {message} */}
          </textarea>
        </div>

        <input
          type="submit"
          value={`${lang === "en" ? "Contact!" : ""} ${
            lang === "es" ? "Contactar!" : ""
          }`}
          className="submitBtn w-60 md:w-72 bg-gray-800 hover:bg-gray-900 mt-1 block mx-auto md:mx-0 text-white font-semibold p-2 cursor-pointer transition-all"
        />

        {/* <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4 mt-2 mx-auto md:mx-0"></div> */}
      </form>
    </div>
  );
};

export default ContactForm;
