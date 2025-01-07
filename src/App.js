import "./App.css";
import About from "./pages/about";
import Main from "./pages/main";
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./locale/i18n.js";

function App() {
  return (
    <I18nextProvider i18n={i18n} defaultNS={"translation"}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/my-portfolio" element={<Main />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;
