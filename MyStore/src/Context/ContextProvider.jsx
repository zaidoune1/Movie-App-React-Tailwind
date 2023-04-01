import React, { createContext, useState } from 'react'
import { useContext } from 'react';

export const ContextState = createContext();

const ContextProvider = ({children}) => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)


  const fetchData = (myCat) => {

    const urlApi = `https://api.themoviedb.org/3/movie/${myCat ? myCat :'popular'}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;

    try {
        setIsLoading(true)
        fetch(urlApi).then((resense) => resense.json())
        .then((datas) => {
            setData(datas.results)
            setIsLoading(false)
        })
        
    } catch (error) {
        setIsLoading(false)
        console.log(error)
    }

}

  return (
    <ContextState.Provider value={{fetchData, data, isLoading, setIsLoading}}>{children}</ContextState.Provider>
  )
}

export default ContextProvider

export const ContextFunc = () => {

    return useContext(ContextState)
}