import React from "react";
import BannerCanvas from "./components/BannerCanvas";
import About from "./components/About";
import Skills from "./components/Skills";
import MyLab from "./components/MyLab";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <BannerCanvas />
      <About />
      <Skills />
      <MyLab />
      <Footer />
    </>
  );
};

export default App;
