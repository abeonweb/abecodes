export default function About() {
  return (
    <main>
      <section className="section">
        <h1 className="title page-title">About me</h1>
        <div className="about-flex-container">
          <div className="about-body-container">
            <h3>Who I Am</h3>
            <p className="about-body">
              I'm a full-stack developer who builds scalable, production-ready
              applications from concept to deployment. After transitioning from
              customer service, I discovered that the best engineering shares
              something in common with great customer service: listening
              carefully to what's needed and delivering solutions that work
              seamlessly. My years in Spain taught me that understanding the
              "why" behind a request matters just as much as solving the
              problem.
            </p>

            <h3>My Technical Foundation</h3>
            <p className="about-body">
              I started with Java and earned my OCA certification, but I found
              my passion in full-stack web development. I work in the PERN stack
              (Postgresql, Express, React, Node.js) and MERN stack depending on
              the projects requirements and have expanded my expertise to
              include modern tools like Next.js, TypeScript, Prisma ORM,
              MongoDB, and Docker. I'm comfortable building complete
              systems—from responsive frontends with React and Tailwind CSS, to
              robust backends with authentication, database architecture, and
              containerized deployments. Whether it's implementing two-factor
              authentication, managing complex state, optimizing database
              queries, or orchestrating microservices, I approach each layer of
              the stack with equal rigor.
            </p>

            <h3>What Drives Me</h3>
            <p className="about-body">
              I thrive on solving complex problems. Building a project like
              Perfect Scrub—a full-stack B2B platform with role-based
              dashboards, job booking systems, contractor management, and
              enterprise-grade security—is exactly the kind of challenge that
              excites me. These aren't simple features; they require
              understanding business logic, user workflows, database design, and
              deployment strategies. I solve problems systematically: I break
              them down, research solutions, and most importantly, I know when
              to reach out for guidance rather than waste time spinning my
              wheels. That shift in mindset has made me significantly more
              productive and effective.
            </p>

            <h3>My Approach</h3>
            <p className="about-body">
              I don't just write code that works—I build applications that
              scale, perform well, and are maintainable. I use TypeScript for
              type safety, Docker for consistent deployments, modern ORMs for
              clean database interactions, and design patterns that other
              developers will understand. Every project teaches me something
              new, whether it's optimizing performance, improving UX, or
              architecting systems for reliability.
            </p>

            <h3>Currently</h3>
            <p className="about-body">
              I'm building full-stack applications for clients, taking projects
              from requirements to production. I continue to expand my skills in
              backend systems, cloud infrastructure, and advanced frontend
              patterns. I also dedicate time to solving coding challenges to
              stay sharp and explore new problem-solving strategies.
            </p>

            <h3>Where I'm Headed</h3>
            <p className="about-body">
              My goal is to keep building sophisticated applications that solve
              real business problems. I want to deepen my expertise in system
              design, cloud architecture, and scaling applications for millions
              of users. The combination of strong fundamentals, continuous
              learning, and the humility to collaborate makes me effective at
              tackling ambitious projects.
            </p>
          </div>
          <div className="cv-container">
            <p className="cv-text">
              Want to take a look at my{" "}
              <span className="about-highlight">
                <a
                  href="https://drive.google.com/file/d/1nIGb80YC1kvrWF_cwve0Qpm-3JSlLqak/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  CV
                </a>
              </span>
              ?
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
