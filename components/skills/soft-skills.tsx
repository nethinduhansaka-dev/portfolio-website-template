"use client"

import { motion } from "framer-motion"
import { SkillBar } from "./skill-bar"
import { Users, Brain, MessageSquare, Lightbulb, Target, Clock } from "lucide-react"

export function SoftSkills() {
  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-semibold mb-6 flex items-center gap-2"
      >
        <Users className="h-6 w-6 text-emerald-500" />
        Soft Skills
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {softSkills.map((skill, index) => (
          <SkillBar
            key={skill.name}
            {...skill}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  )
}

const softSkills = [
  { name: "Team Leadership", proficiency: 90, icon: <Users /> },
  { name: "Problem Solving", proficiency: 95, icon: <Brain /> },
  { name: "Communication", proficiency: 85, icon: <MessageSquare /> },
  { name: "Creativity", proficiency: 90, icon: <Lightbulb /> },
  { name: "Project Management", proficiency: 85, icon: <Target /> },
  { name: "Time Management", proficiency: 90, icon: <Clock /> },
]