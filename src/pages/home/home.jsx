import { i18n } from '/src/translate/i18n.js'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { PiFilePdf } from 'react-icons/pi'
import LanguageSelect from '/src/components/languageSelect/languageSelect.jsx'

const Home = () => {
  return (
    <section id="home" className="h-screen flex flex-col items-center justify-center">
      <div id="language" className="mb-10">
        <LanguageSelect />
      </div>
      <div id="content" className="flex items-center justify-center">
        <div id="image" className="flex flex-col items-center justify-center w-2/6 mr-10">
          <img src="/assets/images/fotoPerfil.jpg" alt="profile-image" id="profile-image" className="rounded-3xl shadow-2xl" />
        </div>
        <div id="text" className="w-2/5">
          <div id="apresentation">
            <h1 className="text-8xl text-black font-bold font-roboto uppercase">{i18n.t('titles.app')}</h1>
            <h3 className="text-4xl text-black font-lato uppercase">{i18n.t('apresentation.title')}</h3>
          </div>
          <div className="bg-black w-2/3 h-0.5 m-5 justify-center mx-auto"></div>
          <div id="social" className="flex items-center justify-center text-center text-white w-full">
            <a
              className="bg-primary rounded-xl p-5 m-2 shadow-2xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-tr from-darkPrimary to-darkGrey"
              href="https://github.com/spardevs"
              target="_blank"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              className="bg-primary rounded-xl p-5 m-2 shadow-2xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-tr from-darkPrimary to-darkGrey"
              href="https://www.linkedin.com/in/spardev/"
              target="_blank"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              className="bg-primary rounded-xl p-5 m-2 shadow-2xl flex items-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-tr from-darkPrimary to-darkGrey"
              href={i18n.t('apresentation.pdf')}
              target="_blank"
            >
              <PiFilePdf className="text-3xl" />
              <p className="font-lato ml-2">{i18n.t('apresentation.button')}</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
