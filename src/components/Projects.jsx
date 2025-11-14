export default function Projects() {
    const projects = [
      {
        title: "E-Commerce Platform",
        description: "A full-featured online shopping platform with cart, checkout, and payment integration.",
        image: "https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2FWhat_is_E_commerce_and_What_are_its_Applications_2_d2eb0d4402.jpg&w=4500&q=90",
        tags: ["React", "Tailwind"],
        link: "https://ecom-lyart-phi.vercel.app/",
      },
      {
        title: "Task Management App",
        description: "Collaborative task management tool with real-time updates and team features.",
        image: "/task-management-dashboard.png",
        tags: ["React", "Firebase", "Material UI"],
        link: "#",
      },
      {
        title: "Weather Dashboard",
        description: "Beautiful weather app with forecasts, maps, and location-based data.",
        image: "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638886301/EducationHub/photos/lightning-bolts.jpg",
        tags: ["HTML","Bootstrap", "API Integration"],
        link: "https://weather-app-ebon-six-14.vercel.app/",
      },
      {
        title: "Portfolio Website",
        description: "Modern portfolio template with animations and responsive design.",
        image: "/portfolio-website-design.png",
        tags: ["React", "Tailwind", "Framer Motion"],
        link: "#",
      },
    ]
  
    return (
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of my recent work and personal projects
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 group"
              >
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
                  >
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  