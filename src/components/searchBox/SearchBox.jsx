import {IoSearch} from "../../assets";
const SearchBox = () => {
    return (
        <div className="search-box">
            <IoSearch  className="search-icon"/>
            <input className="search-input" placeholder="Search fetures, tutorials, etc."/>
        </div>
    )
}

export default SearchBox;