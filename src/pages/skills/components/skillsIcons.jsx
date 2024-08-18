import { FaReact, FaNode, FaPhp } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiJest, SiPrisma } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";


const SkillsIcons = () => {
  return (
    <div id='icons' className='flex items-center justify-center'>
      <div >
        <FaReact className="p-3 mx-3 text-7xl bg-darkPrimary rounded-2xl text-lightPrimary" />
        <p className="text-1xl font-montserrat">ReactJs</p>
      </div>
      <div>
        <FaVuejs className="p-3 mx-3 text-7xl bg-darkPrimary rounded-2xl text-lightPrimary" />
        <p className="text-1xl font-montserrat">VueJs</p>
      </div>
      <div>
        <BiLogoPostgresql className="p-3 mx-3 text-7xl bg-darkPrimary rounded-2xl text-lightPrimary" />
        <p className="text-1xl font-montserrat">PostgreSql</p>
      </div>
      <div>
        <FaNode className="p-3 mx-3 text-7xl bg-darkPrimary rounded-2xl text-lightPrimary" />
        <p className="text-1xl font-montserrat">NodeJs</p>
      </div>
      <div>
        <SiJest className="p-4 mx-3 text-7xl bg-darkPrimary rounded-2xl text-lightPrimary" />
        <p className="text-1xl font-montserrat">Jest</p>
      </div>
      <div>
        <RiNextjsLine className="p-4 mx-3 text-7xl bg-darkPrimary rounded-2xl text-lightPrimary" />
        <p className="text-1xl font-montserrat">NextJs</p>
      </div>
      <div>
        <FaPhp className="p-4 mx-3 text-7xl bg-darkPrimary rounded-2xl text-lightPrimary" />
        <p className="text-1xl font-montserrat">Php</p>
      </div>
      <div>
        <SiPrisma className="p-4 mx-3 text-7xl bg-darkPrimary rounded-2xl text-lightPrimary" />
        <p className="text-1xl font-montserrat">Prisma</p>
      </div>
    </div>
  )
}

export default SkillsIcons