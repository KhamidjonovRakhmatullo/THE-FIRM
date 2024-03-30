import React from 'react'
import { DJA, StdButton, TextP, TitleH1, TitleH2 } from '../styled'
import research1 from '../asserts/research.png'
const ResearchHome = () => {
  return (
    <DJA style={{flexDirection: "column", padding: "80px 130px 120px 130px"}}>
        <TitleH1 style={{margin: "30px 0px 40px 0px"}}>Our Research & Case Studies</TitleH1>
        <TextP style={{textAlign: "center"}}>  
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been<br></br> the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of<br></br> type and scrambled it to make 
            a type specimen book. It has survived not only five centuries.
        </TextP>
        <DJA style={{padding: "50px 0px 0px 0px"}}>
            <div style={{paddingRight: "60px"}}>
                <TitleH2>Lorem Ipsum is simply</TitleH2>
                <TextP style={{maxWidth: "550px", margin: "20px 0px 30px 0px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
                     when an unknown printer took a galley of type Lorem Ipsum is simply dummy 
                     text of the printing and typesetting industry. Lorem Ipsum has been the 
                     industry's standard dummy text ever since the 1500s, when an unknown printer took.
                </TextP>
                <StdButton>Read More</StdButton>
            </div>
            <div>
            <div style={{padding: "10px",
             border: "1px solid black", 
             borderRadius: "25px",
             zIndex: "6"
             }}>
                <img src={research1} alt="researchImage" style={{zIndex: "5"}}/>
            </div>
                 <div style={{
                     backgroundColor: "#FACA10",
                     borderRadius: "100px",
                     width: "139px",
                     height: "139px",
                     opacity: "0.4",
                     margin: "-80px 0px 0px -70px"

                 }}></div>
            </div>
        </DJA>
    </DJA>
  )
}

export default ResearchHome