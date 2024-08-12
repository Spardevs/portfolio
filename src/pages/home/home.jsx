import { i18n } from '/src/translate/i18n.js';
import './styles/home.css';

const Home = () => {
  return (
    <section id="home" className="flex items-center justify-center h-screen container">
      <div id='image' className="flex flex-col items-center justify-center w-1/5">
        <img
          href="portfolio/assets/images/foto-perfil.jpg"
          alt="profile-image"
          id="profile-image"
          className='rounded-3xl shadow-2xl'
        />
      </div>
      <div id='text' className='w-2/5'>
        <div id='apresentation'>
          <h1 className="text-8xl text-black font-bold font-roboto uppercase">{i18n.t('titles.app')}</h1>
          <h3 className="text-4xl text-black font-lato uppercase">{i18n.t('apresentation.title')}</h3>
        </div>
        <div className='bg-black w-2/3 h-0.5 m-5 justify-center mx-auto'></div>
        <div id='social' className="flex items-center justify-center text-center text-white w-full">
          <a className='bg-primary rounded-xl p-5 m-2 shadow-2xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-darkPrimary' href="https://github.com/spardevs" target='_blank'>
            <i data-feather="github" className="text-4xl" />
          </a>
          <a className='bg-primary rounded-xl p-5 m-2 shadow-2xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-darkPrimary' href="https://www.linkedin.com/in/spardev/" target='_blank'>
            <i data-feather="linkedin" className="text-4xl" />
          </a>QN651046833BR
          <a className='bg-primary rounded-xl p-5 m-2 shadow-2xl flex items-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-darkPrimary' href={i18n.t('apresentation.pdf')} target='_blank'>
            <i data-feather="file-text" className="text-4xl" />
            <p className='font-lato ml-2'>{i18n.t('apresentation.button')}</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
