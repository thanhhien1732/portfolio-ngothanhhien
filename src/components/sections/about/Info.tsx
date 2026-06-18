import { useState } from "react";
import { BsLink45Deg } from "react-icons/bs";

// data
const aboutData = [
    // Skills
    {
        title: "skills",
        info: [
            {
                title: "Front-End Development",
                icons: (
                    <>
                        {/* desktop */}
                        <div className="d-none d-sm-block" style={{ height: "48px" }}>
                            <img
                                src={"https://skillicons.dev/icons?i=html,css,sass,ts,react,bootstrap,tailwind"}
                                width={0}
                                height={0}
                                style={{ width: "100%", height: "100%" }}
                                alt="iconsSkillFrontEnd"
                            />
                        </div>
                        {/* mobile */}
                        <div className="d-block d-sm-none">
                            <div className="mx-auto" style={{ height: "30px" }}>
                                <img
                                    src={"https://skillicons.dev/icons?i=html,css,sass,ts,react,bootstrap,tailwind"}
                                    width={0}
                                    height={0}
                                    style={{ width: "100%", height: "100%" }}
                                    alt="iconsSkillFrontEnd"
                                />
                            </div>
                        </div>
                    </>
                ),
            },
            {
                title: "Back-End Development",
                icons: (
                    <>
                        {/* desktop */}
                        <div className="d-none d-sm-block">
                            <img
                                src={"https://skillicons.dev/icons?i=js,nodejs,express,nestjs,prisma,mysql,mongodb,python"}
                                width={0}
                                height={0}
                                style={{ width: "100%", height: "100%" }}
                                alt="iconsSkillBackEnd"
                            />
                        </div>
                        {/* mobile */}
                        <div className="d-block d-sm-none">
                            <div className="mx-auto" style={{ height: "30px" }}>
                                <img
                                    src={"https://skillicons.dev/icons?i=js,nodejs,express,nestjs,prisma,mysql,mongodb,python"}
                                    width={0}
                                    height={0}
                                    style={{ width: "100%", height: "100%" }}
                                    alt="iconsSkillBackEnd"
                                />
                            </div>
                        </div>
                    </>
                ),
            },
            {
                title: "Tool",
                icons: (
                    <>
                        {/* desktop */}
                        <div className="d-none d-sm-block">
                            <img
                                src={"https://skillicons.dev/icons?i=git,github,postman,docker,aws"}
                                width={0}
                                height={0}
                                style={{ width: "100%", height: "100%" }}
                                alt="iconsSkillTool"
                            />
                        </div>
                        {/* mobile */}
                        <div className="d-block d-sm-none">
                            <div className="mx-auto" style={{ height: "30px" }}>
                                <img
                                    src={"https://skillicons.dev/icons?i=git,github,postman,docker,aws"}
                                    width={0}
                                    height={0}
                                    style={{ width: "100%", height: "100%" }}
                                    alt="iconsSkillTool"
                                />
                            </div>
                        </div>
                    </>
                ),
            },
        ],
    },

    // Education
    {
        title: "education",
        info: [
            {
                title: (
                    <div>
                        <p className="mb-0">
                            <span>2021 - 2025</span>
                        </p>
                        <p className="mb-0">
                            <span className="fw-bold fs-5">VAN LANG UNIVERSITY</span>
                        </p>
                        <p className="mb-0">
                            <span>Bachelor Of Information Technology</span>
                            <span> - </span>
                            <span>GPA: 3.09/4.0</span>
                        </p>
                    </div>
                ),
                icons: [],
            },
            {
                title: (
                    <div>
                        <p className="mb-0">
                            <span>07/2025 - 09/2025</span>
                        </p>
                        <p className="mb-0">
                            <span className="fw-bold fs-5">CYBERSOFT ACADEMY</span>
                        </p>
                        <p className="mb-0">
                            <span>NodeJS Developer Certification</span>
                            <span> - </span>
                            <span>Score: 9.6/10.0</span>
                        </p>
                    </div>
                ),
                icons: [],
            },
        ],
    },

    // Certifications
    {
        title: "certifications",
        info: [
            {
                title: (
                    <>
                        <p className="mb-0 fw-bold fs-5">Professional NodeJS Developer</p>
                        <p className="d-flex gap-1 align-items-center justify-content-center justify-content-xl-start mb-0">
                            <span>Date: 17/11/2025</span>
                            <span> - </span>
                            <a className="d-flex align-items-center text-decoration-underline" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1ZvFihPzn7FofjHYmMODUQ5Zmvd8huYUu/view?usp=drive_link">
                                <BsLink45Deg />
                                Link
                            </a>
                        </p>
                    </>
                ),
                icons: [],
            },
        ],
    },

    // Awards
    {
        title: "awards",
        info: [
            {
                title: (
                    <div>
                        <p className="mb-0">
                            <span className="fw-bold fs-5">University Scholarship</span>
                        </p>
                        <ul style={{ listStylePosition: "inside" }}>
                            <li>Academic Year 2023 - 2024</li>
                            <li>Academic Year 2022 - 2023</li>
                            <li>Academic Year 2021 - 2022</li>
                        </ul>
                    </div >
                ),
                icons: [],
            },
            {
                title: (
                    <>
                        <p className="mb-0 fw-bold fs-5">“Bring Van Lang Everywhere” Campaign 2025</p>
                        <ul style={{ listStylePosition: "inside" }}>
                            <li>
                                <span>Most Outstanding School Leader</span>
                                <span> - </span>
                                <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1npganr2g5iE4ATv4_BFnOGUghj3io-pM/view?usp=drive_link">
                                    <BsLink45Deg />
                                    Link
                                </a>
                            </li>
                            <li>
                                <span>Most Impressive Team</span>
                                <span> - </span>
                                <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1YOo3j-lNXZVcNNNP7c8S17Imoi9ENN-a/view?usp=drive_link">
                                    <BsLink45Deg />
                                    Link
                                </a>
                            </li>
                        </ul>
                    </>
                ),
                icons: [],
            },
        ],
    },
];

function Info() {
    const [index, setIndex] = useState(0);

    return (
        <>
            {/* Tabs Navigation */}
            <ul className="nav d-flex gap-3 gap-xl-4 mx-auto mx-xl-0 mb-4 justify-content-center justify-content-xl-start border-bottom-0">
                {aboutData.map((item, itemIndex) => {
                    return (
                        <li className="nav-item" key={itemIndex}>
                            <button
                                className={`nav-link fs-5 text-capitalize nav-tab-underline px-0 py-1 border-0 bg-transparent ${index === itemIndex ? "active fw-bold" : "text-white"
                                    }`}
                                onClick={() => setIndex(itemIndex)}
                                style={{ cursor: "pointer" }}
                            >
                                {item.title}
                            </button>
                        </li>
                    );
                })}
            </ul>

            {/* Tab Content */}
            <div className="py-2 d-flex flex-column gap-2 gap-xl-3 align-items-center align-items-xl-start">
                {aboutData[index].info.map((item, itemIndex) => {
                    return (
                        <div
                            className="d-flex flex-column flex-fill gap-2 text-white-50"
                            style={{ maxWidth: "max-content" }}
                            key={itemIndex}
                        >
                            {/* title */}
                            <div className="fw-light mb-md-0 fw-normal">{item.title}</div>
                            <div className="mb-2">{item.icons}</div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Info;