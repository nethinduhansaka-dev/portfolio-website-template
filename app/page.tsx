"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail, Rocket, Brain, Coffee, Code, Heart } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-black/10">
      <div className="container mx-auto px-4 py-16">
        <AnimatePresence>
          {/* Hero Section */}
          <section className="flex flex-col items-center text-center space-y-8 py-16">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Code className="h-8 w-8 text-emerald-500" />
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-r from-emerald-500 to-emerald-700 text-transparent bg-clip-text">
                  John Doe
                </h1>
                <Code className="h-8 w-8 text-emerald-500" />
              </div>
              <p className="text-xl text-muted-foreground max-w-[600px] leading-relaxed">
                Transforming ideas into elegant solutions 
                <Coffee className="inline-block ml-2 h-5 w-5 text-emerald-500" />
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button className="bg-emerald-600 hover:bg-emerald-700" asChild>
                <Link href="/projects">
                  <Rocket className="mr-2 h-4 w-4" />
                  View Projects
                </Link>
              </Button>
              <Button variant="outline" className="border-emerald-500 hover:bg-emerald-500/10" asChild>
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <Button variant="ghost" size="icon" className="hover:text-emerald-500" asChild>
                <Link href="https://github.com/yourusername" target="_blank">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-emerald-500" asChild>
                <Link href="https://linkedin.com/in/yourusername" target="_blank">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-emerald-500" asChild>
                <Link href="mailto:your.email@example.com">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </section>

          {/* Featured Skills Section */}
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Skills</h2>
              <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 hover:border-emerald-500 transition-colors">
                <Code className="h-8 w-8 text-emerald-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
                <p className="text-muted-foreground">
                  Crafting beautiful and responsive user interfaces with React, Next.js, and Tailwind CSS
                </p>
              </Card>

              <Card className="p-6 hover:border-emerald-500 transition-colors">
                <Brain className="h-8 w-8 text-emerald-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
                <p className="text-muted-foreground">
                  Building robust and scalable server-side solutions with Node.js and Python
                </p>
              </Card>

              <Card className="p-6 hover:border-emerald-500 transition-colors">
                <Heart className="h-8 w-8 text-emerald-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Clean Code Advocate</h3>
                <p className="text-muted-foreground">
                  Writing maintainable, efficient, and well-documented code
                </p>
              </Card>
            </div>
          </section>
        </AnimatePresence>
      </div>
    </div>
  )
}