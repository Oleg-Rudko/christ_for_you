import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About/About";
import "./App.scss";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <div className="Wrapper">
        <div className="App">
          <Header />
          <div>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
