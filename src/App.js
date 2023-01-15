import React from "react"
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills_jobs";
import Outcome from "./components/outcome";
import Reflect from "./components/reflection";
import Profile from "./components/profile";
import Tools from "./components/tools";
import Ref from "./components/ref";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Profile />
      <Tools />
      <About />
      <Skills />
      <Outcome />
      <Reflect />
      <Ref />
    </div>
  );
}

export default App;
