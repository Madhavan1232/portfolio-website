# Portfolio Overview: Featured Projects & Tech Stack

This document answers the questions regarding the current projects and skills/tech stack highlighted on the portfolio website.

---

## 1. Which projects are featured?

There are currently **6 projects** configured in [`src/config.ts`](file:///d:/Personal%20Hobby%20Projects/portfolio-website/src/config.ts). 

> **Display Note:** 
> - The first **5 projects** are featured on the homepage in the interactive horizontal scrolling section ([`src/components/Work.tsx`](file:///d:/Personal%20Hobby%20Projects/portfolio-website/src/components/Work.tsx)).
> - All **6 projects** are featured on the dedicated **All Works** page ([`src/pages/MyWorks.tsx`](file:///d:/Personal%20Hobby%20Projects/portfolio-website/src/pages/MyWorks.tsx)).

### Complete List of Featured Projects

| # | Project Name | Category | Technologies Used | Key Description & Link |
|---|--------------|----------|-------------------|------------------------|
| **01** | **Pixora** | Image Gallery Platform | React.js, Node.js, Express, MySQL, Azure, External Image APIs | Aggregates content from 3+ third-party image platforms with REST APIs and cloud hosting on Azure.<br>🔗 [Live Demo](https://pixorafrontend.z29.web.core.windows.net/) |
| **02** | **Flexora** | Freelance Marketplace Platform | React.js, Spring Boot, MySQL, Spring Security, JWT, REST APIs | Marketplace ecosystem powered by Spring Boot microservices with 20+ secure REST APIs, role-based access control (RBAC), and JWT authentication.<br>🔗 [Live Demo](https://madhavan1232.github.io/freelance-marketplace/) |
| **03** | **ATM Management System** | CLI Banking Application | Java, Spring Boot, MySQL, Spring Data JPA | Banking terminal application with a 3-attempt lockout policy, automated account blocking, and an Admin Dashboard for global monitoring.<br>🔗 [GitHub Repo](https://github.com/Madhavan1232/ATMConsoleApplication) |
| **04** | **QuickFix** | Local Service Finder | Java, Spring Boot, MySQL, REST APIs, Logging | Local service directory and booking management system with global exception handling and structured logging.<br>🔗 [GitHub Repo](https://github.com/Madhavan1232/quickfix) |
| **05** | **Internova** | Placement Portal | React.js, Spring Boot, Java, MySQL, Tailwind CSS, Gemini AI, LeetCode API | Full-stack Internship Training & Placement Portal featuring OAuth RBAC, automated Gemini AI resume parsing, LeetCode stats synchronization, and analytics dashboards.<br>🔗 [GitHub Repo](https://github.com/LuckyBoy587/Capstone-Project-ITP-System) |
| **06** | **Quiz App** | Frontend Utility | React.js, JavaScript, HTML5, CSS3 | Interactive React quiz application with real-time scoring progression, wrong answer reviews, and JSON question pools.<br>🔗 [Live Demo](https://madhavan1232.github.io/quizapp/) |

---

### Status of the Specific Projects You Asked About

1. **Resume Parser:**
   - **Partially / Feature-Integrated (Not Standalone):** There is no standalone project card titled "Resume Parser". However, it is a flagship AI feature inside **Internova** (Project #5), which utilizes **Google Gemini AI for automated resume parsing** and candidate profile extraction.
2. **FOCUS App:**
   - **Not on the portfolio:** There is no project named "FOCUS" or focus/productivity app in the codebase.
3. **Rise / Elevora Platform:**
   - **Replaced / Named as Flexora:** Neither "Rise" nor "Elevora" is featured under those specific names. The freelance marketplace platform featured on the website is **Flexora** ([`src/config.ts`](file:///d:/Personal%20Hobby%20Projects/portfolio-website/src/config.ts#L87-L93)), built with React.js, Spring Boot microservices, MySQL, and JWT-based authentication.

---

## 2. Any new skills/stack highlighted?

Yes. While **AI and Prompt Engineering** are now prominently featured, several other domains and technical competencies are highlighted alongside them across the website:

### A. AI & Prompt Engineering (Front and Center)
- **Hero Title & Bio:** Labeled as `"Prompt Engineer | Full-Stack Developer"` on the landing screen ([`src/components/Landing.tsx`](file:///d:/Personal%20Hobby%20Projects/portfolio-website/src/components/Landing.tsx#L25-L31)).
- **Current Experience (NOW):** Titled `"Prompt Engineer & Full-Stack Developer"` focused on "Designing AI-powered experiences and building full-stack applications with practical backend integrations" ([`src/config.ts`](file:///d:/Personal%20Hobby%20Projects/portfolio-website/src/config.ts#L20-L31)).
- **AI Tools in Tech Stack:** The pyramid structure in [`src/components/TechStackNew.tsx`](file:///d:/Personal%20Hobby%20Projects/portfolio-website/src/components/TechStackNew.tsx#L60-L66) dedicates a tier exclusively to AI systems:
  - **Claude**
  - **ChatGPT**
  - **Gemini** (also used inside the Internova project)
  - **Perplexity**
  - **Google Antigravity** (featured in Row 3 tools)
- **AI Serverless Backend:** An active API handler at [`api/chat.js`](file:///d:/Personal%20Hobby%20Projects/portfolio-website/api/chat.js) powered by Groq (`openai/gpt-oss-20b`).

---

### B. What Else is Highlighted?

Beyond AI and Prompt Engineering, the following core strengths are showcased:

#### 1. Data Structures, Algorithms & Competitive Programming
- **LeetCode 400+:** Positioned at the very apex/tip of the 6-tier inverted Tech Stack pyramid ([`src/components/TechStackNew.tsx:L69`](file:///d:/Personal%20Hobby%20Projects/portfolio-website/src/components/TechStackNew.tsx#L69)) and prominently mentioned in the developer bio and career experience.

#### 2. Enterprise Java & Spring Boot Microservices
- **Backend & Architecture:** Highlighted in the "What I Do" section ([`src/components/WhatIDo.tsx`](file:///d:/Personal%20Hobby%20Projects/portfolio-website/src/components/WhatIDo.tsx)) as the primary engineering pillar.
- **Technologies:** Java, Spring Boot, Spring Data JPA, Hibernate, Spring Security, JWT authentication, Maven.
- **System Design:** Sits at the tip of the Tech Stack pyramid alongside LeetCode.

#### 3. 3D Web & Interactive Creative Frontend
- **Three.js & WebGL:** Drives an interactive 3D developer character avatar on desktop view ([`src/components/Character`](file:///d:/Personal%20Hobby%20Projects/portfolio-website/src/components/Character)).
- **GSAP & Lenis:** Smooth scrolling dynamics, horizontal scroll triggers for the project showcase, and split-text animations.
- **Modern UI:** React 18, TypeScript, Tailwind CSS, Bootstrap, HTML5, and CSS3.

#### 4. Cloud, Deployment & DevOps
- **Microsoft Azure:** Featured in the HCL internship experience and Pixora project (Blob/CDN/Static Web Apps).
- **AWS & Docker:** Highlighted in Row 2 of the Tech Stack.
- **Vercel:** Deployment platform for the portfolio web app and serverless endpoints.

#### 5. Databases & API Tooling
- **Databases:** MySQL, PostgreSQL, MongoDB.
- **API Tooling:** Postman, Swagger (OpenAPI), RESTful API architecture.
- **IDEs & System Tools:** IntelliJ IDEA, VS Code, PyCharm, Bash, Git, GitHub.

#### 6. Formal Certifications & Education
- **B.Tech in Information Technology** (Sri Krishna College of Engineering and Technology, CGPA: 7.97/10.0).
- **Infosys Certified:** Java Programming Certification, C++ Professional Certification.
- **Cisco Certified:** Python for Data Science and Network Automation.

---

### C. The 6-Tier Tech Stack Pyramid Breakdown ([TechStackNew.tsx](file:///d:/Personal%20Hobby%20Projects/portfolio-website/src/components/TechStackNew.tsx))

The interactive tech stack is structured as an inverted pyramid (12 → 10 → 8 → 6 → 4 → 2):

1. **Row 1 (Core Languages & Web Fundamentals - 12):** Java, Spring Boot, React, JavaScript, TypeScript, Python, C++, C, HTML5, CSS3, Tailwind, Bootstrap.
2. **Row 2 (Backends, DBs & Cloud - 10):** Node.js, Express, MySQL, PostgreSQL, MongoDB, Azure, AWS, Docker, Git, GitHub.
3. **Row 3 (Dev Tools, Environments & Platforms - 8):** IntelliJ, VS Code, Postman, Maven, NPM, Antigravity, Bash, Vercel.
4. **Row 4 (Frameworks, ORM & UI Design - 6):** PyCharm, Hibernate, Next.js, Swagger, Figma, Vite.
5. **Row 5 (AI & Prompt Engineering - 4):** Claude, ChatGPT, Gemini, Perplexity.
6. **Row 6 (Core Mastery / Tip of Pyramid - 2):** LeetCode 400+, System Design.
