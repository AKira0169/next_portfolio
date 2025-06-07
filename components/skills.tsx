"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Code,
  FileCode,
  Coffee,
  Database,
  HardDrive,
  Cpu,
  Container,
  Cloud,
  Server,
  GitBranch,
  Terminal,
  Zap,
  Globe,
  MessageSquare,
  Shield,
  Workflow,
  BookOpen,
} from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: <Code className="h-8 w-8" /> },
        { name: "TypeScript", icon: <FileCode className="h-8 w-8" /> },
        { name: "C", icon: <Terminal className="h-8 w-8" /> },
        { name: "C++", icon: <Cpu className="h-8 w-8" /> },
      ],
    },
    {
      name: "Backend Frameworks",
      skills: [
        { name: "NestJS", icon: <Server className="h-8 w-8" /> },
        { name: "Express.js", icon: <Zap className="h-8 w-8" /> },
      ],
    },
    {
      name: "Frontend Frameworks",
      skills: [
        { name: "React", icon: <Globe className="h-8 w-8" /> },
        { name: "Next.js", icon: <Code className="h-8 w-8" /> },
      ],
    },
    {
      name: "Databases",
      skills: [
        { name: "MongoDB", icon: <Database className="h-8 w-8" /> },
        { name: "PostgreSQL", icon: <HardDrive className="h-8 w-8" /> },
        { name: "Redis", icon: <Cpu className="h-8 w-8" /> },
      ],
    },
    {
      name: "Message Queues",
      skills: [{ name: "RabbitMQ", icon: <MessageSquare className="h-8 w-8" /> }],
    },
    {
      name: "DevOps & Tools",
      skills: [
        { name: "Docker", icon: <Container className="h-8 w-8" /> },
        { name: "CI/CD", icon: <Workflow className="h-8 w-8" /> },
        { name: "GitHub Actions", icon: <GitBranch className="h-8 w-8" /> },
        { name: "Coolify", icon: <Cloud className="h-8 w-8" /> },
        { name: "VPS Security", icon: <Shield className="h-8 w-8" /> },
      ],
    },
    {
      name: "Currently Learning",
      skills: [{ name: "Java", icon: <Coffee className="h-8 w-8" /> }],
    },
  ]

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
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            My Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <motion.div
          className="space-y-12"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <div key={category.name} className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                {category.name}
                {category.name === "Currently Learning" && <BookOpen className="h-5 w-5 text-primary" />}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {category.skills.map((skill) => (
                  <motion.div key={skill.name} variants={item}>
                    <Card
                      className={`h-full ${category.name === "Currently Learning" ? "border-primary/50 bg-primary/5" : ""}`}
                    >
                      <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                        <div
                          className={`mb-3 ${category.name === "Currently Learning" ? "text-primary" : "text-primary"}`}
                        >
                          {skill.icon}
                        </div>
                        <h4 className="font-medium">{skill.name}</h4>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
