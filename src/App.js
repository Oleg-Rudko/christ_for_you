import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About/About";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="Container">
          <Header />
          <div>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
