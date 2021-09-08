import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import English from "./views/English";
import Espanol from "./views/Espanol";

function App() {
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
