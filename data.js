const roles = {
  fullstack: {
    title: "Full Stack Developer",
    description: "Build complete web applications from frontend to backend",
    salary: {
      india: "₹4-25 LPA",
      abroad: "$60K-150K",
      remote: "$40K-120K"
    },
    jobSecurity: "High",
    growth: "Excellent",
    roadmap: [
      {
        phase: "Foundation",
        skills: ["HTML/CSS", "JavaScript", "Git/GitHub", "Responsive Design"]
      },
      {
        phase: "Frontend Framework",
        skills: ["React/Vue", "State Management", "Build Tools"]
      },
      {
        phase: "Backend Development",
        skills: ["Node.js/Python", "Databases", "APIs"]
      },
      {
        phase: "Advanced & DevOps",
        skills: ["Docker", "AWS", "CI/CD"]
      }
    ],
    resources: [
      { name: "FreeCodeCamp", url: "https://freecodecamp.org" },
      { name: "The Odin Project", url: "https://theodinproject.com" }
    ]
  },

  ml: {
    title: "Machine Learning Engineer",
    description: "Develop and deploy ML models to solve real-world problems",
    salary: {
      india: "₹8-35 LPA",
      abroad: "$90K-200K",
      remote: "$70K-180K"
    },
    jobSecurity: "Very High",
    growth: "Exceptional",
    roadmap: [
      {
        phase: "Maths & Python",
        skills: ["Python", "Statistics", "NumPy", "Pandas"]
      },
      {
        phase: "Core ML",
        skills: ["Scikit-learn", "Supervised Learning", "Evaluation"]
      },
      {
        phase: "Deep Learning",
        skills: ["TensorFlow", "CNN", "RNN"]
      },
      {
        phase: "MLOps",
        skills: ["Docker", "MLflow", "Cloud Platforms"]
      }
    ],
    resources: [
      { name: "Kaggle Learn", url: "https://kaggle.com/learn" },
      { name: "Fast.ai", url: "https://fast.ai" }
    ]
  }
  // Add more roles as needed
};
