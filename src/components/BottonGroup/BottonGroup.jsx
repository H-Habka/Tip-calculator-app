import React, { forwardRef } from 'react'
import { tips } from './tipsValues'
import {
        Label,
        ButtonsContainer,
        Button,
        CustomInput} from './ButtonGroup-styledComponents'

const ButtonGroup = ({handleButtomClick,tipValue,handleInputChange,customTipValue}) => {

    return (
        <>
            <Label>Select Tip %</Label>
            <ButtonsContainer>
                {
                    tips.map(tip => (
                        <Button
                            tipValue={tipValue}
                            key={tip.id} 
                            value={tip.value} 
                            onClick={handleButtomClick}
                        >{tip.text}</Button>
                    ))
                }
                <CustomInput 
                    key={6} 
                    placeholder="Custom" 
                    type="number"
                    value={customTipValue}
                    onChange={handleInputChange}/>

            </ButtonsContainer>
        </>
    )
}

export default ButtonGroup