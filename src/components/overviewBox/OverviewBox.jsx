const OverviewBox = ({text, number}) => {
    return (
        <div className="overview-box">
            <p className="overview-box-title">{text}</p>
            <p className="overview-box-numbers">{number}</p>
        </div>
    )
}

export default OverviewBox;