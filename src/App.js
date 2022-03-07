import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Tracts from "./components/Tracts/Tracts";
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
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/tracts" element={<Tracts />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
