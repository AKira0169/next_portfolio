"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Layers } from "lucide-react"

export function About() {
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

  const strengths = [
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Full Stack Development",
      description: "End-to-end application development from frontend interfaces to backend APIs and databases.",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Backend Architecture",
      description: "Designing scalable APIs with NestJS and Express, implementing message queues and caching.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Modern Frontend",
      description: "Building responsive, interactive user interfaces with React and Next.js.",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "DevOps & Deployment",
      description: "Containerization with Docker, CI/CD pipelines, and secure VPS management.",
    },
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who I Am</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">
              Full Stack Developer passionate about building complete web solutions
            </h3>
            <p className="text-muted-foreground">
              I am a dedicated full stack developer with expertise in both frontend and backend technologies. My journey
              spans from creating intuitive user interfaces with React and Next.js to building robust backend systems
              with NestJS and Express.
            </p>
            <p className="text-muted-foreground">
              I specialize in JavaScript and TypeScript ecosystems, with strong foundations in C and C++. My backend
              expertise includes working with MongoDB, PostgreSQL, Redis, and implementing message queues with RabbitMQ
              for scalable architectures.
            </p>
            <p className="text-muted-foreground">
              Currently expanding my skills with Java while focusing on DevOps practices including Docker
              containerization, CI/CD pipelines with GitHub Actions, and secure VPS management. I'm also exploring
              modern deployment solutions like Coolify.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={index + 1}
              >
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                      {strength.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{strength.title}</h3>
                    <p className="text-sm text-muted-foreground">{strength.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
