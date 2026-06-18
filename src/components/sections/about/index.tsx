// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "variants";

// component
import Info from "./Info";
import Counter from "./Counter";
import Text from "./Text";

const About = () => {
    return (
        <section className="h-100 text-center text-xl-start custom-about-section">
            {/* body */}
            <div className="container position-relative pt-xl-6">
                <div className="d-flex flex-column flex-xl-row gap-5">

                    <div className="flex-grow-1 d-flex flex-column col-xl-6">
                        {/* text */}
                        <div className="mb-4 mb-xl-4">
                            <Text />
                        </div>

                        {/* counter */}
                        <motion.div
                            variants={fadeIn("right", 0.6)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="w-100 mx-auto mx-xl-0"
                            style={{ maxWidth: '500px' }}
                        >
                            <Counter />
                        </motion.div>
                    </div>

                    {/* info */}
                    <motion.div
                        variants={fadeIn("left", 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        // Bỏ style maxWidth 48%, thêm class col-xl-6 để tự động chia cột
                        className="d-flex flex-column col-xl-6"
                    >
                        <Info />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;