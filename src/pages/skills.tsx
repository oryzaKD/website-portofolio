"use client"

import { motion } from "framer-motion"
import { Database, Layout, Server, Terminal } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="h-6 w-6" />,
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "Next.js", level: 85 },
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 75 },
        { name: "Python", level: 65 },
        { name: "GraphQL", level: 70 },
      ],
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 75 },
        { name: "Firebase", level: 80 },
        { name: "Redis", level: 60 },
      ],
    },
    {
      title: "Tools & Others",
      icon: <Terminal className="h-6 w-6" />,
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "CI/CD", level: 75 },
        { name: "AWS", level: 65 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Expertise</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Technologies and tools I work with
            </p>
          </motion.div>

          <div className="mt-8 grid w-full max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2 text-primary">{category.icon}</div>
                    <div>
                      <CardTitle>{category.title}</CardTitle>
                      <CardDescription>My proficiency in {category.title.toLowerCase()}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </div>
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
