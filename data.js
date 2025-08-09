/**
 * Career Data for TechNext
 * Enhanced with comprehensive career information, roadmaps, and resources
 */

window.careerData = [
    {
        id: "full-stack-developer",
        title: "Full Stack Developer",
        category: "Development",
        type: "development",
        icon: "fas fa-code",
        description: "Build complete web applications from front-end user interfaces to back-end server logic and databases. Master both client-side and server-side technologies.",
        difficulty: "Medium",
        timeToLearn: "8-12 Months",
        jobGrowth: "High",
        salaryIndia: "₹4-15 LPA",
        salaryUSA: "$70-130K",
        growth: "Expected to grow 22% from 2020-2030, much faster than average",
        skills: ["Swift", "Kotlin", "React Native", "Flutter", "Java", "Objective-C", "Dart"],
        keywords: ["mobile", "ios", "android", "react native", "flutter", "swift", "kotlin", "app"],
        roadmap: [
            "Choose a platform (iOS, Android, or Cross-platform)",
            "Learn platform-specific language (Swift/Kotlin or React Native/Flutter)",
            "Understand mobile UI/UX design principles",
            "Learn mobile-specific APIs and services",
            "Practice with app store deployment",
            "Learn mobile testing and debugging",
            "Build portfolio apps and publish to stores"
        ],
        resources: [
            {
                name: "React Native Documentation",
                url: "https://reactnative.dev/docs/getting-started",
                icon: "fab fa-react",
                description: "Official React Native learning guide"
            },
            {
                name: "Flutter Documentation",
                url: "https://flutter.dev/docs",
                icon: "fas fa-mobile",
                description: "Comprehensive Flutter development guide"
            },
            {
                name: "iOS Development with Swift",
                url: "https://developer.apple.com/swift/",
                icon: "fab fa-apple",
                description: "Apple's official Swift resources"
            }
        ]
    },
    {
        id: "devops-engineer",
        title: "DevOps Engineer",
        category: "Infrastructure",
        type: "infrastructure",
        icon: "fas fa-cogs",
        description: "Bridge development and operations teams. Automate deployment processes, manage infrastructure, and ensure system reliability and scalability.",
        difficulty: "Hard",
        timeToLearn: "10-16 Months",
        jobGrowth: "Very High",
        salaryIndia: "₹6-22 LPA",
        salaryUSA: "$85-160K",
        growth: "Expected to grow 21% from 2020-2030, much faster than average",
        skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Python", "Linux", "Terraform"],
        keywords: ["devops", "aws", "docker", "kubernetes", "ci/cd", "automation", "infrastructure", "cloud"],
        roadmap: [
            "Learn Linux system administration",
            "Understand networking and security basics",
            "Learn scripting with Python or Bash",
            "Master containerization with Docker",
            "Learn orchestration with Kubernetes",
            "Practice CI/CD with Jenkins or GitHub Actions",
            "Study cloud platforms (AWS, Azure, or GCP)",
            "Learn Infrastructure as Code (Terraform, CloudFormation)"
        ],
        resources: [
            {
                name: "AWS Training and Certification",
                url: "https://aws.amazon.com/training/",
                icon: "fab fa-aws",
                description: "Official AWS learning resources"
            },
            {
                name: "Docker Official Tutorial",
                url: "https://docs.docker.com/get-started/",
                icon: "fab fa-docker",
                description: "Learn containerization with Docker"
            },
            {
                name: "Kubernetes Documentation",
                url: "https://kubernetes.io/docs/home/",
                icon: "fas fa-dharmachakra",
                description: "Master container orchestration"
            }
        ]
    },
    {
        id: "cybersecurity-specialist",
        title: "Cybersecurity Specialist",
        category: "Infrastructure",
        type: "infrastructure",
        icon: "fas fa-shield-alt",
        description: "Protect organizations from cyber threats. Implement security measures, conduct risk assessments, and respond to security incidents.",
        difficulty: "Hard",
        timeToLearn: "12-18 Months",
        jobGrowth: "Very High",
        salaryIndia: "₹5-20 LPA",
        salaryUSA: "$80-150K",
        growth: "Expected to grow 33% from 2020-2030, much faster than average",
        skills: ["Network Security", "Penetration Testing", "Python", "Linux", "CISSP", "Ethical Hacking"],
        keywords: ["cybersecurity", "security", "hacking", "penetration testing", "network security", "cissp"],
        roadmap: [
            "Learn networking fundamentals and protocols",
            "Understand operating systems (Linux, Windows)",
            "Study cybersecurity fundamentals and frameworks",
            "Learn ethical hacking and penetration testing",
            "Practice with security tools (Nmap, Wireshark, Metasploit)",
            "Get security certifications (CompTIA Security+, CEH)",
            "Specialize in areas like incident response or compliance"
        ],
        resources: [
            {
                name: "Cybrary Free Courses",
                url: "https://www.cybrary.it/",
                icon: "fas fa-graduation-cap",
                description: "Free cybersecurity training platform"
            },
            {
                name: "OWASP Learning Resources",
                url: "https://owasp.org/www-project-top-ten/",
                icon: "fas fa-bug",
                description: "Web application security knowledge"
            },
            {
                name: "SANS Reading Room",
                url: "https://www.sans.org/reading-room/",
                icon: "fas fa-book",
                description: "Research papers on security topics"
            }
        ]
    },
    {
        id: "blockchain-developer",
        title: "Blockchain Developer",
        category: "Development",
        type: "development",
        icon: "fas fa-link",
        description: "Build decentralized applications and smart contracts. Work with blockchain technologies to create secure, transparent systems.",
        difficulty: "Hard",
        timeToLearn: "10-15 Months",
        jobGrowth: "Very High",
        salaryIndia: "₹6-25 LPA",
        salaryUSA: "$90-180K",
        growth: "Emerging field with exponential growth potential",
        skills: ["Solidity", "JavaScript", "Web3.js", "Ethereum", "Smart Contracts", "Cryptography"],
        keywords: ["blockchain", "cryptocurrency", "ethereum", "solidity", "smart contracts", "defi", "web3"],
        roadmap: [
            "Learn blockchain fundamentals and cryptography",
            "Understand Ethereum and smart contract basics",
            "Learn Solidity programming language",
            "Practice with development frameworks (Truffle, Hardhat)",
            "Study DeFi protocols and dApp architecture",
            "Learn Web3.js for frontend integration",
            "Build and deploy blockchain projects"
        ],
        resources: [
            {
                name: "Solidity Documentation",
                url: "https://docs.soliditylang.org/",
                icon: "fas fa-file-code",
                description: "Official Solidity language guide"
            },
            {
                name: "CryptoZombies",
                url: "https://cryptozombies.io/",
                icon: "fas fa-gamepad",
                description: "Learn Solidity by building games"
            },
            {
                name: "Ethereum.org Developer Resources",
                url: "https://ethereum.org/en/developers/",
                icon: "fab fa-ethereum",
                description: "Complete Ethereum development guide"
            }
        ]
    },
    {
        id: "game-developer",
        title: "Game Developer",
        category: "Development",
        type: "development",
        icon: "fas fa-gamepad",
        description: "Create interactive gaming experiences across platforms. Design game mechanics, implement graphics, and optimize performance for engaging gameplay.",
        difficulty: "Medium-Hard",
        timeToLearn: "10-16 Months",
        jobGrowth: "High",
        salaryIndia: "₹3-15 LPA",
        salaryUSA: "$65-130K",
        growth: "Expected to grow 11% from 2020-2030, faster than average",
        skills: ["Unity", "Unreal Engine", "C#", "C++", "3D Graphics", "Game Design", "Mathematics"],
        keywords: ["game development", "unity", "unreal engine", "c#", "c++", "3d graphics", "gaming"],
        roadmap: [
            "Learn game development fundamentals and math",
            "Choose a game engine (Unity or Unreal Engine)",
            "Master the engine's scripting language (C# or C++)",
            "Study game design principles and mechanics",
            "Learn 3D graphics and animation basics",
            "Practice with small game projects",
            "Build a portfolio of complete games"
        ],
        resources: [
            {
                name: "Unity Learn Platform",
                url: "https://learn.unity.com/",
                icon: "fas fa-cube",
                description: "Official Unity learning resources"
            },
            {
                name: "Unreal Engine Documentation",
                url: "https://docs.unrealengine.com/",
                icon: "fas fa-rocket",
                description: "Complete Unreal Engine guide"
            },
            {
                name: "Game Development Patterns",
                url: "https://gameprogrammingpatterns.com/",
                icon: "fas fa-book",
                description: "Essential game programming patterns"
            }
        ]
    },
    {
        id: "data-scientist",
        title: "Data Scientist",
        category: "Data & AI",
        type: "data",
        icon: "fas fa-chart-line",
        description: "Extract insights from complex datasets using statistical analysis and machine learning. Turn data into actionable business intelligence.",
        difficulty: "Hard",
        timeToLearn: "12-18 Months",
        jobGrowth: "Very High",
        salaryIndia: "₹6-20 LPA",
        salaryUSA: "$85-165K",
        growth: "Expected to grow 22% from 2020-2030, much faster than average",
        skills: ["Python", "R", "SQL", "Statistics", "Pandas", "Scikit-learn", "Tableau", "Machine Learning"],
        keywords: ["data science", "python", "statistics", "machine learning", "analytics", "pandas", "visualization"],
        roadmap: [
            "Learn Python or R programming",
            "Master statistics and probability",
            "Learn data manipulation with Pandas/dplyr",
            "Study data visualization techniques",
            "Understand machine learning algorithms",
            "Practice with real datasets and competitions",
            "Learn big data tools (Spark, Hadoop) if needed",
            "Build data science portfolio projects"
        ],
        resources: [
            {
                name: "Coursera Data Science Specialization",
                url: "https://www.coursera.org/specializations/jhu-data-science",
                icon: "fas fa-graduation-cap",
                description: "Comprehensive data science program"
            },
            {
                name: "Kaggle Courses",
                url: "https://www.kaggle.com/learn",
                icon: "fas fa-trophy",
                description: "Practical data science micro-courses"
            },
            {
                name: "Python Data Science Handbook",
                url: "https://jakevdp.github.io/PythonDataScienceHandbook/",
                icon: "fas fa-book-open",
                description: "Essential data science with Python"
            }
        ]
    },
    {
        id: "ui-ux-designer",
        title: "UI/UX Designer",
        category: "Design",
        type: "design",
        icon: "fas fa-paintbrush",
        description: "Design intuitive user interfaces and experiences. Research user needs, create wireframes, and design visually appealing digital products.",
        difficulty: "Medium",
        timeToLearn: "6-12 Months",
        jobGrowth: "High",
        salaryIndia: "₹3-12 LPA",
        salaryUSA: "$60-120K",
        growth: "Expected to grow 8% from 2020-2030, faster than average",
        skills: ["Figma", "Adobe XD", "Sketch", "User Research", "Prototyping", "Design Systems", "HTML/CSS"],
        keywords: ["ui design", "ux design", "figma", "adobe xd", "prototyping", "user research", "wireframes"],
        roadmap: [
            "Learn design fundamentals and color theory",
            "Study user experience principles and psychology",
            "Master design tools (Figma, Adobe XD)",
            "Practice user research and testing methods",
            "Learn prototyping and wireframing",
            "Study accessibility and inclusive design",
            "Build a strong design portfolio"
        ],
        resources: [
            {
                name: "Google UX Design Certificate",
                url: "https://www.coursera.org/professional-certificates/google-ux-design",
                icon: "fab fa-google",
                description: "Professional UX design program by Google"
            },
            {
                name: "Figma Academy",
                url: "https://www.figma.com/academy/",
                icon: "fas fa-graduation-cap",
                description: "Learn design with Figma"
            },
            {
                name: "Nielsen Norman Group",
                url: "https://www.nngroup.com/articles/",
                icon: "fas fa-lightbulb",
                description: "UX research and design insights"
            }
        ]
    },
    {
        id: "cloud-architect",
        title: "Cloud Architect",
        category: "Infrastructure",
        type: "infrastructure",
        icon: "fas fa-cloud",
        description: "Design and implement scalable cloud infrastructure solutions. Plan cloud adoption strategies and optimize cloud resources for organizations.",
        difficulty: "Hard",
        timeToLearn: "12-18 Months",
        jobGrowth: "Very High",
        salaryIndia: "₹8-30 LPA",
        salaryUSA: "$100-200K",
        growth: "Expected to grow 19% from 2020-2030, much faster than average",
        skills: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Microservices", "Security"],
        keywords: ["cloud architecture", "aws", "azure", "gcp", "terraform", "microservices", "scalability"],
        roadmap: [
            "Learn cloud computing fundamentals",
            "Master one major cloud platform (AWS/Azure/GCP)",
            "Understand networking and security in the cloud",
            "Learn Infrastructure as Code (Terraform)",
            "Study microservices and containerization",
            "Practice with cloud architecture patterns",
            "Get cloud certifications and build projects"
        ],
        resources: [
            {
                name: "AWS Architecture Center",
                url: "https://aws.amazon.com/architecture/",
                icon: "fab fa-aws",
                description: "Best practices for AWS architecture"
            },
            {
                name: "Microsoft Azure Architecture Center",
                url: "https://docs.microsoft.com/en-us/azure/architecture/",
                icon: "fab fa-microsoft",
                description: "Azure architecture guidance"
            },
            {
                name: "Google Cloud Architecture Framework",
                url: "https://cloud.google.com/architecture/framework",
                icon: "fab fa-google",
                description: "GCP architecture best practices"
            }
        ]
    }
];

