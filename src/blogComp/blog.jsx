import React from 'react'
import { TitleH1, TextP, DJA, CasesH1, InputStd, StdButton,} from "../styled";
import solutionsMain1 from "../asserts/blogMain.png";
import blogImage1 from "../asserts/blogImage.png";
import map1 from '../asserts/map.png'

const BlogComponent = () => {
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
            <TitleH1 style={{ margin: "30px 0px" }}>Our Digital Journey</TitleH1>
            <TextP
              style={{ width: "437px", zIndex: "1", marginBottom: "30px" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.
            </TextP>
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

      <DJA style={{ padding: "80px 70px 80px 50px" }}>
        <div>
          <img src={blogImage1} alt="img" />
        </div>
        <div style={{ padding: "0px 25px" }}>
          <CasesH1>Lorem Ipsum</CasesH1>
          <TextP style={{ padding: "10px 0px 0px 0px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            <b>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s,
            </b>{" "}
            when an unknown printer took. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum is simply dummy
            text of the printing and typesetting industry.{" "}
          </TextP>
        </div>
      </DJA>

      <DJA style={{flexDirection: "column"}}>
        <DJA>
            <img src={map1} alt="map" />
        </DJA>
        <DJA style={{
            display: "flex",
            flexDirection: "column",
           alignItems: "center",
            border: "1px solid black", 
            height: "500px",
            width: "938px",
            marginTop: "-250px",
            zIndex: "10",
            backgroundColor: "white",
            borderRadius: "25px",
             }}>
            <TitleH1>Get in Touch</TitleH1>
            <div className='inputBox'>
                <InputStd type='text' placeholder='Name'></InputStd>
                <InputStd type='email' placeholder='Email'></InputStd>
            <InputStd type='text' placeholder='Name'></InputStd>

                <select name="aa" id="aa" style={{
                    padding: "10px 30px",
                    borderTop: "none",
                    borderRight: "none",
                    borderBottom: "1px solid #A5A5A5",
                    borderLeft: "none",
                    }}>
                    <option value="Lorem">Lorem</option>
                    <option value="Ipsum">Ipsum</option>
                    <option value="Abcde">Abcde</option>
                </select>
            </div>
            <StdButton>SUBMIT</StdButton>
        </DJA>
    </DJA>

    </div>
  )
}

export default BlogComponent