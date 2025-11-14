export default function Skills() {
    const skills = [
      { name: "React", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Git", level: 85 },
      { name: "Responsive Design", level: 95 },
      { name: "REST APIs", level: 80 },
      { name: "Next.js", level: 82 },


    ]
  
    const tools = ["VS Code", "Figma", "Git & GitHub", "npm/yarn", "Chrome DevTools", "Postman", "Webpack", "Vite"]
  
    return (
      <section id="skills" className="py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Skills & Expertise</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
  
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Tools & Platforms</h3>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool) => (
                  <div
                    key={tool}
                    className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary transition-colors"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  