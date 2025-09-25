import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Avatar from "./components/Avatar.jsx";
import Intro from "./components/Intro.jsx";
import SkillList from "./components/SkillList.jsx";

function App() {
  const skills = [
    {
      name: "CSS",
      emoji: "👌",
      color: "red",
    },
    {
      name: "HTML",
      emoji: "🤞",
      color: "purple",
    },
    {
      name: "JAVASCRIPT",
      emoji: "✌️",
      color: "purple",
    },
    {
      name: "Java",
      emoji: "✌️",
      color: "blue",
    },
    {
      name: "Bootstrap",
      emoji: "✌️",
      color: "magenta",
    },
  ];
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <ul className="skill-list">
          {skills.map((skill, index) => (
            <li key={index}>
              <SkillList
                name={skill.name}
                emoji={skill.emoji}
                color={skill.color}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
