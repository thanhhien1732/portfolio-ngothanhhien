import { fadeIn } from "variants";
import { motion } from "framer-motion";

function Text() {
    return (
        <>
            <motion.h1
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h1"
            >
                About <span style={{ color: 'rgba(var(--bs-link-color-rgb), 1)' }}>me</span>
            </motion.h1>

            <motion.p
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mx-auto mx-xl-0"
                style={{ maxWidth: '500px' }}
            >
                A proactive Node.js Engineer specializing in ExpressJS and NestJS, with a strong commitment to writing
                clean, secure and maintainable code. Possesses hands-on experience in building scalable RESTful APIs,
                optimizing database queries and utilizing Docker for environment containerization.
            </motion.p>
        </>
    );
}
export default Text;