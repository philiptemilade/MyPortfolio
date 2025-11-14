export default function About() {
    return (
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">About Me</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate frontend developer with over 5 years of experience building modern web applications. I
                  specialize in React, JavaScript, and creating seamless user experiences.
                </p>
                <p>
                  My journey in web development started with a curiosity about how websites work, and it has evolved into
                  a career where I get to solve complex problems and bring creative ideas to life every day.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or sharing knowledge with the developer community.
                </p>
              </div>
            </div>
  
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6 space-y-2">
                <div className="text-4xl font-bold text-primary">2+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 space-y-2">
                <div className="text-4xl font-bold text-primary">23+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 space-y-2">
                <div className="text-4xl font-bold text-primary">15+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 space-y-2">
                <div className="text-4xl font-bold text-primary">15+</div>
                <div className="text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  