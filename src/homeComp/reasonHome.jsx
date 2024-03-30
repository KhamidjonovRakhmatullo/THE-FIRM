import React from 'react'
import { DJA, StdButton, StdButton2, TextP, TitleH1, TitleH2 } from '../styled'
import brand1 from '../asserts/brand.png'
import branding1 from '../asserts/branding.svg'
const ReasonHome = () => {
  return (
    <DJA style={{flexDirection: "column", padding: "85px 70px 70px 70px", backgroundColor: "#F2F2F2",}}>
        <div>
            <TitleH1  style={{margin: "20px 0px"}}>Reason to Choose Us</TitleH1>
        </div>
        <div>
            <TextP style={{textAlign: "center", margin: "30px 0px 50px 0px"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been<br></br> the industry's standard dummy text ever since the 1500s, 
                 when an unknown printer took a galley of<br></br> type and scrambled it to make 
                 a type specimen book. It has survived not only five centuries,
            </TextP>
        </div>
        <DJA style={{gap: "50px",}}>
            <StdButton $width $bgcolorWhite $textcolor $clhover>Market Research</StdButton>
            <StdButton $bgcolorWhite $textcolor $clhover>Branding</StdButton>
            <StdButton $bgcolorWhite $textcolor $clhover>Reporting</StdButton>
            <StdButton $width $bgcolorWhite $textcolor $clhover>Data Analysis</StdButton>
        </DJA>
        <DJA style={{backgroundColor: "white", padding: "50px 30px",marginTop: "60px", borderRadius: "30px", alignItems: "start",}}>
            <div style={{padding: "8px", border: "1px solid black", borderRadius: "25px", boxShadow: "box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;"}}>
                <img src={brand1} alt="brandimg" />
            </div>
            <DJA style={{backgroundColor: "#FACA10", borderRadius: "50px", padding: "8px", margin: "0px 15px 0px 40px",}}>
                <img src={branding1} alt="brandingLogo"/>
            </DJA>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "start", alignItems :"start"}}>
                <TitleH2 style={{margin: "6px 0px 0px 0px"}}>Branding</TitleH2>
                <TextP style={{margin: "10px 0px 30px 0px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
                     when an unknown printer took a galley of type</TextP>
               <StdButton2>Read More</StdButton2>
            </div>
        </DJA>
    </DJA>
  )
}

export default ReasonHome