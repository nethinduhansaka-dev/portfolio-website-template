"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

interface SkillBarProps {
  name: string
  proficiency: number
  icon: React.ReactNode
  delay?: number
}

export function SkillBar({ name, proficiency, icon, delay = 0 }: SkillBarProps) {
  return (
    <Card className="p-4 hover:border-emerald-500 transition-colors">
      <div className="flex items-center gap-3 mb-2">
        <div className="text-emerald-500">{icon}</div>
        <span className="font-medium">{name}</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-emerald-500"
          initial={{ width: 0 }}
          animate={{ width: `${proficiency}%` }}
          transition={{ duration: 1, delay }}
        />
      </div>
      <div className="flex justify-end mt-1">
        <span className="text-sm text-muted-foreground">{proficiency}%</span>
      </div>
    </Card>
  )
}