import '../App.css'
import NavBar from '../components/Navbar/NavBar';
import Slogan from '../components/Slogan/Slogan';
import Content from '../components/Content/Content';
import { useEffect, useState } from 'react';
import Price from '../components/Price/Price';
import Testimony from '../components/Testimony/Testimony';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import FAQ from '../components/FAQ/FAQ';

function Home() {

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
    <div className="font-sora px-4 pb-3 bg-[#F5F4F2] dark:bg-gray-900 text-gray-800 dark:text-white scroll-smooth">
      <NavBar isMobile={isMobile} />
      <Slogan />
      <Content />
      <Price />
      <Testimony />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home