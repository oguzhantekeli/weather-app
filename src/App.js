import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";

import "./App.css";

function App() {
  return (
    <Router>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
      <div className="App">
        <div className="navs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </Router>
  );
}

export default App;
