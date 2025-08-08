// data.js – Enhanced Tech Roles v3.0

const techRoles = {
  fullstack: {
    title: "Full Stack Developer",
    description: "Build and deploy complete web applications from frontend to backend with modern technologies.",
    salary: "₹6-25 LPA (India), $70K-150K (USA)",
    growth: "Extremely high demand across startups and enterprises. Perfect for versatile developers who want to work on entire product lifecycles.",
    icon: "fas fa-code",
    roadmap: [
      "Master HTML5, CSS3, and modern JavaScript (ES6+)",
      "Learn Git version control and GitHub workflow",
      "Understand responsive design with Flexbox and Grid",
      "Choose a frontend framework: React, Vue, or Angular",
      "Learn state management (Redux, Vuex, Context API)",
      "Understand REST APIs and GraphQL",
      "Learn Node.js and Express.js for backend",
      "Work with databases: MongoDB and PostgreSQL",
      "Implement authentication and authorization",
      "Deploy applications with Docker and cloud platforms",
      "Build a complete full-stack project portfolio"
    ],
    resources: [
      { name: "The Odin Project", url: "https://theodinproject.com" },
      { name: "Full Stack Open", url: "https://fullstackopen.com/en" },
      { name: "JavaScript.info", url: "https://javascript.info" },
      { name: "MDN Web Docs", url: "https://developer.mozilla.org" },
      { name: "FreeCodeCamp", url: "https://freecodecamp.org" }
    ]
  },
  ml: {
    title: "Machine Learning Engineer",
    description: "Design and implement intelligent systems using advanced algorithms and data science techniques.",
    salary: "₹10-35 LPA (India), $90K-200K (USA)",
    growth: "Explosive growth in AI, healthcare, finance, and autonomous systems. One of the highest-paying tech careers.",
    icon: "fas fa-brain",
    roadmap: [
      "Master Python programming and core libraries",
      "Study mathematics: Linear Algebra, Statistics, Calculus",
      "Learn data manipulation with NumPy and Pandas",
      "Understand supervised and unsupervised learning",
      "Master Scikit-learn for traditional ML algorithms",
      "Dive into deep learning with TensorFlow/PyTorch",
      "Explore computer vision and NLP applications",
      "Work on real-world datasets from Kaggle",
      "Learn MLOps: model deployment and monitoring",
      "Build end-to-end ML projects with cloud platforms"
    ],
    resources: [
      { name: "Fast.ai", url: "https://fast.ai" },
      { name: "Kaggle Learn", url: "https://kaggle.com/learn" },
      { name: "Coursera ML by Andrew Ng", url: "https://coursera.org/learn/machine-learning" },
      { name: "Papers with Code", url: "https://paperswithcode.com" },
      { name: "Towards Data Science", url: "https://towardsdatascience.com" }
    ]
  },
  frontend: {
    title: "Frontend Developer",
    description: "Create stunning, interactive user interfaces with modern frameworks and cutting-edge design principles.",
    salary: "₹4-18 LPA (India), $60K-120K (USA)",
    growth: "Massive demand with the explosion of web and mobile applications. Great for creative problem solvers.",
    icon: "fas fa-palette",
    roadmap: [
      "Master HTML5 semantics and accessibility",
      "Learn advanced CSS3: animations, transforms, custom properties",
      "Understand modern JavaScript and DOM manipulation",
      "Master CSS preprocessors: Sass or Less",
      "Learn a modern framework: React, Vue, or Svelte",
      "Understand component-based architecture",
      "Learn build tools: Webpack, Vite, or Parcel",
      "Master responsive design and mobile-first approach",
      "Understand web performance optimization",
      "Build progressive web applications (PWAs)"
    ],
    resources: [
      { name: "Frontend Mentor", url: "https://frontendmentor.io" },
      { name: "CSS-Tricks", url: "https://css-tricks.com" },
      { name: "React Documentation", url: "https://react.dev" },
      { name: "Vue.js Guide", url: "https://vuejs.org/guide/" },
      { name: "Web.dev", url: "https://web.dev" }
    ]
  },
  backend: {
    title: "Backend Developer",
    description: "Build robust server-side applications, APIs, and database systems that power modern applications.",
    salary: "₹5-22 LPA (India), $65K-140K (USA)",
    growth: "Strong demand for scalable system architects. Essential for every digital product and service.",
    icon: "fas fa-server",
    roadmap: [
      "Choose a backend language: Python, Java, or Node.js",
      "Learn database design and SQL",
      "Understand REST API design principles",
      "Master a web framework: Express, Django, or Spring",
      "Learn authentication and security best practices",
      "Understand microservices architecture",
      "Master cloud services: AWS, GCP, or Azure",
      "Learn containerization with Docker",
      "Understand message queues and caching",
      "Implement monitoring and logging systems"
    ],
    resources: [
      { name: "Node.js Documentation", url: "https://nodejs.org/en/docs/" },
      { name: "Django Documentation", url: "https://docs.djangoproject.com/" },
      { name: "PostgreSQL Tutorial", url: "https://www.postgresqltutorial.com/" },
      { name: "AWS Documentation", url: "https://docs.aws.amazon.com/" },
      { name: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" }
    ]
  },
  mobile: {
    title: "Mobile Developer",
    description: "Create native and cross-platform mobile applications for iOS and Android platforms.",
    salary: "₹5-20 LPA (India), $65K-130K (USA)",
    growth: "Mobile-first world demands skilled developers. High growth in fintech, e-commerce, and social apps.",
    icon: "fas fa-mobile-alt",
    roadmap: [
      "Choose your path: Native (Swift/Kotlin) or Cross-platform",
      "Learn mobile UI/UX design principles",
      "Master React Native or Flutter for cross-platform",
      "Understand mobile app architecture patterns",
      "Learn local storage and offline capabilities",
      "Master API integration and state management",
      "Understand app store submission processes",
      "Learn mobile-specific testing strategies",
      "Implement push notifications and analytics",
      "Build and publish a complete mobile app"
    ],
    resources: [
      { name: "React Native Documentation", url: "https://reactnative.dev/" },
      { name: "Flutter Documentation", url: "https://flutter.dev/docs" },
      { name: "iOS Human Interface Guidelines", url: "https://developer.apple.com/design/human-interface-guidelines/" },
      { name: "Android Developer Guides", url: "https://developer.android.com/guide" },
      { name: "Expo Documentation", url: "https://docs.expo.dev/" }
    ]
  },
  devops: {
    title: "DevOps Engineer",
    description: "Bridge development and operations with automation, CI/CD pipelines, and cloud infrastructure.",
    salary: "₹8-30 LPA (India), $80K-160K (USA)",
    growth: "Critical role in modern software development. High demand for cloud and automation expertise.",
    icon: "fas fa-cogs",
    roadmap: [
      "Learn Linux system administration",
      "Master containerization with Docker",
      "Understand orchestration with Kubernetes",
      "Learn Infrastructure as Code (Terraform, Ansible)",
      "Master CI/CD pipelines with Jenkins or GitHub Actions",
      "Understand cloud platforms: AWS, GCP, Azure",
      "Learn monitoring and logging tools",
      "Implement security best practices",
      "Master configuration management",
      "Build automated deployment strategies"
    ],
    resources: [
      { name: "Docker Documentation", url: "https://docs.docker.com/" },
      { name: "Kubernetes Documentation", url: "https://kubernetes.io/docs/" },
      { name: "Terraform Tutorials", url: "https://learn.hashicorp.com/terraform" },
      { name: "AWS DevOps", url: "https://aws.amazon.com/devops/" },
      { name: "DevOps Roadmap", url: "https://roadmap.sh/devops" }
    ]
  },
  cybersecurity: {
    title: "Cybersecurity Specialist",
    description: "Protect organizations from cyber threats through security analysis, penetration testing, and risk assessment.",
    salary: "₹6-28 LPA (India), $75K-155K (USA)",
    growth: "Critical need with increasing cyber threats. Government and enterprise sectors showing massive growth.",
    icon: "fas fa-shield-alt",
    roadmap: [
      "Learn networking fundamentals and protocols",
      "Understand operating systems security (Windows, Linux)",
      "Master ethical hacking and penetration testing",
      "Learn cryptography and encryption methods",
      "Understand security frameworks (NIST, ISO 27001)",
      "Practice with security tools (Nmap, Wireshark, Metasploit)",
      "Learn incident response and forensics",
      "Understand compliance and governance",
      "Get certified (CEH, CISSP, Security+)",
      "Specialize in cloud security or IoT security"
    ],
    resources: [
      { name: "Cybrary", url: "https://cybrary.it" },
      { name: "OWASP", url: "https://owasp.org" },
      { name: "Hack The Box", url: "https://hackthebox.com" },
      { name: "TryHackMe", url: "https://tryhackme.com" },
      { name: "SANS Institute", url: "https://sans.org" }
    ]
  },
  blockchain: {
    title: "Blockchain Developer",
    description: "Build decentralized applications and smart contracts on various blockchain platforms.",
    salary: "₹8-32 LPA (India), $85K-180K (USA)",
    growth: "Emerging field with huge potential in finance, supply chain, and digital assets.",
    icon: "fas fa-link",
    roadmap: [
      "Understand blockchain fundamentals and cryptography",
      "Learn Solidity for Ethereum development",
      "Master Web3.js or Ethers.js libraries",
      "Understand smart contract security",
      "Learn DeFi protocols and concepts",
      "Explore other blockchains (Binance Smart Chain, Polygon)",
      "Understand NFTs and token standards",
      "Learn blockchain integration with traditional systems",
      "Build and deploy DApps",
      "Stay updated with blockchain trends"
    ],
    resources: [
      { name: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
      { name: "Ethereum.org", url: "https://ethereum.org/en/developers/" },
      { name: "OpenZeppelin", url: "https://openzeppelin.com/" },
      { name: "CryptoZombies", url: "https://cryptozombies.io/" },
      { name: "Consensys Academy", url: "https://consensys.net/academy/" }
    ]
  },
  game: {
    title: "Game Developer",
    description: "Create immersive gaming experiences using modern game engines and programming languages.",
    salary: "₹4-20 LPA (India), $55K-120K (USA)",
    growth: "Expanding rapidly with mobile gaming, VR/AR, and indie game development opportunities.",
    icon: "fas fa-gamepad",
    roadmap: [
      "Learn C# for Unity or C++ for Unreal Engine",
      "Master a game engine (Unity, Unreal, Godot)",
      "Understand game design principles",
      "Learn 2D/3D graphics and animation",
      "Master game physics and mathematics",
      "Learn audio implementation and sound design",
      "Understand monetization strategies",
      "Learn multiplayer game development",
      "Practice with game jams and prototypes",
      "Publish games on various platforms"
    ],
    resources: [
      { name: "Unity Learn", url: "https://learn.unity.com/" },
      { name: "Unreal Engine Documentation", url: "https://docs.unrealengine.com/" },
      { name: "Godot Documentation", url: "https://docs.godotengine.org/" },
      { name: "Game Development Patterns", url: "https://gameprogrammingpatterns.com/" },
      { name: "itch.io", url: "https://itch.io/" }
    ]
  },
  data: {
    title: "Data Scientist",
    description: "Extract insights from complex data using statistical analysis, machine learning, and visualization.",
    salary: "₹8-28 LPA (India), $85K-165K (USA)",
    growth: "Data-driven decision making is crucial for all industries. High growth in analytics and AI.",
    icon: "fas fa-chart-bar",
    roadmap: [
      "Master Python and R for data analysis",
      "Learn statistics and probability theory",
      "Master data manipulation with Pandas and dplyr",
      "Learn data visualization (Matplotlib, ggplot2, Tableau)",
      "Understand machine learning algorithms",
      "Learn SQL for database querying",
      "Master big data tools (Spark, Hadoop)",
      "Learn A/B testing and experimentation",
      "Understand business intelligence concepts",
      "Build end-to-end data science projects"
    ],
    resources: [
      { name: "Kaggle", url: "https://kaggle.com" },
      { name: "DataCamp", url: "https://datacamp.com" },
      { name: "Coursera Data Science", url: "https://coursera.org/specializations/jhu-data-science" },
      { name: "R for Data Science", url: "https://r4ds.had.co.nz/" },
      { name: "Python for Data Analysis", url: "https://wesmckinney.com/book/" }
    ]
  },
  ui: {
    title: "UI/UX Designer",
    description: "Design intuitive and beautiful user experiences through research, prototyping, and visual design.",
    salary: "₹4-18 LPA (India), $60K-125K (USA)",
    growth: "Essential for all digital products. Growing demand for user-centered design thinking.",
    icon: "fas fa-pencil-ruler",
    roadmap: [
      "Learn design fundamentals (color, typography, layout)",
      "Master design tools (Figma, Adobe XD, Sketch)",
      "Understand user research methods",
      "Learn wireframing and prototyping",
      "Study human-computer interaction principles",
      "Master usability testing techniques",
      "Learn accessibility and inclusive design",
      "Understand design systems and style guides",
      "Practice with real client projects",
      "Build a strong design portfolio"
    ],
    resources: [
      { name: "Figma Academy", url: "https://figma.com/academy/" },
      { name: "Nielsen Norman Group", url: "https://nngroup.com" },
      { name: "Material Design", url: "https://material.io/design" },
      { name: "Human Interface Guidelines", url: "https://developer.apple.com/design/" },
      { name: "Dribbble", url: "https://dribbble.com" }
    ]
  },
  cloud: {
    title: "Cloud Architect",
    description: "Design and implement scalable cloud infrastructure solutions for enterprise applications.",
    salary: "₹10-35 LPA (India), $95K-190K (USA)",
    growth: "Cloud adoption is accelerating globally. High demand for cloud expertise across all industries.",
    icon: "fas fa-cloud",
    roadmap: [
      "Learn cloud fundamentals and service models",
      "Master one cloud platform (AWS, Azure, GCP)",
      "Understand virtualization and containerization",
      "Learn Infrastructure as Code principles",
      "Master cloud security best practices",
      "Understand microservices and serverless",
      "Learn cost optimization strategies",
      "Implement disaster recovery solutions",
      "Get cloud certifications",
      "Design enterprise-grade cloud solutions"
    ],
    resources: [
      { name: "AWS Training", url: "https://aws.amazon.com/training/" },
      { name: "Azure Documentation", url: "https://docs.microsoft.com/azure/" },
      { name: "Google Cloud Training", url: "https://cloud.google.com/training" },
      { name: "A Cloud Guru", url: "https://acloudguru.com" },
      { name: "Cloud Architecture Center", url: "https://cloud.google.com/architecture" }
    ]
  }
};
