import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./components/Home/Home";
import About from "./components/About/About";

import "./App.css";
// import "./assests/images/trash.png";

const App = (props) => {
  console.log(props.cityList);
  return (
    <Router>
      <div className="app">
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <div className="navs">
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </div>
      </div>
    </Router>
  );
};
const mapStateToProps = (state) => {
  return { cityList: state.cityList };
};

export default connect(mapStateToProps)(App);
