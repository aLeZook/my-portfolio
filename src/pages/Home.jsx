import skinImg from "../assets/skin.jpeg";
import cloudImg from "../assets/cloud.jpeg";
import profilepic from "../assets/headshot.jpeg";
import portImage from "../assets/port.jpeg";

function Home() {
  const projects = [
    {
      title: "Cloud Grader",
      image: cloudImg,
      link: "https://grader-grader-automater-181616811052.us-central1.run.app",
      desc: "A cloud-based grader that connects a UNIX-style grading environment with Canvas LMS to help reduce manual grading time for CS courses.",
    },
    {
      title: "Pore Decisions",
      image: skinImg,
      link: "https://cis444-project-9d06d.web.app/",
      desc: "A skincare website for exploring products, ingredients, reviews, and personalized routines.",
    },
    {
      title: "Portfolio Website",
      image: portImage,
      link: "https://github.com/aLeZook/my-portfolio",
      desc: "My first portfolio website, built with React to showcase my projects, background, and contact information.",
    },
  ];

  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <img
            src={profilepic}
            alt="Alexis Padilla"
            className="profile-pic"
          />

          <div className="hero-text">
            <p className="hero-eyebrow">Portfolio</p>
            <h1>Hi, I’m Alexis Padilla</h1>
            <p>Aspiring creative web developer</p>
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <h2>About Me</h2>
        <p>
          I’m a Computer Science student at California State University San
          Marcos in my final semester. I enjoy building web applications,
          learning new technologies, and creating projects that solve real
          problems. After graduation, I plan to pursue full-time software
          development roles or continue into graduate school.
        </p>
      </section>

      <section id="projects" className="section projects-section">
        <h2>Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
            key={project.title}
            title={project.title}
            image={project.image}
            desc={project.desc}
            link={project.link}
          />
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <h2>Contact</h2>
        <p>
          Email:{" "}
          <a href="mailto:4lexis1212@gmail.com">
            4lexis1212@gmail.com
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/aLeZook"
            target="_blank"
            rel="noreferrer"
          >
            github.com/aLeZook
          </a>
        </p>
      </section>
    </main>
  );
}

function ProjectCard({ title, desc, image, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="project-card"
    >
      <img src={image} alt={`${title} project`} className="project-img" />

      <div className="project-card-content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </a>
  );
}

export default Home;