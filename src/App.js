import React from "react";
import BannerCanvas from "./components/BannerCanvas";
import About from "./components/About";
import Skills from "./components/Skills";
import MyLab from "./components/MyLab";

const App = () => {
  return (
    <>
      <BannerCanvas />
      <About />
      <Skills />
      <MyLab />
    </>
  );
};

export default App;
