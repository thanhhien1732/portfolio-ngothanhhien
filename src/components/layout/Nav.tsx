import { HiHome, HiUser, HiBriefcase, HiViewColumns, HiEnvelope } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "./Nav.scss";

export const navData = [
    { name: "Home", path: "/", icon: <HiHome /> },
    { name: "About", path: "/about", icon: <HiUser /> },
    { name: "Experience", path: "/experience", icon: <HiBriefcase /> },
    { name: "Project", path: "/project", icon: <HiViewColumns /> },
    { name: "Contact", path: "/contact", icon: <HiEnvelope /> },
];

function Nav() {
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <div className="header-nav-container">
            <div className="header-nav-inner">
                {navData.map((link, index) => {
                    const isActive = link.path === pathname;
                    return (
                        <div key={index} className="d-flex">
                            {/* Desktop (Từ lg trở lên): Có Tooltip hiển thị bên dưới */}
                            <OverlayTrigger
                                placement="bottom"
                                delay={{ show: 200, hide: 50 }}
                                overlay={<Tooltip id={`tooltip-${index}`}>{link.name}</Tooltip>}
                            >
                                <Link
                                    to={link.path}
                                    className={`nav-link-icon d-none d-lg-flex ${isActive ? "active" : ""}`}
                                >
                                    {link.icon}
                                </Link>
                            </OverlayTrigger>

                            {/* Mobile (Dưới lg): Bỏ Tooltip để tránh lỗi chạm trên điện thoại */}
                            <Link
                                to={link.path}
                                className={`nav-link-icon d-flex d-lg-none ${isActive ? "active" : ""}`}
                            >
                                {link.icon}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Nav;