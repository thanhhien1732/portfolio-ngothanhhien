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
        <nav className="custom-nav-container">
            <div className="custom-nav-inner">
                {navData.map((link, index) => {
                    const isActive = link.path === pathname;

                    return (
                        <div key={index} className="d-flex">
                            {/* Hiển thị trên Desktop (Có Tooltip) */}
                            <OverlayTrigger
                                placement="left"
                                overlay={<Tooltip id={`tooltip-${index}`}>{link.name}</Tooltip>}
                            >
                                <Link
                                    to={link.path}
                                    className={`nav-link-icon d-none d-xl-flex ${isActive ? "active" : ""}`}
                                >
                                    {link.icon}
                                </Link>
                            </OverlayTrigger>

                            {/* Hiển thị trên Mobile (Không Tooltip) */}
                            <Link
                                to={link.path}
                                className={`nav-link-icon d-flex d-xl-none ${isActive ? "active" : ""}`}
                            >
                                {link.icon}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </nav>
    );
}

export default Nav;