"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              A brief introduction to who I am and what I do
            </p>
          </motion.div>

          <motion.div
            className="grid w-full max-w-5xl gap-6 md:grid-cols-2 lg:gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>My Story</CardTitle>
                <CardDescription>A brief background about me</CardDescription>
              </CardHeader>
              <CardContent className="text-left">
                <p className="mb-4">
                  Interested in Product development, especially Information Technology and experienced as a Quality Assurance and Frontend Developer 
                  with a history of working in the IT Consulting industry. Skilled in creating a system especially as Frontend Developer with Javascript, 
                  Communication Skill, Technical Documentation, Troubleshooting, Automated Testing and Analyst.
                </p>
                <p>
                Based on my experience working as a Systems Developer, the main role is to understand every step of the software development process. 
                The most important thing in my job is to deliver results according to deadlines and meet customer expectations.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Education & Certifications</CardTitle>
                <CardDescription>My academic background</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-left">
                  <div>
                    <h3 className="font-semibold">Bachelor's degree, Information System</h3>
                    <p className="text-sm text-muted-foreground">University of Jember, 2015-2019</p>
                  </div>
                  {/* <div>
                    <h3 className="font-semibold">Web Development Bootcamp</h3>
                    <p className="text-sm text-muted-foreground">Coding Academy, 2020</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">AWS Certified Developer</h3>
                    <p className="text-sm text-muted-foreground">Amazon Web Services, 2021</p>
                  </div> */}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button className="mt-8">
              <Download className="mr-2 h-4 w-4" /> Download CV
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
