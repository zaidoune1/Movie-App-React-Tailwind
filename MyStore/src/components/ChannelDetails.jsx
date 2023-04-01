    import React, { useEffect, useState } from 'react'
    import { AiFillStar } from 'react-icons/ai';
    import { useParams } from 'react-router'
    import { ContextFunc } from '../Context/ContextProvider';
    import Loading from './Loading';

    const ChannelDetails = () => {

        const [detailsMovie, setDetailsMovie] = useState([]);

        const {idMovies} = useParams();

        const {fetchData, data, isLoading, setIsLoading} = ContextFunc()


    const urlApiId = `https://api.themoviedb.org/3/movie/${idMovies}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;

    const fetchDatadetails = () => {
        try {
            setIsLoading(true)
            fetch(urlApiId).then((resense) => resense.json())
            .then((details) => {
                setDetailsMovie(details)
                setIsLoading(false)
            })
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchDatadetails();
    }, [idMovies])

    return (
        <section>
            {!isLoading ? <main>
                <div className='flex justify-center items-center m-auto'>
                <img style={{boxShadow:"1px 1px 9px"}} className="relative w-[94%] max-h-[31rem] object-fill rounded-xl" src={`https://image.tmdb.org/t/p/original${detailsMovie && detailsMovie.backdrop_path}`} alt='movies-images'/>
                </div>
                <article className='m-5 flex absolute bottom-0 left-16 phone:top-40 phone:left-2 tabDesktop:left-0 tabDesktop:h-[20rem] desktop:h-[20rem] desktop:left-2 '>
                <img style={{boxShadow:"1px 1px 9px"}} className="w-[15rem] object-cover shadow-2xl rounded-xl phone:w-[10rem] phone:max-h-[18.2rem]" src={`https://image.tmdb.org/t/p/original${detailsMovie && detailsMovie.poster_path}`} alt='movies-images'/>
                    <div className='transition ml-5 rounded-lg p-3 flex-col hover:bg-[#000000a0] phone:toZero phone:ml-2 phone:p-3'>
                        <h2 className="font-[900] text-[45px] phone:font-[800] phone:text-[15px]">{detailsMovie.title} </h2>
                        <p className='flex items-center ml-1 mt-2'> <span className='font-black pr-2 phone:font-[700]'> Rating </span> : {detailsMovie.vote_average} <span> <AiFillStar className="ml-2 text-[gold]"/> </span> </p>
                        <p className='mt-2'> <span className='font-black ml-1 pr-2 phone:font-[700]'>Date</span> : {detailsMovie.release_date} </p>
                        <p className='mt-2'> <span className='font-black ml-1 pr-2 phone:font-[700]'> Movie time</span>:{detailsMovie.runtime} min </p>
                        <div className='mt-10 phone:flex phone:flex-col phone:my-2'>
                        {
                            detailsMovie && detailsMovie.genres && detailsMovie.genres.map((genre, index) => {
                                return  <span key={index} className='mr-5 font-black text-center border rounded-xl min-w-30 p-3 hover:bg-white hover:text-black phone:font-[600] phone:text-[15px] phone:toZero phone:p-2 phone:mt-2 phone:ml-1'>{genre.name}</span>
                            })
                        }
                    </div>
                        <div className='ml-1 mt-[4rem] phone:hidden tabDesktop:hidden desktop:hidden'>
                        <p className='font-[900] text-[25px] mb-4'>Synopsis</p>
                        <p className='mt-1'> {detailsMovie.overview} </p>
                        </div> 
                    </div>
                </article>
            </main> : <Loading/>}
            <div className='hidden phone:block m-[1.5rem] mt-[12.5rem] tabDesktop:block desktop:block'>
                        <p className='font-[900] text-[25px] mb-4'>Synopsis</p>
                        <p className='mt-1'> {detailsMovie.overview} </p>
                    </div> 
        </section>

    )
}

    export default ChannelDetails