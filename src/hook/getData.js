import { useEffect, useState } from "react";

function getData(currency) {
    const [data,setData] =useState({})
    useEffect(
        ()=>{
            let api =`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
            fetch(api)
            .then((res)=>res.json())
            .then((res)=>setData(res[currency]))
        },[currency]
    )
    return data
}

export default getData
