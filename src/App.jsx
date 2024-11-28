import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./Components/Footer";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Collection from "./pages/Collection/Collection";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNoFound from "./Components/PageNoFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    ),
  },
  {
    path: "/home",
    element: (
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
        <Footer />
      </div>
    ),
  },
  {
    path: "/collection",
    element: (
      <div>
        <Navbar />
        <Collection />
        <Footer />
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        <Navbar />
        <Contact />
        <Footer />
      </div>
    ),
  },
  {
    path: "*",
    element: <PageNoFound />,
  },
]);
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
