"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Award, Calendar } from "lucide-react"

export function Certifications() {
  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-semibold mb-6 flex items-center gap-2"
      >
        <Award className="h-6 w-6 text-emerald-500" />
        Certifications
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 hover:border-emerald-500 transition-colors">
              <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
              <p className="text-muted-foreground mb-4">{cert.issuer}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                {cert.date}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
  },
  {
    name: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "2023",
  },
  {
    name: "Meta Frontend Developer",
    issuer: "Meta",
    date: "2022",
  },
  {
    name: "Google Cloud Engineer",
    issuer: "Google",
    date: "2022",
  },
]