import movieApiImg from 'assets/project/movie-api.png';
import pinterestApiImg from 'assets/project/pinterest-api.png';
import shoeStoreImg from 'assets/project/shoe-store.png';
import corpVisionImg from 'assets/project/corp-vision.png';
import samarImg from 'assets/project/samar.png';
import guardiansGalaxyImg from 'assets/project/guardians-galaxy.png';

export const APP_DATA = {
    GITHUB_URL: "https://github.com/thanhhien1732/",
    LINKEDIN_URL: "https://www.linkedin.com/in/thanhhien1732/",
    FACEBOOK_URL: "https://www.facebook.com/bapbap242/",
}

export const EXPERIENCES = [
    {
        id: 1,
        duration: "05/2024 - 08/2024",
        company: "CyberSoft Technology Co., Ltd",
        title: "Fullstack Intern",
    },
]

export const PROJECTS = [
    {
        id: 1,
        imgPath: movieApiImg,
        title: "MOVIE API",
        description: "Modular NestJS REST API for movie streaming and ticket booking - optimized search with offset pagination and concurrent Prisma queries, Cloudinary uploads with buffered streams and automatic asset cleanup, secure endpoints via JWT (access/refresh) + Bcrypt and DTO validation, containerized with Docker and documented with Swagger.",
        githubLink: "https://github.com/thanhhien1732/nestjs-movie-api.git",
        demoLink: "https://youtu.be/uMxKchLJJsg"
    },
    {
        id: 2,
        imgPath: pinterestApiImg,
        title: "PINTEREST API",
        description: "Pinterest-like ExpressJS backend using MVC + service layer; Prisma relational schemas with composite primary keys to avoid duplicate transactions; Multer + Cloudinary for media with public_id-based automated cleanup; secure JWT (access/refresh) + Bcrypt auth; MySQL in Docker; API docs via Swagger.",
        githubLink: "https://github.com/thanhhien1732/expressjs-pinterest-api.git",
        demoLink: "https://youtu.be/sf6Qh9zQSdg"
    },
    {
        id: 3,
        imgPath: shoeStoreImg,
        title: "SHOE STORE",
        description: "Built a responsive shoe store e-commerce website with a focus on frontend architecture, reusable UI components, and seamless state management. Implemented product browsing, cart handling, and checkout flow with clean code structure and a smooth user experience.",
        githubLink: "https://github.com/thanhhien1732/shoe-store.git",
        demoLink: "https://shoe-store-nu-ruddy.vercel.app/"
    },
    {
        id: 4,
        imgPath: corpVisionImg,
        title: "CORP VISION LANDING PAGE",
        description: "Professional landing page built with pure HTML, CSS, and Bootstrap framework. Implemented fully responsive design with Bootstrap grid system and utility classes, custom CSS animations, and smooth scrolling interactions. Features clean semantic markup, optimized for performance and accessibility, with modern UI components for engaging user experience.",
        githubLink: "https://github.com/thanhhien1732/landing_page-corp_vision.git",
        demoLink: "https://landing-page-corp-vision.vercel.app/"
    },
    {
        id: 5,
        imgPath: samarImg,
        title: "SAMAR LANDING PAGE",
        description: "Professional landing page built with pure HTML and CSS, demonstrating semantic markup and modern styling techniques without frameworks. Features fully responsive design using CSS Grid and Flexbox, custom CSS animations for interactive elements, and optimized performance with clean code structure. Showcases web fundamentals expertise with elegant visual design and smooth user interactions.",
        githubLink: "https://github.com/thanhhien1732/landing_page-samar.git",
        demoLink: "https://landing-page-samar.vercel.app/"
    },
    {
        id: 6,
        imgPath: guardiansGalaxyImg,
        title: "GUARDIANS GALAXY",
        description: "Interactive web game built with vanilla JavaScript, featuring engaging gameplay mechanics and dynamic visual effects. Implemented canvas rendering for smooth animations, event-driven architecture for player input handling, and efficient game state management. Showcases DOM manipulation, collision detection algorithms, and performance optimization techniques for real-time gaming experience.",
        githubLink: "https://github.com/thanhhien1732/guardians-galaxy.git",
        demoLink: "https://guardians-galaxy-ebon.vercel.app/"
    }
]