import { FaGithub, FaLinkedin,  FaFacebook } from "react-icons/fa6";

interface IProps {
    github?: string;
    linkedin?: string;
    facebook?: string;
}

const SocialMedia = (props: IProps) => {
    const { facebook, github, linkedin } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a href={github} target='_blank' className="highlight" title="GitHub">
                <FaGithub size={30} />
            </a>
            <a href={linkedin} target='_blank' className="highlight" title="LinkedIn">
                <FaLinkedin size={30} />
            </a>
            <a href={facebook} target='_blank' className="highlight" title="Facebook">
                <FaFacebook size={30} />
            </a>
        </div>
    )
}

export default SocialMedia;