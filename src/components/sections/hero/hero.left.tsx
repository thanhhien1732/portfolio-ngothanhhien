import Typewriter from "typewriter-effect";
import SocialMedia from "components/sections/social.media";
// import { useTranslation } from "react-i18next";
import './hero.scss';
import ResizeButton from "components/sections/resize.button";
import { useNavigate } from "react-router-dom";
import { APP_DATA } from '@/helpers/data';
import { MdFileDownload } from "react-icons/md";

const HeroLeft = () => {
    // const { t } = useTranslation();
    const urlCV = "https://drive.google.com/file/d/1yqtOIVH23jlf_vgX7XKPRegGxpmJ-xAm/view?usp=sharing";

    const handleDownloadCV = () => {
        const newWindow = window.open(urlCV, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    }

    const navigate = useNavigate();

    return (
        <div className='hero-left'>
            <h3>
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                </span>
            </h3>
            <h3 style={{ paddingTop: 10, paddingBottom: 5 }}>
                I'm &nbsp;
                {/* <strong className="brand-blue">{t("appHeader.brand")}</strong> */}
                <strong className="brand-blue">Ngo Thanh Hien</strong>
            </h3>
            <Typewriter
                options={{
                    strings: [
                        "Software Engineer",
                        "Backend Developer",
                        "NodeJS Developer",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    wrapperClassName: "brand-green"
                }}
            />
            <div className="mt-md-6 mt-3 mb-md-5 mb-2">
                <SocialMedia
                    github={APP_DATA.GITHUB_URL}
                    linkedin={APP_DATA.LINKEDIN_URL}
                    facebook={APP_DATA.FACEBOOK_URL}
                />
            </div>
            <div className="d-md-flex d-none gap-4">
                <ResizeButton
                    // btnText={t("heroSection.exp")}
                    btnText="About Me"
                    btnStyle={{
                        background: "unset",
                        border: "1px solid var(--border-hero-right)",
                        color: "var(--text-white-1)"
                    }}
                    onClick={() => navigate('/about')}
                />

                <ResizeButton
                    // btnText={t("heroSection.cv")}
                    btnText="Get My CV"
                    btnIcons={<MdFileDownload />}
                    onClick={handleDownloadCV}
                />
            </div>
        </div>
    )
}

export default HeroLeft;