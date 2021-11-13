import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Friends from './Friends';
import About from './About';
import NotFound from './NotFound';
import Header from './Header';
import FriendDetail from './FriendDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/friends' element={<Friends />} />
          <Route path="/friend/:friendId" element={<FriendDetail />} />
          <Route path='/about' element={<About />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
