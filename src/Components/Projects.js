import React from "react";
import Carousel from "@davistran86/carousel";

const projects = [
  {
    name: "Morning Coffee",
    url: "https://i.imgur.com/SLP7t0K.png",
    youTube: "https://www.youtube.com/watch?v=UsAqBb3FzJA&t=195s",
    github: "https://github.com/coralfussman/MorningCoffee-frontend",
    caption:
      "A customizable Dashboard App. Users personalize a home page containing news, stocks, widgets and themes. They can edit the widget and themes based on their individual preferences to create a unique user dashboard.",
  },
  {
    name: "Porker",
    url: "https://i.imgur.com/T6Ka8Ae.png",
    youTube: "https://bit.ly/2EaoPqL",
    github: "https://bit.ly/2Q0sD0i",
    caption:
      "A mobile Pig Latin Translator. Built with React Native, supported by IOS and Android. In this App I focused on leveraging regex in the algorithms to meet certain translation conditions. Porker mobile app is hosted on Expo if you'd like to test it yourself.",
  },
  {
    name: "Jetset",
    url: "https://i.imgur.com/bF1Aw5H.png",
    youTube: "https://www.youtube.com/watch?v=5j8WMxg26-4",
    github: "https://github.com/coralfussman/Jetset-frontend",
    caption:
      "A travel planning app. Allows the user to create an account and add up and coming trips by searching a city from a list. Then selecting that city and adding information relevant to their trip. Follows RESTful convention. Rails backend, React Frontend. Uses the bycrypt gem and JWT Auth to generate a user token. Vanilla Css.",
  },
  {
    name: "Memory",
    url:
      "https://www.pngkit.com/png/full/2-22743_confused-brain-png-svg-freeuse-brain-cartoon-png.png",
    youTube: "https://github.com/coralfussman/Memory-Backend-api",
    github: "https://github.com/coralfussman/Memory-Frontend",
    caption:
      "A Memory Game designed to keep you amused and your brain sharp during quarantine. Built using a vanilla Javascript frontend and Rails backend. The App makes use of toggling custom css classes to achieve a smooth card flip. Demo Video Coming Soon!",
  },
  {
    name: "Mood",
    url: "https://i.imgur.com/ITNUUH2.png?1",
    youTube: "https://www.youtube.com/watch?v=8Pcmd-SmhdQ&t=9s",
    github: "https://github.com/coralfussman/Mood",
    caption:
      "A Mood Board App that allows you to browse beautiful images via the Unsplash API and add them to inspiration boards. Done entirely in Ruby on rails with SCSS stylesheets.",
  },
  {
    name: "Divi",
    url: "https://i.imgur.com/clw0QJ5.png",
    youTube: "",
    github: "https://github.com/coralfussman/Task-Manager",
    caption:
      "This App Allows a user to register or build a team, either for work, family, friends or personal and 'divi' tasks among those members. Created entirely in Ruby on Rails. Demo Video Coming Soon!",
  },
  {
    name: "ForkIt",
    url: "https://i.imgur.com/RWvLkMv.png",
    youTube: "",
    github: "https://github.com/coralfussman",
    caption:
      "Meal Planning App created in Ruby on Rails. Allows User to sign in and select meals from a library of options for specific times of the day and dates. Demo Video Coming Soon!",
  },
  {
    name: "Elite Squad",
    url: "https://i.imgur.com/Xv3Uf01.png",
    youTube: "https://www.youtube.com/watch?v=H8CsvyJFkUg",
    github: "https://github.com/coralfussman",
    caption:
      "Elite Squad is a CLI app written in Ruby. It matches clubhouses with specific amenities with members. Depending on the clubs amenities it is ranked bronze, silver or gold. Every member starts out with a bronze ranking allowing them to only visit bronze tier clubhouses, the more clubhouses you attend, the higher ranking you unlock.",
  },
  {
    name: "Portfolio",
    url: "https://i.imgur.com/l8HGLar.png",
    youTube: "",
    github: "https://github.com/coralfussman/Coral-Fussman-profile",
    caption:
      "Personal Portfolio themed around the parallel of my name in the design. A React frontend utilizing Hooks. Leveraged the spring library for animation. Email Service on frontend. Hosting on github pages. Demo Video Coming Soon!",
  },
];

function Projects() {
  return (
    <div className="mainProjects">
      <Carousel width="50%" effect="fade" useArrowKey={true} useMouseWheel>
        {projects.map((project, index) => {
          return (
            <div>
              <br />
              <h2>{project.name}</h2>
              <br />
              <img key={index} alt={project.caption} src={project.url} />
              <br />
              <p>{project.caption} </p>
              <br />
              <a href={project.youTube} target="_blank">
                _Demo_
              </a>
              |
              <a href={project.github} target="_blank">
                _Github_
              </a>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Projects;
