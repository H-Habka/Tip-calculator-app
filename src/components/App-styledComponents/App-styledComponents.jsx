import styled from "styled-components"

export const APP = styled.div`
  background:  hsl(185, 41%, 84%);
  width:100vw;
  height: 100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
`
export const Header = styled.h4`
  width: 4ch;
  letter-spacing: 6px;
  align:center;
  margin-bottom: 80px;
  color:hsl(186, 14%, 43%);

  @media screen and (max-width:500px){
    &{
      margin-bottom: 21px;
      margin-top: 8px;
    }
  }
`
export const Container = styled.div`
  background: #fff;
  align: center;
  width: 100%;
  border-radius: 15px;

`
export const Row0 = styled.div`
  width: 60%;
  border-radius: 15px;
  diplay:flex;
  justify-content:center;

  @media screen and (max-width:500px){
    &{
      width: 100%;
      border-radius: 15px 15px 0 0;
    }
  }
`
export const OutputCont = styled.div`
  height: 435px;
  padding:5px 1.5rem !important;
  @media screen and (max-width:500px){
    &{
      height: 270px
    }
  }

`
