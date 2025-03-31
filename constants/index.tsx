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

export const latest_jobs = [
    { id: 1, image: "./job_1.png", date: "December 05, 2021", tag: "Product Design", title: "UI/UX Designer" },
    { id: 2, image: "./job_2.png", date: "June 05, 2025", tag: "Web Development", title: "React Native Developer" },
    { id: 3, image: "./job_3.png", date: "December 05, 2021", tag: "Scrum Master", title: "Business Analyst" },
]

export const testimonials = [
    { id: 1, image: "/test_1.jpg", name: " Mick G.", title: "Head of Sales and Marketing", testimony: "ATCTECH CONSULTING LTD transformed our business with their expert guidance. Their strategic mentorship and hands-on training helped us navigate the complexities of digital transformation, enabling us to scale efficiently and stay ahead of the competition." },
    { id: 2, image: "/test_2.jpg", name: "Esther P.", title: "Product Manager", testimony: "ATCTECH CONSULTING LTD's mentorship and consulting services exceeded our expectations. Their ability to simplify complex concepts and provide practical solutions allowed us to innovate, adapt, and remain competitive in an ever-evolving tech landscape." },
    { id: 3, image: "/test_3.jpg", name: "Sophia L.", title: "Operations Manager", testimony: "The professionalism and expertise of ATCTECH CONSULTING LTD are unmatched. Their tailored solutions and in-depth industry knowledge provided us with the tools and strategies needed to optimize our operations and drive sustainable growth." },
]

export const partners = [
    { id: 1, image: "/brand_1.png" },
    { id: 2, image: "/brand_2.png" },
    { id: 3, image: "/brand_3.png" },
    { id: 4, image: "/brand_4.png" },
    { id: 5, image: "/brand_5.png" },
    { id: 6, image: "/brand_6.png" },
    { id: 7, image: "/brand_7.png" },
    { id: 8, image: "/brand_8.png" },
]

export const mission_list = [
    { id: 1, text: "Providing expert training and mentorship for career growth." },
    { id: 2, text: "Delivering seamless and scalable technology solutions." },
    { id: 3, text: "Enabling businesses to leverage digital tools effectively." },
]

export const vision_list = [
    { id: 1, text: "Enabling businesses to leverage digital tools effectively." },
    { id: 2, text: "Equipping professionals with essential tech skills." },
    { id: 3, text: "Creating a collaborative ecosystem for innovation." },
]

export const team_members = [
    { id: 1, image: "/team_1.jpg", name: "Princy Flora", title: "Co-Founder of Alofirm", facebook: "#", twitter: "#", linkedin: "#" },
    { id: 2, image: "/team_2.jpg", name: "Jane Smith", title: "CTO", facebook: "#", twitter: "#", linkedin: "#" },
    { id: 3, image: "/team_3.jpg", name: "Michael Johnson", title: "CFO", facebook: "#", twitter: "#", linkedin: "#" },
]

export const addresses = [
    {
        id: 1, country: "Nigeria", slug: "NG", text: "2, Salawu close, Alimosho, Lagos."
    },
    {
        id: 2, country: "United Kingdom", slug: "UK", text: "BRISTOL, Aztec West"
    },
]

export const faqs = [
    {
        id: 1,
        question: "What services does ATCTECH CONSULTING LTD offer?",
        answer: "We provide expert technology consulting, professional training, and strategic mentorship to help businesses and individuals navigate the digital landscape and achieve their goals."
    },
    {
        id: 2,
        question: "Who can benefit from your services?",
        answer: "Our services are tailored for businesses, startups, and professionals looking to enhance their technological capabilities, adopt innovative solutions, and gain industry-leading expertise."
    },
    {
        id: 3,
        question: "Do you offer customized technology solutions?",
        answer: "Yes, we analyze your specific needs and provide customized solutions that align with your business objectives and industry trends."
    },
    {
        id: 4,
        question: "How can I enroll in your training programs?",
        answer: "You can enroll by visiting our website, filling out the registration form, or contacting our team for assistance."
    },
    {
        id: 5,
        question: "How can I get in touch with ATCTECH CONSULTING LTD?",
        answer: "You can reach us via email, phone, or through the contact form on our website. Our team will respond as soon as possible."
    }
]

export const recruiting_jobs = [
    {
        id: 1,
        department: "Engineering",
        title: "Senior Full Stack Developer",
        city: "London, UK",
        jobType: "Full Time",
        description: "We're looking for a Senior Full Stack Developer with expertise in React, Node.js, and cloud technologies. You'll be responsible for architecting and implementing scalable solutions for our enterprise clients.",
        requirements: [
            "8+ years of experience in web development",
            "Strong proficiency in React, Node.js, and TypeScript",
            "Experience with cloud platforms (AWS/Azure/GCP)",
            "Knowledge of microservices architecture"
        ],
        link: "/jobs/senior-full-stack-developer"
    },
    {
        id: 2,
        department: "Design",
        title: "UI/UX Designer",
        city: "New York, USA",
        jobType: "Full Time",
        description: "Join our design team to create intuitive and engaging user experiences for our digital products. You'll work closely with developers and product managers to bring designs to life.",
        requirements: [
            "5+ years of UI/UX design experience",
            "Proficiency in Figma and Adobe Creative Suite",
            "Experience with design systems",
            "Strong portfolio demonstrating user-centered design"
        ],
        link: "/jobs/ui-ux-designer"
    },
    {
        id: 3,
        department: "Data Science",
        title: "Machine Learning Engineer",
        city: "Berlin, Germany",
        jobType: "Full Time",
        description: "We're seeking a Machine Learning Engineer to develop and deploy AI solutions. You'll work on cutting-edge projects involving natural language processing and computer vision.",
        requirements: [
            "Masters/PhD in Computer Science or related field",
            "Experience with PyTorch or TensorFlow",
            "Strong background in mathematics and statistics",
            "Published research papers is a plus"
        ],
        link: "/jobs/machine-learning-engineer"
    },
    {
        id: 4,
        department: "Product",
        title: "Product Manager",
        city: "Singapore",
        jobType: "Full Time",
        description: "Lead product strategy and execution for our enterprise solutions. You'll work with stakeholders to define product vision and ensure successful delivery.",
        requirements: [
            "5+ years of product management experience",
            "Strong analytical and problem-solving skills",
            "Experience with agile methodologies",
            "Excellent communication skills"
        ],
        link: "/jobs/product-manager"
    },
    {
        id: 5,
        department: "Engineering",
        title: "DevOps Engineer",
        city: "Remote",
        jobType: "Part Time",
        description: "Join our DevOps team to build and maintain our cloud infrastructure. You'll work on automation, deployment, and monitoring of our systems.",
        requirements: [
            "3+ years of DevOps experience",
            "Experience with Docker and Kubernetes",
            "Knowledge of CI/CD pipelines",
            "Cloud certification (AWS/Azure) preferred"
        ],
        link: "/jobs/devops-engineer"
    },
    {
        id: 6,
        department: "Marketing",
        title: "Digital Marketing Specialist",
        city: "Toronto, Canada",
        jobType: "Part Time",
        description: "Drive our digital marketing initiatives across various channels. You'll be responsible for SEO, content strategy, and social media marketing.",
        requirements: [
            "3+ years of digital marketing experience",
            "Experience with SEO and Google Analytics",
            "Strong content creation skills",
            "Knowledge of marketing automation tools"
        ],
        link: "/jobs/digital-marketing-specialist"
    }
]