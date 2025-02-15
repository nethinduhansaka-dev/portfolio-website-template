"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { SkillBar } from "@/components/skills/skill-bar"
import { TechnicalSkills } from "@/components/skills/technical-skills"
import { SoftSkills } from "@/components/skills/soft-skills"
import { Certifications } from "@/components/skills/certifications"
import { Brain, Code2, Gem, Trophy } from "lucide-react"

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-16"
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Brain className="h-16 w-16 mx-auto text-emerald-500" />
          </motion.div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-500 to-emerald-700 text-transparent bg-clip-text">
            Skills & Expertise
          </h1>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* Technical Skills */}
        <TechnicalSkills />

        {/* Soft Skills */}
        <SoftSkills />

        {/* Certifications */}
        <Certifications />

        {/* Additional Achievements */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Trophy className="h-6 w-6 text-emerald-500" />
            Notable Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:border-emerald-500 transition-colors">
                  <Gem className="h-8 w-8 text-emerald-500 mb-4" />
                  <p className="text-muted-foreground">{achievement}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  )
}

const achievements = [
  "Led development of 3 successful enterprise applications",
  "Reduced application load time by 40% through optimization",
  "Mentored 5 junior developers in modern web technologies",
  "Published 10+ technical articles on web development"
]