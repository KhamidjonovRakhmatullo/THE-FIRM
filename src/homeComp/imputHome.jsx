import React from 'react'
import map1 from '../asserts/map.png'
import { DJA, InputStd, StdButton, TitleH1 } from '../styled'

const ImputHome = () => {
  return (
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
  )
}

export default ImputHome