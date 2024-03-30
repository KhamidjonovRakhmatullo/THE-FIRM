import React from 'react'
import AboutBox1 from './aboutBoxes/aboutBox1'
import AboutBox2 from './aboutBoxes/aboutBox2'
import AboutBox3 from './aboutBoxes/aboutBox3'
import { DJA } from '../styled'

const AboutBoxCont = () => {
  return (
    <DJA style={{
        backgroundColor: "#F6F6F6",
        padding: "60px 0px",
       gap: "60px"
    }}>
        <AboutBox1></AboutBox1>
        <AboutBox2></AboutBox2>
        <AboutBox3></AboutBox3>
    </DJA>
  )
}

export default AboutBoxCont