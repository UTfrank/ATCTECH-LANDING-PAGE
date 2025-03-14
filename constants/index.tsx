import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { GrSend } from "react-icons/gr";
import { SlSettings } from "react-icons/sl";

export const social_links = [
    { id: 1, icon: <FaInstagram />, link: "#" },
    { id: 2, icon: <FaFacebook />, link: "#" },
    { id: 3, icon: <FaTwitter />, link: "#" },
    { id: 4, icon: <FaLinkedin />, link: "#" },
]

export const about_details = [
    { id: 1, icon: <GrSend />, title: "How technology started", subtitle: "Building an enterprise begins with innovation, not just capital." },
    { id: 2, icon: <SlSettings />, title: "Endless Possibilities", subtitle: "Success in business is driven by strategy and expertise, not just investment." }
]

export const learning_section = [
    { id: 1, image: "./master-web-dev.svg", title: "Mastering Web Development", subtitle: "Build dynamic and responsive websites with industry-leading tools and frameworks.", link: "/services" },
    { id: 2, image: "./data-analysis.svg", title: "Data Analysis for Decision-Making", subtitle: "Transform raw data into actionable insights using advanced analytics techniques.", link: "/services" },
    { id: 3, image: "./digital-marketing.svg", title: "Digital Marketing Strategies", subtitle: "Leverage SEO, social media, and paid advertising to drive business growth.", link: "/services" },
    { id: 4, image: "./cyber-security.svg", title: "Cybersecurity Essentials", subtitle: "Protect digital assets and mitigate cyber threats with cutting-edge security practices.", link: "/services" },
    { id: 5, image: "./project-management.svg", title: "Project Management Excellence", subtitle: "Develop essential skills to plan, execute, and manage projects efficiently using industry best practices.", link: "/services" },
    { id: 6, image: "./ai-ml.svg", title: "AI & Machine Learning for Innovation", subtitle: "Harness artificial intelligence to automate processes and drive innovation.", link: "/services" },
]

export const work_process = [
    { id: "01", title: "Understanding Your Needs", subtitle: "We listen to your goals and challenges to find the right solutions for you." },
    { id: "02", title: "Creating a Plan", subtitle: "Our team designs a clear and customized strategy to achieve your objectives." },
    { id: "03", title: "Implementation & Execution", subtitle: "We put the plan into action using the best tools and technology." },
    { id: "04", title: "Ongoing Support & Improvement", subtitle: "We continue to help, update, and improve to ensure long-term success." },
]

export const counter = [
    { id: 1, title: "In Business", count: "10 years" },
    { id: 2, title: "Customers", count: "75,000+" },
    { id: 3, title: "Monthly Blog Readers", count: "100k+" },
    { id: 4, title: "Social Followers", count: "1.2m+" },
]