import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './App.css'

function App() {
  let calc_amount = 0
  const[Principle , setPrinciple] = useState("")
  const[rate , setRate] = useState("")
  const[year , setYear] = useState("")
  const[interest , setInterest] = useState("")
  const[isPrinciple , setIsPrinciple] = useState(true)
  const[isRate , setIsRate] = useState(true)
  const[isYear , setIsYear] = useState(true)


const validate = (e)=>{
  const {name , value} = e.target
  console.log(name);
  console.log(value);
  if(!!value.match('^[0-9]*$')) {
    if (name == 'principle') {
      setPrinciple(value)
      setIsPrinciple(true)
    }
    else if (name == 'rate') {
      setRate(value)
      setIsRate(true)
    }
    else{
      setYear(value)
      setIsYear(true)
    }
    
  }

  else{
    if (name == 'principle'){
      setPrinciple(value)
      setIsPrinciple(false)
    }

    else if (name == 'rate'){
      setRate(value)
      setIsRate(false)
    }
    else {
      setYear(value)
      setIsYear(false)
    }
  }
}


const handleReset = ()=>{
  setPrinciple("")
  setIsPrinciple(true)
  setRate("")
  setIsRate(true)
  setYear("")
  setIsYear(true)
  setInterest("0")
}

const handleCalculate = ()=>{
  setInterest((Principle*rate*year)/100)
}

  return (
  
    <>
      <div className="container">
          <div className="overlay">
              <h1 className="heading">Simple Interest App</h1>
              <p className="desc">Calculate your simple interest</p>
              <div className="box">
                  <p className="money">₹<span>{interest}</span></p>
                  <p className="desc">total simple interst {}</p>
              </div>
              <div className='my-3'>
              <TextField id="outlined-basic"  value={Principle
              } name='principle' label="₹ Principle amount" variant="outlined" className='w-100' onChange={(e)=>validate(e)}/>{isPrinciple == false &&
              <span className='text-danger'>*Invalid Input</span>}
              </div>

              <div className='mb-3'>
              <TextField id="outlined-basic"   value={rate} name='rate' label="Rate of Intrest (%)" variant="outlined" className='w-100' onChange={(e)=>validate(e)}/>
              {isRate == false &&
              <span className='text-danger'>*Invalid Input</span>}
              </div>

              <div className='mb-3'>
              <TextField id="outlined-basic"  value={year} name='year' label="Year (Yr)" variant="outlined" className='w-100' onChange={(e)=>validate(e)}/>
              {isYear == false &&
              <span className='text-danger'>*Invalid Input</span>}
              </div>

              <div className='mb-3 text-center'> <Button variant="contained" onClick={handleCalculate} className='p-2' style={{width:'100px'}}>Calculate</Button>

              
      <Button variant="outlined"  onClick={handleReset} className='p-2 ms-5' style={{width:'100px'}}>Reset</Button></div>
            
              {/*
              <form action="" className="calculator">
                 <input type="number" placeholder='₹ Principle amount()' id="principal" className="amount_box" onChange = { (e) => {}}/>

                 <input type="number"  placeholder='Rate of Interest(%)'  id="" className="amount_box" onChange = { (e) => {}}/>

                 <input type="number" placeholder='Year (Yr)'  id="" className="amount_box" onChange = { (e) => {}}/>

                 <div className="button-wrap">
                   <button className="btn calculate">calculate</button>
                   <button className="btn reset">reset</button>
                 </div>
              </form>
              */}
          </div>
      </div>

    </>

  )
}

export default App
