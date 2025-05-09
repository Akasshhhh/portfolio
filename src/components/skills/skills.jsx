import React from 'react'
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiExpress, 
  SiTailwindcss, 
  SiSupabase, 
  SiMongodb,
  SiPostman, 
  SiGit, 
  SiGithub,
  SiOpenai,
  SiCplusplus,
  SiSolidity,
  SiEthers,
  SiWeb3Dotjs
} from 'react-icons/si'
import { FaJava } from "react-icons/fa";
import { FaHardHat } from "react-icons/fa";

import './styles/skills.css'

const Skills = () => {
  const languages = [
    { icon: FaJava, name: 'Java', color: '#007396' },
    { icon: SiSolidity, name: 'Solidity', color: '#363636' },
    { icon: SiCplusplus, name: 'C++', color: '#00599C' },
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  ]

  const tools = [
    { icon: SiReact, name: 'React.js', color: '#61DAFB' },
    { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
    { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
    { icon: SiExpress, name: 'Express', color: '#000000' },
    { icon: SiTailwindcss, name: 'TailwindCSS', color: '#06B6D4' },
    { icon: SiSupabase, name: 'Supabase', color: '#3FCF8E' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: SiPostman, name: 'Postman', color: '#000000' },
    { icon: FaHardHat, name: 'Hardhat', color: '#FFF100' },
    { icon: SiEthers, name: 'Ethers.js', color: '#24339B' },
    { icon: SiGit, name: 'Git', color: '#F05032' },
    { icon: SiGithub, name: 'Github', color: '#181717' },
    { icon: SiOpenai, name: 'OpenAI', color: '#412991' },
    { icon: SiWeb3Dotjs, name: 'Web3.js', color: '#000000' }
  ]

  return (
    <div className='skills-section'>      
      <h3 className='skills-subtitle'>Languages</h3>
      <div className='skills-grid'>
        {languages.map((skill) => (
          <div 
            key={skill.name} 
            className='skills-container' 
            style={{ borderLeft: `4px solid ${skill.color}33` }}
          >
            <skill.icon className='icons' style={{ color: skill.color }} />
            <span className='skill-name'>{skill.name}</span>
          </div>
        ))}
      </div>

      <h3 className='skills-subtitle'>Frameworks & Tools</h3>
      <div className='skills-grid'>
        {tools.map((skill) => (
          <div 
            key={skill.name} 
            className='skills-container' 
            style={{ borderLeft: `4px solid ${skill.color}33` }}
          >
            <skill.icon className='icons' style={{ color: skill.color }} />
            <span className='skill-name'>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
