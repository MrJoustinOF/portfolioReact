import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import English from "./views/English";
import Espanol from "./views/Espanol";

function App() {
  window.addEventListener("scroll", () => {
    let nav = document.querySelector(".nav-bg");
    let responsiveNav = document.querySelector(".menu-responsive");
    const theme = document.querySelector("#theme");
    let conditional = window.scrollY > 80;

    if (conditional) {
      theme.content = "#065f46";
    } else {
      theme.content = "#1F1D19";
    }

    nav.classList.toggle("bg-green-700", conditional);
    responsiveNav.classList.toggle("bg-green-700", conditional);
  });

  return (
    <div className="App">
      <Router>
        <Route exact path="/" render={() => <English></English>} />
        <Route exact path="/es" render={() => <Espanol></Espanol>} />
      </Router>
    </div>
  );
}

export default App;
