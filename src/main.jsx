import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Tugas/Routing/About.jsx";
import Home from "./Tugas/Routing/Home.jsx";
import Category from "./Materi/Routing/Category.jsx";
import Projects from "./Tugas/Routing/Projects.jsx";

AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="projects" element={<Projects />}></Route>
          {/* <Route path="category/:name" element={<Category />}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
