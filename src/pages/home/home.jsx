import { i18n } from '/src/translate/i18n.js';
import LanguageSelect from '/src/components/languageSelect/languageSelect.jsx';
import './styles/style.css'

const Home = () => {
  return (
    <section>
      <img src="/public/assets/images/foto-perfil.jpg" alt="profile-image" id='profile-image' />
      <h1 className='text-blue'>{i18n.t('titles.app')}</h1>
      <h3>{i18n.t('apresentation.title')}</h3>
      <i className="fa-solid github text-blue text-2xl">a</i>
      <LanguageSelect />

    </section>
  );
};

export default Home
