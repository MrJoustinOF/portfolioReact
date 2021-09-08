const SeeMore = (props) => {
  const { lang } = props;

  const handleSeeMore = () => {
    const seeMoreBtn = document.querySelector("#seeMore");
    const cardsHidden = document.querySelectorAll(".hidden-card");
    const seeLessBtn = document.querySelector("#seeLess");

    cardsHidden.forEach((node) => node.classList.remove("hidden"));
    seeMoreBtn.classList.add("hidden");
    seeLessBtn.classList.remove("hidden");
  };

  const handleSeeLess = () => {
    const seeMoreBtn = document.querySelector("#seeMore");
    const cardsHidden = document.querySelectorAll(".hidden-card");
    const seeLessBtn = document.querySelector("#seeLess");

    cardsHidden.forEach((node) => node.classList.add("hidden"));
    seeMoreBtn.classList.remove("hidden");
    seeLessBtn.classList.add("hidden");
  };

  return (
    <div className="flex justify-center">
      <button
        id="seeMore"
        className="bg-green-700 my-2 text-white font-semibold text-lg p-2 rounded-lg"
        onClick={handleSeeMore}
      >
        {lang === "en" ? "See more" : ""}
        {lang === "es" ? "Ver mas" : ""}
      </button>

      <button
        id="seeLess"
        className="hidden bg-green-700 my-2 text-white font-semibold text-lg p-2 rounded-lg"
        onClick={handleSeeLess}
      >
        {lang === "en" ? "See less" : ""}
        {lang === "es" ? "Ver menos" : ""}
      </button>
    </div>
  );
};

export default SeeMore;
