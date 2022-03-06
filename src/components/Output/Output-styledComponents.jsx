import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    height: 100%;
    background: hsl(183, 100%, 15%);
    border-radius: 15px;
    padding: 40px 20px 30px 20px;
    position: relative;
`
export const LabelCont  = styled.div`
    display:flex;
    justify-content: space-around;
    margin-bottom: 30px;
    
    @media screen and (max-width:500px){
      &{
        margin-bottom: 10px;
      }
    }

`
export const Label = styled.div`
    display:flex;
    flex-direction: column;
`
export const OutNum = styled.span`
    background:hsl(183, 100%, 15%);
    color:hsl(172, 67%, 45%);
    font-size:2.6rem;
`
export const Button = styled.button`
  align:center;
  width: 90%;
  background: hsl(172, 67%, 45%);
  margin: 0 auto 10px auto; 
  border: none;
  border-radius: 5px;
  padding: 5px ;
  color:hsl(183, 100%, 15%);
  font-size: 24px;
  bottom: 20px;
  position:absolute;
  ${({disabled}) => {
    if(disabled)return({color: '#344', background: 'hsl(172, 67%, 30%)'})
  }}

  &:active {
    outline: none;
    background: hsl(185, 41%, 84%);
    color: hsl(183, 100%, 15%)
  }
`