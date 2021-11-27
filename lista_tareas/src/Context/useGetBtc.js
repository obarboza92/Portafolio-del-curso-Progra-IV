import React from 'react'

function useGetBtc(){
    const [data, obtenerData] = React.useState(true)
    const [error, setError] = React.useState(null)
    const [btc, setBtc] = React.useState(null)
  
    const consultar = async() => {
      const peticion = await fetch('http://api.coindesk.com/v1/bpi/currentprice.json')
      const respuesta = await peticion.json()
      obtenerData(respuesta)
    }  
  
    React.useEffect(()=>{
      try{
        consultar()
        setBtc(data.bpi.USD.rate)
        setError(null)
      }catch(error){
        setError("Por favor recargue la pagina para ver el precio del BTC")
      }
    })
  
    return {
      btc,
      error
    }
  }

  export { useGetBtc }
  