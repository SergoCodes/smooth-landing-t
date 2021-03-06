import styled from 'styled-components'

export const InfoContainer = styled.div`
  color: white;
  background: ${({lightBg}) => lightBg ? '#f9f9f9' : '#010606'};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`

export const InfoWrapper = styled.div`
  z-index: 1;
  height: 870px;
  width: 100%;

  margin: 0 auto;
  padding: 24px 0;

  display: grid;
  justify-content: center;
`

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => imgStart ? `'col2' 'col1'` : `'col1 col1' 'col2 col2'`};
  }
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1
`

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding: 0 0 60px 0;
`

export const TopLine = styled.p`
  margin-bottom: 16px;

  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`

export const Heading = styled.h1`
  margin-bottom: 25px;

  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;

  color: ${({lightText}) => lightText ? '#f9f9f9' : '#010606'};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;

  font-size: 18px;
  line-height: 24px;

  color: ${({darkText}) => darkText ? '#010606' : 'white'};
`

export const BtnWrap = styled.div`
  display: flex;
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  
  text-align: center;
`

export const Img = styled.img`
  width: 80%;
  margin: 0 0 10px 0;
  padding-right: 0;
`
