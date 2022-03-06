import { ReactComponent as SdolarIcon } from '../../images/icon-dollar.svg';
import { ReactComponent as PersonIcon } from '../../images/icon-person.svg';
import styled, { css } from 'styled-components'

export const IconStyles = css`
    position: absolute;
    top:50%;
    left: 10px;
    transform:translate(0,-50%);
`
export const StyledSdolarIcon = styled(SdolarIcon)`
   ${IconStyles}
`
export const StyledPersonIcon = styled(PersonIcon)`
    ${IconStyles}
`
export const InputTextContainer = styled.div`
    position: relative;
    margin-bottom: 15px;
    @media screen and (max-width:500px){
        &{
          margin-bottom: 5px;
        }
      }
`
export const Input = styled.input`
    padding: 5px 0;
    padding-right: 15px;
    border:none;
    background: hsl(189, 41%, 97%);
    direction: rtl;
    border-radius: 3px;
    font-size: 24px;
    color:hsl(184, 14%, 56%);
    width: 100%;
    ${props => props.error ? 'box-shadow: 0px 0px 2px red;' : ''}

    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px hsl(172, 67%, 45%);
    }
    &:active {
        outline: none;
        box-shadow: 0px 0px 2px 2px hsl(172, 67%, 45%);
    }
`
export const Label = styled.div`
    margin-bottom: 7px;
    margin-top: 15px;
    color:${props => props.error? '#FF5733' : 'hsl(184, 14%, 56%)'};

    @media screen and (max-width:500px){
        &{
          margin-bottom: 3px;
          margin-top: 5px;
        }
      }
    
`

export const LabelsCont = styled.div`
      display:flex;
      justify-content:space-between
`