import React from 'react'

function InputBox({setAmount,Amount,For,IdAmount,IdCurrency,Default,setCurrency,Options=[]}) {
  return (
    <div className='flex flex-row w-max h-[100px] p-4 pl-6 pr-6 border-2 border-blue-200 rounded-lg bg-slate-200'>
      <div className='flex flex-col w-[50%]'>
        <label htmlFor={`${IdAmount}`} className='text-gray-500'>{For}</label>
        <input type="number"  placeholder='amount' min={0} name="" id={`${IdAmount}`} onChange={(e)=>setAmount(e.target.value)} value={Amount} className='mt-2'/>
      </div>
      <div className='flex flex-col w-[50%] pl-3'>
        <label htmlFor={`${IdCurrency}`} className='text-gray-500'>Currency</label>
        <select name="" id={`${IdCurrency}`} className='mt-2' value={Default} onChange={(e)=>{setCurrency(e.target.value)}}>
            {
                Options.map(
                    (val)=>
                    (<option key={val} value={val}>
                        {val}
                    </option>)
                )
            }
        </select>
      </div>
    </div>
  )
}

export default InputBox
