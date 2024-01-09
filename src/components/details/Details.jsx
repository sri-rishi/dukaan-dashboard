import {FaChevronDown, TbArrowsSort, MdOutlineFileDownload} from "../../assets";
import { Header, OverviewBox, PageBoxNumbers, SearchBox, TransactionsTable } from '../index';

const Details = () => {
    return (
        <div className="main">
            <Header />
            <div className="details">
            <div className="overview-head">
                <p className='details-title'>Overview</p>
                <div className="select-box">
                <p className="select-box-value">Last Month</p>
                <FaChevronDown />
                </div>
            </div>

            <div className="overview-details">
                <OverviewBox text={"Online orders"} number={"231"}/>
                <OverviewBox text={"Amount recieved"} number={"₹ 23,92,312.19"} />
            </div>

            <p className="details-title">
                Transactions | This Month
            </p>
            <div className="transaction-table">
                <div className="filter-box">
                <div>
                    <SearchBox  
                    searchBoxClass={"transaction-search-box"}  
                    searchIconClass={"transaction-search-icon"}
                    placeholder={"Search by order ID..."}
                    />
                </div>
                <div className="sort-box">
                    <div className="select-box">
                    <p className="select-box-value">Sort</p>
                    <TbArrowsSort className="icon-medium"/>
                    </div>
                    <div className="select-box">
                    <MdOutlineFileDownload  className='download-icon'/>
                    </div>
                </div>
                </div>
                <TransactionsTable />
                <PageBoxNumbers />
            </div>
        </div>
      </div>
    )
}

export default Details;