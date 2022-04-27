import React, {useState} from 'react';
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg
} from './HeroElements'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElement'

const HeroSection = () => {
  const [hover, setHover] = useState(false)
  
  const onHover = () => setHover(!hover)
  
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop mute src={Video} type='video/mp4'/>
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sing up for a new account today and receive $250 in credit towards your next payment
        </HeroP>
        <HeroBtnWrapper>
          <Button
            primary='true'
            dark='true'
            to='signup'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get started {hover ? <ArrowForward/> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
