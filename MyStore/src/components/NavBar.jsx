    import {SiDtube} from "react-icons/si";
    import { Link } from "react-router-dom";
    import {BsSearch} from "react-icons/bs";
    import SearchBar from "./SearchBar";


    const NavBar = () => {

    return (
        <nav className="navbar sticky z-40 top-0 flex justify-between items-center">
            <Link to='/'> <SiDtube className="text-reactColor-500 w-8 h-8"/></Link>
            <SearchBar/>
            {}
        </nav>
    )
    }

    export default NavBar