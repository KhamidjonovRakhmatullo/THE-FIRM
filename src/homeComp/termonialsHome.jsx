import React from "react";
import { DJA, Point, TextP, TitleH1, TitleH3 } from "../styled";
import testimonial11 from "../asserts/testimonial1.png";
import testimonial22 from "../asserts/testimonial2.png";
import testimonial33 from "../asserts/testimonial3.png";
import testimonial333 from "../asserts/testimonial33.png";
import testimonial44 from "../asserts/testimonial4.png";
import testimonial55 from "../asserts/testimonial5.png";

const TermonialsHome = () => {
  return (
    <DJA
      style={{
        flexDirection: "column",
        padding: "110px 0px 95px 0px",
      }}
    >
      <TitleH1>Our Testimonials</TitleH1>
      <DJA style={{ gap: "50px", margin: "60px 0px 40px 0px"}}>
        <img src={testimonial11} alt="termonial1" />
        <img src={testimonial22} alt="termonial2" />
        <div
          style={{
            padding: "8px",
            border: "1.5px solid #facb1089",
            borderRadius: "100px",
          }}
        >
          <div
            style={{
              padding: "1px",
              border: "1.5px solid #FACA10",
              borderRadius: "100px",
            }}
          >
            <img src={testimonial33} alt="termonial3" />
            <img
              src={testimonial333}
              alt="testimonial33"
              style={{ zIndex: "2", marginLeft: "-60px", marginTop: "-60px" }}
            />
          </div>
        </div>
        <img src={testimonial44} alt="termonial4" />
        <img src={testimonial55} alt="termonial5" />
      </DJA>
      <TextP style={{ maxWidth: "864px", textAlign: "center" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took type scrambled it to make
        a type specimen book. It has survived not only five centuries,
      </TextP>
      <DJA style={{ gap: "10px", margin: "25px 0px 20px 0px" }}>
        <TitleH3>Jenny Wilson </TitleH3>
        <TitleH3>|</TitleH3>
        <TextP>Digital Agency</TextP>
      </DJA>
      <DJA style={{ gap: "10px" }}>
        <Point $opacity></Point>
        <Point></Point>
        <Point $opacity></Point>
      </DJA>
    </DJA>
  );
};

export default TermonialsHome;
