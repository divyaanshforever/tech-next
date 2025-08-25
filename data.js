// Career Paths Data Structure
const careerData = {
    'full-stack': {
        title: 'Full Stack Developer',
        description: 'Build complete web applications from front-end to back-end, handling both user interfaces and server-side logic.',
        icon: 'fas fa-layer-group',
        tags: ['JavaScript', 'React', 'Node.js', 'Databases', 'APIs'],
        salary: {
            india: '₹6-25 LPA',
            usa: '$70-150K',
            details: {
                junior: { india: '₹6-12 LPA', usa: '$70-95K' },
                mid: { india: '₹12-20 LPA', usa: '$95-130K' },
                senior: { india: '₹20-25+ LPA', usa: '$130-150K+' }
            }
        },
        growth: 'High demand with 22% projected growth. Full-stack developers are versatile and highly sought after in startups and enterprises.',
        roadmap: [
            {
                title: 'Frontend Fundamentals',
                description: 'Master HTML, CSS, and JavaScript. Learn responsive design and accessibility principles.'
            },
            {
                title: 'Frontend Framework',
                description: 'Learn React, Vue.js, or Angular. Understand component-based architecture and state management.'
            },
            {
                title: 'Backend Development',
                description: 'Learn Node.js, Express.js, or other backend frameworks. Understand server-side programming.'
            },
            {
                title: 'Database Management',
                description: 'Master SQL and NoSQL databases. Learn MongoDB, PostgreSQL, or MySQL.'
            },
            {
                title: 'API Development',
                description: 'Build and consume RESTful APIs and GraphQL. Understand authentication and security.'
            },
            {
                title: 'DevOps Basics',
                description: 'Learn Git, deployment, CI/CD, and cloud services like AWS or Heroku.'
            },
            {
                title: 'Advanced Topics',
                description: 'Microservices, testing, performance optimization, and system design.'
            }
        ],
        resources: [
            {
                name: 'The Odin Project',
                url: 'https://theodinproject.com',
                type: 'Course',
                description: 'Free comprehensive full-stack curriculum'
            },
            {
                name: 'FreeCodeCamp',
                url: 'https://freecodecamp.org',
                type: 'Course',
                description: 'Interactive coding challenges and projects'
            },
            {
                name: 'MDN Web Docs',
                url: 'https://developer.mozilla.org',
                type: 'Documentation',
                description: 'Comprehensive web development documentation'
            },
            {
                name: 'Full Stack Open',
                url: 'https://fullstackopen.com',
                type: 'Course',
                description: 'University of Helsinki\'s full-stack course'
            }
        ]
    },

    'ml-engineer': {
        title: 'Machine Learning Engineer',
        description: 'Design and implement machine learning systems that can learn and make predictions from data.',
        icon: 'fas fa-brain',
        tags: ['Python', 'TensorFlow', 'PyTorch', 'Data Science', 'AI'],
        salary: {
            india: '₹8-35 LPA',
            usa: '$90-180K',
            details: {
                junior: { india: '₹8-15 LPA', usa: '$90-120K' },
                mid: { india: '₹15-25 LPA', usa: '$120-150K' },
                senior: { india: '₹25-35+ LPA', usa: '$150-180K+' }
            }
        },
        growth: 'Explosive growth with 31% projected increase. AI and ML are transforming every industry.',
        roadmap: [
            {
                title: 'Programming Foundations',
                description: 'Master Python and its data science libraries: NumPy, Pandas, Matplotlib.'
            },
            {
                title: 'Statistics & Mathematics',
                description: 'Learn linear algebra, calculus, statistics, and probability theory.'
            },
            {
                title: 'Machine Learning Basics',
                description: 'Understand supervised, unsupervised learning, and basic algorithms.'
            },
            {
                title: 'Deep Learning',
                description: 'Learn neural networks using TensorFlow or PyTorch. Understand CNNs and RNNs.'
            },
            {
                title: 'MLOps & Production',
                description: 'Learn to deploy models, version control, monitoring, and scaling ML systems.'
            },
            {
                title: 'Specialized Areas',
                description: 'Focus on NLP, Computer Vision, or Reinforcement Learning based on interests.'
            },
            {
                title: 'Research & Innovation',
                description: 'Stay updated with latest papers, contribute to open source, and build projects.'
            }
        ],
        resources: [
            {
                name: 'Coursera ML Course',
                url: 'https://coursera.org/learn/machine-learning',
                type: 'Course',
                description: 'Andrew Ng\'s famous machine learning course'
            },
            {
                name: 'Fast.ai',
                url: 'https://fast.ai',
                type: 'Course',
                description: 'Practical deep learning for coders'
            },
            {
                name: 'Kaggle Learn',
                url: 'https://kaggle.com/learn',
                type: 'Platform',
                description: 'Free micro-courses and competitions'
            },
            {
                name: 'Papers with Code',
                url: 'https://paperswithcode.com',
                type: 'Research',
                description: 'Latest ML research with implementation'
            }
        ]
    },

    'frontend': {
        title: 'Frontend Developer',
        description: 'Create engaging user interfaces and experiences that users interact with directly in web browsers.',
        icon: 'fas fa-palette',
        tags: ['React', 'JavaScript', 'CSS', 'UI/UX', 'TypeScript'],
        salary: {
            india: '₹5-20 LPA',
            usa: '$60-130K',
            details: {
                junior: { india: '₹5-10 LPA', usa: '$60-85K' },
                mid: { india: '₹10-16 LPA', usa: '$85-110K' },
                senior: { india: '₹16-20+ LPA', usa: '$110-130K+' }
            }
        },
        growth: 'Strong demand with focus on mobile-first and accessibility. Growing need for performance optimization.',
        roadmap: [
            {
                title: 'HTML & CSS Mastery',
                description: 'Learn semantic HTML, modern CSS, Flexbox, Grid, and responsive design.'
            },
            {
                title: 'JavaScript Fundamentals',
                description: 'Master ES6+, DOM manipulation, async programming, and modern JavaScript concepts.'
            },
            {
                title: 'Modern Framework',
                description: 'Learn React, Vue.js, or Angular. Understand component lifecycle and state management.'
            },
            {
                title: 'Build Tools & Workflow',
                description: 'Master Webpack, Vite, npm/yarn, and modern development workflows.'
            },
            {
                title: 'Testing & Quality',
                description: 'Learn unit testing, integration testing, and code quality tools.'
            },
            {
                title: 'Performance & Accessibility',
                description: 'Optimize for speed, SEO, and accessibility. Learn Progressive Web Apps.'
            },
            {
                title: 'Advanced Topics',
                description: 'Micro-frontends, TypeScript, and modern deployment strategies.'
            }
        ],
        resources: [
            {
                name: 'Frontend Masters',
                url: 'https://frontendmasters.com',
                type: 'Course',
                description: 'Comprehensive frontend development courses'
            },
            {
                name: 'React Documentation',
                url: 'https://react.dev',
                type: 'Documentation',
                description: 'Official React learning resources'
            },
            {
                name: 'CSS-Tricks',
                url: 'https://css-tricks.com',
                type: 'Blog',
                description: 'CSS techniques and best practices'
            },
            {
                name: 'JavaScript.info',
                url: 'https://javascript.info',
                type: 'Tutorial',
                description: 'Modern JavaScript tutorial'
            }
        ]
    },

    'backend': {
        title: 'Backend Developer',
        description: 'Build server-side applications, APIs, and databases that power web and mobile applications.',
        icon: 'fas fa-server',
        tags: ['Node.js', 'Python', 'APIs', 'Databases', 'Cloud'],
        salary: {
            india: '₹6-22 LPA',
            usa: '$75-140K',
            details: {
                junior: { india: '₹6-12 LPA', usa: '$75-100K' },
                mid: { india: '₹12-18 LPA', usa: '$100-120K' },
                senior: { india: '₹18-22+ LPA', usa: '$120-140K+' }
            }
        },
        growth: 'Consistent demand with focus on microservices and cloud-native architectures.',
        roadmap: [
            {
                title: 'Programming Language',
                description: 'Master one backend language: Node.js, Python, Java, Go, or C#.'
            },
            {
                title: 'Database Design',
                description: 'Learn SQL and NoSQL databases. Understand data modeling and optimization.'
            },
            {
                title: 'API Development',
                description: 'Build RESTful APIs and GraphQL. Learn authentication and authorization.'
            },
            {
                title: 'Framework Mastery',
                description: 'Learn Express.js, Django, Spring Boot, or similar backend frameworks.'
            },
            {
                title: 'Cloud & DevOps',
                description: 'Deploy to cloud platforms, containerization with Docker, and CI/CD.'
            },
            {
                title: 'System Design',
                description: 'Learn scalability, caching, load balancing, and distributed systems.'
            },
            {
                title: 'Security & Testing',
                description: 'Implement security best practices and comprehensive testing strategies.'
            }
        ],
        resources: [
            {
                name: 'Node.js Documentation',
                url: 'https://nodejs.org/docs',
                type: 'Documentation',
                description: 'Official Node.js learning resources'
            },
            {
                name: 'System Design Primer',
                url: 'https://github.com/donnemartin/system-design-primer',
                type: 'Guide',
                description: 'Learn system design concepts'
            },
            {
                name: 'Postman Learning',
                url: 'https://learning.postman.com',
                type: 'Course',
                description: 'API development and testing'
            },
            {
                name: 'AWS Training',
                url: 'https://aws.training',
                type: 'Course',
                description: 'Cloud services and deployment'
            }
        ]
    },

    'mobile': {
        title: 'Mobile Developer',
        description: 'Create native and cross-platform mobile applications for iOS and Android devices.',
        icon: 'fas fa-mobile-alt',
        tags: ['React Native', 'Flutter', 'iOS', 'Android', 'Swift'],
        salary: {
            india: '₹7-25 LPA',
            usa: '$80-150K',
            details: {
                junior: { india: '₹7-13 LPA', usa: '$80-105K' },
                mid: { india: '₹13-20 LPA', usa: '$105-130K' },
                senior: { india: '₹20-25+ LPA', usa: '$130-150K+' }
            }
        },
        growth: 'Strong growth with mobile-first approach. Demand for cross-platform development is increasing.',
        roadmap: [
            {
                title: 'Platform Choice',
                description: 'Choose between native (iOS/Android) or cross-platform (React Native/Flutter).'
            },
            {
                title: 'Programming Foundations',
                description: 'Learn Swift/Kotlin for native or JavaScript/Dart for cross-platform.'
            },
            {
                title: 'UI/UX for Mobile',
                description: 'Understand mobile design patterns, navigation, and platform guidelines.'
            },
            {
                title: 'State Management',
                description: 'Learn app state management, local storage, and data persistence.'
            },
            {
                title: 'APIs & Networking',
                description: 'Integrate with REST APIs, handle network requests, and manage data sync.'
            },
            {
                title: 'Testing & Debugging',
                description: 'Learn mobile testing strategies, debugging tools, and performance optimization.'
            },
            {
                title: 'App Store Deployment',
                description: 'Master app store guidelines, deployment process, and app marketing.'
            }
        ],
        resources: [
            {
                name: 'React Native Docs',
                url: 'https://reactnative.dev',
                type: 'Documentation',
                description: 'Official React Native documentation'
            },
            {
                name: 'Flutter Documentation',
                url: 'https://flutter.dev',
                type: 'Documentation',
                description: 'Official Flutter learning resources'
            },
            {
                name: 'iOS Developer Guide',
                url: 'https://developer.apple.com',
                type: 'Documentation',
                description: 'Apple\'s iOS development resources'
            },
            {
                name: 'Android Developers',
                url: 'https://developer.android.com',
                type: 'Documentation',
                description: 'Google\'s Android development resources'
            }
        ]
    },

    'devops': {
        title: 'DevOps Engineer',
        description: 'Bridge development and operations by automating deployment, scaling, and monitoring of applications.',
        icon: 'fas fa-cogs',
        tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
        salary: {
            india: '₹8-30 LPA',
            usa: '$90-160K',
            details: {
                junior: { india: '₹8-15 LPA', usa: '$90-115K' },
                mid: { india: '₹15-22 LPA', usa: '$115-140K' },
                senior: { india: '₹22-30+ LPA', usa: '$140-160K+' }
            }
        },
        growth: 'High demand as companies adopt cloud and automation. DevOps culture is becoming standard.',
        roadmap: [
            {
                title: 'Linux & Scripting',
                description: 'Master Linux command line, shell scripting, and system administration.'
            },
            {
                title: 'Version Control',
                description: 'Advanced Git workflows, branching strategies, and collaboration practices.'
            },
            {
                title: 'Cloud Platforms',
                description: 'Learn AWS, Azure, or GCP. Understand cloud services and architecture.'
            },
            {
                title: 'Containerization',
                description: 'Master Docker and container orchestration with Kubernetes.'
            },
            {
                title: 'CI/CD Pipelines',
                description: 'Implement continuous integration and deployment with Jenkins, GitLab CI, or GitHub Actions.'
            },
            {
                title: 'Infrastructure as Code',
                description: 'Learn Terraform, Ansible, or CloudFormation for infrastructure automation.'
            },
            {
                title: 'Monitoring & Security',
                description: 'Implement logging, monitoring, alerting, and security best practices.'
            }
        ],
        resources: [
            {
                name: 'AWS Training',
                url: 'https://aws.training',
                type: 'Course',
                description: 'Official AWS certification paths'
            },
            {
                name: 'Kubernetes Documentation',
                url: 'https://kubernetes.io/docs',
                type: 'Documentation',
                description: 'Official Kubernetes learning resources'
            },
            {
                name: 'DevOps Roadmap',
                url: 'https://roadmap.sh/devops',
                type: 'Guide',
                description: 'Comprehensive DevOps learning path'
            },
            {
                name: 'Docker Documentation',
                url: 'https://docs.docker.com',
                type: 'Documentation',
                description: 'Official Docker learning resources'
            }
        ]
    },

    'cybersecurity': {
        title: 'Cybersecurity Specialist',
        description: 'Protect digital assets, networks, and systems from cyber threats and security breaches.',
        icon: 'fas fa-shield-alt',
        tags: ['Security', 'Ethical Hacking', 'Network Security', 'Risk Assessment'],
        salary: {
            india: '₹6-25 LPA',
            usa: '$85-150K',
            details: {
                junior: { india: '₹6-12 LPA', usa: '$85-110K' },
                mid: { india: '₹12-20 LPA', usa: '$110-130K' },
                senior: { india: '₹20-25+ LPA', usa: '$130-150K+' }
            }
        },
        growth: 'Critical demand with 31% projected growth. Cybersecurity threats are increasing exponentially.',
        roadmap: [
            {
                title: 'Security Fundamentals',
                description: 'Learn basic security principles, threat landscape, and risk management.'
            },
            {
                title: 'Network Security',
                description: 'Understand network protocols, firewalls, VPNs, and network monitoring.'
            },
            {
                title: 'Ethical Hacking',
                description: 'Learn penetration testing, vulnerability assessment, and ethical hacking techniques.'
            },
            {
                title: 'Security Tools',
                description: 'Master tools like Wireshark, Metasploit, Nmap, and vulnerability scanners.'
            },
            {
                title: 'Incident Response',
                description: 'Learn to handle security incidents, forensics, and recovery procedures.'
            },
            {
                title: 'Compliance & Governance',
                description: 'Understand security frameworks, compliance requirements, and governance.'
            },
            {
                title: 'Specialized Areas',
                description: 'Focus on cloud security, application security, or security architecture.'
            }
        ],
        resources: [
            {
                name: 'CISSP Guide',
                url: 'https://isc2.org/certifications/cissp',
                type: 'Certification',
                description: 'Leading cybersecurity certification'
            },
            {
                name: 'OWASP',
                url: 'https://owasp.org',
                type: 'Resource',
                description: 'Web application security resources'
            },
            {
                name: 'Cybrary',
                url: 'https://cybrary.it',
                type: 'Course',
                description: 'Free cybersecurity training'
            },
            {
                name: 'Hack The Box',
                url: 'https://hackthebox.com',
                type: 'Practice',
                description: 'Hands-on ethical hacking practice'
            }
        ]
    },

    'blockchain': {
        title: 'Blockchain Developer',
        description: 'Build decentralized applications (DApps) and smart contracts on blockchain platforms.',
        icon: 'fas fa-link',
        tags: ['Solidity', 'Web3', 'Ethereum', 'Smart Contracts', 'DeFi'],
        salary: {
            india: '₹8-40 LPA',
            usa: '$90-200K',
            details: {
                junior: { india: '₹8-18 LPA', usa: '$90-130K' },
                mid: { india: '₹18-30 LPA', usa: '$130-170K' },
                senior: { india: '₹30-40+ LPA', usa: '$170-200K+' }
            }
        },
        growth: 'Emerging field with high potential. Web3 and DeFi are driving significant demand.',
        roadmap: [
            {
                title: 'Blockchain Basics',
                description: 'Understand blockchain technology, cryptocurrencies, and distributed systems.'
            },
            {
                title: 'Smart Contract Development',
                description: 'Learn Solidity programming and Ethereum development environment.'
            },
            {
                title: 'DApp Development',
                description: 'Build decentralized applications using Web3.js or Ethers.js.'
            },
            {
                title: 'Testing & Security',
                description: 'Learn smart contract testing, security best practices, and auditing.'
            },
            {
                title: 'DeFi Protocols',
                description: 'Understand decentralized finance protocols and yield farming.'
            },
            {
                title: 'Layer 2 Solutions',
                description: 'Learn about scaling solutions like Polygon, Arbitrum, and Optimism.'
            },
            {
                title: 'Cross-chain Development',
                description: 'Explore multi-chain development and interoperability solutions.'
            }
        ],
        resources: [
            {
                name: 'Ethereum Documentation',
                url: 'https://ethereum.org/developers',
                type: 'Documentation',
                description: 'Official Ethereum developer resources'
            },
            {
                name: 'Solidity Documentation',
                url: 'https://docs.soliditylang.org',
                type: 'Documentation',
                description: 'Official Solidity programming guide'
            },
            {
                name: 'CryptoZombies',
                url: 'https://cryptozombies.io',
                type: 'Course',
                description: 'Interactive Solidity tutorial'
            },
            {
                name: 'Web3 University',
                url: 'https://web3.university',
                type: 'Course',
                description: 'Comprehensive Web3 development course'
            }
        ]
    },

    'game-dev': {
        title: 'Game Developer',
        description: 'Create interactive gaming experiences across multiple platforms using various game engines.',
        icon: 'fas fa-gamepad',
        tags: ['Unity', 'Unreal Engine', 'C#', 'C++', 'Game Design'],
        salary: {
            india: '₹5-20 LPA',
            usa: '$65-130K',
            details: {
                junior: { india: '₹5-10 LPA', usa: '$65-85K' },
                mid: { india: '₹10-16 LPA', usa: '$85-110K' },
                senior: { india: '₹16-20+ LPA', usa: '$110-130K+' }
            }
        },
        growth: 'Growing rapidly with mobile gaming boom and emerging technologies like VR/AR.',
        roadmap: [
            {
                title: 'Game Design Fundamentals',
                description: 'Learn game mechanics, player psychology, and basic design principles.'
            },
            {
                title: 'Programming for Games',
                description: 'Master C# for Unity or C++ for Unreal Engine. Learn game-specific programming patterns.'
            },
            {
                title: 'Game Engine Mastery',
                description: 'Deep dive into Unity or Unreal Engine. Learn scene management and asset pipeline.'
            },
            {
                title: 'Graphics & Animation',
                description: 'Learn 2D/3D graphics, animation systems, and visual effects.'
            },
            {
                title: 'Physics & AI',
                description: 'Implement game physics, AI behavior systems, and pathfinding algorithms.'
            },
            {
                title: 'Audio & Performance',
                description: 'Integrate audio systems and optimize game performance across platforms.'
            },
            {
                title: 'Publishing & Marketing',
                description: 'Learn game publishing, monetization strategies, and marketing techniques.'
            }
        ],
        resources: [
            {
                name: 'Unity Learn',
                url: 'https://learn.unity.com',
                type: 'Course',
                description: 'Official Unity learning platform'
            },
            {
                name: 'Unreal Engine Documentation',
                url: 'https://docs.unrealengine.com',
                type: 'Documentation',
                description: 'Official Unreal Engine resources'
            },
            {
                name: 'Gamasutra',
                url: 'https://gamasutra.com',
                type: 'Blog',
                description: 'Game development industry insights'
            },
            {
                name: 'Brackeys YouTube',
                url: 'https://youtube.com/brackeys',
                type: 'Video',
                description: 'Popular game development tutorials'
            }
        ]
    },

    'data-scientist': {
        title: 'Data Scientist',
        description: 'Extract insights from complex datasets to drive business decisions and solve real-world problems.',
        icon: 'fas fa-chart-line',
        tags: ['Python', 'R', 'SQL', 'Statistics', 'Machine Learning'],
        salary: {
            india: '₹7-30 LPA',
            usa: '$85-165K',
            details: {
                junior: { india: '₹7-15 LPA', usa: '$85-115K' },
                mid: { india: '₹15-22 LPA', usa: '$115-140K' },
                senior: { india: '₹22-30+ LPA', usa: '$140-165K+' }
            }
        },
        growth: 'High demand across all industries. Data-driven decision making is becoming essential.',
        roadmap: [
            {
                title: 'Statistics & Mathematics',
                description: 'Master statistics, probability, linear algebra, and calculus fundamentals.'
            },
            {
                title: 'Programming Skills',
                description: 'Learn Python or R for data analysis. Master libraries like Pandas, NumPy, Matplotlib.'
            },
            {
                title: 'Data Manipulation',
                description: 'Learn SQL for database queries and data cleaning techniques.'
            },
            {
                title: 'Data Visualization',
                description: 'Create compelling visualizations using Tableau, Power BI, or Python libraries.'
            },
            {
                title: 'Machine Learning',
                description: 'Apply ML algorithms for predictive analytics and pattern recognition.'
            },
            {
                title: 'Big Data Tools',
                description: 'Learn Hadoop, Spark, and other big data processing frameworks.'
            },
            {
                title: 'Business Intelligence',
                description: 'Translate data insights into business recommendations and strategies.'
            }
        ],
        resources: [
            {
                name: 'Kaggle Learn',
                url: 'https://kaggle.com/learn',
                type: 'Course',
                description: 'Free data science micro-courses'
            },
            {
                name: 'Coursera Data Science',
                url: 'https://coursera.org/specializations/jhu-data-science',
                type: 'Course',
                description: 'Johns Hopkins Data Science Specialization'
            },
            {
                name: 'Towards Data Science',
                url: 'https://towardsdatascience.com',
                type: 'Blog',
                description: 'Medium publication for data science'
            },
            {
                name: 'Python for Data Analysis',
                url: 'https://wesmckinney.com/book',
                type: 'Book',
                description: 'Essential book by Pandas creator'
            }
        ]
    },

    'ui-ux': {
        title: 'UI/UX Designer',
        description: 'Design intuitive user interfaces and create seamless user experiences for digital products.',
        icon: 'fas fa-paint-brush',
        tags: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Design Systems'],
        salary: {
            india: '₹4-18 LPA',
            usa: '$60-120K',
            details: {
                junior: { india: '₹4-8 LPA', usa: '$60-80K' },
                mid: { india: '₹8-14 LPA', usa: '$80-100K' },
                senior: { india: '₹14-18+ LPA', usa: '$100-120K+' }
            }
        },
        growth: 'Strong demand as user experience becomes a key differentiator for digital products.',
        roadmap: [
            {
                title: 'Design Fundamentals',
                description: 'Learn color theory, typography, composition, and visual hierarchy principles.'
            },
            {
                title: 'Design Tools',
                description: 'Master Figma, Adobe XD, or Sketch for interface design and prototyping.'
            },
            {
                title: 'User Research',
                description: 'Learn user interviews, surveys, usability testing, and research methodologies.'
            },
            {
                title: 'Wireframing & Prototyping',
                description: 'Create wireframes, mockups, and interactive prototypes for testing ideas.'
            },
            {
                title: 'Interaction Design',
                description: 'Design micro-interactions, animations, and user flow optimization.'
            },
            {
                title: 'Design Systems',
                description: 'Build scalable design systems and component libraries for consistency.'
            },
            {
                title: 'Frontend Collaboration',
                description: 'Learn basic HTML/CSS to better collaborate with developers.'
            }
        ],
        resources: [
            {
                name: 'Figma Academy',
                url: 'https://figma.com/academy',
                type: 'Course',
                description: 'Official Figma design courses'
            },
            {
                name: 'Nielsen Norman Group',
                url: 'https://nngroup.com',
                type: 'Research',
                description: 'UX research and best practices'
            },
            {
                name: 'Google Design',
                url: 'https://design.google',
                type: 'Resource',
                description: 'Google\'s design philosophy and resources'
            },
            {
                name: 'Dribbble',
                url: 'https://dribbble.com',
                type: 'Inspiration',
                description: 'Design inspiration and community'
            }
        ]
    },

    'cloud-architect': {
        title: 'Cloud Architect',
        description: 'Design scalable, secure, and cost-effective cloud infrastructure solutions for enterprises.',
        icon: 'fas fa-cloud',
        tags: ['AWS', 'Azure', 'Google Cloud', 'Architecture', 'Scalability'],
        salary: {
            india: '₹12-45 LPA',
            usa: '$120-200K',
            details: {
                junior: { india: '₹12-20 LPA', usa: '$120-150K' },
                mid: { india: '₹20-32 LPA', usa: '$150-175K' },
                senior: { india: '₹32-45+ LPA', usa: '$175-200K+' }
            }
        },
        growth: 'Exceptional demand as companies migrate to cloud. Critical role for digital transformation.',
        roadmap: [
            {
                title: 'Cloud Fundamentals',
                description: 'Understand cloud computing models, service types, and major cloud providers.'
            },
            {
                title: 'Platform Expertise',
                description: 'Deep dive into AWS, Azure, or Google Cloud Platform services and architecture.'
            },
            {
                title: 'Infrastructure Design',
                description: 'Learn to design scalable, fault-tolerant, and secure cloud architectures.'
            },
            {
                title: 'Cost Optimization',
                description: 'Master cloud cost management, resource optimization, and billing strategies.'
            },
            {
                title: 'Security & Compliance',
                description: 'Implement cloud security best practices and compliance frameworks.'
            },
            {
                title: 'Automation & IaC',
                description: 'Use Infrastructure as Code tools like Terraform and CloudFormation.'
            },
            {
                title: 'Migration Strategies',
                description: 'Plan and execute cloud migration projects and hybrid cloud solutions.'
            }
        ],
        resources: [
            {
                name: 'AWS Well-Architected',
                url: 'https://aws.amazon.com/architecture/well-architected',
                type: 'Framework',
                description: 'AWS architecture best practices'
            },
            {
                name: 'Azure Architecture Center',
                url: 'https://docs.microsoft.com/azure/architecture',
                type: 'Documentation',
                description: 'Microsoft Azure architecture guidance'
            },
            {
                name: 'Google Cloud Architecture',
                url: 'https://cloud.google.com/architecture',
                type: 'Documentation',
                description: 'Google Cloud architecture resources'
            },
            {
                name: 'Cloud Academy',
                url: 'https://cloudacademy.com',
                type: 'Course',
                description: 'Cloud certification training'
            }
        ]
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = careerData;
}
