    import React, { useEffect, useState } from 'react'
    import {FiSearch} from "react-icons/fi";
    import { Link } from 'react-router-dom';

    const SearchBar = () => {

        const [searchLogo, setSearchLogo] = useState(false);
        const [dataSearch, setDataSearch] = useState([]);
        const [inputValue, setInputValue] = useState();
        const [valueSearch, setValueSearch] = useState();

        const urlApiSearching = `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;

        const fetchDataForSherching = () => {
            fetch(urlApiSearching).then((respense) => respense.json())
            .then((dataForSerching) => {
                setDataSearch(dataForSerching.results)
            })
        }

        const findSearchMovies = () => {
            if(inputValue) {
                const dataTtileMovies = dataSearch.map((el) => el.title).map((movie) => {
                    if(movie.includes(inputValue)) return movie
                    return;
                })
                const findMovies = dataTtileMovies.filter((m) => m !== undefined)
                setValueSearch(findMovies)
            }else {
                    return setValueSearch()
                }
        }

        useEffect(() => {
            fetchDataForSherching();
        },[inputValue])

        useEffect(() => {
            findSearchMovies();
            setSearchLogo(true)
        }, [inputValue])

    return (
        <div>
        <div className='relative flex items-center' onBlur={() => {
            !inputValue && setSearchLogo(false)
        }}  onClick={() => {
            return setSearchLogo(true)
        }}>

        {searchLogo && <div className='w-8 h-8 border p-5 bg-white'> 
            <FiSearch className='absolute text-reactColor-500 left-3 text-xl top-3 pointer cursor-pointer'/>
        </div>}
        <input onChange={(e) => {
            setInputValue(e.target.value)
        }} value={inputValue} type="text" placeholder="search" className=" p-5 border-l-none bg-reactColor-200 border lg:w-80 h-8 outline-none text-reactColor-400"/>
        <div onClick={() => {
            setInputValue("")
        }} className='w-8 h-8 border p-5 bg-white'> 
            <FiSearch className='absolute text-reactColor-500 right-2 text-3xl top-1 pointer cursor-pointer'/>
        </div>
        </div>

        {valueSearch && <div style={{boxShadow:"1px 1px 5px 3px black"}} onBlur={() => {
            return setValueSearch();
        }} className='absolute text-black bg-white overflow-scroll top-16 border rounded-b-lg lg:w-[25.2rem] max-h-[24rem]'>
        {
            valueSearch.map((el) => {

                const findIdSearchMovieResult = dataSearch.find((movie) => {
                    return movie.title === el
                })
    
                return <Link to={`/channel/${findIdSearchMovieResult.id}`} key={el} onClick={() => {
                    
                    setInputValue("")
                    setValueSearch()

                }} className='block flex-col text-black pl-5 py-3 rounded-md hover:bg-[#ff000096] w-full hover:text-white font-bold phone:w-[19rem] tabDesktop:w-[19rem] desktop:w-[19rem] '> {el} </Link>
            
            })
        }
        </div>}

    </div>
    )
}

    export default SearchBar