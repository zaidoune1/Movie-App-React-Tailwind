    import { Link } from "react-router-dom";
    import { AiFillStar } from "react-icons/ai";
    import Loading from "./Loading";


    const Card = ({data, isLoading}) => {
        
    return (

            <div className="flex flex-wrap gap-10 m-10 phone:toZero phone:mx-1 phone:justify-center phone:items-center tabDesktop:toZero tabDesktop:mx-1 tabDesktop:justify-center tabDesktop:items-center desktop:justify-center desktop:items-center desktop:gap-10">
            
                    {
                        !isLoading ? data.map((el, index) => {
                            return  <main key={index} className="w-40 flex flex-col transition hover:scale-110"> 
                            <img className="w-40 h-60  object-contain cursor-pointer relative" src={`https://image.tmdb.org/t/p/original${el?el.poster_path:""}`}/>
                            <Link to={`/channel/${el.id}`} className="cursor-pointer absolute w-40 h-60 hover:bg-[#000000ab] text-transparent hover:text-[white]">
                                <div className="flex-col absolute bottom-0 w-40 text-sm justify-start items-start p-2 leading-4">
                                    <p style={{fontWeight:"1000"}} className="text-md mb-1"> {el.title} </p>
                                    <div className="flex justify-between items-center"> {el.release_date} <span className="flex items-center"> {el.vote_average}  <AiFillStar className="ml-2"/> </span> </div>
                                    <p className="text-sm">{el ? el.overview.slice(0, 60) + "...": ""}</p>
                                </div>
                            </Link>
                        </main>
                        }) : <Loading/>
                    }
                </div>            
    )
    }

    export default Card