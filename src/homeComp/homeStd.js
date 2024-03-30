import styled from "styled-components";
import homeImgStd from "../asserts/homeBg.png"

export const HomeBackground = styled.div`
/* background-image: url(${homeImgStd}); */
/* background-position: center;
background-size: cover; */
width: 90.2%;
height: 650px;
padding: 0px 70px;
display: flex;
/* flex-direction: column; */
align-items: center;
/* justify-content: center; */
border-radius: 0px 30px 30px 0px;
background-color: #F6F6F6;
`

export const CircleBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 60px;
height: 60px;
border: 2px 0px 0px 0px;
background-color: #F6F6F6;
border-radius: 50px;
cursor: pointer;
`

export const ParnerBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 240px;
height: 120px;
border-radius: 20px;
background-color: #F6F6F6;
cursor: pointer;
`
