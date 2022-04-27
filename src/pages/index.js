import React, {useState} from 'react';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import {aboutData, homeData, signupData} from '../components/InfoSection/Data'

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
      <InfoSection {...signupData}/>
    </>
  );
};

export default Home;
