import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import DoodleSlider from "./DoodleSlider";
import About from "./About";
import DoodlesList from "./DoodlesList";
import "./App.css";
import doodles from "./doodles-data.json";

const App = () => {
  const containerStyles = {
    width: "800px",
    height: "800px",
    margin: "0 auto",
  };

  return (
    <div className='App'>
      <Header />
      <div style={containerStyles}>
        <Routes>
          <Route path='/' element={<DoodleSlider slides={doodles} />} />
          <Route path='/about' element={<About />} />
          <Route path='/doodles' element={<DoodlesList />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

{
  /* <div style={containerStyles}>
{slides.length > 0 && <DoodleSlider slides={slides} />}
</div> */
}
