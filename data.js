// data.js – Rich Tech Roles v2.5

const techRoles = {
  fullstack: {
    title: "Full Stack Developer",
    description: "Build and deploy complete web apps from frontend to backend.",
    salary: "₹6-25 LPA (India), $70K-150K (Abroad)",
    growth: "High demand across startups and enterprises. Ideal for versatile developers.",
    roadmap: [
      "Learn HTML, CSS, JavaScript",
      "Master Git, GitHub, terminal basics",
      "Understand responsive design (Flexbox, Grid)",
      "Pick a frontend framework: React or Vue",
      "Learn state management (Redux, Context)",
      "Understand REST APIs & JSON",
      "Learn Node.js + Express (or Django/Flask)",
      "Work with MongoDB/PostgreSQL",
      "Deploy with Netlify, Vercel, Render",
      "Learn Docker, CI/CD basics (GitHub Actions)",
      "Build a full-stack project with auth & DB"
    ],
    resources: [
      { name: "The Odin Project", url: "https://theodinproject.com" },
      { name: "Full Stack Open", url: "https://fullstackopen.com/en" },
      { name: "JavaScript.info", url: "https://javascript.info" },
      { name: "MDN Docs", url: "https://developer.mozilla.org" },
      { name: "FreeCodeCamp", url: "https://freecodecamp.org" }
    ],
    illustration: "https://storyset.com/illustration/web-development/amico"
  },

  ml: {
    title: "Machine Learning Engineer",
    description: "Build intelligent systems using data and predictive models.",
    salary: "₹10-35 LPA (India), $90K-200K (Abroad)",
    growth: "Skyrocketing demand in AI, healthcare, finance, and more.",
    roadmap: [
      "Learn Python thoroughly (NumPy, Pandas, Matplotlib)",
      "Study Linear Algebra, Statistics, Probability",
      "Understand Supervised/Unsupervised Learning",
      "Learn Scikit-learn and model evaluation techniques",
      "Dive into Deep Learning (TensorFlow, PyTorch)",
      "Build models: Regression, Classification, Clustering",
      "Explore CNNs, RNNs, NLP",
      "Work on datasets: Kaggle, UCI, open source",
      "Learn MLOps: Docker, MLflow, model deployment",
      "Deploy ML apps with Flask, Streamlit"
    ],
    resources: [
      { name: "Fast.ai", url: "https://fast.ai" },
      { name: "Kaggle Learn", url: "https://kaggle.com/learn" },
      { name: "Coursera ML by Andrew Ng", url: "https://coursera.org/learn/machine-learning" },
      { name: "Papers with Code", url: "https://paperswithcode.com" }
    ],
    illustration: "https://storyset.com/illustration/ai/amico"
  },

  frontend: {
    title: "Frontend Developer",
    description: "Create interactive, user-friendly interfaces using HTML, CSS, JS, and frameworks.",
    salary: "₹4-18 LPA (India), $60K-120K (Abroad)",
    growth: "Massive demand with growing web and app usage. Great remote potential.",
    roadmap: [
      "Master HTML5, CSS3, modern JS (ES6+)",
      "Understand Box Model, Flexbox, Grid",
      "Learn responsive design (media queries, accessibility)",
      "Use tools: Git, VSCode, npm, Chrome DevTools",
      "Master React (hooks, components, routing)",
      "Understand APIs and fetch/axios",
      "Try animation libraries (Framer Motion, GSAP)",
      "Build SPAs, portfolios, landing pages",
      "Learn deployment (Vercel, Netlify, GitHub Pages)",
      "Bonus: TypeScript, Tailwind, Next.js"
    ],
    resources: [
      { name: "Frontend Mentor", url: "https://frontendmentor.io" },
      { name: "MDN Web Docs", url: "https://developer.mozilla.org" },
      { name: "CSS Tricks", url: "https://css-tricks.com" },
      { name: "React Docs", url: "https://react.dev" }
    ],
    illustration: "https://storyset.com/illustration/website-designer/amico"
  }
};
