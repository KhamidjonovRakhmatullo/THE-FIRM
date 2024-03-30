import React from "react";
import { DJA, TextP, TitleH2 } from "../styled";
import coach1 from "../asserts/coach.png";
import partner1 from "../asserts/partner.png";
import ceo1 from "../asserts/seo.png";

const AboutDetail = () => {
  return (
    <div style={{ padding: "90px 0px"}}>
      <DJA>
        <div style={{ paddingRight: "90px", }}>
          <TitleH2>Coaching</TitleH2>
          <TextP style={{ maxWidth: "550px", margin: "20px 0px 30px 0px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took.
          </TextP>
        </div>
        <div>
          <div
            style={{
              padding: "10px",
              border: "1px solid black",
              borderRadius: "25px",
              zIndex: "6",
            }}
          >
            <img src={coach1} alt="coachImage" style={{ zIndex: "5" }} />
          </div>
          <div
            style={{
              backgroundColor: "#FACA10",
              borderRadius: "100px",
              width: "139px",
              height: "139px",
              opacity: "0.4",
              margin: "-80px 0px 0px -70px",
            }}
          ></div>
        </div>
      </DJA>

      <DJA style={{ padding: "65px 0px 0px 0px" }}>
      <div>
          <div
            style={{
              padding: "10px",
              border: "1px solid black",
              borderRadius: "25px",
              zIndex: "6",
            }}
          >
            <img src={partner1} alt="PartnerImage" style={{ zIndex: "5" }} />
          </div>
          <div
            style={{
              backgroundColor: "#FACA10",
              borderRadius: "100px",
              width: "139px",
              height: "139px",
              opacity: "0.4",
              margin: "-80px 0px 0px -70px",
            }}
          ></div>
        </div>
        <div style={{ paddingLeft: "90px" }}>
          <TitleH2>Digital Partner</TitleH2>
          <TextP style={{ maxWidth: "550px", margin: "20px 0px 30px 0px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took.
          </TextP>
        </div>
      </DJA>

      <DJA style={{ padding: "65px 0px 0px 0px" }}>
        <div style={{ paddingRight: "90px", }}>
          <TitleH2>CEO</TitleH2>
          <TextP style={{ maxWidth: "550px", margin: "20px 0px 30px 0px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took.
          </TextP>
        </div>
        <div>
          <div
            style={{
              padding: "10px",
              border: "1px solid black",
              borderRadius: "25px",
              zIndex: "6",
            }}
          >
            <img src={ceo1} alt="ceoImage" style={{ zIndex: "5" }} />
          </div>
          <div
            style={{
              backgroundColor: "#FACA10",
              borderRadius: "100px",
              width: "139px",
              height: "139px",
              opacity: "0.4",
              margin: "-80px 0px 0px -70px",
            }}
          ></div>
        </div>
      </DJA>




    </div>
  );
};

export default AboutDetail;
