import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/projects.json');
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error.message);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>My Portfolio</h1>
      </header>
      <main>
        <section className="introduction">
          <h2>Introduction</h2>
          <p>Hello everyone my name is Rohith. I am from Andhra Pradesh .Currently I am pursuing my Bachelors in the feild of Artificial intillenge and Machine learning. </p>
        </section>
        <section className="skills">
          <h2>Skills</h2>
          <ul type="none">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Java</li>
            <li>python</li>

            {/* Add more skills dynamically */}
          </ul>
        </section>
        <section className="projects">
          <h2>Projects</h2>
          <div className="project-list">
            {projects.map(project => (
              <div className="project" key={project.id}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>Technologies Used: {project.technologies}</p>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Site</a>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
