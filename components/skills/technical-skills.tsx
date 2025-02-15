"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion"
import { 
  Code2, Database, Layout, Terminal, Globe, Server, 
  SmilePlus, 
  Figma, 
  Github, 
  Chrome, 
  Gitlab, 
  Code, 
  Laptop 
} from "lucide-react"

// Mapping of skills to their respective technology icons
const skillIcons = {
  "Frontend Development": [
    { name: "React JS", icon: <SmilePlus className="h-8 w-8 text-blue-500" /> },
    { name: "Next.js", icon: <Code className="h-8 w-8 text-gray-800" /> },
    { name: "Figma", icon: <Figma className="h-8 w-8 text-purple-500" /> }
  ],
  "Backend Development": [
    { name: "Node.js", icon: <Code className="h-8 w-8 text-green-600" /> },
    { name: "Express.js", icon: <Laptop className="h-8 w-8 text-gray-700" /> }
  ],
  "Database Management": [
    { name: "MongoDB", icon: <Database className="h-8 w-8 text-green-500" /> },
    { name: "PostgreSQL", icon: <Code2 className="h-8 w-8 text-blue-600" /> }
  ],
  "DevOps & Deployment": [
    { name: "GitHub", icon: <Github className="h-8 w-8 text-black" /> },
    { name: "GitLab", icon: <Gitlab className="h-8 w-8 text-orange-500" /> }
  ],
  "API Development": [
    { name: "RESTful APIs", icon: <Globe className="h-8 w-8 text-blue-400" /> },
    { name: "GraphQL", icon: <Chrome className="h-8 w-8 text-pink-500" /> }
  ],
  "System Architecture": [
    { name: "Microservices", icon: <Server className="h-8 w-8 text-indigo-500" /> },
    { name: "Cloud Architecture", icon: <Code2 className="h-8 w-8 text-cyan-600" /> }
  ]
}

// Skill Bar Component with Click to Expand
function SkillBar({ name, proficiency, icon, delay }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay }}
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3">
          {icon}
          <span className="font-medium">{name}</span>
        </div>
        <div className="w-1/2 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${proficiency}%` }}
            transition={{ duration: 1 }}
            className="bg-emerald-500 h-2.5 rounded-full"
          />
        </div>
      </motion.div>
      
      {isExpanded && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="p-4 bg-gray-50 dark:bg-gray-900 flex gap-4 items-center"
        >
          {skillIcons[name]?.map((tech, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center"
              title={tech.name}
            >
              {tech.icon}
              <span className="text-xs mt-1">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  )
}

export function TechnicalSkills() {
  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-semibold mb-6 flex items-center gap-2"
      >
        <Code2 className="h-6 w-6 text-emerald-500" />
        Technical Skills
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {technicalSkills.map((skill, index) => (
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

const technicalSkills = [
  { name: "Frontend Development", proficiency: 95, icon: <Layout /> },
  { name: "Backend Development", proficiency: 85, icon: <Server /> },
  { name: "Database Management", proficiency: 80, icon: <Database /> },
  { name: "DevOps & Deployment", proficiency: 75, icon: <Terminal /> },
  { name: "API Development", proficiency: 90, icon: <Globe /> },
  { name: "System Architecture", proficiency: 85, icon: <Code2 /> },
]

export default TechnicalSkills