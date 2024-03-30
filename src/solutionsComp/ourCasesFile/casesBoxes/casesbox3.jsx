import React from 'react'
import blogs1 from "../../../asserts/blog1.png";
import { Border1px, DJA, StdButton2, TextP, TitleH3 } from "../../../styled";

const CasesBox3 = () => {
  return (
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
            <Border1px></Border1px>
          </DJA>

          <DJA style={{ justifyContent: "space-between", padding: "0px 10px" }}>
          </DJA>

          <DJA>
            <StdButton2 $MarginB>Read More</StdButton2>
          </DJA>
        </div>
  )
}

export default CasesBox3