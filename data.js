// Career paths data for TechNext application
const careersData = {
    "full-stack": {
        title: "Full Stack Developer",
        description: "Master both frontend and backend technologies to build complete web applications from database to user interface.",
        icon: "fas fa-layer-group",
        salary: "₹6-25 LPA (India), $60K-150K (USA)",
        growth: "High demand with 25% job growth expected",
        tags: ["JavaScript", "React", "Node.js", "Database"],
        skills: [
            "HTML/CSS/JavaScript",
            "React/Angular/Vue",
            "Node.js/Express",
            "Database Management",
            "Git/Version Control",
            "API Development",
            "Cloud Services",
            "Testing"
        ],
        roadmap: [
            {
                title: "Frontend Fundamentals",
                description: "Learn HTML, CSS, and JavaScript basics. Understand DOM manipulation and responsive design."
            },
            {
                title: "Modern JavaScript",
                description: "Master ES6+, async programming, and modern JavaScript frameworks like React or Angular."
            },
            {
                title: "Backend Development",
                description: "Learn server-side programming with Node.js, databases, and API development."
            },
            {
                title: "DevOps & Deployment",
                description: "Understand cloud platforms, CI/CD pipelines, and application deployment."
            },
            {
                title: "Advanced Topics",
                description: "Explore microservices, scalability, security, and performance optimization."
            }
        ],
        resources: [
            {
                category: "Courses",
                items: [
                    {
                        name: "The Complete Web Developer Bootcamp",
                        type: "Udemy Course",
                        url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
                        icon: "fas fa-video"
                    },
                    {
                        name: "freeCodeCamp Full Stack",
                        type: "Free Course",
                        url: "https://www.freecodecamp.org/",
                        icon: "fas fa-code"
                    }
                ]
            },
            {
                category: "Documentation",
                items: [
                    {
                        name: "MDN Web Docs",
                        type: "Documentation",
                        url: "https://developer.mozilla.org/",
                        icon: "fas fa-book"
                    },
                    {
                        name: "React Documentation",
                        type: "Official Docs",
                        url: "https://reactjs.org/docs/",
                        icon: "fas fa-atom"
                    }
                ]
            }
        ],
        salaryDetails: {
            india: {
                entry: "₹4-8 LPA",
                mid: "₹8-15 LPA",
                senior: "₹15-25 LPA"
            },
            usa: {
                entry: "$60K-80K",
                mid: "$80K-120K",
                senior: "$120K-180K"
            }
        }
    },
    "machine-learning": {
        title: "Machine Learning Engineer",
        description: "Build intelligent systems using AI and machine learning algorithms to solve complex problems and automate decision-making.",
        icon: "fas fa-brain",
        salary: "₹8-40 LPA (India), $90K-200K (USA)",
        growth: "Explosive growth with 35% increase in demand",
        tags: ["Python", "TensorFlow", "Data Science", "AI"],
        skills: [
            "Python Programming",
            "Mathematics & Statistics",
            "Machine Learning Algorithms",
            "TensorFlow/PyTorch",
            "Data Preprocessing",
            "Model Deployment",
            "Deep Learning",
            "MLOps"
        ],
        roadmap: [
            {
                title: "Programming & Math Foundation",
                description: "Master Python, linear algebra, statistics, and calculus fundamentals."
            },
            {
                title: "Machine Learning Basics",
                description: "Learn supervised/unsupervised learning, regression, classification, and clustering."
            },
            {
                title: "Deep Learning",
                description: "Understand neural networks, CNNs, RNNs, and transformer architectures."
            },
            {
                title: "Specialized Areas",
                description: "Choose specializations like computer vision, NLP, or reinforcement learning."
            },
            {
                title: "Production & MLOps",
                description: "Learn model deployment, monitoring, and machine learning operations."
            }
        ],
        resources: [
            {
                category: "Courses",
                items: [
                    {
                        name: "Andrew Ng's Machine Learning Course",
                        type: "Coursera",
                        url: "https://www.coursera.org/learn/machine-learning",
                        icon: "fas fa-graduation-cap"
                    },
                    {
                        name: "Deep Learning Specialization",
                        type: "Coursera",
                        url: "https://www.coursera.org/specializations/deep-learning",
                        icon: "fas fa-brain"
                    }
                ]
            },
            {
                category: "Tools",
                items: [
                    {
                        name: "Jupyter Notebooks",
                        type: "Development Environment",
                        url: "https://jupyter.org/",
                        icon: "fas fa-code"
                    },
                    {
                        name: "Kaggle Learn",
                        type: "Practice Platform",
                        url: "https://www.kaggle.com/learn",
                        icon: "fas fa-trophy"
                    }
                ]
            }
        ],
        salaryDetails: {
            india: {
                entry: "₹6-12 LPA",
                mid: "₹12-25 LPA",
                senior: "₹25-50 LPA"
            },
            usa: {
                entry: "$90K-120K",
                mid: "$120K-160K",
                senior: "$160K-250K"
            }
        }
    },
    "frontend": {
        title: "Frontend Developer",
        description: "Create stunning, interactive user interfaces and experiences using modern web technologies and design principles.",
        icon: "fas fa-palette",
        salary: "₹4-20 LPA (India), $50K-130K (USA)",
        growth: "Steady growth with increasing demand for UX",
        tags: ["React", "CSS", "JavaScript", "UI/UX"],
        skills: [
            "HTML5 & CSS3",
            "JavaScript ES6+",
            "React/Angular/Vue",
            "Responsive Design",
            "CSS Frameworks",
            "Build Tools",
            "Version Control",
            "Design Systems"
        ],
        roadmap: [
            {
                title: "Web Fundamentals",
                description: "Master HTML, CSS, and JavaScript. Learn about semantic HTML and accessibility."
            },
            {
                title: "Modern CSS",
                description: "Understand Flexbox, Grid, animations, and CSS preprocessors like Sass."
            },
            {
                title: "JavaScript Frameworks",
                description: "Learn React, Vue, or Angular. Understand component-based architecture."
            },
            {
                title: "Build Tools & Workflow",
                description: "Master Webpack, Vite, package managers, and development workflows."
            },
            {
                title: "Advanced Concepts",
                description: "Learn state management, testing, performance optimization, and PWAs."
            }
        ],
        resources: [
            {
                category: "Learning",
                items: [
                    {
                        name: "Frontend Masters",
                        type: "Learning Platform",
                        url: "https://frontendmasters.com/",
                        icon: "fas fa-graduation-cap"
                    },
                    {
                        name: "CSS-Tricks",
                        type: "Resource Site",
                        url: "https://css-tricks.com/",
                        icon: "fas fa-magic"
                    }
                ]
            },
            {
                category: "Tools",
                items: [
                    {
                        name: "CodePen",
                        type: "Code Playground",
                        url: "https://codepen.io/",
                        icon: "fas fa-pen"
                    },
                    {
                        name: "Figma",
                        type: "Design Tool",
                        url: "https://www.figma.com/",
                        icon: "fas fa-paint-brush"
                    }
                ]
            }
        ],
        salaryDetails: {
            india: {
                entry: "₹3-6 LPA",
                mid: "₹6-12 LPA",
                senior: "₹12-25 LPA"
            },
            usa: {
                entry: "$50K-70K",
                mid: "$70K-100K",
                senior: "$100K-140K"
            }
        }
    },
    "backend": {
        title: "Backend Developer",
        description: "Build robust server-side applications, APIs, and database systems that power modern web applications.",
        icon: "fas fa-server",
        salary: "₹5-25 LPA (India), $60K-150K (USA)",
        growth: "Strong demand for scalable systems",
        tags: ["Node.js", "Python", "Database", "API"],
        skills: [
            "Programming Languages",
            "Database Design",
            "API Development",
            "Server Management",
            "Security",
            "Caching",
            "Microservices",
            "Cloud Services"
        ],
        roadmap: [
            {
                title: "Programming Language",
                description: "Master a backend language like Python, Java, Node.js, or Go."
            },
            {
                title: "Database Systems",
                description: "Learn SQL/NoSQL databases, database design, and optimization."
            },
            {
                title: "API Development",
                description: "Build REST APIs, understand authentication, and API security."
            },
            {
                title: "System Design",
                description: "Learn about scalability, caching, load balancing, and microservices."
            },
            {
                title: "DevOps Integration",
                description: "Understand containerization, CI/CD, and cloud deployment."
            }
        ],
        resources: [
            {
                category: "Courses",
                items: [
                    {
                        name: "System Design Interview",
                        type: "Book/Course",
                        url: "https://www.educative.io/courses/grokking-the-system-design-interview",
                        icon: "fas fa-book"
                    },
                    {
                        name: "Node.js Complete Guide",
                        type: "Udemy Course",
                        url: "https://www.udemy.com/course/nodejs-the-complete-guide/",
                        icon: "fas fa-node-js"
                    }
                ]
            }
        ],
        salaryDetails: {
            india: {
                entry: "₹4-8 LPA",
                mid: "₹8-16 LPA",
                senior: "₹16-30 LPA"
            },
            usa: {
                entry: "$60K-85K",
                mid: "$85K-120K",
                senior: "$120K-170K"
            }
        }
    },
    "mobile": {
        title: "Mobile Developer",
        description: "Create mobile applications for iOS and Android platforms using native or cross-platform technologies.",
        icon: "fas fa-mobile-alt",
        salary: "₹5-22 LPA (India), $65K-140K (USA)",
        growth: "Growing with mobile-first approach",
        tags: ["Flutter", "React Native", "iOS", "Android"],
        skills: [
            "Mobile Frameworks",
            "UI/UX for Mobile",
            "Platform Guidelines",
            "App Store Optimization",
            "Mobile Security",
            "Performance Optimization",
            "Testing",
            "Analytics"
        ],
        roadmap: [
            {
                title: "Choose Your Path",
                description: "Decide between native (iOS/Android) or cross-platform (Flutter/React Native)."
            },
            {
                title: "Framework Mastery",
                description: "Learn your chosen framework deeply, understand platform differences."
            },
            {
                title: "UI/UX Design",
                description: "Master mobile design patterns and platform-specific guidelines."
            },
            {
                title: "Backend Integration",
                description: "Learn APIs, authentication, and real-time data synchronization."
            },
            {
                title: "Publishing & Analytics",
                description: "Understand app store processes, analytics, and user acquisition."
            }
        ],
        resources: [
            {
                category: "Frameworks",
                items: [
                    {
                        name: "Flutter Documentation",
                        type: "Official Docs",
                        url: "https://flutter.dev/docs",
                        icon: "fas fa-code"
                    },
                    {
                        name: "React Native",
                        type: "Framework",
                        url: "https://reactnative.dev/",
                        icon: "fab fa-react"
                    }
                ]
            }
        ],
        salaryDetails: {
            india: {
                entry: "₹4-8 LPA",
                mid: "₹8-15 LPA",
                senior: "₹15-25 LPA"
            },
            usa: {
                entry: "$65K-85K",
                mid: "$85K-115K",
                senior: "$115K-150K"
            }
        }
    },
    "devops": {
        title: "DevOps Engineer",
        description: "Bridge development and operations by automating deployment processes and managing scalable infrastructure.",
        icon: "fas fa-cogs",
        salary: "₹6-30 LPA (India), $70K-160K (USA)",
        growth: "High demand for automation expertise",
        tags: ["Docker", "Kubernetes", "AWS", "Automation"],
        skills: [
            "Cloud Platforms",
            "Containerization",
            "CI/CD Pipelines",
            "Infrastructure as Code",
            "Monitoring & Logging",
            "Security",
            "Scripting",
            "Linux Administration"
        ],
        roadmap: [
            {
                title: "Linux & Scripting",
                description: "Master Linux commands, shell scripting, and system administration basics."
            },
            {
                title: "Cloud Platforms",
                description: "Learn AWS, Azure, or GCP. Understand cloud services and architecture."
            },
            {
                title: "Containerization",
                description: "Master Docker and Kubernetes for container orchestration."
            },
            {
                title: "CI/CD & Automation",
                description: "Implement continuous integration and deployment pipelines."
            },
            {
                title: "Monitoring & Security",
                description: "Learn monitoring tools, logging, and security best practices."
            }
        ],
        resources: [
            {
                category: "Cloud",
                items: [
                    {
                        name: "AWS Free Tier",
                        type: "Cloud Platform",
                        url: "https://aws.amazon.com/free/",
                        icon: "fab fa-aws"
                    },
                    {
                        name: "Kubernetes Documentation",
                        type: "Official Docs",
                        url: "https://kubernetes.io/docs/",
                        icon: "fas fa-dharmachakra"
                    }
                ]
            }
        ],
        salaryDetails: {
            india: {
                entry: "₹5-10 LPA",
                mid: "₹10-20 LPA",
                senior: "₹20-40 LPA"
            },
            usa: {
                entry: "$70K-95K",
                mid: "$95K-130K",
                senior: "$130K-180K"
            }
        }
    },
    "cybersecurity": {
        title: "Cybersecurity Specialist",
        description: "Protect digital assets by identifying vulnerabilities, implementing security measures, and responding to threats.",
        icon: "fas fa-shield-alt",
        salary: "₹7-35 LPA (India), $80K-180K (USA)",
        growth: "Critical demand with increasing cyber threats",
        tags: ["Security", "Penetration Testing", "CISSP", "Ethical Hacking"],
        skills: [
            "Network Security",
            "Penetration Testing",
            "Incident Response",
            "Risk Assessment",
            "Cryptography",
            "Security Tools",
            "Compliance",
            "Forensics"
        ],
        roadmap: [
            {
                title: "Security Fundamentals",
                description: "Learn basic security concepts, networking, and operating systems."
            },
            {
                title: "Security Tools",
                description: "Master tools like Wireshark, Nmap, Burp Suite, and Metasploit."
            },
            {
                title: "Penetration Testing",
                description: "Learn ethical hacking, vulnerability assessment, and testing methodologies."
            },
            {
                title: "Incident Response",
                description: "Understand threat detection, analysis, and incident management."
            },
            {
                title: "Certifications",
                description: "Pursue certifications like CISSP, CEH, OSCP, or CompTIA Security+."
            }
        ],
        resources: [
            {
                category: "Learning",
                items: [
                    {
                        name: "OWASP Foundation",
                        type: "Security Community",
                        url: "https://owasp.org/",
                        icon: "fas fa-shield-alt"
                    },
                    {
                        name: "Cybrary",
                        type: "Free Courses",
                        url: "https://www.cybrary.it/",
                        icon: "fas fa-graduation-cap"
                    }
                ]
            }
        ],
        salaryDetails: {
            india: {
                entry: "₹6-12 LPA",
                mid: "₹12-25 LPA",
                senior: "₹25-50 LPA"
            },
            usa: {
                entry: "$80K-100K",
                mid: "$100K-140K",
                senior: "$140K-200K"
            }
        }
    },
    "blockchain": {
        title: "Blockchain Developer",
        description: "Build decentralized applications and smart contracts using blockchain technology and cryptocurrencies.",
        icon: "fas fa-link",
        salary: "₹8-40 LPA (India), $90K-200K (USA)",
        growth: "Emerging field with high potential",
        tags: ["Solidity", "Ethereum", "Web3", "Smart Contracts"],
        skills: [
            "Blockchain Fundamentals",
            "Smart Contract Development",
            "Solidity Programming",
            "Web3 Integration",
            "DeFi Protocols",
            "Cryptography",
            "Consensus Mechanisms",
            "dApp Development"
        ],
        roadmap: [
            {
                title: "Blockchain Basics",
                description: "Understand blockchain technology, cryptocurrencies, and consensus mechanisms."
            },
            {
                title: "Smart Contract Development",
                description: "Learn Solidity and develop smart contracts on Ethereum."
            },
            {
                title: "dApp Development",
                description: "Build decentralized applications with Web3 integration."
            },
            {
                title: "DeFi & Advanced Topics",
                description: "Explore DeFi protocols, NFTs, and advanced blockchain concepts."
            },
            {
                title: "Security & Best Practices",
                description: "Learn smart contract security and blockchain development best practices."
            }
        ],
        resources: [
            {
                category: "Learning",
                items: [
                    {
                        name: "Solidity Documentation",
                        type: "Official Docs",
                        url: "https://docs.soliditylang.org/",
                        icon: "fas fa-code"
                    },
                    {
                        name: "Ethereum.org",
                        type: "Official Resource",
                        url: "https://ethereum.org/developers/",
                        icon: "fab fa-ethereum"
                    }
                ]
            }
        ],
        salaryDetails: {
            india: {
                entry: "₹6-15 LPA",
                mid: "₹15-30 LPA",
                senior: "₹30-60 LPA"
            },
            usa: {
                entry: "$90K-120K",
                mid: "$120K-160K",
                senior: "$160K-250K"
            }
        }
    },
    "game-dev": {
        title: "Game Developer",
        description: "Create interactive gaming experiences using game engines, graphics programming, and game design principles.",
        icon: "fas fa-gamepad",
        salary: "₹4-25 LPA (India), $50K-140K (USA)",
        growth: "Growing with mobile and indie game markets",
        tags: ["Unity", "Unreal Engine", "C#", "Game Design"],
        skills: [
            "Game Engines",
            "Programming Languages",
            "3D Graphics",
            "Game Physics",
            "Level Design",
            "Animation",
            "Audio Integration",
            "Game Optimization"
        ],
        roadmap: [
            {
                title: "Programming Fundamentals",
                description: "Learn C# or C++ and basic programming concepts for games."
            },
            {
                title: "Game Engine Mastery",
                description: "Master Unity or Unreal Engine, understand components and systems."
            },
            {
                title: "Game Mechanics",
                description: "Learn physics, collision detection, AI, and gameplay programming."
            },
            {
                title: "Graphics & Audio",
                description: "Understand 3D graphics, shaders, animation, and audio integration."
            },
            {
                title: "Publishing & Monetization",
                description: "Learn about game distribution, marketing, and monetization strategies."
            }
        ],
        resources: [
            {
                category: "Engines",
                items: [
                    {
                        name: "Unity Learn",
                        type: "Official Tutorials",
                        url: "https://learn.unity.com/",
                        icon: "fab fa-unity"
                    },
                    {
                        name: "Unreal Engine",
                        type: "Game Engine",
                        url: "https://www.unrealengine.com/",
                        icon: "fas fa-cube"
                    }
                ]
            }
        ],
        salaryDetails: {
            india: {
                entry: "₹3-6 LPA",
                mid: "₹6-15 LPA",
                senior: "₹15-30 LPA"
            },
            usa: {
                entry: "$50K-70K",
                mid: "$70K-100K",
                senior: "$100K-150K"
            }
        }
    },
    "data-scientist": {
        title: "Data Scientist",
        description: "Extract insights from complex datasets using statistical analysis, machine learning, and data visualization.",
        icon: "fas fa-chart-bar",
        salary: "₹6-30 LPA (India), $85K-170K (USA)",
        growth: "High demand across all industries",
        tags: ["Python", "R", "Machine Learning", "Statistics"],
        skills: [
            "Statistical Analysis",
            "Programming (Python/R)",
            "Data Visualization",
            "Machine Learning",
            "SQL & Databases",
            "Business Intelligence",
            "Data Mining",
            "Communication"
        ],
        roadmap: [
            {
                title: "Math & Statistics",
                description: "Build strong foundation in statistics, probability, and linear algebra."
            },
            {
                title: "Programming Skills",
                description: "Master Python or R, learn pandas, numpy, and data manipulation."
            },
            {
                title: "Data Analysis",
                description: "Learn exploratory data analysis, hypothesis testing, and statistical modeling."
            },
            {
                title: "Machine Learning",
                description: "Understand ML algorithms, model selection, and evaluation metrics."
            },
            {
                title: "Domain Expertise",
                description: "Develop business acumen and domain-specific knowledge."
            }
        ],
        resources: [
            {
                category: "Learning",
                items: [
                    {
                        name: "Kaggle Learn",
                        type: "Free Courses",
                        url: "https://www.kaggle.com/learn",
                        icon: "fas fa-trophy"
                    },
                    {
                        name: "Python for Data Science",
                        type: "Course",
                        url: "https://www.coursera.org/specializations/python",
                        icon: "fab fa-python"
                    }
                ]
            }
        ],
        salaryDetails: {
            india: {
                entry: "₹5-10 LPA",
                mid: "₹10-20 LPA",
                senior: "₹20-40 LPA"
            },
            usa: {
                entry: "$85K-110K",
                mid: "$110K-140K",
                senior: "$140K-190K"
            }
        }
    },
    "ui-ux": {
        title: "UI/UX Designer",
        description: "Design intuitive and beautiful user interfaces while ensuring optimal user experience across digital products.",
        icon: "fas fa-pencil-ruler",
        salary: "₹4-20 LPA (India), $55K-120K (USA)",
        growth: "Strong demand for user-centered design",
        tags: ["Figma", "User Research", "Prototyping", "Design Systems"],
        skills: [
            "Design Principles",
            "User Research",
            "Wireframing",
            "Prototyping",
            "Design Tools",
            "Usability Testing",
            "Information Architecture",
            "Visual Design"
        ],
        roadmap: [
            {
                title: "Design Fundamentals",
                description: "Learn color theory, typography, layout, and visual hierarchy."
            },
            {
                title: "UX Research",
                description: "Master user research methods, personas, and user journey mapping."
            },
            {
                title: "Design Tools",
                description: "Become proficient in Figma, Adobe XD, or Sketch for design and prototyping."
            },
            {
                title: "Interaction Design",
                description: "Learn micro-interactions, animation, and advanced prototyping."
            },
            {
                title: "Design Systems",
                description: "Understand how to create and maintain scalable design systems."
            }
        ],
        resources: [
            {
                category: "Tools",
                items: [
                    {
                        name: "Figma",
                        type: "Design Tool",
                        url: "https://www.figma.com/",
                        icon: "fas fa-paint-brush"
                    },
                    {
                        name: "Adobe XD",
                        type: "Design Platform",
                        url: "https://www.adobe.com/products/xd.html",
                        icon: "fab fa-adobe"
                    }
                ]
            }
        ],
        salaryDetails: {
            india: {
                entry: "₹3-6 LPA",
                mid: "₹6-12 LPA",
                senior: "₹12-25 LPA"
            },
            usa: {
                entry: "$55K-75K",
                mid: "$75K-95K",
                senior: "$95K-130K"
            }
        }
    },
    "cloud-architect": {
        title: "Cloud Architect",
        description: "Design and implement scalable cloud infrastructure solutions using modern cloud platforms and services.",
        icon: "fas fa-cloud",
        salary: "₹10-50 LPA (India), $100K-200K (USA)",
        growth: "Extremely high demand as companies move to cloud",
        tags: ["AWS", "Azure", "GCP", "Architecture"],
        skills: [
            "Cloud Platforms",
            "System Architecture",
            "Infrastructure as Code",
            "Security",
            "Cost Optimization",
            "Migration Strategies",
            "Containerization",
            "Networking"
        ],
        roadmap: [
            {
                title: "Cloud Fundamentals",
                description: "Understand cloud computing concepts and service models (IaaS, PaaS, SaaS)."
            },
            {
                title: "Platform Expertise",
                description: "Master one major cloud platform (AWS, Azure, or GCP) deeply."
            },
            {
                title: "Architecture Design",
                description: "Learn to design scalable, secure, and cost-effective cloud solutions."
            },
            {
                title: "Advanced Services",
                description: "Explore serverless, AI/ML services, and advanced cloud technologies."
            },
            {
                title: "Certifications",
                description: "Pursue cloud architect certifications from major providers."
            }
        ],
        resources: [
            {
                category: "Certifications",
                items: [
                    {
                        name: "AWS Solutions Architect",
                        type: "Certification",
                        url: "https://aws.amazon.com/certification/",
                        icon: "fab fa-aws"
                    },
                    {
                        name: "Azure Architect",
                        type: "Certification",
                        url: "https://docs.microsoft.com/en-us/learn/azure/",
                        icon: "fab fa-microsoft"
                    }
                ]
            }
        ],
        salaryDetails: {
            india: {
                entry: "₹8-15 LPA",
                mid: "₹15-30 LPA",
                senior: "₹30-60 LPA"
            },
            usa: {
                entry: "$100K-130K",
                mid: "$130K-160K",
                senior: "$160K-220K"
            }
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = careersData;
}
