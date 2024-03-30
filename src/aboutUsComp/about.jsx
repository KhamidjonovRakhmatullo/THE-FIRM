import React from 'react'
import { DJA, StdButton, TextP, TitleH1 } from '../styled'
import solution1 from '../asserts/solutions.png'
import AboutBoxCont from './aboutBoxCont'
import AboutDetail from './aboutDetail'
import AboutTestimonial from './aboutTestimonial'


const AboutComponent = () => {
  return (
    <div>
         <DJA style={{padding: "90px 70px 40px 40px"}}>
        <div>
          <img src={solution1} alt="solution" />
        </div>
        <div style={{marginLeft: "120px"}}>
          <TitleH1>Perfect Solution for</TitleH1>
          <TitleH1  style={{margin: "30px 0px"}}>Your Bussiness</TitleH1>
          <TextP>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a 
            type specimen book. It has survived not only five centuries,
            </TextP>
            <StdButton style={{marginTop: "30px"}}>Read More</StdButton>
        </div>
      </DJA>

      <AboutBoxCont></AboutBoxCont>
      <AboutDetail></AboutDetail>
      <AboutTestimonial></AboutTestimonial>
    </div>
  )
}

export default AboutComponent