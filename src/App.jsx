import LandingPages from './pages/landingPages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPages />} />
      </Routes>
    </Router>
  );
}

export default App;
