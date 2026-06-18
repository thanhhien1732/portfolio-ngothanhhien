import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const AppHeader = () => {
    return (
        <Navbar expand="lg" className="py-3 bg-transparent" style={{ zIndex: 10 }}>
            <Container className="d-flex justify-content-between align-items-center">
                {/* Bên trái: Logo/Brand */}
                <Navbar.Brand as={Link} to="/" className="brand-green m-0">
                    Thanh Hien
                </Navbar.Brand>

                {/* Chính giữa: Thanh Navigation (sẽ ẩn trên Mobile bằng CSS tự động) */}
                <div className="d-flex justify-content-center">
                    <Nav />
                </div>

                {/* Bên phải: Khoảng trống tàng hình để tạo thế cân bằng cho Flexbox */}
                <div className="d-none d-lg-block" style={{ width: '100px' }}></div>
            </Container>
        </Navbar>
    );
};

export default AppHeader;