"use client"

import { motion } from "framer-motion"
import { Briefcase, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Company Inc.",
      location: "San Francisco, CA",
      period: "Jan 2022 - Present",
      description:
        "Led the development of the company's main product using React, TypeScript, and Next.js. Implemented CI/CD pipelines and improved performance by 40%.",
      skills: ["React", "TypeScript", "Next.js", "CI/CD", "Performance Optimization"],
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      location: "New York, NY",
      period: "Mar 2020 - Dec 2021",
      description:
        "Developed responsive web applications for various clients. Collaborated with designers and backend developers to deliver high-quality products.",
      skills: ["React", "JavaScript", "CSS", "Responsive Design", "API Integration"],
    },
    {
      title: "Junior Web Developer",
      company: "Startup Studio",
      location: "Remote",
      period: "Jun 2018 - Feb 2020",
      description:
        "Built and maintained websites for small businesses. Implemented SEO best practices and analytics tracking.",
      skills: ["HTML", "CSS", "JavaScript", "WordPress", "SEO"],
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              My professional journey and career highlights
            </p>
          </motion.div>

          <div className="mt-8 grid w-full max-w-4xl gap-6">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{experience.title}</span>
                      <Badge variant="outline">{experience.period}</Badge>
                    </CardTitle>
                    <CardDescription className="flex items-center gap-4">
                      <div className="flex items-center">
                        <Briefcase className="mr-1 h-4 w-4" />
                        {experience.company}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-1 h-4 w-4" />
                        {experience.location}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{experience.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary">
                          {skill}
                        </Badge>
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
