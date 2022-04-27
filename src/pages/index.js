import React, {useState} from 'react';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import {aboutData, homeData, signupData} from '../components/InfoSection/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <HeroSection/>
      <InfoSection {...homeData}/>
      <InfoSection {...aboutData}/>
      <Services/>
      <InfoSection {...signupData}/>
      <Footer/>
    </>
  );
};

export default Home;
