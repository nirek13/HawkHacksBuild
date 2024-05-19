import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './scenes/home/index.jsx';
import About from './scenes/about/index.jsx';
import Brain from './scenes/brain/index.jsx';
import Personalize from './scenes/personalize/index.jsx'; // Adjust the import path as necessary
import Navbar from './components/Navbar'; // Adjust the import path as necessary
import Forum from './scenes/forum/index.jsx';
import Learn from './scenes/Learn/index.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/brain" element={<Brain />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/team" element={<About />} />
          <Route path="/personalize" element={<Personalize />} />
            <Route path="/learn/:topicId" element={<Learn />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
