import React, { useState, useEffect } from "react";

const Hero = ({ lang }) => {
  const [text, setText] = useState("");
  const fullText =
    lang === "en"
      ? "Hi, I'm Joustin."
      : null || lang === "es"
      ? "Hola, soy Joustin."
      : null;

  useEffect(() => {
    let num = 0;
    let textToState = "";
    let statusText = false;

    setInterval(() => {
      if (statusText) {
        textToState = textToState.slice(0, -1);
        setText(textToState);
        num -= 1;

        if (textToState === "") {
          statusText = false;
        }
      } else if (!statusText) {
        textToState = `${textToState}${fullText.charAt(num)}`;
        num += 1;
        setText(textToState);

        if (textToState === fullText) {
          statusText = true;
        }
      }
    }, 300);
  }, [fullText]);

  return (
    <div className="hero min-h-screen">
      <div className="min-h-screen filter-hero flex justify-center items-center">
        <h2 className="text-white text-3xl font-semibold">{text}</h2>
      </div>
    </div>
  );
};

export default Hero;
