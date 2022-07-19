import Header from './section/Header';
import Main from './section/Main';
import OurServices from './section/our-services';
import Products from './section/products';
import Schtandart from './section/schtandart';
import AboutCompany from './section/about_company';
import Portfolio from './section/portfolio';
import Accordion from './section/accordion';
import Contacts from './section/contacts';
import Footer from './section/footer';


function App() {
  return (
    <div className="wraper">
      <Header />
      <Main />
      <OurServices />
      <Products />
      <Schtandart />
      <AboutCompany />
      <Portfolio />
      <Accordion />
      <Contacts />
      <Footer />
    </div>
  );
}
export default App;
