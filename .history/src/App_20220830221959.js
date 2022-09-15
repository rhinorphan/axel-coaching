import './App.css'
import NavBar from './components/Navbar/NavBar';
import Slogan from './components/Slogan/Slogan';
import Content from './components/Content/Content';
import { useEffect, useState } from 'react';
import Price from './components/Price/Price';
import Testimony from './components/Testimony/Testimony';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize)
  },[]);

  useEffect(() => {
    if(windowSize.width < 789) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  },[windowSize]);

  return (
    <div className="font-sora h-screen px-4 py-8 overflow-y-auto overflow-x-hidden dark:bg-gradient-to-t bg-gradient-to-b dark:from-gray-400 from-white dark:via-slate-600 via-slate-200 dark:to-gray-900 to-gray-500 dark:text-white text-gray-800 scroll-smooth ">
      <NavBar isMobile={isMobile} />
      <Slogan />
      <Content />
      <Price />
      <Testimony />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
