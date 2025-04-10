//This contains all the navigation stuff

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components for different pages
import Library from './Library';
import Stats from './Stats';
import Read from './Read';
import Profile from './Profile';

function App() {
  return (
    //Routes all the different tabs in navigation
    <Router>
      <div className="App">
        <header className="App-header"> 
          <h1 className="header-logo">
            <img
              src="/logo.png"
              alt="logo"
              className="resized-image"
            />
            Reading <br /> Tracker
          </h1>

          <nav className="taskbar">
            <ul>
              <li><a href="/Library">Library</a></li>
              <li><a href="/Stats">Stats</a></li>
              <li><a href="/Read">Read</a></li>
              <li><a href="/Profile">Profile</a></li>
            </ul>
          </nav>
        </header>


        <Routes>
          <Route path="/Library" element={<Library />} />
          <Route path="/Stats" element={<Stats />} />
          <Route path="/Read" element={<Read />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </div>

      
    </Router>

  
  );
}

export default App;