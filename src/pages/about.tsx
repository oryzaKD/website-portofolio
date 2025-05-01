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
                  I'm a passionate developer with over 5 years of experience in building web applications. I specialize
                  in React, TypeScript, and modern frontend technologies.
                </p>
                <p>
                  My journey began when I graduated with a degree in Computer Science from University Name. Since then,
                  I've worked with various companies and clients to deliver high-quality software solutions.
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
                    <h3 className="font-semibold">BSc in Computer Science</h3>
                    <p className="text-sm text-muted-foreground">University Name, 2015-2019</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Web Development Bootcamp</h3>
                    <p className="text-sm text-muted-foreground">Coding Academy, 2020</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">AWS Certified Developer</h3>
                    <p className="text-sm text-muted-foreground">Amazon Web Services, 2021</p>
                  </div>
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
