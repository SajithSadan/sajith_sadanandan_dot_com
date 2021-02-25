import React, { useEffect, useState } from "react";

const About = () => {
  const [visible, setVisible] = useState({
    title: false,
    p: false,
  });
  const handleScroll = (e) => {
    if (window.scrollY < 280) {
      const visibleState = { ...visible };
      visibleState.p = false;
      visibleState.title = false;
      setVisible(visibleState);
    }
    if (window.scrollY >= 280) {
      const visibleState = { ...visible };
      visibleState.title = true;
      setVisible(visibleState);
    }
    if (window.scrollY > 380) {
      const visibleState = { ...visible };
      visibleState.title = true;
      visibleState.p = true;
      setVisible(visibleState);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div style={styles.aboutWrapper}>
      <h1
        className={`text ${visible.title ? "visible" : ""}`}
        style={styles.title}
      >
        Hi, I’m Sajith Sadanandan
      </h1>
      <p style={styles.p} className={`text ${visible.p ? "visible" : ""}`}>
        My carrier as a web developer started in 2011. But I was interested to
        code while I was in high school. I started learning HTML in 2006, by
        creating static websites and simple flash games using Photoshop, Flash
        and action script. But when I started my carrier in 2011, Flash was
        moving out from industry. So there I learned JavaScript and PHP.
      </p>
      <p style={styles.p} className={`text ${visible.p ? "visible" : ""}`}>
        My first job was to create websites from scratch by doing visual designs
        using Photoshop, covert it into HTML and CSS, make them dynamic by
        adding JavaScript and AJAX calls. Create backend services using PHP and
        MySQL. I have used jQuery in my most projects there.
      </p>
      <p style={styles.p} className={`text ${visible.p ? "visible" : ""}`}>
        And when I started working with my second employer(2013), I learned
        Angular JS and template engines like Handlebars. Switching from jQuery
        to Angular JS was very interesting. I started learning more about
        JavaScript because JavaScript was growing.
      </p>
      <p style={styles.p} className={`text ${visible.p ? "visible" : ""}`}>
        In 2015, I switch to my current employer. And I have started working
        with HTML5 Canvas applications. It was very interesting to create
        product customization tool for e commerce applications. Then I learned
        React JS and started thinking reactive. Now I have been working in React
        and Redux for the past 3 years.
      </p>
      <span className={`bgRound ${visible.title ? "visible" : ""}`}></span>
      <span className={`bgRound round2 ${visible.p ? "visible" : ""}`}></span>
    </div>
  );
};

const styles = {
  aboutWrapper: {
    textAlign: "center",
    backgroundColor: "#fff",
    color: "#000",
    padding: "3% 10%",
    position: "relative",
    overflow: "hidden",
  },
  title: {
    color: "#fe4b4a",
    marginBottom: "10px",
  },
  p: {
    textAlign: "left",
    margin: "10px 0",
    fontWeight: "300",
    fontSize: "1.3em",
  },
};

export default About;
