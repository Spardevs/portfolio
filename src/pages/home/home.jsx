import { i18n } from '/src/translate/i18n.js';
import LanguageSelect from '/src/components/languageSelect/languageSelect.jsx';
import './styles/home.css'


const Home = () => {
  return (
    <section>
      <img src="/public/assets/images/foto-perfil.jpg" alt="profile-image" id="profile-image" />
      <h1 className="">{i18n.t('titles.app')}</h1>
      <h3 className="">{i18n.t('apresentation.title')}</h3>
      <LanguageSelect className="" />

    </section>
  );
};

export default Home
