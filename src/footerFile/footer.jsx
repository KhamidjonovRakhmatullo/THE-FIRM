import React from 'react'
import { DJA, Pnavbar, TimeP } from '../styled'
import footerLogo from '../asserts/logo.png'
import {Link} from 'react-router-dom'
import facebook1 from '../asserts/facebook.png'
import twitter1 from '../asserts/twitter.png'
import youtube1 from '../asserts/youtube.png'
import in1 from '../asserts/in.png'
import p1 from '../asserts/p.png'



const FooterComponent = () => {
  return (
    <DJA style={{flexDirection: "column", padding: "100px 0px 50px 0px"}}>
      <img src={footerLogo} alt="Logo" />
      <DJA style={{gap: "70px", margin: "60px 0px"}}>
          <Link to="/"> <Pnavbar>Home</Pnavbar></Link>
          <Link to="solutions"> <Pnavbar>Solutions</Pnavbar> </Link>
          <Link to="cases"><Pnavbar>Cases</Pnavbar></Link>
          <Link to="about"><Pnavbar>About Us</Pnavbar></Link>
          <Link to="blog"><Pnavbar>Blog</Pnavbar></Link>
      <Pnavbar>Contact Us</Pnavbar>
      </DJA>
      <DJA style={{gap: "70px", marginBottom: "50px"}} className='footerIcon'>
        <img src={facebook1} alt="facebook icon" />
        <img src={twitter1} alt="twitter icon" />
        <img src={youtube1} alt="youtube icon" />
        <img src={in1} alt=""in icon />
        <img src={p1} alt="p icon" />
      </DJA>
      <TimeP $fontsize $spacing>Copyrights ©2020 Thefirm. All Right Reserved</TimeP>

    </DJA>
  )
}

export default FooterComponent