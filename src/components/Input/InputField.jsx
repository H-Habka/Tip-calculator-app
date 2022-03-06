import React from 'react'
import {
    StyledSdolarIcon,
    StyledPersonIcon,
    InputTextContainer,
    Input,
    Label,
    LabelsCont
} from './InputField-styledComponents'


const InputField = ({ title, icon, handleChange, value ,errorState}) => {
    return (
        <>
            <LabelsCont>
                <Label>{title}</Label>
                {icon === 'person' && !errorState && !value? <Label error={!errorState}>Can't be zero</Label> : ''}
            </LabelsCont>
            <InputTextContainer>
                {
                    icon === 'person' ? (
                        <>
                            <Input value={value} onChange={handleChange} type="number" error={!errorState && !value} />
                            <StyledPersonIcon />
                        </>
                    ) : (
                        <>
                            <Input value={value} onChange={handleChange} type="number" />
                            <StyledSdolarIcon />
                        </>
                    )

                }
            </InputTextContainer>
        </>
    )
}

export default InputField