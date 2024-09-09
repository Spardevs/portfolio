import SkillsIcons from './components/skillsIcons'
import WhatIDo from './components/whatIDo'

const Skills = () => {
  return (
    <section id="skills" className="h-screen">
      <div id="rodaDeSkills" className="h-auto bg-lightGrey py-10">
        <SkillsIcons />
      </div>
      <div id="oqueFaco" className="bg-white">
        <WhatIDo />
      </div>
    </section>
  )
}

export default Skills
