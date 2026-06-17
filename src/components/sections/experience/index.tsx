import { Row } from "react-bootstrap";
import AnimationLottie from 'components/share/animation-lottie';
import experienceJSON from 'assets/lottie/code.json'
import { EXPERIENCES } from '@/helpers/data'
import GlowCard from "components/share/glow-card";
import { BsPersonWorkspace } from "react-icons/bs";
import blurImg from 'assets/blur-23.svg'
import { useCurrentApp } from "components/context/app.context";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { fadeIn } from "variants";

const Experience = () => {
    const { theme } = useCurrentApp();
    const { t } = useTranslation();

    return (
        <Row>
            <motion.div
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="col-12 my-3 my-md-5"
            >
                <div className="text-center">
                    <h1 style={{ fontWeight: "700" }}>
                        {t("experience.title")}
                    </h1>
                </div>
            </motion.div>
            <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="col-md-6 col-12 d-flex align-items-center justify-content-center"
            >
                <AnimationLottie animationPath={experienceJSON} />
            </motion.div>
            <motion.div
                variants={fadeIn("left", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="col-md-6 col-12"
            >
                <div className="d-flex flex-column gap-5">
                    {
                        EXPERIENCES.map(experience => (
                            <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                                <div className="p-3 relative">
                                    {theme === "dark" &&
                                        <img
                                            style={{ position: "absolute", bottom: 0, opacity: 0.8 }}
                                            src={blurImg}
                                            alt="Hero"
                                            width={"100%"}
                                            height={200}
                                        />
                                    }
                                    <div className="experience-container">
                                        <div className="duration-text">
                                            <p>{experience.duration}</p>
                                        </div>
                                        <div className="details">
                                            <div className="icon">
                                                <BsPersonWorkspace size={36} />
                                            </div>
                                            <div className="info">
                                                <p className="company">{experience.company}</p>
                                                <p className="title">{experience.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </GlowCard>
                        ))
                    }
                </div>
            </motion.div>
        </Row>
    )
}

export default Experience;
