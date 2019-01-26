import adobe from "../assets/adobe.png";
import APIIcon from "../assets/API.svg";
import BugsIcon from "../assets/Bugs.svg";
import desnap from "../assets/desnap.jpg";
import SPAIcon from "../assets/SPA.svg";
import windows_file from "../assets/windows_file.jpg";

// CONTAINS RAW STATIC DATA

export const FEATURE_DATA = [
  {
    name: "Single Page Application",
    id: "SPA",
    imgSrc: SPAIcon,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium at, nobis consequuntur quod beatae ratione vel suscipit"
  },
  {
    name: "API Driven",
    id: "API",
    imgSrc: APIIcon,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium at, nobis consequuntur quod beatae ratione vel suscipit"
  },
  {
    name: "3 Month Warranty",
    id: "Bugs",
    imgSrc: BugsIcon,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium at, nobis consequuntur quod beatae ratione vel suscipit"
  }
];

export const PROJECT_DATA = [
  {
    name: "File Explorer",
    imgUrl: windows_file,
    date: "April 2018 - July 2018",
    description: `An e-commerce app for an Italian business that sells Sandals and accessories worldwide.

        We built it in a no-refresh method with Facebook's ReactJS framework, to maximize user experience and revenue. We used the No-SQL database MongoDB to allow for data flexibility, keeping scalability in mind.`
  },
  {
    name: "Desnap - Merchant App",
    imgUrl: desnap,
    date: "January 2018 - February 2018",
    description: `A custom made CMS and presentation website built for a European fashion designer using Python and PostgreSQL database.`
  },
  {
    name: "Adobe XDs",
    imgUrl: adobe,
    date: "December 2017 - Ongoing",
    description: `A custom product stock management portal with an admin panel with features including product import/export via CSV, Excel & PDF functionalities and email integrations.

    Some other features include activity logs and analytics.`
  }
];

export const FAQ_DATA = [
  {
    question: "What is the support period which you provide ?",
    answer: `Feel free to get in touch with us. We are always open to discussing new projects, creative ideas and be a part of your vision.
Feel free to get in touch with us. We are always open to discussing new projects, creative ideas and be a part of your vision`
  },
  {
    question: "Can you tell me more about your team ?",
    answer: `Feel free to get in touch with us. We are always open to discussing new projects, creative ideas and be a part of your vision.
Feel free to get in touch with us. We are always open to discussing new projects, creative ideas and be a part of your vision`
  },
  {
    question: "What frameworks do you use on Frontend ?",
    answer: `Feel free to get in touch with us. We are always open to discussing new projects, creative ideas and be a part of your vision.
Feel free to get in touch with us. We are always open to discussing new projects, creative ideas and be a part of your vision`
  },
  {
    question: "What is the typical product delivery time ?",
    answer: `Feel free to get in touch with us. We are always open to discussing new projects, creative ideas and be a part of your vision.
Feel free to get in touch with us. We are always open to discussing new projects, creative ideas and be a part of your vision`
  }
];

export const NAV_ITEMS = [
  { name: "HOME", id: "home", to: "/" },
  { name: "SPECIFICATIONS", id: "spec", to: "/spec" },
  { name: "JOIN US", id: "join", to: "/join" }
];
