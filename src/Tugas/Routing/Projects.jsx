const Projects = () => {
  return (
    <div className="projects container">
      <h1>Projects</h1>
      <p>Here are some of my projects.</p>
      <div className="project-card card">
        <div className="card-body">
          <h5 className="card-title">Project 1</h5>
          <p className="card-text">Description of project 1.</p>
        </div>
      </div>
      <div className="project-card card">
        <div className="card-body">
          <h5 className="card-title">Project 2</h5>
          <p className="card-text">Description of project 2.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
