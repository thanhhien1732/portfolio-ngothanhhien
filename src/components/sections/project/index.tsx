import { Row } from "react-bootstrap"
import ProjectCard from "./project.card";
import { PROJECTS } from "@/helpers/data";
import { motion } from "framer-motion";
import { fadeIn } from "variants";

const Project = () => {
    return (
        <>
            <Row>
                <motion.div
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="col-12"
                >
                    <h1 className="text-center" style={{ fontWeight: "700" }}>
                        My <span className="brand-blue">Projects</span>
                    </h1>
                    <h6 className="text-center">Here are a few projects I've worked on recently.</h6>
                </motion.div>
            </Row>
            <Row
                style={{ justifyContent: "center", paddingBottom: "10px" }}
            >
                {PROJECTS?.map((item, index) => {
                    return (
                        <motion.div
                            key={item.id}
                            variants={fadeIn("up", 0.2 + index * 0.15)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="col-md-4 project-card"
                        >
                            <ProjectCard
                                imgPath={item.imgPath}
                                title={item.title}
                                description={item.description}
                                githubLink={item.githubLink}
                                demoLink={item.demoLink}
                            />
                        </motion.div>
                    )
                })}

            </Row>
            <div className="mb-5"></div>
        </>
    )
}

export default Project;