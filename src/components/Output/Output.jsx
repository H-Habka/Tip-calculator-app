import React from 'react'
import {LabelCont,Container,Label,OutNum,Button} from './Output-styledComponents'

const Output = ({tipAmount,total,handleResetClick,disabled}) => {
  return (
    <>
        <Container>
            <LabelCont>
                <Label>
                    <span style={{color:'hsl(189, 41%, 97%)'}}>Tip Amount</span>
                    <span style={{color:'hsl(184, 14%, 56%)'}}>/ person</span>
                </Label>
                <OutNum >${Number(tipAmount).toFixed(2)}</OutNum>
            </LabelCont>
            <LabelCont>
                <Label>
                    <span style={{color:'hsl(189, 41%, 97%)'}}>Total</span>
                    <span style={{color:'hsl(184, 14%, 56%)'}}>/ person</span>
                </Label>
                <OutNum >${Number(total).toFixed(2)}</OutNum>
            </LabelCont>
            {
                disabled ? (
                    <Button  onClick={handleResetClick} disabled>RESET</Button>
                ):(
                    <Button  onClick={handleResetClick}>RESET</Button>
                )
            }
            
        </Container>
    </>
  )
}

export default Output



