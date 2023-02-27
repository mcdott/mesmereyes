import React from "react";
import { createRoot } from "react-dom/client";
import { Helmet } from "react-helmet";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";

import "./fonts.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <HashRouter>
    <div className='h-screen font-ubuntu antialiased'>
      <Helmet>
        <link
          href='https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <App />
    </div>
  </HashRouter>
);

reportWebVitals();
