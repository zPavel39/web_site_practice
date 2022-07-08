import './scss/App.scss';
import Header from './section/Header';
import Main from './section/Main';
import OurServices from './section/our-services';
import Products from './section/products';
import Schtandart from './section/schtandart';
import AboutCompany from './section/about_company';
import Portfolio from './section/portfolio';
import Accordion from './section/accordion';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <OurServices />
      <Products />
      <Schtandart />
      <AboutCompany />
      <Portfolio />
      <Accordion />
    </div>
  );
}
export default App;
