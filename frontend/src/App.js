import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import ActiveRoom from "./components/ActiveRoom/ActiveRoom";

import "./app.css";
import "font-awesome/css/font-awesome.css";

function App() {
  return (
    <Router>
      <Route path="/" component={Home} exact />
      <Route path="/activeroom" component={ActiveRoom} />
    </Router>
  );
}

export default App;
