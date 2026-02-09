import React, { useState } from "react";
import "./App.css";
function App() { 
    const [language, setLanguage] = useState("en"); // default English
    const content = { en: { header: "Yassmin Elhusseiny",
    subtitle: "Engineering Graduate | Web Developer | Multilingual Professional",
    about: "I am a graduate of Helwan Engineering University with strong technical skills and a passion for innovation. Fluent in English and French,I thrive in multicultural environments and enjoy solving complex problems.",
    skills: ["Engineering & Technical Problem Solving", "Web Development (HTML, CSS, JavaScript, React)", "Fluent in English and French", "Team Collaboration & Leadership"],
    courses: ["HTML Fundamentals", "CSS Styling & Layouts", "JavaScript Programming", "React Development"],
    projects: [ { title: "Portfolio Website",
    desc: "A professional portfolio built with React to showcase my background, skills, and projects." },
      { title: "Engineering Capstone Project", desc: "Designed and implemented a technical solution during my final year at Helwan Engineering University." } ],
      contact: { email: "yassminelhusseiny93@gmail.com.com", linkedin: "linkedin.com/in/yassmin-elhusseiny" } },
   fr: { header: "Yassmin Elhusseiny",
    subtitle: "Diplômée en ingénierie | Développeuse Web | Professionnelle multilingue",
    about: "Je suis diplômée de l’Université d’ingénierie de Helwan avec de solides compétences techniques et une passion pour l’innovation. Couramment bilingue en anglais et en français, j’évolue dans des environnements multiculturels et j’aime résoudre des problèmes complexes.",
    skills: ["Résolution de problèmes techniques", "Développement Web (HTML, CSS, JavaScript, React)", "Anglais et français courants", "Collaboration et leadership"],
    courses: ["Bases de HTML", "Mise en page CSS", "Programmation JavaScript", "Développement React"],
    projects: [ { title: "Site Portfolio",
    desc: "Un portfolio professionnel construit avec React pour présenter mon parcours, mes compétences et mes projets." },
    { title: "Projet de fin d’études",
    desc: "Conception et mise en œuvre d’une solution technique lors de ma dernière année à l’Université d’ingénierie de Helwan." } ],
    contact: { email: "yassmin@example.com",
    linkedin: "linkedin.com/in/yassmin-elhusseiny" } } };
    const lang = content[language]; return (
        <div className="App"> {/* Language Toggle */}
        <div className="lang-toggle">
          <button onClick={() => setLanguage("en")}>English</button>
          <button onClick={() => setLanguage("fr")}>Français</button>
        </div> {/* Header */} <header className="header">
          <h1>{lang.header}</h1>
          <p>{lang.subtitle}</p>
        </header> {/* About */}
        <section className="about">
          <h2>{language === "en" ? "About Me" : "À propos de moi"}</h2>
          <p>{lang.about}</p>
        </section>
          {/* Skills */}
      <section className="skills">
        <h2>{language === "en" ? "Skills" : "Compétences"}</h2>
        <ul>
          {lang.skills.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
      </section>

      {/* Courses */}
      <section className="courses">
        <h2>{language === "en" ? "Courses & Certifications" : "Cours & Certifications"}</h2>
        <ul>
          {lang.courses.map((course, i) => <li key={i}>{course}</li>)}
        </ul>
      </section>
          {/* Projects */}
      <section className="projects">
        <h2>{language === "en" ? "Projects" : "Projets"}</h2>
        {lang.projects.map((project, i) => (
          <div className="project-card" key={i}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </section>

      {/* Contact */}
      <section className="contact">
        <h2>{language === "en" ? "Contact" : "Contact"}</h2>
        <p>Email: {lang.contact.email}</p>
        <p>LinkedIn: {lang.contact.linkedin}</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Yassmin Elhusseiny</p>
        </footer> </div>
        );
    }
        export default App;
