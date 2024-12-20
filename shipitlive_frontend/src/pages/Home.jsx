import React from "react";
import LuffyImage from "/luffy.png";
import LuffyImageDark from "/luffy.png";
import Article from "../components/Article";

function Home() {
  return (
    <div className="Home">
      <div className="flex items-center justify-between space-x-4 py-16">
        {/* Light and Dark Mode Images */}
        <img
          src={LuffyImage}
          alt="Luffy"
          className="w-24 h-auto dark:hidden"
        />
        <img
          src={LuffyImageDark}
          alt="Luffy Dark"
          className="w-24 h-auto hidden dark:block"
        />
        <h1 className="text-8xl dark:text-darkMode-text font-extrabold py-4">
          S H I P I T L I V E
        </h1>
      </div>
      <p className="dark:text-darkMode-text font-light max-w-6xl leading-relaxed">
      Hey Glad to see you, Welcome to ShipItLive, where I document my journey across the vast seas of software engineering! 🚢⚓
     This is a place where I’ll be sharing exciting articles about what happens when code sets sail in production. From navigating modern technologies like Kubernetes and AWS to exploring the depths of database design, low-level designs, and high-level architectures, it’s all about capturing the real-world challenges and discoveries of building and scaling systems.
     I’ll also dive into fascinating tech documentaries and groundbreaking innovations that are reshaping the world of software. ShipItLive is my logbook for all things software engineering in the real world. Let’s chart these thrilling waters together!
      </p>
      <div>
        <h1 className="text-2xl font-semibold py-8 dark:text-darkMode-text">
          Recent Articles
        </h1>
      </div>

      <div>
      <div>
      <Article/>
      </div>
    </div>
    </div>
  );
}

export default Home;

