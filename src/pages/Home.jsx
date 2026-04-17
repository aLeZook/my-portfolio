function Home() {
    return (
      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <h1>Hi, I’m Alexis Padilla</h1>
          <p>Aspiring creative web developer</p>
        </section>
  
        {/* About Section */}
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>
            I’m a student learning web development. I love
            building things with code and exploring new
            technologies. Currently studying at California State University San Marcos. I am in my last semester of my Bachelors of Computer Science. Soon, I will be transitioning to looking for full-time roles or attending graduate school at San Diego State University(to be determined!).
          </p>
        </section>
  
        {/* Projects Section */}
        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="projects-grid">
            <ProjectCard
              title="Cloud Grader"
              desc="A cloud based grader linking the school's UNIX server and Canvas LMS to improve and reduce the time needed to grade. This system was based off a professor at CSUSM who teaches CS111,CS211, or CS311. However, due to AI, the grading has changed routes a bit."
            />
            <ProjectCard
              title="Pore Decisions"
              desc="A website for everything skincare! This is one of my school projects, however, it has become one of my passion projects as well because I have been wanting to create something like this for some time now. There are similar apps, but this one includes many features that many don't have!"
            />
            <ProjectCard
              title="Portfolio Website"
              desc="My very first portfolio website. Created using React which is very trendy and great to use for modern websites."
            />
          </div>
        </section>
  
        {/* Contact Section */}
        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Email: 4lexis1212@gmail.com</p>
          <p>GitHub: github.com/alezook</p>
        </section>
      </main>
    );
  }
  
function ProjectCard({ title, desc}){
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    );
}

export default Home;