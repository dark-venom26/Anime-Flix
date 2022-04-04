import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AnimeList from './components/animeList/AnimeList';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import AnimeDetails from './components/animeDetails/AnimeDetails';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<AnimeList/>} />
          <Route exact path="/anime/:animeId" element={<AnimeDetails/>} />
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
