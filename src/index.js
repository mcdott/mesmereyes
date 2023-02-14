import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./Header";
// import SketchSlider from "./SketchSlider";
import About from "./About";
import reportWebVitals from "./reportWebVitals";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/' element={<Header />} />
        {/* <Route path='home' element={<SketchSlider />} /> */}
        <Route path='about' element={<About />} />
      </Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
