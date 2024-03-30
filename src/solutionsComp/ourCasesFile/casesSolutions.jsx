import React from "react";
import { DJA, InputStd, StdButton, TitleH1 } from "../../styled";
import CasesBox1 from "./casesBoxes/caseBox1";
import CasesBox2 from "./casesBoxes/casesBox2";
import CasesBox3 from "./casesBoxes/casesbox3";
import CasesBox4 from "./casesBoxes/casesbox4";
import CasesBox5 from "./casesBoxes/casesBox5";
import CasesBox6 from "./casesBoxes/casesBox6";
import CasesBox7 from "./casesBoxes/casesBox7";
import CasesBox8 from "./casesBoxes/casesBox8";
import CasesBox9 from "./casesBoxes/casesBox9";

const CasesSolutions = () => {
  return (
    <div>
      <DJA
        style={{
          flexDirection: "column",
          padding: "85px 70px 70px 70px",
        }}
      >
        <div>
          <TitleH1 style={{ margin: "20px 0px" }}>Our Cases</TitleH1>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "55px",
          }}
        >
          <DJA style={{ gap: "50px" }}>
            <StdButton $BoderColor $width $bgcolorWhite $textcolor $clhover>
              Market Research
            </StdButton>
            <StdButton $BoderColor $bgcolorWhite $textcolor $clhover>
              Branding
            </StdButton>
            <StdButton $BoderColor $bgcolorWhite $textcolor $clhover>
              Reporting
            </StdButton>
            <StdButton $BoderColor $width $bgcolorWhite $textcolor $clhover>
              Data Analysis
            </StdButton>
          </DJA>
          <DJA>
            <InputStd $InputSize type="search" placeholder="Search" />
          </DJA>
        </div>
      </DJA>
      <div className="CaseBoxContainer">
        <CasesBox1></CasesBox1>
        <CasesBox2></CasesBox2>
        <CasesBox3></CasesBox3>
        <CasesBox4></CasesBox4>
        <CasesBox5></CasesBox5>
        <CasesBox6></CasesBox6>
        <CasesBox7></CasesBox7>
        <CasesBox8></CasesBox8>
        <CasesBox9></CasesBox9>
      </div>
      <DJA style={{
        margin: "45px 0px 100px 0px"
      }}>
        <StdButton>Lead More</StdButton>
      </DJA>
    </div>
  );
};

export default CasesSolutions;
