import {GoQuestion, SpeakerSvg, DropDownDarkSvg} from "../../assets";
import CircularBgIcon from "../circularBgIcons/CircularBgIcons";
import SearchBox from "../searchBox/SearchBox";

const Header = () => {
    return (
        <div className="header">
            <div className="header-title-section">
                <p className="header-title">Payments</p>
                <p className="header-title-sub">
                    <GoQuestion className="title-sub-icon"/>
                    <span className="title-sub">How it works</span>
                </p>
            </div>
            <SearchBox 
                searchBoxClass={"header-search-box"} 
                searchIconClass={"header-search-icon"} 
                placeholder={"Search fetures, tutorials, etc."}
            />
            <div className="header-icons">
                <CircularBgIcon icon={SpeakerSvg}/>
                <CircularBgIcon icon={DropDownDarkSvg} />
            </div>
        </div>
    )
}


export default Header;