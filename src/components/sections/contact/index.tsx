import { FormEvent, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { fadeIn } from "variants";
import { BsArrowUpRight, BsTelephoneFill, BsEnvelopeAtFill } from "react-icons/bs";

const RECEIVER_EMAIL = "thanhhien1732@gmail.com";

const contactDetails = [
    {
        label: "Phone number / Zalo",
        value: "0335434504",
        icon: <BsTelephoneFill size={20} />,
    },
    {
        label: "Gmail",
        value: RECEIVER_EMAIL,
        icon: <BsEnvelopeAtFill size={20} />,
    },
];

type ContactFormState = {
    fullName: string;
    email: string;
    subject: string;
    message: string;
};

const Contact = () => {
    const [form, setForm] = useState<ContactFormState>({
        fullName: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const subject = encodeURIComponent(form.subject || `Portfolio contact from ${form.fullName}`);
        const body = encodeURIComponent(
            `Name: ${form.fullName}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
        );

        // Cách 2: Mở trang soạn thư của web Gmail trên một Tab mới
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${RECEIVER_EMAIL}&su=${subject}&body=${body}`;
        window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <section>
            <Row className="justify-content-between py-4 py-xl-5 gy-5">

                {/* --- THÔNG TIN & LIÊN HỆ --- */}
                <Col xs={12} lg={6} xl={5}>
                    <motion.div
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <h1 className="display-5 fw-bold mb-3">
                            Let's build something <span className="brand-blue">useful</span> together.
                        </h1>

                        <p className="mb-4" style={{ maxWidth: 560 }}>
                            If you need a backend developer, system architecture design, API integration or a product team member, I'm open to chat. I prefer clear requirements, simple communication and fast iteration.
                        </p>

                        <div className="d-flex flex-wrap gap-2 mb-4">
                            {['NodeJS', 'Backend', 'RESTful APIs'].map((item) => (
                                <span
                                    key={item}
                                    className="px-3 py-2 rounded-pill"
                                    style={{ border: "1px solid var(--border-hero-right)", color: "var(--text-white)" }}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="d-flex flex-column gap-3 mb-4">
                            {contactDetails.map((item) => (
                                <div
                                    key={item.label}
                                    className="d-flex align-items-center gap-3 p-3 rounded-4"
                                    style={{
                                        background: "rgba(255, 255, 255, 0.02)",
                                        border: "1px solid rgba(255, 255, 255, 0.08)",
                                    }}
                                >
                                    <div
                                        className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                                        style={{
                                            width: 44,
                                            height: 44,
                                            background: "rgba(var(--bs-link-color-rgb), 0.1)",
                                            color: "rgba(var(--bs-link-color-rgb), 1)",
                                        }}
                                    >
                                        {item.icon}
                                    </div>

                                    <div>
                                        <p className="mb-1 text-uppercase" style={{ letterSpacing: "0.08em", fontSize: "0.78rem" }}>
                                            {item.label}
                                        </p>
                                        <p className="mb-0 text-white-0 fw-semibold">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </Col>

                {/* --- FORM --- */}
                <Col xs={12} lg={6}>
                    <motion.div
                        variants={fadeIn("left", 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <div
                            className="p-4 p-md-5 rounded-4"
                            style={{ background: "var(--glow-card-background)", border: "1px solid var(--border-hero-right)" }}
                        >
                            <div className="mb-4">
                                <h2 className="h3 mb-0 fw-bold">Send me your message</h2>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-12 col-md-6">
                                        <label className="form-label fw-semibold" htmlFor="fullName">Full name</label>
                                        <input
                                            id="fullName"
                                            className="form-control"
                                            placeholder="Your full name"
                                            value={form.fullName}
                                            onChange={(event) => setForm((prev) => ({ ...prev, fullName: event.target.value }))}
                                            required
                                        />
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <label className="form-label fw-semibold" htmlFor="email">Email</label>
                                        <input
                                            id="email"
                                            className="form-control"
                                            type="email"
                                            placeholder="your@email.com"
                                            value={form.email}
                                            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                                            required
                                        />
                                    </div>

                                    <div className="col-12">
                                        <label className="form-label fw-semibold" htmlFor="subject">Subject</label>
                                        <input
                                            id="subject"
                                            className="form-control"
                                            placeholder="Project inquiry / Collaboration"
                                            value={form.subject}
                                            onChange={(event) => setForm((prev) => ({ ...prev, subject: event.target.value }))}
                                            required
                                        />
                                    </div>

                                    <div className="col-12">
                                        <label className="form-label fw-semibold" htmlFor="message">Message</label>
                                        <textarea
                                            id="message"
                                            className="form-control"
                                            placeholder="Tell me about your project, timeline, and goals..."
                                            rows={6}
                                            value={form.message}
                                            onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
                                    <button type="submit" className="resize-button">
                                        <span>Send</span>
                                        <BsArrowUpRight />
                                    </button>
                                    <span className="small align-self-center opacity-75">
                                        This will open Gmail in a new tab and prepare a message to {RECEIVER_EMAIL}.
                                    </span>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </Col>
            </Row>
        </section>
    );
}

export default Contact;