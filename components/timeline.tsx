"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Briefcase, GraduationCap } from "lucide-react"

export function Timeline() {
  const experiences = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "Jan 2023 - Present",
      description:
        "Leading full stack development projects using NestJS and React. Implemented microservices architecture with RabbitMQ for message queuing and Redis for caching. Deployed applications using Docker and CI/CD pipelines.",
      type: "work",
      skills: ["NestJS", "React", "TypeScript", "MongoDB", "RabbitMQ", "Docker"],
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Digital Innovations Ltd.",
      period: "Jun 2023 - Dec 2023",
      description:
        "Developed responsive web applications using Next.js and Express.js. Worked with PostgreSQL databases and implemented secure authentication systems. Managed VPS deployments and server security.",
      type: "work",
      skills: ["Next.js", "Express.js", "PostgreSQL", "GitHub Actions", "VPS Security"],
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Creative Web Studio",
      period: "Mar 2023 - Jun 2023",
      description:
        "Built modern, responsive user interfaces using React and TypeScript. Collaborated with backend teams to integrate APIs and optimize application performance.",
      type: "work",
      skills: ["React", "TypeScript", "JavaScript", "API Integration"],
    },
    {
      id: 4,
      title: "Full Stack Development Bootcamp",
      company: "Code Academy",
      period: "Feb 2023",
      description:
        "Completed intensive full stack development program covering modern JavaScript frameworks, database design, and deployment strategies.",
      type: "education",
      skills: [],
    },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            My Journey
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={index}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10">
                  {experience.type === "work" ? (
                    <Briefcase className="h-4 w-4 text-primary-foreground" />
                  ) : (
                    <GraduationCap className="h-4 w-4 text-primary-foreground" />
                  )}
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{experience.period}</span>
                      </div>
                      <h3 className="text-xl font-semibold">{experience.title}</h3>
                      <p className="text-primary font-medium">{experience.company}</p>
                      <p className="text-muted-foreground mt-2">{experience.description}</p>
                      {experience.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {experience.skills.map((skill) => (
                            <Badge key={skill} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
