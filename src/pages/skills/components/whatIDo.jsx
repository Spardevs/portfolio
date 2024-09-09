import { i18n } from '/src/translate/i18n.js'
import { MdOutlineWeb } from 'react-icons/md'
import { GoChecklist } from 'react-icons/go'
import { MdOutlineArchitecture } from 'react-icons/md'

const WhatIDo = () => {
  return (
    <div>
      <div className="mt-10 flex flex-col items-center">
        <h2 className="text-5xl text-primary font-montserrat">{i18n.t('skills.title')}</h2>
        <hr className="mt-6 w-2/5 h-0.5 bg-lightGrey" />
      </div>
      <div className="mt-10 flex items-center justify-center justify-evenly">
        <div className="flex flex-col items-center w-1/3">
          <MdOutlineWeb className="text-6xl text-primary" />
          <h4 className="text-2xl font-lato font-bold">{i18n.t('skills.devWebTitle')}</h4>
          <p className="font-montserrat">{i18n.t('skills.devWebText')}</p>
        </div>
        <div className="flex flex-col items-center w-1/3">
          <GoChecklist className="text-6xl text-primary" />
          <h4 className="text-2xl font-lato font-bold">{i18n.t('skills.reqGatheringTitle')}</h4>
          <p className="font-montserrat">{i18n.t('skills.reqGatheringText')}</p>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center justify-evenly">
        <div className="flex flex-col items-center w-1/3">
          <MdOutlineArchitecture className="text-6xl text-primary" />
          <h4 className="text-2xl font-lato font-bold">{i18n.t('skills.uiUxTitle')}</h4>
          <p className="font-montserrat">{i18n.t('skills.uiUxText')}</p>
        </div>
      </div>
    </div>
  )
}

export default WhatIDo
