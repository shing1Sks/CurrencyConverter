import { useState } from "react";
import InputBox from "./components/InputBox";
import getData from "./hook/getData";


export default function App() {
  document.querySelector("body").style.backgroundColor="rgb(59,130,246)";

  const [from,setFrom] = useState('usd')
  const [to,setTo] = useState('inr')
  const [fromAmount,setFromAmount] = useState(0)
  const [toAmount,setToAmount] = useState(0)

  const rates = getData(from);
  const options = Object.keys(rates);

  const convert = ()=>{setToAmount(fromAmount*rates[to])}

  return (
    <div className="flex flex-col w-full md:border-2 md:border-white items-center pb-2">
      <h1 className="text-3xl font-bold pt-4 text-white pb-3">
        CURRENCY - CONVERTER
      </h1>
      {/* content section ahead - */}
      <div style={{backgroundImage : `url("https://img.freepik.com/free-vector/foreign-exchange-background_24908-54935.jpg?w=740&t=st=1709489188~exp=1709489788~hmac=177e0edcb492b83000cc6fd1ac709397b27e85d640ba9e9bc49274ee29b4b8e3")`}}
      className="md:h-[510px] md:w-[725px] w-[96%] h-[400px] rounded-lg flex justify-center items-center p-2">
        <div className="md:w-[60%] md:h-[80%]  w-full h-full bg-blue-500 bg-opacity-65 flex items-center justify-center border-2 border-blue-200 border-opacity-55 rounded-lg flex-col">
          <InputBox For="From" IdAmount={"box1"} Amount={fromAmount} setAmount={setFromAmount} IdCurrency={"box1"} Default={from} setCurrency={setFrom} Options={options}/>
          <div className="h-[20px]">
            {/* PADDING */}
            <button className=" bg-slate-400 text-white font-semibold text-2xl p-1 pl-2 pr-2 relative bottom-2 right-1 border-2 border-blue-200 rounded-lg hover:bg-slate-500 active:bg-slate-600" 
            onClick={()=>{
              setFromAmount(toAmount)
              setToAmount(fromAmount)
            }
            }
            >Swap</button>

          </div>
          <InputBox For="To" IdAmount={"box2"} Amount={toAmount} setAmount={setToAmount} IdCurrency={"box2"} Default={to} setCurrency={setTo} Options={options} 
          />
          <button className=" bg-blue-300 p-1 pl-2 pr-2 mt-10 text-2xl text-white font-semibold rounded-lg border-2 border-white hover:bg-blue-400 active:bg-blue-600" onClick={convert}>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
        </div>
      </div>
    </div>
  )
}