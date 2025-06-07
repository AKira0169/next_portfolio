"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Projects() {
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Full stack e-commerce application with NestJS backend, React frontend, and MongoDB database. Features include user authentication, payment processing, and real-time inventory management.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["NestJS", "React", "MongoDB", "TypeScript", "Docker"],
      category: "fullstack",
      github: "https://github.com/akira0169",
      demo: "https://example.com",
    },
    {
      id: 2,
      title: "Real-time Chat Application",
      description:
        "Chat application with message queuing using RabbitMQ, Redis for caching, and WebSocket connections for real-time communication.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Express.js", "Next.js", "RabbitMQ", "Redis", "WebSocket"],
      category: "fullstack",
      github: "https://github.com/akira0169",
      demo: "https://example.com",
    },
    {
      id: 3,
      title: "Task Management API",
      description:
        "RESTful API built with NestJS featuring JWT authentication, PostgreSQL database, and comprehensive testing suite.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["NestJS", "PostgreSQL", "JWT", "TypeScript"],
      category: "backend",
      github: "https://github.com/akira0169",
      demo: "https://example.com",
    },
    {
      id: 4,
      title: "Portfolio Dashboard",
      description:
        "Modern React dashboard with TypeScript, featuring data visualization, responsive design, and dark mode support.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      category: "frontend",
      github: "https://github.com/akira0169",
      demo: "https://example.com",
    },
    {
      id: 5,
      title: "Microservices Architecture",
      description:
        "Scalable microservices setup with Docker containers, CI/CD pipeline using GitHub Actions, and automated deployment.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Docker", "GitHub Actions", "NestJS", "MongoDB"],
      category: "devops",
      github: "https://github.com/akira0169",
      demo: "https://example.com",
    },
    {
      id: 6,
      title: "Blog Platform",
      description:
        "Full stack blog platform with Next.js frontend, Express.js backend, and MongoDB. Features include content management and user comments.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "Express.js", "MongoDB", "JavaScript"],
      category: "fullstack",
      github: "https://github.com/akira0169",
      demo: "https://example.com",
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            My Work
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>

          <Tabs defaultValue="all" className="w-full max-w-lg mx-auto">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
                All
              </TabsTrigger>
              <TabsTrigger value="fullstack" onClick={() => setActiveTab("fullstack")}>
                Full Stack
              </TabsTrigger>
              <TabsTrigger value="frontend" onClick={() => setActiveTab("frontend")}>
                Frontend
              </TabsTrigger>
              <TabsTrigger value="backend" onClick={() => setActiveTab("backend")}>
                Backend
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardContent className="pt-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-0">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
