import { 
    Logo,
    HomeSvg,
    OrderSvg,
    ProductSvg,
    DeliverySvg,
    MarketingSvg,
    AnalyticsSvg,
    PaymentsSvg,
    ToolsSvg,
    DiscountSvg,
    AudienceSvg,
    AppearenceSvg,
    PluginsSvg,
    FaChevronDown,
} from "../../assets";

const menuItems = [
    {
        id: 1,
        title: "Home",
        svgs: HomeSvg
    },
    {
        id: 2,
        title: "Orders",
        svgs: OrderSvg
    },
    {
        id: 3,
        title: "Products",
        svgs: ProductSvg
    },
    {
        id: 4,
        title: "Delivery",
        svgs: DeliverySvg
    },
    {
        id: 5,
        title: "Marketing",
        svgs: MarketingSvg
    },
    {
        id: 6,
        title: "Analytics",
        svgs: AnalyticsSvg
    },
    {
        id: 7,
        title: "Payments",
        svgs: PaymentsSvg
    },
    {
        id: 8,
        title: "Tools",
        svgs: ToolsSvg
    },
    {
        id: 9,
        title: "Discounts",
        svgs: DiscountSvg
    },
    {
        id: 10,
        title: "Audience",
        svgs: AudienceSvg
    },
    {
        id: 11,
        title: "Appearance",
        svgs: AppearenceSvg
    },
    {
        id: 12,
        title: "Plugins",
        svgs: PluginsSvg
    }
]

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <div className="logo-box">
                    <img src={Logo}  alt="Logo"/>
                </div>
                <div className="sidebar-title-section">
                    <h1 className="title">Nishyan</h1>
                    <p className="sub-title-text">Visit Store</p>
                </div>
                <FaChevronDown  className="sidebar-down-icon"/>
            </div>
            <ul className="sidebar-menu">
                {
                    menuItems.map(({id, title, svgs}) => (
                        <li className="sidebar-menu-items" key={id}>
                            <div className="sidebar-menu-icons">
                                <img src={svgs} alt={title} />
                            </div>
                            <p className="sidebar-menu-title">{title}</p>
                        </li>
                    ))
                }
            </ul>
        </aside>
    )
}

export default Sidebar;