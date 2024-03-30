import React from "react";
import { CircleBox, ParnerBox,} from "./homeStd";
import { StdButton,  TitleH1, TextP, DJA, QuestionMark } from "../styled";
import microsoft1 from '../asserts/microsoft.png'
import google1 from '../asserts/google.png'
import firebox1 from '../asserts/firebox.png'
import safari1 from '../asserts/safari.png'
import clients1 from '../asserts/clients.png'
import solution1 from '../asserts/solutions.png'
import homeMain1 from '../asserts/homeBg2.png'
import ReasonHome from "./reasonHome";
import ResearchHome from "./researchHome";
import BlogsHome from "./blogsHome";
import TermonialsHome from "./termonialsHome";
import ImputHome from "./imputHome";



const HomeComponent = () => {
  return (
    <div>
      <DJA
        style={{
          background:
            "linear-gradient(180deg, rgba(245, 246, 247, 0) 0%, #F4F4F4 100%)",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              zIndex: "2",
              alignItems: "start",
              justifyContent: "center",
              // padding: "0px 30px 0px 70px",
              marginRight: "-70px"
            }}
          >
            <TitleH1>Get Bussiness</TitleH1>
            <TitleH1 style={{ margin: "30px 0px",}}>Solutions with TheFirm.</TitleH1>
            <TextP
              style={{ width: "437px", zIndex: "1", marginBottom: "30px" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.
            </TextP>
            <StdButton>Get in Touch</StdButton>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={homeMain1} alt="Home Main" />
          </div>
        </div>
      </DJA>
      
      <div style={{padding: "20px 70px"}}>
      <DJA style={{marginTop: "60px"}}>
      <TitleH1>Our Partner</TitleH1>
      </DJA>
      <DJA style={{gap: "40px", padding: "50px 0px 80px 0px"}}>
       <CircleBox>L</CircleBox>
       <ParnerBox><img src={microsoft1} alt="microsoft" /></ParnerBox>
       <ParnerBox><img src={google1} alt="google" /></ParnerBox>
       <ParnerBox><img src={firebox1} alt="firebox" /></ParnerBox>
       <ParnerBox><img src={safari1} alt="safari" /></ParnerBox>
       <CircleBox>R</CircleBox>
      </DJA>
      </div>

      <DJA style={{padding: "70px 70px 40px 70px", backgroundColor: "#F6F6F6", alignItems: "start"}}>
        <div style={{flex:1}}>
          <TitleH1 style={{marginBottom: "50px"}}>Frustration of Clients</TitleH1>
          <TextP>Lorem Ipsum is simply dummy text of the printing and typesetting
             industry. Lorem Ipsum has been the industry's 
             standard dummy  text of the printing and typesetting text ever since the 1500s,</TextP>
             <ul style={{padding: "30px 0px 0px 30px"}}>
              <QuestionMark>
                <h2>?</h2>
              <TextP>Loren rasion gravida auem is bibenua tase</TextP>
              </QuestionMark>
              <QuestionMark>
                <h2>?</h2>
              <TextP>Loren rasion gravida auem is bibenua the</TextP>
              </QuestionMark>
              <QuestionMark>
                <h2>?</h2>
              <TextP>Printing and typesetting industry. Lorem Ipsum</TextP>
              </QuestionMark>
              <QuestionMark>
                <h2>?</h2>
              <TextP>When an unknown printer took a galley of type and<br></br> scrambled it</TextP>
              </QuestionMark>
             </ul>
        </div>
        <div style={{flex:1}}>
          <img src={clients1} alt="clients" style={{zIndex: "2"}}/>
          {/* <img src={dotdot1} alt="dot" style={{
           padding: "-200px 0px 0px 0px ",
           border: "1px solid red"
          }}/> */}
        </div>
      </DJA>

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
      <ReasonHome></ReasonHome>
      <ResearchHome></ResearchHome>
      <BlogsHome></BlogsHome>
      <TermonialsHome></TermonialsHome>
      <ImputHome></ImputHome>
    </div>//main
  );
};

export default HomeComponent;