// Additional utility functions for data processing
window.getCareerById = function(id) {
    return window.careerData.find(career => career.id === id);
};

window.getCareersByCategory = function(category) {
    if (category === 'all') {
        return window.careerData;
    }
    return window.careerData.filter(career => 
        career.category.toLowerCase().includes(category.toLowerCase()) ||
        career.type?.toLowerCase() === category.toLowerCase()
    );
};

window.searchCareers = function(query) {
    const searchTerm = query.toLowerCase();
    return window.careerData.filter(career =>
        career.title.toLowerCase().includes(searchTerm) ||
        career.description.toLowerCase().includes(searchTerm) ||
        career.skills.some(skill => skill.toLowerCase().includes(searchTerm)) ||
        career.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm))
    );
};

window.getPopularCareers = function(limit = 6) {
    // Return careers with highest job growth
    return window.careerData
        .filter(career => career.jobGrowth === 'Very High' || career.jobGrowth === 'High')
        .slice(0, limit);
};

window.getCareerStats = function() {
    return {
        total: window.careerData.length,
        categories: [...new Set(window.careerData.map(c => c.category))].length,
        avgTimeToLearn: "8-12 Months",
        topGrowthField: "Data & AI"
    };
}; 13% from 2020-2030, faster than average",
        skills: ["JavaScript", "React", "Node.js", "Python", "SQL", "Git", "AWS"],
        keywords: ["web development", "javascript", "react", "node", "full stack", "frontend", "backend"],
        roadmap: [
            "Learn HTML, CSS, and JavaScript fundamentals",
            "Master a frontend framework (React, Vue, or Angular)",
            "Learn backend development with Node.js or Python",
            "Understand databases (SQL and NoSQL)",
            "Learn version control with Git",
            "Deploy applications using cloud services",
            "Build portfolio projects and contribute to open source"
        ],
        resources: [
            {
                name: "FreeCodeCamp Full Stack Course",
                url: "https://www.freecodecamp.org/learn/",
                icon: "fas fa-graduation-cap",
                description: "Comprehensive free course covering full stack development"
            },
            {
                name: "The Odin Project",
                url: "https://www.theodinproject.com/",
                icon: "fas fa-book-open",
                description: "Complete web development curriculum with projects"
            },
            {
                name: "MDN Web Docs",
                url: "https://developer.mozilla.org/",
                icon: "fas fa-globe",
                description: "Comprehensive web development documentation"
            }
        ]
    },
    {
        id: "machine-learning-engineer",
        title: "Machine Learning Engineer",
        category: "Data & AI",
        type: "data",
        icon: "fas fa-brain",
        description: "Design and implement machine learning systems and algorithms. Bridge the gap between data science research and production systems.",
        difficulty: "Hard",
        timeToLearn: "12-18 Months",
        jobGrowth: "Very High",
        salaryIndia: "₹8-25 LPA",
        salaryUSA: "$90-180K",
        growth: "Expected to grow 22% from 2020-2030, much faster than average",
        skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Statistics", "Linear Algebra", "AWS"],
        keywords: ["machine learning", "ai", "python", "tensorflow", "data science", "algorithms", "neural networks"],
        roadmap: [
            "Learn Python programming and data structures",
            "Master statistics and linear algebra",
            "Learn data manipulation with Pandas and NumPy",
            "Understand machine learning algorithms and theory",
            "Practice with Scikit-learn and TensorFlow/PyTorch",
            "Learn MLOps and model deployment",
            "Build ML projects and participate in competitions"
        ],
        resources: [
            {
                name: "Coursera Machine Learning Course",
                url: "https://www.coursera.org/learn/machine-learning",
                icon: "fas fa-video",
                description: "Andrew Ng's famous machine learning course"
            },
            {
                name: "Fast.ai Practical Deep Learning",
                url: "https://www.fast.ai/",
                icon: "fas fa-rocket",
                description: "Practical deep learning for coders"
            },
            {
                name: "Kaggle Learn",
                url: "https://www.kaggle.com/learn",
                icon: "fas fa-chart-line",
                description: "Free micro-courses on ML topics"
            }
        ]
    },
    {
        id: "frontend-developer",
        title: "Frontend Developer",
        category: "Development",
        type: "development",
        icon: "fas fa-palette",
        description: "Create engaging user interfaces and experiences for web applications. Focus on what users see and interact with in their browsers.",
        difficulty: "Easy-Medium",
        timeToLearn: "6-10 Months",
        jobGrowth: "High",
        salaryIndia: "₹3-12 LPA",
        salaryUSA: "$60-120K",
        growth: "Expected to grow 8% from 2020-2030, faster than average",
        skills: ["HTML", "CSS", "JavaScript", "React", "Vue.js", "Responsive Design", "TypeScript"],
        keywords: ["frontend", "ui", "ux", "javascript", "react", "css", "html", "responsive"],
        roadmap: [
            "Master HTML and CSS fundamentals",
            "Learn JavaScript and DOM manipulation",
            "Understand responsive design and CSS frameworks",
            "Learn a modern framework (React, Vue, or Angular)",
            "Practice with build tools (Webpack, Vite)",
            "Learn TypeScript and testing frameworks",
            "Build portfolio projects and practice UI/UX principles"
        ],
        resources: [
            {
                name: "MDN Frontend Developer Path",
                url: "https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer",
                icon: "fas fa-route",
                description: "Complete frontend development learning path"
            },
            {
                name: "Frontend Mentor",
                url: "https://www.frontendmentor.io/",
                icon: "fas fa-code",
                description: "Real-world frontend challenges"
            },
            {
                name: "CSS-Tricks",
                url: "https://css-tricks.com/",
                icon: "fas fa-paint-brush",
                description: "CSS tips, tricks, and techniques"
            }
        ]
    },
    {
        id: "backend-developer",
        title: "Backend Developer",
        category: "Development",
        type: "development",
        icon: "fas fa-server",
        description: "Build and maintain server-side applications, databases, and APIs. Handle the logic that powers web applications behind the scenes.",
        difficulty: "Medium",
        timeToLearn: "8-12 Months",
        jobGrowth: "High",
        salaryIndia: "₹4-18 LPA",
        salaryUSA: "$70-140K",
        growth: "Expected to grow 13% from 2020-2030, faster than average",
        skills: ["Python", "Java", "Node.js", "SQL", "NoSQL", "REST APIs", "Docker"],
        keywords: ["backend", "api", "database", "server", "python", "java", "node.js", "sql"],
        roadmap: [
            "Choose a backend language (Python, Java, or Node.js)",
            "Learn database design and SQL",
            "Understand REST APIs and HTTP protocols",
            "Learn a web framework (Django, Spring, Express)",
            "Practice with NoSQL databases",
            "Learn containerization with Docker",
            "Build and deploy backend projects"
        ],
        resources: [
            {
                name: "Django for Everybody",
                url: "https://www.coursera.org/specializations/django",
                icon: "fab fa-python",
                description: "Complete Django web development course"
            },
            {
                name: "Node.js Complete Guide",
                url: "https://nodejs.dev/learn",
                icon: "fab fa-node-js",
                description: "Official Node.js learning resource"
            },
            {
                name: "Database Design Course",
                url: "https://www.freecodecamp.org/learn/relational-database/",
                icon: "fas fa-database",
                description: "Learn relational database design"
            }
        ]
    },
    {
        id: "mobile-developer",
        title: "Mobile Developer",
        category: "Development",
        type: "development",
        icon: "fas fa-mobile-alt",
        description: "Create native and cross-platform mobile applications for iOS and Android devices. Build apps that millions of users can access on their phones.",
        difficulty: "Medium",
        timeToLearn: "8-14 Months",
        jobGrowth: "High",
        salaryIndia: "₹4-16 LPA",
        salaryUSA: "$75-135K",
        growth: "Expected to grow
