import { Col, Container, Row } from "react-bootstrap";
import HeroLeft from "components/sections/hero/hero.left";
import HeroRight from "components/sections/hero/hero.right";
import { MdFileDownload } from "react-icons/md";
import bg from 'assets/section.svg';
import ResizeButton from "components/sections/resize.button";
// import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { fadeIn } from "variants";

const HomePage = () => {
    // const { t } = useTranslation();

    // Hàm xử lý mở CV dành riêng cho nút "Get My CV" ở chế độ mobile
    const urlCV = "https://drive.google.com/file/d/1tl_awaTScVRNniVixAnErR5_SZ55zco0/view?usp=sharing";
    const handleDownloadCV = () => {
        const newWindow = window.open(urlCV, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    }

    return (
        <div className="homepage-screen">
            <div style={{
                backgroundImage: `url(${bg})`,
                width: "100%",
                height: 500,
                position: "absolute",
                top: 0,
                backgroundRepeat: "no-repeat",
                zIndex: 0
            }}>
            </div>

            <section className="mt-md-7 mt-2" >
                <Container
                    style={{ position: "relative" }}
                >
                    <Row>
                        <motion.div
                            variants={fadeIn("right", 0.2)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="col-md-6 col-12"
                        >
                            <HeroLeft />
                        </motion.div>

                        <motion.div
                            variants={fadeIn("left", 0.35)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="col-md-6 col-12"
                        >
                            <HeroRight />
                        </motion.div>

                        {/* Nút "Get My CV" chỉ hiển thị trên mobile */}
                        <Col xs={12} className="d-md-none d-flex mt-4 justify-content-center">
                            <ResizeButton
                                // btnText={t("heroSection.cv")}
                                btnText="Get My CV"
                                btnIcons={<MdFileDownload />}
                                onClick={handleDownloadCV}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default HomePage;