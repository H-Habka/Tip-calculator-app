import styled from 'styled-components'

export const Label = styled.div`
    margin-bottom: 15px;
    color:hsl(184, 14%, 56%);
`
export const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap:wrap;
    gap:5%;
    margin-bottom: 25px;

    @media screen and (max-width:500px){
      &{
        margin-bottom: 10px;
      }
    }
`
export const Button = styled.button`
  width: 30%;
  background: ${props => (props.tipValue === props.value) ? 'hsl(172, 67%, 45%)' : 'hsl(183, 100%, 15%)' };
  margin-bottom: 10px;
  border: none;
  border-radius: 3px;
  padding: 5px ;
  color:hsl(189, 41%, 97%);
  font-size: 24px;

  &:active {
    outline: none;
    background: hsl(172, 67%, 45%);
    color: hsl(183, 100%, 15%)
  }
  

  @media screen and (max-width:500px){
    &{
      width: 45%;
    }
  }
`
export const CustomInput = styled.input`
  width: 30%;
  background: hsl(189, 41%, 97%);
  margin-bottom: 10px;
  border: none;
  border-radius: 3px;
  padding: 5px ;
  direction: rtl;
  font-size:24px;
  padding-right: 15px;
  color:hsl(184, 14%, 56%);

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px hsl(172, 67%, 45%);
  }
  &:active {
    outline: none;
    box-shadow: 0px 0px 2px 2px hsl(172, 67%, 45%);
  }

  @media screen and (max-width:500px){
    &{
      width: 45%;
    }
  }
`