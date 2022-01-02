import './App.css'
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Events from './Components/Events';
import EventState from './context/events/EventState';
import ResultState from './context/Result/ResultState';
import Results from './Components/Results';

function App() {
  return (
    <EventState>
      <ResultState>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Events" element={<Events />} />
          <Route exact path="/Results" element={<Results />} />
        </Routes>
        <Footer />
      </Router>
      </ResultState>
      </EventState>
  );
}

export default App;
