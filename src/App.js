import './App.css';
import About from './pages/about';
import Main from './pages/main';
import Header from './components/header/index';
import Footer from './components/footer/index';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <Routes>
            <Route path='/my-portfolio' element={<Main />} />
            <Route path='/about' element={<About />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
