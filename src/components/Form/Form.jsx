import styled from 'styled-components'
import React from 'react'
import InputField from '../Input/InputField'
import ButtonGroup from '../BottonGroup/BottonGroup'

const FormContainer = styled.div`
    width: 100%;
`



const Form = ({
                handleValuesChange,
                numOfPeople,
                setNumOfPeople,
                customTip,
                tip,
                setCustomTip,
                setTip,
                bill,
                setBill,
                errorState
            }) => {

    return (
        <FormContainer>
            <InputField 
                title='Bill' 
                handleChange={(e) => handleValuesChange(setBill,e.target.value)} 
                value={bill}
                 />
            <ButtonGroup 
                handleButtomClick={(e) => {
                    handleValuesChange(setTip,e.target.value)
                    handleValuesChange(setCustomTip,0)
                }}
                handleInputChange={(e) => {
                    handleValuesChange(setTip, 0 )
                    handleValuesChange(setCustomTip,e.target.value)
                }}
                tipValue = {tip} 
                customTipValue = {customTip}
                />
            <InputField 
                title='Number of People' 
                icon='person' 
                handleChange={(e) => handleValuesChange(setNumOfPeople,Math.floor(e.target.value))} 
                value={numOfPeople}
                errorState = {errorState}/>
        </FormContainer>
    )
    }

export default Form