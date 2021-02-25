import germanVolcanoImg from "../assets/german-volcano.jpg";
import freeZoneMarketImg from "../assets/freezone-market.jpg";
import neoHairLotionImg from "../assets/neo-hair-lotion.jpg";
const projects = [
  {
    name: "German Volcano",
    image: germanVolcanoImg,
    desc: "A beginner level learning app to learn german vocabulary.",
    techStack: ["React", "Redux", "Node Js", "Express Js", "MongoDB"],
    status: "In-Progress",
  },
  {
    name: "Free Zone Market",
    image: freeZoneMarketImg,
    desc: "An e-commerce application",
    techStack: [
      "Woocommerce",
      "Wordpress",
      "Elementor",
      "PHP",
      "HTML5",
      "CSS3",
    ],
    status: "Completed",
    url: "https://freezonemarket.com/",
  },
  {
    name: "Neo Hair Lotion",
    image: neoHairLotionImg,
    desc: "An e-commerce application",
    techStack: [
      "Woocommerce",
      "Wordpress",
      "Elementor",
      "PHP",
      "HTML5",
      "CSS3",
      "Photoshop",
    ],
    status: "Completed",
    url: "https://neohairlotion.co.uk/",
  },
];
export default projects;
