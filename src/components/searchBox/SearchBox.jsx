import {IoSearch} from "../../assets";
const SearchBox = ({searchBoxClass, searchIconClass, placeholder}) => {
    return (
        <div className={searchBoxClass}>
            <IoSearch  className={searchIconClass}/>
            <input className="search-input" placeholder={placeholder}/>
        </div>
    )
}

export default SearchBox;