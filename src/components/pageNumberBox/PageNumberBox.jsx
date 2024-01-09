import { IoIosArrowBack,IoIosArrowForward} from "../../assets";

const PageBoxNumbers = () => {
    return(
        <div className="page-numbers-box">
            <button className="page-btn">
                <IoIosArrowBack  className="page-btn-icon"/>
                <span>Previous</span>
            </button>
            <div className="page-numbers">
                <p>1</p>
                <p>...</p>
                <p className="current-page">10</p>
                <p>11</p>
                <p>12</p>
                <p>13</p>
                <p>14</p>
                <p>15</p>
                <p>16</p>
                <p>17</p>
            </div>
            <button className="page-btn">
                <span>Next</span>
                <IoIosArrowForward  className="page-btn-icon"/>
            </button>
        </div>
    )
}

export default PageBoxNumbers;