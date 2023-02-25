import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import PlaylistSlider from "./PlaylistSlider";
import About from "./About";
import DoodlesList from "./DoodlesList";
import "./App.css";
import doodles from "./doodles-data.json";
import FullScreenPlaylist from "./FullScreenPlaylist";

const homePlaylist = doodles.slice(0, 3);

const App = () => {
  const location = useLocation();
  const isFullScreenPlaylist = location.pathname === "/full_screen_playlist";

  return (
    <div className='App'>
      {!isFullScreenPlaylist && <Header />}
      <div>
        <Routes>
          <Route
            path='/'
            element={
              <div
                style={{ width: "800px", height: "800px", margin: "0 auto" }}
              >
                <PlaylistSlider slides={homePlaylist} />
              </div>
            }
          />
          <Route path='/about' element={<About />} />
          <Route path='/doodles' element={<DoodlesList />} />
          <Route
            path='/full_screen_playlist'
            element={<FullScreenPlaylist slides={homePlaylist} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
