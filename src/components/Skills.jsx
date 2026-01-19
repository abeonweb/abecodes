import { useState } from "react";
import { NavLink } from "react-router-dom";
import { skillCategories } from "../data";
import "../css/Skills.css";

export default function Skills() {
  const [expandedCategories, setExpandedCategories] = useState({
    0: true,
    1: true,
    2: true,
  });

  const toggleCategory = (index) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const getProficiencyColor = (proficiency) => {
    switch (proficiency) {
      case "Expert":
        return "#00d4ff";
      case "Advanced":
        return "#0099ff";
      case "Intermediate":
        return "#0066ff";
      default:
        return "#0099ff";
    }
  };

  const categoriesDisplay = skillCategories.map((category, catIndex) => (
    <div key={catIndex} className="skill-category">
      <button
        onClick={() => toggleCategory(catIndex)}
        className="category-header"
        aria-expanded={expandedCategories[catIndex]}
      >
        <h3 className="category-title">{category.category}</h3>
        <svg
          className={`chevron-icon ${
            expandedCategories[catIndex] ? "expanded" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {expandedCategories[catIndex] && (
        <div className="skills-grid">
          {category.skills.map((skill, skillIndex) => (
            <div key={skillIndex} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span
                  className="proficiency-badge"
                  style={{
                    backgroundColor: getProficiencyColor(skill.proficiency),
                  }}
                >
                  {skill.proficiency}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  ));

  return (
    <section className="section skills">
      <h1 className="title page-title">My specific set of skills</h1>
      <div className="about-me-container">
        <div className="about-me-info">
          <h3 className="sub-heading">Brief history</h3>
          <p className="about-me-body">
            I like picking up and learning new things, finding better ways to do
            things. Simplifying a task whenever possible. Problem solving and
            helping people are strong motivators. I also enjoy instrumental
            music and beautiful landscapes.
            <NavLink to="about" className="about-me-link">
              Read more about me
            </NavLink>
          </p>
          <div className="skills-section">
            <h3 className="sub-heading">My expertise</h3>
            {categoriesDisplay}
          </div>
        </div>
      </div>
    </section>
  );
}
