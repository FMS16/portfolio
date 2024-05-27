import logo from './logo.svg';
import './App.css';
import Dodecahedron from './components/Dodecahedron';
import WelcomePage from './components/WelcomePage';
import ScrollDown from './components/ScrollDown';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import SmoothScroll from './components/SmoothControl';
import Footer from './components/Footer';
import Experience from './components/Experience';

function App() {
  return (
    <div className='app'>
      <Header />
      {/*       <SmoothScroll> */}
      <WelcomePage />
      <main className='main'>
        <AboutMe />
        <Experience />
      </main>
      {/*       </SmoothScroll> */}
      <Footer />
    </div>
  );
}

export default App;
