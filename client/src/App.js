import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Nomatch from './components/shared/Nomatch';
import Navbar from './components/shared/Navbar';
import Subs from './components/subs/Subs';
import Topics from './components/topics/Topics';

// for navigation routes 
const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/subs" element={ <Subs /> } />
      <Route path="/subs/:subId/topics" element={ <Topics /> } />
      <Route path="*" element={ <Nomatch /> } />
    </Routes>
    {/* This is where your footer will be */}
  </>
)

export default App;












