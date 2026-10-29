export const config = {
    developer: {
        name: "Madhavan",
        fullName: "Madhavan V",
        title: "Prompt Engineer | Full-Stack Developer",
        description: "Results-oriented Full-Stack Developer with a strong foundation in React, Spring Boot, and MySQL. Proficient in building efficient applications using Data Structures and Algorithms, with a proven track record of solving 400+ LeetCode problems."
    },
    social: {
        github: "Madhavan1232",
        email: "madhavanvairavan3@gmail.com",
        location: "Coimbatore, Tamil Nadu, India",
        linkedin: "https://www.linkedin.com/in/madhavan-v-55a92b396/"
    },
    about: {
        title: "About Me",
        description: "Full-Stack Developer and Software Engineer with a strong foundation in building scalable, reliable, and user-centric web applications. Specialized in modern frontend development using React.js and backend microservices architecture with Java and Spring Boot. Holds hands-on experience delivering end-to-end solutions across diverse domains, including freelancer marketplace platforms, image gallery applications, and local service platforms — combining technical depth with real-world product thinking."
    },
    experiences: [
        {
            position: "Prompt Engineer & Full-Stack Developer",
            company: "AI Workflows · React · Spring Boot",
            period: "NOW",
            location: "Coimbatore, India",
            description: "Designing AI-powered experiences and building full-stack applications with practical backend integrations.",
            responsibilities: [
                "Designing AI-powered experiences and building full-stack applications with practical backend integrations",
                "Specialized in modern frontend development using React.js and backend microservices architecture with Java and Spring Boot",
                "Solved 400+ problems on LeetCode reflecting deep proficiency in Data Structures and Algorithms"
            ],
            technologies: ["AI Workflows", "Prompt Engineering", "React.js", "Spring Boot", "Java", "Python", "REST APIs"]
        },
        {
            position: "Software Engineering Intern",
            company: "HCL",
            period: "2025",
            location: "Coimbatore, India",
            description: "Engineered a full-stack image gallery application aggregating content from 3+ third-party platforms, supporting 500+ media assets with seamless Azure-hosted deployment.",
            responsibilities: [
                "Engineered a full-stack image gallery application aggregating content from 3+ third-party platforms",
                "Supported 500+ media assets with seamless Azure-hosted deployment",
                "Crafted the platform using React.js and Node.js with REST APIs for image management and authentication",
                "Integrated three external image APIs for efficient image retrieval and gallery management"
            ],
            technologies: ["React.js", "Node.js", "Express", "MySQL", "Azure", "REST APIs"]
        },
        {
            position: "Full-Stack Projects",
            company: "FLEXORA · PIXORA · Academic Systems",
            period: "2024–2025",
            location: "Coimbatore, India",
            description: "Architected marketplace ecosystems and cloud-hosted image galleries utilizing React.js and Spring Boot microservices with 20+ secure REST APIs, JWT-based RBAC, and seamless Azure-hosted deployment.",
            responsibilities: [
                "Architected marketplace ecosystems utilizing React.js and Spring Boot microservices",
                "Built 20+ secure REST APIs for authentication, project management, and freelancer operations",
                "Implemented JWT-based authentication and role-based access control for secure user access",
                "Ensured high platform efficiency, transactional integrity, and scalable database schemas"
            ],
            technologies: ["Spring Boot", "React.js", "MySQL", "Spring Security", "JWT", "REST APIs"]
        },
        {
            position: "B.Tech in Information Technology",
            company: "Sri Krishna College of Engineering and Technology",
            period: "2023–2027",
            location: "Coimbatore, Tamil Nadu",
            description: "Bachelor of Technology (B.Tech) in Information Technology from Sri Krishna College of Engineering and Technology. Verified Cumulative GPA: 7.97 / 10.0.",
            responsibilities: [
                "Bachelor of Technology (B.Tech) in Information Technology • Verified CGPA: 7.97 / 10.0",
                "Infosys Certified: Java Programming Certification, C++ Professional Certification",
                "Cisco Certified: Python for Data Science and Network Automation",
                "Core Mastery: RESTful APIs, System Design, Data Structures & Algorithms"
            ],
            technologies: ["Java", "Python", "C++", "JavaScript", "SQL", "HTML5", "CSS3"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "GrandFish",
            category: "Chess AI Engine",
            technologies: "React.js, Stockfish AI, Chess.js, React-Chessboard, Web Workers",
            image: "/images/grand-fish.png",
            description: "Interactive browser-based chess web application powered by the Stockfish AI engine. Play against the AI with difficulty levels ranging from basic to master, featuring real-time move validation and game clock.",
            link: "https://grand-fish.vercel.app/"
        },
        {
            id: 2,
            title: "Pixora",
            category: "Image Gallery Platform",
            technologies: "React.js, Node.js, Express, MySQL, Azure, External Image APIs",
            image: "/images/pixora.png",
            description: "Crafted an image gallery platform using React.js and Node.js. Built REST APIs for user authentication and image management, aggregating content from 3+ third-party platforms with Azure-hosted deployment.",
            link: "https://pixorafrontend.z29.web.core.windows.net/"
        },
        {
            id: 3,
            title: "Flexora",
            category: "Freelance Marketplace Platform",
            technologies: "React.js, Spring Boot, MySQL, Spring Security, JWT, REST APIs",
            image: "/images/flexora.png",
            description: "Architected a marketplace ecosystem utilizing React.js and Spring Boot microservices. Built 20+ secure REST APIs for authentication, project management, and freelancer operations with JWT-based RBAC.",
            link: "https://madhavan1232.github.io/freelance-marketplace/"
        },
        {
            id: 4,
            title: "ATM Management System",
            category: "CLI Banking Application",
            technologies: "Java, Spring Boot, MySQL, Spring Data JPA",
            image: "/images/atm-terminal.png",
            description: "Engineered a CLI banking application using Spring Boot with a MySQL backend. Designed a secure login system with a 3-attempt lockout policy, automated account blocking, and an Admin Dashboard for global monitoring.",
            link: "https://github.com/Madhavan1232/ATMConsoleApplication"
        },
        {
            id: 5,
            title: "QuickFix",
            category: "Local Service Finder",
            technologies: "Java, Spring Boot, MySQL, REST APIs, Logging",
            image: "/images/quickfix.png",
            description: "Created a local service finder application using Java, Spring Boot, and MySQL. Built REST APIs for service listings and booking management, incorporating global exception handling and logging.",
            link: "https://github.com/Madhavan1232/quickfix"
        },
        {
            id: 6,
            title: "Internova",
            category: "Placement Portal",
            technologies: "React.js, Spring Boot, Java, MySQL, Tailwind CSS, Gemini AI, LeetCode API",
            image: "/images/internova.png",
            description: "Full-stack Internship Training & Placement Portal featuring OAuth RBAC, LeetCode stats synchronization, automated Gemini AI resume parsing, and placement analytics dashboards.",
            link: "https://github.com/LuckyBoy587/Capstone-Project-ITP-System"
        },
        {
            id: 7,
            title: "Quiz App",
            category: "Frontend Utility",
            technologies: "React.js, JavaScript, HTML5, CSS3",
            image: "/images/quiz-app.png",
            description: "An interactive, responsive React quiz application featuring real-time scoring progression, wrong answer reviews, instant visual feedback, and JSON-driven question pools.",
            link: "https://madhavan1232.github.io/quizapp/"
        }
    ],
    contact: {
        email: "madhavanvairavan3@gmail.com",
        github: "https://github.com/Madhavan1232",
        linkedin: "https://www.linkedin.com/in/madhavan-v-55a92b396/",
        twitter: "https://x.com/Maddy__2006",
        facebook: "https://www.linkedin.com/in/madhavan-v-55a92b396/",
        instagram: "https://www.instagram.com/maddy_luxe/",
        resume: "/assets/madhavan-resume.pdf"
    },
    skills: {
        develop: {
            title: "BACKEND & ARCHITECTURE",
            description: "Spring Boot Microservices, RESTful APIs & System Design",
            details: "Building reliable, scalable backend applications with Java, Spring Boot, Node.js, and MySQL. Proficient in RESTful API development, JWT-based security, relational database design, and Data Structures & Algorithms.",
            tools: ["Java", "Spring Boot", "Node.js", "MySQL", "RESTful APIs", "System Design", "Data Structures", "Algorithms", "JWT", "Maven", "Git/GitHub"]
        },
        design: {
            title: "FRONTEND & WEB DEV",
            description: "Modern React.js Interfaces & Scalable Frontend Solutions",
            details: "Crafting modular, interactive, and high-performance web applications using React.js, JavaScript, HTML5, and CSS3. Focused on clean state management, responsive UX, API integrations, and robust web standards.",
            tools: ["React.js", "JavaScript", "HTML5", "CSS3", "Git/GitHub", "Postman", "Maven", "Python", "C++", "SQL"]
        }
    }
};
