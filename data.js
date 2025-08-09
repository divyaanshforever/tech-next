// Enhanced Career Data with Detailed Roadmaps and Timeline
const careers = [
    {
        id: 'fullstack-developer',
        title: 'Full Stack Developer',
        category: 'development',
        description: 'Build complete web applications from database to user interface.',
        detailedDescription: 'Full Stack Developers are versatile professionals who can work on both frontend and backend development. They have a comprehensive understanding of web development technologies and can build complete applications from scratch.',
        icon: 'fas fa-code',
        salary: {
            india: '₹6-25 LPA',
            usa: '$75-150K'
        },
        salaryBreakdown: {
            india: {
                entry: '₹4-8 LPA',
                mid: '₹10-18 LPA',
                senior: '₹20-35 LPA'
            },
            usa: {
                entry: '$65-85K',
                mid: '$90-130K',
                senior: '$140-200K'
            }
        },
        growth: 'Expected to grow 13% from 2020-2030, faster than average',
        timeline: '8-12 months to job-ready',
        demand: 'Very High',
        remote: 'Excellent',
        barrier: 'Medium',
        opportunities: 'High demand across all industries, especially tech startups',
        topCompanies: ['Google', 'Microsoft', 'Amazon', 'Netflix', 'Airbnb', 'Uber'],
        skills: ['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'Git', 'AWS', 'Docker'],
        detailedRoadmap: [
            {
                title: 'Foundation Phase',
                duration: '2-3 months',
                description: 'Build strong fundamentals in web technologies and programming concepts.',
                skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Git', 'Command Line'],
                resources: [
                    {
                        name: 'MDN Web Docs',
                        type: 'Documentation',
                        url: 'https://developer.mozilla.org',
                        icon: 'fas fa-book'
                    },
                    {
                        name: 'freeCodeCamp',
                        type: 'Course',
                        url: 'https://freecodecamp.org',
                        icon: 'fas fa-graduation-cap'
                    },
                    {
                        name: 'JavaScript30',
                        type: 'Challenge',
                        url: 'https://javascript30.com',
                        icon: 'fas fa-code'
                    }
                ]
            },
            {
                title: 'Frontend Mastery',
                duration: '2-3 months',
                description: 'Master modern frontend frameworks and tools for building interactive user interfaces.',
                skills: ['React', 'Vue.js', 'TypeScript', 'Webpack', 'Sass/SCSS', 'Responsive Design'],
                resources: [
                    {
                        name: 'React Official Docs',
                        type: 'Documentation',
                        url: 'https://reactjs.org',
                        icon: 'fab fa-react'
                    },
                    {
                        name: 'Vue.js Guide',
                        type: 'Tutorial',
                        url: 'https://vuejs.org',
                        icon: 'fab fa-vuejs'
                    },
                    {
                        name: 'TypeScript Handbook',
                        type: 'Guide',
                        url: 'https://typescriptlang.org',
                        icon: 'fas fa-book'
                    }
                ]
            },
            {
                title: 'Backend Development',
                duration: '3-4 months',
                description: 'Learn server-side programming, databases, and API development.',
                skills: ['Node.js', 'Express.js', 'Python/Django', 'PostgreSQL', 'MongoDB', 'RESTful APIs'],
                resources: [
                    {
                        name: 'Node.js Docs',
                        type: 'Documentation',
                        url: 'https://nodejs.org',
                        icon: 'fab fa-node-js'
                    },
                    {
                        name: 'Django Tutorial',
                        type: 'Course',
                        url: 'https://djangoproject.com',
                        icon: 'fas fa-python'
                    },
                    {
                        name: 'PostgreSQL Tutorial',
                        type: 'Tutorial',
                        url: 'https://postgresql.org',
                        icon: 'fas fa-database'
                    }
                ]
            },
            {
                title: 'DevOps & Deployment',
                duration: '1-2 months',
                description: 'Learn to deploy applications and manage infrastructure.',
                skills: ['Docker', 'AWS/Azure', 'CI/CD', 'Nginx', 'Linux', 'Monitoring'],
                resources: [
                    {
                        name: 'Docker Documentation',
                        type: 'Guide',
                        url: 'https://docker.com',
                        icon: 'fab fa-docker'
                    },
                    {
                        name: 'AWS Getting Started',
                        type: 'Tutorial',
                        url: 'https://aws.amazon.com',
                        icon: 'fab fa-aws'
                    },
                    {
                        name: 'Digital Ocean Tutorials',
                        type: 'Tutorial',
                        url: 'https://digitalocean.com',
                        icon: 'fas fa-server'
                    }
                ]
            }
        ],
        resources: [
            {
                category: 'Courses',
                icon: 'fas fa-graduation-cap',
                items: [
                    { name: 'The Complete Web Developer Bootcamp', type: 'Udemy Course', url: '#', price: '₹499', rating: 4.8 },
                    { name: 'Full Stack Open', type: 'Free Course', url: '#', price: 'Free', rating: 4.9 },
                    { name: 'The Odin Project', type: 'Free Curriculum', url: '#', price: 'Free', rating: 4.7 }
                ]
            },
            {
                category: 'Tools',
                icon: 'fas fa-tools',
                items: [
                    { name: 'Visual Studio Code', type: 'Code Editor', url: '#', price: 'Free', rating: 4.9 },
                    { name: 'Postman', type: 'API Testing', url: '#', price: 'Free/Paid', rating: 4.8 },
                    { name: 'GitHub', type: 'Version Control', url: '#', price: 'Free/Paid', rating: 4.8 }
                ]
            }
        ]
    },
    {
        id: 'data-scientist',
        title: 'Data Scientist',
        category: 'data',
        description: 'Extract insights from data to drive business decisions and predictions.',
        detailedDescription: 'Data Scientists combine statistical analysis, machine learning, and domain expertise to extract meaningful insights from large datasets. They help organizations make data-driven decisions and build predictive models.',
        icon: 'fas fa-chart-line',
        salary: {
            india: '₹8-30 LPA',
            usa: '$95-170K'
        },
        salaryBreakdown: {
            india: {
                entry: '₹6-12 LPA',
                mid: '₹15-25 LPA',
                senior: '₹25-45 LPA'
            },
            usa: {
                entry: '$85-110K',
                mid: '$120-150K',
                senior: '$160-250K'
            }
        },
        growth: 'Expected to grow 22% from 2020-2030, much faster than average',
        timeline: '10-18 months to job-ready',
        demand: 'Very High',
        remote: 'Excellent',
        barrier: 'High',
        opportunities: 'High demand in finance, healthcare, tech, and consulting',
        topCompanies: ['Google', 'Microsoft', 'Amazon', 'Facebook', 'Netflix', 'Spotify'],
        skills: ['Python', 'R', 'SQL', 'Machine Learning', 'Statistics', 'Pandas', 'TensorFlow', 'Tableau'],
        detailedRoadmap: [
            {
                title: 'Mathematical Foundation',
                duration: '3-4 months',
                description: 'Build strong foundation in mathematics and statistics essential for data science.',
                skills: ['Statistics', 'Linear Algebra', 'Calculus', 'Probability', 'Descriptive Statistics'],
                resources: [
                    {
                        name: 'Khan Academy Statistics',
                        type: 'Course',
                        url: 'https://khanacademy.org',
                        icon: 'fas fa-calculator'
                    },
                    {
                        name: '3Blue1Brown Linear Algebra',
                        type: 'Video Series',
                        url: 'https://youtube.com',
                        icon: 'fab fa-youtube'
                    }
                ]
            },
            {
                title: 'Programming & Tools',
                duration: '2-3 months',
                description: 'Master programming languages and tools used in data science.',
                skills: ['Python', 'R', 'SQL', 'Jupyter Notebooks', 'Git', 'Command Line'],
                resources: [
                    {
                        name: 'Python for Data Science',
                        type: 'Course',
                        url: 'https://coursera.org',
                        icon: 'fab fa-python'
                    },
                    {
                        name: 'R Programming',
                        type: 'Course',
                        url: 'https://datacamp.com',
                        icon: 'fas fa-chart-bar'
                    }
                ]
            },
            {
                title: 'Data Analysis & Visualization',
                duration: '3-4 months',
                description: 'Learn to clean, analyze, and visualize data effectively.',
                skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'Tableau', 'Power BI'],
                resources: [
                    {
                        name: 'Pandas Documentation',
                        type: 'Guide',
                        url: 'https://pandas.pydata.org',
                        icon: 'fas fa-table'
                    },
                    {
                        name: 'Tableau Public',
                        type: 'Tool',
                        url: 'https://tableau.com',
                        icon: 'fas fa-chart-pie'
                    }
                ]
            },
            {
                title: 'Machine Learning',
                duration: '4-6 months',
                description: 'Build and deploy machine learning models for predictive analytics.',
                skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'Deep Learning', 'NLP', 'Computer Vision'],
                resources: [
                    {
                        name: 'Andrew Ng ML Course',
                        type: 'Course',
                        url: 'https://coursera.org',
                        icon: 'fas fa-brain'
                    },
                    {
                        name: 'Fast.ai',
                        type: 'Course',
                        url: 'https://fast.ai',
                        icon: 'fas fa-rocket'
                    }
                ]
            }
        ],
        resources: [
            {
                category: 'Courses',
                icon: 'fas fa-graduation-cap',
                items: [
                    { name: 'IBM Data Science Professional Certificate', type: 'Coursera', url: '#', price: '$49/month', rating: 4.8 },
                    { name: 'Data Science Specialization', type: 'Johns Hopkins', url: '#', price: '$49/month', rating: 4.7 },
                    { name: 'CS109 Harvard', type: 'Free Course', url: '#', price: 'Free', rating: 4.9 }
                ]
            }
        ]
    },
    {
        id: 'ml-engineer',
        title: 'Machine Learning Engineer',
        category: 'data',
        description: 'Design and implement machine learning systems and algorithms.',
        detailedDescription: 'Machine Learning Engineers bridge the gap between data science and software engineering. They build scalable ML systems, deploy models to production, and maintain ML infrastructure.',
        icon: 'fas fa-brain',
        salary: {
            india: '₹10-35 LPA',
            usa: '$110-200K'
        },
        growth: 'Expected to grow 25% from 2020-2030, much faster than average',
        timeline: '12-20 months to job-ready',
        demand: 'Very High',
        remote: 'Excellent',
        barrier: 'High',
        skills: ['Python', 'TensorFlow', 'PyTorch', 'Kubernetes', 'Docker', 'AWS ML', 'MLOps', 'Statistics'],
        detailedRoadmap: [
            {
                title: 'Programming & Software Engineering',
                duration: '3-4 months',
                description: 'Build strong software engineering fundamentals.',
                skills: ['Python', 'Object-Oriented Programming', 'Data Structures', 'Algorithms', 'Git'],
                resources: [
                    {
                        name: 'Python Crash Course',
                        type: 'Book',
                        url: '#',
                        icon: 'fas fa-book'
                    }
                ]
            },
            {
                title: 'Machine Learning Foundations',
                duration: '4-5 months',
                description: 'Master core ML algorithms and mathematical foundations.',
                skills: ['Linear Algebra', 'Statistics', 'Supervised Learning', 'Unsupervised Learning', 'Deep Learning'],
                resources: [
                    {
                        name: 'Elements of Statistical Learning',
                        type: 'Book',
                        url: '#',
                        icon: 'fas fa-book'
                    }
                ]
            },
            {
                title: 'ML Engineering & MLOps',
                duration: '3-4 months',
                description: 'Learn to build, deploy, and maintain ML systems at scale.',
                skills: ['MLOps', 'Model Deployment', 'Kubernetes', 'Docker', 'CI/CD for ML', 'Model Monitoring'],
                resources: [
                    {
                        name: 'MLOps Zoomcamp',
                        type: 'Course',
                        url: '#',
                        icon: 'fas fa-graduation-cap'
                    }
                ]
            },
            {
                title: 'Specialization & Production',
                duration: '2-4 months',
                description: 'Choose a specialization and build production-ready systems.',
                skills: ['Computer Vision', 'NLP', 'Recommendation Systems', 'Time Series', 'A/B Testing'],
                resources: [
                    {
                        name: 'Deep Learning Specialization',
                        type: 'Course',
                        url: '#',
                        icon: 'fas fa-brain'
                    }
                ]
            }
        ],
        resources: [
            {
                category: 'Courses',
                icon: 'fas fa-graduation-cap',
                items: [
                    { name: 'Machine Learning Engineering for Production', type: 'Coursera', url: '#', price: '$49/month', rating: 4.8 },
                    { name: 'MLOps Zoomcamp', type: 'DataTalks.Club', url: '#', price: 'Free', rating: 4.9 }
                ]
            }
        ]
    },
    {
        id: 'frontend-developer',
        title: 'Frontend Developer',
        category: 'development',
        description: 'Create beautiful and interactive user interfaces for web applications.',
        detailedDescription: 'Frontend Developers focus on the client-side of web applications, creating engaging user experiences through modern web technologies, responsive design, and interactive features.',
        icon: 'fab fa-react',
        salary: {
            india: '₹4-20 LPA',
            usa: '$65-130K'
        },
        salaryBreakdown: {
            india: {
                entry: '₹3-6 LPA',
                mid: '₹8-15 LPA',
                senior: '₹18-30 LPA'
            },
            usa: {
                entry: '$55-75K',
                mid: '$80-110K',
                senior: '$120-180K'
            }
        },
        growth: 'Expected to grow 8% from 2020-2030',
        timeline: '6-10 months to job-ready',
        demand: 'High',
        remote: 'Excellent',
        barrier: 'Low-Medium',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js', 'TypeScript', 'Webpack', 'Sass'],
        detailedRoadmap: [
            {
                title: 'Web Fundamentals',
                duration: '2-3 months',
                description: 'Master the building blocks of web development.',
                skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'DOM Manipulation', 'Responsive Design'],
                resources: [
                    {
                        name: 'MDN Web Docs',
                        type: 'Documentation',
                        url: '#',
                        icon: 'fas fa-book'
                    }
                ]
            },
            {
                title: 'Modern JavaScript & Frameworks',
                duration: '3-4 months',
                description: 'Learn modern JavaScript and popular frontend frameworks.',
                skills: ['React', 'Vue.js', 'TypeScript', 'State Management', 'Component Design'],
                resources: []
            },
            {
                title: 'Build Tools & Workflow',
                duration: '1-2 months',
                description: 'Master development tools and modern workflows.',
                skills: ['Webpack', 'Vite', 'npm/yarn', 'Git', 'Testing', 'Performance Optimization'],
                resources: []
            },
            {
                title: 'Advanced Topics',
                duration: '1-2 months',
                description: 'Dive into advanced frontend concepts and best practices.',
                skills: ['Progressive Web Apps', 'Accessibility', 'SEO', 'Animation', 'Micro-frontends'],
                resources: []
            }
        ],
        resources: [
            {
                category: 'Courses',
                icon: 'fas fa-graduation-cap',
                items: [
                    { name: 'React - The Complete Guide', type: 'Udemy', url: '#', price: '₹799', rating: 4.7 },
                    { name: 'JavaScript30', type: 'Free Challenge', url: '#', price: 'Free', rating: 4.8 }
                ]
            }
        ]
    },
    {
        id: 'backend-developer',
        title: 'Backend Developer',
        category: 'development',
        description: 'Build server-side logic, APIs, and database systems.',
        detailedDescription: 'Backend Developers work on server-side applications, designing and implementing APIs, managing databases, and ensuring scalable and secure server architecture.',
        icon: 'fas fa-server',
        salary: {
            india: '₹5-22 LPA',
            usa: '$70-140K'
        },
        growth: 'Expected to grow 13% from 2020-2030',
        timeline: '8-12 months to job-ready',
        demand: 'Very High',
        remote: 'Excellent',
        barrier: 'Medium',
        skills: ['Python', 'Java', 'Node.js', 'SQL', 'APIs', 'Docker', 'AWS', 'Microservices'],
        detailedRoadmap: [
            {
                title: 'Programming Fundamentals',
                duration: '2-3 months',
                description: 'Choose and master a backend programming language.',
                skills: ['Python/Java/Node.js', 'Object-Oriented Programming', 'Data Structures', 'Algorithms'],
                resources: []
            },
            {
                title: 'Web Development & APIs',
                duration: '3-4 months',
                description: 'Learn to build web servers and RESTful APIs.',
                skills: ['HTTP Protocol', 'REST APIs', 'Express.js/Django/Spring Boot', 'Authentication', 'Validation'],
                resources: []
            },
            {
                title: 'Databases & Data Management',
                duration: '2-3 months',
                description: 'Master database design and data management.',
                skills: ['SQL', 'PostgreSQL', 'MongoDB', 'Database Design', 'ORMs', 'Caching'],
                resources: []
            },
            {
                title: 'DevOps & Scaling',
                duration: '2-3 months',
                description: 'Learn deployment, monitoring, and scaling techniques.',
                skills: ['Docker', 'AWS/Azure', 'Load Balancing', 'Monitoring', 'Security', 'Microservices'],
                resources: []
            }
        ],
        resources: []
    },
    {
        id: 'mobile-developer',
        title: 'Mobile Developer',
        category: 'development',
        description: 'Create native and cross-platform mobile applications.',
        detailedDescription: 'Mobile Developers specialize in building applications for iOS and Android platforms, using native technologies or cross-platform frameworks.',
        icon: 'fas fa-mobile-alt',
        salary: {
            india: '₹4-18 LPA',
            usa: '$70-135K'
        },
        growth: 'Expected to grow 22% from 2020-2030',
        timeline: '8-14 months to job-ready',
        demand: 'High',
        remote: 'Good',
        barrier: 'Medium',
        skills: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'iOS', 'Android', 'UI/UX', 'APIs'],
        detailedRoadmap: [
            {
                title: 'Platform Fundamentals',
                duration: '3-4 months',
                description: 'Choose your platform and learn the basics.',
                skills: ['iOS (Swift)', 'Android (Kotlin)', 'Mobile UI/UX', 'Platform Guidelines'],
                resources: []
            },
            {
                title: 'Advanced Development',
                duration: '3-4 months',
                description: 'Build complex apps with advanced features.',
                skills: ['Navigation', 'Data Persistence', 'Networking', 'Push Notifications', 'Camera/GPS'],
                resources: []
            },
            {
                title: 'Cross-Platform & Publishing',
                duration: '2-3 months',
                description: 'Learn cross-platform development and app store publishing.',
                skills: ['React Native/Flutter', 'App Store Guidelines', 'Testing', 'Analytics', 'Monetization'],
                resources: []
            }
        ],
        resources: []
    },
    {
        id: 'devops-engineer',
        title: 'DevOps Engineer',
        category: 'infrastructure',
        description: 'Automate and streamline software development and deployment processes.',
        detailedDescription: 'DevOps Engineers bridge development and operations teams, implementing CI/CD pipelines, managing infrastructure, and ensuring reliable software delivery.',
        icon: 'fas fa-cogs',
        salary: {
            india: '₹6-25 LPA',
            usa: '$85-155K'
        },
        growth: 'Expected to grow 21% from 2020-2030',
        timeline: '10-16 months to job-ready',
        demand: 'Very High',
        remote: 'Excellent',
        barrier: 'High',
        skills: ['Docker', 'Kubernetes', 'AWS', 'Linux', 'CI/CD', 'Terraform', 'Monitoring', 'Scripting'],
        detailedRoadmap: [
            {
                title: 'Linux & Scripting',
                duration: '2-3 months',
                description: 'Master Linux systems and automation scripting.',
                skills: ['Linux Administration', 'Bash Scripting', 'Python', 'System Administration'],
                resources: []
            },
            {
                title: 'Containerization & Orchestration',
                duration: '3-4 months',
                description: 'Learn containerization and container orchestration.',
                skills: ['Docker', 'Kubernetes', 'Container Security', 'Service Mesh'],
                resources: []
            },
            {
                title: 'Cloud & Infrastructure',
                duration: '3-4 months',
                description: 'Master cloud platforms and infrastructure as code.',
                skills: ['AWS/Azure/GCP', 'Terraform', 'CloudFormation', 'Networking', 'Security'],
                resources: []
            },
            {
                title: 'CI/CD & Monitoring',
                duration: '2-3 months',
                description: 'Implement continuous integration and monitoring systems.',
                skills: ['Jenkins', 'GitLab CI', 'Prometheus', 'Grafana', 'ELK Stack', 'Incident Management'],
                resources: []
            }
        ],
        resources: []
    },
    {
        id: 'cybersecurity-specialist',
        title: 'Cybersecurity Specialist',
        category: 'security',
        description: 'Protect systems and data from security threats and vulnerabilities.',
        detailedDescription: 'Cybersecurity Specialists identify vulnerabilities, implement security measures, and respond to security incidents to protect organizations from cyber threats.',
        icon: 'fas fa-shield-alt',
        salary: {
            india: '₹6-28 LPA',
            usa: '$90-165K'
        },
        growth: 'Expected to grow 33% from 2020-2030, much faster than average',
        timeline: '12-18 months to job-ready',
        demand: 'Very High',
        remote: 'Good',
        barrier: 'High',
        skills: ['Ethical Hacking', 'Network Security', 'Risk Assessment', 'Incident Response', 'Compliance', 'Forensics'],
        detailedRoadmap: [
            {
                title: 'Security Fundamentals',
                duration: '3-4 months',
                description: 'Build foundational knowledge of cybersecurity concepts.',
                skills: ['Security Principles', 'Risk Management', 'Compliance', 'Cryptography'],
                resources: []
            },
            {
                title: 'Network & System Security',
                duration: '4-5 months',
                description: 'Learn to secure networks and systems.',
                skills: ['Network Security', 'Firewalls', 'IDS/IPS', 'Vulnerability Assessment', 'Penetration Testing'],
                resources: []
            },
            {
                title: 'Incident Response & Forensics',
                duration: '3-4 months',
                description: 'Master incident response and digital forensics.',
                skills: ['Incident Response', 'Digital Forensics', 'Malware Analysis', 'Threat Hunting'],
                resources: []
            },
            {
                title: 'Specialization',
                duration: '2-3 months',
                description: 'Choose a specialization area.',
                skills: ['Cloud Security', 'Application Security', 'IoT Security', 'AI Security'],
                resources: []
            }
        ],
        resources: []
    },
    {
        id: 'blockchain-developer',
        title: 'Blockchain Developer',
        category: 'emerging',
        description: 'Build decentralized applications and blockchain solutions.',
        detailedDescription: 'Blockchain Developers create decentralized applications, smart contracts, and blockchain protocols using various blockchain technologies.',
        icon: 'fas fa-link',
        salary: {
            india: '₹8-30 LPA',
            usa: '$100-180K'
        },
        growth: 'Expected to grow 67% from 2020-2030',
        timeline: '10-16 months to job-ready',
        demand: 'High',
        remote: 'Excellent',
        barrier: 'High',
        skills: ['Solidity', 'Ethereum', 'Web3.js', 'Smart Contracts', 'DeFi', 'Cryptography'],
        detailedRoadmap: [
            {
                title: 'Blockchain Fundamentals',
                duration: '2-3 months',
                description: 'Understand blockchain technology and cryptocurrencies.',
                skills: ['Blockchain Basics', 'Bitcoin', 'Ethereum', 'Consensus Mechanisms', 'Cryptography'],
                resources: []
            },
            {
                title: 'Smart Contract Development',
                duration: '3-4 months',
                description: 'Learn to write and deploy smart contracts.',
                skills: ['Solidity', 'Smart Contracts', 'Remix IDE', 'Truffle', 'Hardhat'],
                resources: []
            },
            {
                title: 'DApp Development',
                duration: '3-4 months',
                description: 'Build decentralized applications.',
                skills: ['Web3.js', 'Ethers.js', 'React', 'IPFS', 'MetaMask Integration'],
                resources: []
            },
            {
                title: 'Advanced Topics',
                duration: '2-3 months',
                description: 'Explore advanced blockchain concepts.',
                skills: ['DeFi Protocols', 'NFTs', 'Layer 2 Solutions', 'Cross-chain Development'],
                resources: []
            }
        ],
        resources: []
    },
    {
        id: 'game-developer',
        title: 'Game Developer',
        category: 'development',
        description: 'Create interactive gaming experiences for various platforms.',
        detailedDescription: 'Game Developers design and implement video games for consoles, PC, mobile, and web platforms using specialized game engines and programming languages.',
        icon: 'fas fa-gamepad',
        salary: {
            india: '₹3-15 LPA',
            usa: '$55-120K'
        },
        growth: 'Expected to grow 11% from 2020-2030',
        timeline: '12-20 months to job-ready',
        demand: 'Medium',
        remote: 'Good',
        barrier: 'Medium-High',
        skills: ['Unity', 'Unreal Engine', 'C#', 'C++', 'Game Design', '3D Modeling', 'Physics'],
        detailedRoadmap: [
            {
                title: 'Programming Fundamentals',
                duration: '3-4 months',
                description: 'Master programming languages used in game development.',
                skills: ['C#', 'C++', 'Object-Oriented Programming', 'Data Structures', 'Algorithms'],
                resources: []
            },
            {
                title: 'Game Engine Mastery',
                duration: '4-5 months',
                description: 'Learn popular game engines and development workflows.',
                skills: ['Unity', 'Unreal Engine', 'Game Physics', 'Animation', 'Asset Management'],
                resources: []
            },
            {
                title: 'Game Design & Graphics',
                duration: '3-4 months',
                description: 'Understand game design principles and graphics programming.',
                skills: ['Game Design', 'Level Design', 'Shaders', '3D Graphics', 'UI/UX for Games'],
                resources: []
            },
            {
                title: 'Specialization & Publishing',
                duration: '2-4 months',
                description: 'Choose a specialization and learn game publishing.',
                skills: ['Mobile Games', 'VR/AR', 'Multiplayer', 'Game Analytics', 'Monetization'],
                resources: []
            }
        ],
        resources: []
    },
    {
        id: 'ui-ux-designer',
        title: 'UI/UX Designer',
        category: 'design',
        description: 'Design intuitive and beautiful user interfaces and experiences.',
        detailedDescription: 'UI/UX Designers research user needs, create wireframes and prototypes, and design interfaces that provide excellent user experiences across digital products.',
        icon: 'fas fa-paint-brush',
        salary: {
            india: '₹4-18 LPA',
            usa: '$65-125K'
        },
        growth: 'Expected to grow 8% from 2020-2030',
        timeline: '6-12 months to job-ready',
        demand: 'High',
        remote: 'Excellent',
        barrier: 'Low-Medium',
        skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research', 'Information Architecture'],
        detailedRoadmap: [
            {
                title: 'Design Fundamentals',
                duration: '2-3 months',
                description: 'Learn core design principles and theory.',
                skills: ['Design Principles', 'Color Theory', 'Typography', 'Layout', 'Visual Hierarchy'],
                resources: []
            },
            {
                title: 'UX Research & Strategy',
                duration: '2-3 months',
                description: 'Master user research and experience strategy.',
                skills: ['User Research', 'Personas', 'User Journey Mapping', 'Information Architecture', 'Wireframing'],
                resources: []
            },
            {
                title: 'UI Design & Prototyping',
                duration: '2-3 months',
                description: 'Create beautiful interfaces and interactive prototypes.',
                skills: ['Figma', 'Adobe XD', 'Prototyping', 'Design Systems', 'Responsive Design'],
                resources: []
            },
            {
                title: 'Testing & Implementation',
                duration: '1-2 months',
                description: 'Learn to test designs and work with developers.',
                skills: ['Usability Testing', 'A/B Testing', 'Design Handoff', 'HTML/CSS Basics'],
                resources: []
            }
        ],
        resources: []
    },
    {
        id: 'cloud-architect',
        title: 'Cloud Architect',
        category: 'infrastructure',
        description: 'Design and manage scalable cloud infrastructure solutions.',
        detailedDescription: 'Cloud Architects design cloud computing strategies, oversee cloud adoption plans, and ensure scalable, secure, and cost-effective cloud infrastructure.',
        icon: 'fas fa-cloud',
        salary: {
            india: '₹12-40 LPA',
            usa: '$120-200K'
        },
        growth: 'Expected to grow 19% from 2020-2030',
        timeline: '14-24 months to job-ready',
        demand: 'Very High',
        remote: 'Excellent',
        barrier: 'High',
        skills: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform', 'Microservices', 'Security', 'Cost Optimization'],
        detailedRoadmap: [
            {
                title: 'Cloud Fundamentals',
                duration: '3-4 months',
                description: 'Understand cloud computing concepts and major platforms.',
                skills: ['Cloud Computing Basics', 'AWS/Azure/GCP', 'Virtualization', 'Networking'],
                resources: []
            },
            {
                title: 'Infrastructure as Code',
                duration: '3-4 months',
                description: 'Master infrastructure automation and management.',
                skills: ['Terraform', 'CloudFormation', 'Ansible', 'Infrastructure Automation'],
                resources: []
            },
            {
                title: 'Architecture & Security',
                duration: '4-5 months',
                description: 'Design secure and scalable cloud architectures.',
                skills: ['Solution Architecture', 'Security Best Practices', 'Compliance', 'Disaster Recovery'],
                resources: []
            },
            {
                title: 'Advanced Topics',
                duration: '4-6 months',
                description: 'Explore advanced cloud technologies and practices.',
                skills: ['Serverless', 'Microservices', 'Cost Optimization', 'Multi-cloud', 'Edge Computing'],
                resources: []
            }
        ],
        resources: []
    },
    {
        id: 'product-manager',
        title: 'Product Manager',
        category: 'emerging',
        description: 'Guide product strategy and development from conception to launch.',
        detailedDescription: 'Product Managers define product vision, strategy, and roadmaps. They work closely with engineering, design, and business teams to deliver successful products.',
        icon: 'fas fa-lightbulb',
        salary: {
            india: '₹8-35 LPA',
            usa: '$100-180K'
        },
        growth: 'Expected to grow 9% from 2020-2030',
        timeline: '8-16 months to job-ready',
        demand: 'High',
        remote: 'Excellent',
        barrier: 'Medium',
        skills: ['Product Strategy', 'Market Research', 'Analytics', 'Agile', 'Wireframing', 'SQL', 'A/B Testing'],
        detailedRoadmap: [
            {
                title: 'Product Fundamentals',
                duration: '2-3 months',
                description: 'Learn core product management concepts and methodologies.',
                skills: ['Product Strategy', 'Market Research', 'User Stories', 'Roadmapping', 'Agile/Scrum'],
                resources: []
            },
            {
                title: 'Analytics & Data',
                duration: '2-3 months',
                description: 'Master data analysis and product metrics.',
                skills: ['SQL', 'Analytics Tools', 'KPIs', 'A/B Testing', 'Data Interpretation'],
                resources: []
            },
            {
                title: 'Technical Skills',
                duration: '2-3 months',
                description: 'Develop technical understanding to work with engineering teams.',
                skills: ['System Design Basics', 'APIs', 'Wireframing', 'Technical Documentation'],
                resources: []
            },
            {
                title: 'Leadership & Communication',
                duration: '2-3 months',
                description: 'Build leadership and stakeholder management skills.',
                skills: ['Stakeholder Management', 'Presentation Skills', 'Negotiation', 'Team Leadership'],
                resources: []
            }
        ],
        resources: []
    },
    {
        id: 'quantum-developer',
        title: 'Quantum Developer',
        category: 'emerging',
        description: 'Develop quantum computing applications and algorithms.',
        detailedDescription: 'Quantum Developers work on cutting-edge quantum computing technologies, developing quantum algorithms and applications for various industries.',
        icon: 'fas fa-atom',
        salary: {
            india: '₹15-50 LPA',
            usa: '$130-250K'
        },
        growth: 'Expected to grow 50%+ from 2020-2030',
        timeline: '18-30 months to job-ready',
        demand: 'Emerging',
        remote: 'Good',
        barrier: 'Very High',
        skills: ['Quantum Mechanics', 'Linear Algebra', 'Python', 'Qiskit', 'Cirq', 'Quantum Algorithms'],
        detailedRoadmap: [
            {
                title: 'Mathematical Foundations',
                duration: '4-6 months',
                description: 'Build strong mathematical foundation for quantum computing.',
                skills: ['Linear Algebra', 'Complex Numbers', 'Probability', 'Quantum Mechanics Basics'],
                resources: []
            },
            {
                title: 'Quantum Programming',
                duration: '4-6 months',
                description: 'Learn quantum programming languages and frameworks.',
                skills: ['Qiskit', 'Cirq', 'Q#', 'Quantum Circuits', 'Quantum Gates'],
                resources: []
            },
            {
                title: 'Quantum Algorithms',
                duration: '4-6 months',
                description: 'Master important quantum algorithms and their applications.',
                skills: ['Shor\'s Algorithm', 'Grover\'s Algorithm', 'QAOA', 'VQE', 'Quantum ML'],
                resources: []
            },
            {
                title: 'Applications & Research',
                duration: '6-8 months',
                description: 'Apply quantum computing to real-world problems.',
                skills: ['Quantum Cryptography', 'Quantum Optimization', 'Quantum Chemistry', 'Research Methods'],
                resources: []
            }
        ],
        resources: []
    },
    {
        id: 'ar-vr-developer',
        title: 'AR/VR Developer',
        category: 'emerging',
        description: 'Create immersive augmented and virtual reality experiences.',
        detailedDescription: 'AR/VR Developers build immersive experiences using augmented reality and virtual reality technologies for gaming, education, training, and enterprise applications.',
        icon: 'fas fa-vr-cardboard',
        salary: {
            india: '₹6-22 LPA',
            usa: '$80-150K'
        },
        growth: 'Expected to grow 30% from 2020-2030',
        timeline: '10-18 months to job-ready',
        demand: 'Growing',
        remote: 'Good',
        barrier: 'High',
        skills: ['Unity', 'Unreal Engine', 'C#', '3D Modeling', 'ARKit', 'ARCore', 'Oculus SDK'],
        detailedRoadmap: [
            {
                title: '3D Development Basics',
                duration: '3-4 months',
                description: 'Learn 3D graphics and development fundamentals.',
                skills: ['3D Mathematics', 'Unity', 'C#', '3D Modeling', 'Animation'],
                resources: []
            },
            {
                title: 'AR Development',
                duration: '3-4 months',
                description: 'Master augmented reality development.',
                skills: ['ARKit', 'ARCore', 'ARFoundation', 'Computer Vision', 'SLAM'],
                resources: []
            },
            {
                title: 'VR Development',
                duration: '3-4 months',
                description: 'Build virtual reality experiences.',
                skills: ['Oculus SDK', 'OpenVR', 'VR Interaction', 'Spatial Audio', 'Performance Optimization'],
                resources: []
            },
            {
                title: 'Advanced & Mixed Reality',
                duration: '2-4 months',
                description: 'Explore advanced topics and mixed reality.',
                skills: ['Mixed Reality', 'Hand Tracking', 'Eye Tracking', 'Haptic Feedback', 'WebXR'],
                resources: []
            }
        ],
        resources: []
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { careers, assessmentQuestions };
}
