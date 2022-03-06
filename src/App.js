import React,{useEffect, useState} from 'react'
import './App.css';
import Form from './components/Form/Form';
import Output from './components/Output/Output';
import {APP,Header,Container,Row0,OutputCont} from './components/App-styledComponents/App-styledComponents'

const App  = () =>  {
  const [tipAmount, setTipAmount] = useState('0.00')
  const [total, setTotal] = useState('0.00')
  const [bill, setBill] = useState(0)
  const [numOfPeople, setNumOfPeople] = useState(0)
  const [tip, setTip] = useState(0)
  const [customTip, setCustomTip] = useState(0)
  const [disabled,setDisabled ]  = useState(true)

    const handleValuesChange = (setValue, value) => {
      setValue(Number(value))
    }
    useEffect( () => {
      let tipValue = customTip ? customTip : tip 
        if(numOfPeople){
          let tipAmountValue = (bill * tipValue) / (100 * numOfPeople)
          setTipAmount(tipAmountValue)
          setTotal(tipAmountValue + bill / numOfPeople)
          setDisabled(false)
        }
    })
    const handleResetClick = () => {
      setTipAmount('0.00')
      setTotal('0.00')
      setBill(0)
      setNumOfPeople(0)
      setTip(0)
      setCustomTip(0)
      setDisabled(true)
    }

    return (

      <APP>
        <Header>SPLI TTER</Header>
        <Row0 className="row justify-content-center">
          <Container className='col-md-10'>
            <div className='row'>
              <div className='col-md-6 p-4'>
                <Form 
                  handleValuesChange ={handleValuesChange}
                  setCustomTip = {setCustomTip}
                  setTip = {setTip} 
                  setNumOfPeople = {setNumOfPeople}  
                  setBill = {setBill}
                  numOfPeople = {numOfPeople}
                  customTip ={customTip}
                  tip ={tip}
                  bill = {bill}
                  errorState = {disabled}
                 />
              </div>
              <OutputCont className='col-md-6 p-4'>
                <Output  tipAmount={tipAmount} total={total} disabled = {disabled} handleResetClick={handleResetClick}/>
              </OutputCont>
            </div>
          </Container>
        </Row0>
      </APP>

    );
  }

export default App






