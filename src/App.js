import "./App.css";
import {
  FooterOverlay,
  Menuitem,
  NewsLetter,
  Navbar,
  SubHeading,
} from "./components";
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  Menu,
} from "./container";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
