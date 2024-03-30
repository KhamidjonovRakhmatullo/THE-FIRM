import React from "react";
import {
  Border1px,
  DJA,
  StdButton,
  StdButton2,
  TextP,
  TimeP,
  TitleH1,
  TitleH3,
} from "../styled";
import blogs1 from "../asserts/blog1.png";
import blogs2 from "../asserts/blog2.png";
import blogs3 from "../asserts/blog3.png";
import alex11 from "../asserts/alex1.png";
import alex22 from "../asserts/alex2.png";
import alex33 from "../asserts/alex3.png";
import clock1 from "../asserts/clock.svg";

const BlogsHome = () => {
  return (
    <DJA style={{ flexDirection: "column", backgroundColor: "#F2F2F2", padding: "70px 0px 60px 0px" }}>
      <TitleH1 style={{marginBottom: "70px"}}>Our Blogs</TitleH1>
      <DJA style={{gap: "50px"}}>
        <div
          style={{
            border: "1px solid #FACA1066",
            width: "340px",
            borderRadius: "25px",
            backgroundColor: "white",
          }}
        >
          <img src={blogs1} alt="blogfirst" style={{marginLeft: "-4px"}}/>
          <TitleH3 style={{ padding: "0px 8px 10px 8px" }}>Lorem Ipsum is </TitleH3>
          <TextP style={{ padding: "0px 8px" }}>
            Lorem Ipsum is simply text of the printing and type setting
            industry. make a type specimen.
          </TextP>

          <DJA>
            <Border1px $MarginBorder></Border1px>
          </DJA>

          <DJA style={{ justifyContent: "space-between", padding: "0px 10px" }}>
            <DJA>
              <img
                src={alex11}
                alt="alex"
                style={{
                  borderRadius: "50px",
                  border: "0px solid red",
                  marginTop: "8px",
                }}
              />
              <p>Alex Liones</p>
            </DJA>
            <DJA>
              <img src={clock1} alt="clock" style={{ marginRight: "5px" }} />
              <TimeP>28,Aug 2020, 09:48:00</TimeP>
            </DJA>
          </DJA>

          <DJA>
            <StdButton2>Read More</StdButton2>
          </DJA>
        </div>

        <div
          style={{
            border: "1px solid #FACA1066",
            width: "340px",
            borderRadius: "25px",
            backgroundColor: "white",
          }}
        >
          <img src={blogs2} alt="blogfirst" style={{marginLeft: "-4px"}}/>
          <TitleH3 style={{ padding: "0px 8px 10px 8px" }}>Lorem Ipsum is </TitleH3>
          <TextP style={{ padding: "0px 8px" }}>
            Lorem Ipsum is simply text of the printing and type setting
            industry. make a type specimen.
          </TextP>

          <DJA>
            <Border1px $MarginBorder></Border1px>
          </DJA>

          <DJA style={{ justifyContent: "space-between", padding: "0px 10px" }}>
            <DJA>
              <img
                src={alex22}
                alt="alex"
                style={{
                  borderRadius: "50px",
                  border: "0px solid red",
                  marginTop: "8px",
                }}
              />
              <p>Alex Liones</p>
            </DJA>
            <DJA>
              <img src={clock1} alt="clock" style={{ marginRight: "5px" }} />
              <TimeP>28,Aug 2020, 09:48:00</TimeP>
            </DJA>
          </DJA>

          <DJA>
            <StdButton2>Read More</StdButton2>
          </DJA>
        </div>

        <div
          style={{
            border: "1px solid #FACA1066",
            width: "340px",
            borderRadius: "25px",
            backgroundColor: "white",
          }}
        >
          <img src={blogs3} alt="blogfirst" style={{marginLeft: "-4px"}}/>
          <TitleH3 style={{ padding: "0px 8px 10px 8px" }}>Lorem Ipsum is </TitleH3>
          <TextP style={{ padding: "0px 8px" }}>
            Lorem Ipsum is simply text of the printing and type setting
            industry. make a type specimen.
          </TextP>

          <DJA>
            <Border1px $MarginBorder></Border1px>
          </DJA>

          <DJA style={{ justifyContent: "space-between", padding: "0px 10px" }}>
            <DJA>
              <img
                src={alex33}
                alt="alex"
                style={{
                  borderRadius: "50px",
                  border: "0px solid red",
                  marginTop: "8px",
                }}
              />
              <p>Alex Liones</p>
            </DJA>
            <DJA>
              <img src={clock1} alt="clock" style={{ marginRight: "5px" }} />
              <TimeP>28,Aug 2020, 09:48:00</TimeP>
            </DJA>
          </DJA>

          <DJA>
            <StdButton2 $MarginB>Read More</StdButton2>
          </DJA>
        </div>

        

      </DJA>
      <StdButton style={{marginTop: "40px"}}>View more</StdButton>
    </DJA>
  );
};

export default BlogsHome;
