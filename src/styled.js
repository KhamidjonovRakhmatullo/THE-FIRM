import styled from "styled-components";


export const DJA = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
export const StdButton =styled.button`
display: flex;
justify-content: space-around;
align-items: center;
width: 157px;
height: 44px;
background-color: #FACA10;
background-color: ${(props) => 
     props.$bgcolorWhite ? `white` : `#FACA10`};
/* background-color: ${(props) => 
     props.$bgcolorBlack ? `black` : `#FACA10`}; */
border: none;
border: ${(props)=>
    props.$BoderColor ? `2px solid #F6F6F6` : `none` };
border-radius: 5px;
font-family: Nunito;
font-size: 18px;
font-weight: 700;
line-height: 24.55px;
letter-spacing: 0.05em;
text-align: left;
color: white;
color: ${(props) => 
    props.$textcolor ? `#C4C4C4` : `white`};
width: ${(props) =>
    props.$width ? `180px` : `157px`};
cursor: pointer;
&:hover{
    color: ${(props) =>
    props.$clhover ? `white`: ``}
}
&:hover{
    background-color: #FAbA20;
}

`
export const TitleH1 =styled.h1`
font-family: Nunito;
font-size: 48px;
font-weight: 900;
line-height: 30.03px;
letter-spacing: 0.02em;
text-align: left;
color: #1E1E1E;

`

export const TextP= styled.p`
font-family: Lora;
font-size: 18px;
font-weight: 400;
line-height: 31.68px;
letter-spacing: 0.02em;
text-align: left;
color: #1E1E1E;

`

export const Pnavbar = styled.p`
display: flex;
font-family: Nunito;
font-size: 18px;
font-weight: 700;
/* line-height: 24.55px; */
letter-spacing: 0.05em;
text-align: left;
color: #1E1E1E;
cursor: pointer;
&:hover{
   color: #FAbA20;
}
`

export const TitleH2 =styled.h2`
font-family: Nunito;
font-size: 30px;
font-weight: 700;
line-height: 40.92px;
letter-spacing: 0.05em;
text-align: left;
`

export const StdButton2 =styled.button`
display: flex;
justify-content: space-around;
align-items: center;
margin: 20px 0px;
/* margin-bottom: ${(props) =>
     props.$margin ? `20px 0px 25px 0px` : `20px 0px`}; */
width: 157px;
height: 44px;
background-color: black;
border: none;
border-radius: 5px;
font-family: Nunito;
font-size: 18px;
font-weight: 700;
line-height: 24.55px;
letter-spacing: 0.05em;
text-align: left;
color: white;
cursor: pointer;
&:hover{
    background-color: #FAbA20;
}
`
export const TitleH3 =styled.h3`
font-family: Nunito;
font-size: 24px;
font-weight: 700;
line-height: 32.74px;
text-align: left;
`
export const Border1px =styled.div`
width: 319px;
height: 0px;
border: 1px solid #F2F2F2;
margin: 10px 0px;
margin: ${(props)=>
     props.$MarginBorder ? `10px 0px` : `10px 0px 0px 0px`};
`

export const QuestionMark =styled.div`
display: flex;
align-items: start;
gap: 10px;
h2{
margin-top: -5px;

    color: #FACA10;
    font-family: Nunito;
    font-size: 30px;
    font-weight: 700;
    line-height: 40.92px;
}
`

export const TimeP =styled.p`
font-family: Nunito;
/* font-size: 10px; */
/* font-size: ${(props) =>
    props.$fontsize ? `18px` : `10px`};
letter-spacing: ${(props) =>
     props.$spacing ? `0.26em` : `0em`}; */
font-weight: 400;
line-height: 13.64px;
text-align: left;
color: #B0B0B0;
`
export const Point =styled.div`
width: 18px;
height: 18px;
opacity: ${(props) =>
    props.$opacity ? `40%` : `` };
border-radius: 100px;
background-color: #FACA10;
`

export const InputStd =styled.input`
padding: 10px 30px;
border-bottom: 1px solid #A5A5A5;
border-top:none ;
border-left: none;
border-right: none;
font-family: Nunito;
font-size: ${(props)=>
     props.$InputSize ? `18px` : `14px`};
font-weight: 400;
line-height: 18.68px;
letter-spacing: 0.02em;
text-align: left;
color: #C4C4C4;
`

export const CasesH1 =styled.h1`
font-family: Nunito;
font-size: 40px;
font-weight: 700;
line-height: 54.56px;
letter-spacing: 0.05em;
text-align: left;

`