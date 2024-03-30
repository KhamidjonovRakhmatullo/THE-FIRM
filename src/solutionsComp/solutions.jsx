import React from "react";
import { StdButton, TitleH1, TextP, DJA} from "../styled";
import solutionsMain1 from "../asserts/solutionsMain.png";
import CasesSolutions from "./ourCasesFile/casesSolutions";
import SLtestimonials from "./SLtestimonials";

const SolutionsComponent = () => {
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
              padding: "0px 30px 0px 70px",
            }}
          >
            <TitleH1>Our Research &</TitleH1>
            <TitleH1 style={{ margin: "30px 0px" }}>Case Studies</TitleH1>
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
            <img src={solutionsMain1} alt="Soutions Main" />
          </div>
        </div>
      </DJA>
      <CasesSolutions></CasesSolutions>
      <SLtestimonials></SLtestimonials>
    </div> //main
  );
};

export default SolutionsComponent;
