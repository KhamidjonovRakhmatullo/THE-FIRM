import React from 'react'
import { DJA, StdButton, Pnavbar } from '../styled'
import thefirm from '../asserts/logo.png'
import {Link} from 'react-router-dom'

const NavbarComponent = () => {
  return (
    <DJA style={{
      justifyContent: "space-between",
      padding: "15px 70px"
    }}>
        <div style={{flex: "3.5"}}>
            <img src={thefirm} alt="LOGO" />
        </div>
        <DJA style={{
          flex: "6.5",
          justifyContent: "space-evenly"
        }}>
          <Link to="/"> <Pnavbar>Home</Pnavbar> </Link>
          <Link to="solutions"> <Pnavbar>Solutions</Pnavbar> </Link>
          <Link to="cases"><Pnavbar>Cases</Pnavbar></Link>
          <Link to="about"><Pnavbar>About Us</Pnavbar></Link>
            <Link to="blog"><Pnavbar>Blog</Pnavbar></Link>
            <Pnavbar>Contact Us</Pnavbar>
        </DJA>
        <StdButton>Get in Touch</StdButton>
    </DJA>
  )
}

export default NavbarComponent