import { useEffect, useState } from "react";
import {AiFillHome} from "react-icons/ai";
import {AiFillStar} from "react-icons/ai";
import {CiPizza} from "react-icons/ci";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Card from "./Card";
import { categories } from "../utils/categiries";
import { Link} from "react-router-dom";
import { ContextFunc } from "../Context/ContextProvider";

const Home = () => {

    const [cats, setCats] = useState();
    const [specificCat, setSpecificCat] = useState();

    const {fetchData, data, isLoading} = ContextFunc()

    const scorllInCategiries = () => {

        window.scroll({
            top:0,
            behavior:"smooth",
        })
    }
    
    useEffect(() => {
        fetchData(cats);
    }, [cats])


    return (

        <div className="z-10">

            <div className="inline phone:block mb-5">
                <sapn className=" ml-5 pr-1 text-3xl font-bold">By</sapn>
                <span className="text-reactColor-500 text-2xl font-bold"> Categories : </span>
            </div>

            {
                categories.map((cat, index) => {
                    return<Link onClick={() => {
                        const allCats = categories.find((c) => c.categorieName === cat.categorieName)
                        setCats(cat.categorieName)
                        setSpecificCat(allCats)
                    }} className={`m-5 pb-1 font-bold hover:border-b-4 border-[red] ${cat === specificCat && "border-b-4 border-[red]"}`} key={index} >{[cat.categorieName[0].toUpperCase(), cat.categorieName.slice(1)]}</Link>
                })
            }

        <Carousel className="mt-8" 
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}
            >
                {data.map((movie, index) => {
                        return <div key={index} className="w-full object-cover">
                            <div>
                            <img className="relative" src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt='movies-images'/>
                            <div className="absolute left-10 bottom-0 flex flex-col justify-start items-start text-start w-1/2 rounded-xl phone:top-2 tabDesktop:top-4">
                                <p className="font-[1000] text-6xl phone:text-[18px] phone:font-bold tabDesktop:font-[800] tabDesktop:text-2xl">{movie.original_title} </p>
                                <p className ="font-[800] text-4xl mt-4 flex items-center phone:text-[25px] phone:font-bold phone:mt-1" > {movie.vote_average} <AiFillStar className="text-start mt-1 pl-2 text-[gold]"/></p>
                                <p className=" transition font-bold text-xl my-10 cursor-pointer p-5 bg-[#c4302b91] rounded-3xl hover:bg-[#c4302bba] hover:opacity-100 phone:hidden tabDesktop:hidden"> {movie.overview}</p>
                            </div>
                        </div>
                        </div>
                    })
                }
            </Carousel>

        {!isLoading && <section className="flex ml-12 my-10 justify-start items-center phone:flex-col phone:mx-auto tabDesktop:justify-center tabDesktop:items-center desktop:justify-center desktop:items-center">
        <h1 className="text-white text-3xl phone:mb-5 ">New <span className="text-3xl text-reactColor-500">movies</span></h1>
            <main className="flex border border-[#ffffff14]">
                    <div className="cursor-pointer ml-5 w-32 h-12 flex justify-between p-3 items-center rounded-xl text-reactColor-200 bg-reactColor-500">
                        <button >
                        <AiFillHome className="text-2xl"/>
                        </button>
                        <span style={{fontWeight:"bold"}} className="text-reactColor-200"> {cats ? cats : "popular"} </span>
                    </div>
                    <div onClick={() => {
                        scorllInCategiries();
                    }} className="w-40 h-12 p-4 ml-5 flex justify-between items-center rounded-xl text-reactColor-500 hover:text-reactColor-200 hover:bg-reactColor-500 cursor-pointer">
                        <button>
                        <CiPizza className="text-4xl "/>
                        </button>
                        <Link className="text-reactColor-200 font-bold"> categories </Link>
                    </div>
                </main>
                <div>
            </div>
        </section>}

        <Card data={data} isLoading={isLoading}/>

        </div>
    )
    }

    export default Home;