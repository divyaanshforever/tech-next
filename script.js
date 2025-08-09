// Enhanced Tech Next Application Logic
class TechCareerApp {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.currentTab = 'overview';
        this.searchQuery = '';
        this.activeFilter = 'all';
        this.assessmentData = {
            currentQuestion: 0,
            answers: {},
            results: null
        };
        
        this.init();
    }

    // Initialize the application
    init() {
        this.setTheme(this.currentTheme);
        this.bindEvents();
        this.renderCareers();
        this.populateCareerSelects();
        this.setupIntersectionObserver();
        this.loadResources();
        
        // Show loading spinner briefly for smooth experience
        this.showLoading();
        setTimeout(() => this.hideLoading(), 1000);
    }

    // Event bindings
    bindEvents() {
        // Theme toggle
        document.getElementById('themeToggle').addEventListener('click', () => {
            this.toggleTheme();
        });

        // Navigation menu toggle
        const navToggle = document.getElementById('navMenuToggle');
        const navMenu = document.getElementById('navMenu');
        
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close nav menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });

        // Search functionality
        const searchInput = document.getElementById('searchInput');
        const searchClear = document.getElementById('searchClear');

        searchInput.addEventListener('input', (e) => {
            this.searchQuery = e.target.value.toLowerCase();
            this.filterAndRenderCareers();
            
            searchClear.style.display = this.searchQuery ? 'block' : 'none';
        });

        searchClear.addEventListener('click', () => {
            searchInput.value = '';
            this.searchQuery = '';
            this.filterAndRenderCareers();
            searchClear.style.display = 'none';
            searchInput.focus();
        });

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.activeFilter = e.target.dataset.filter;
                this.filterAndRenderCareers();
            });
        });

        // Career comparison
        document.getElementById('career1').addEventListener('change', () => this.updateComparison());
        document.getElementById('career2').addEventListener('change', () => this.updateComparison());

        // Resource tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.loadResourceTab(e.target.dataset.tab);
            });
        });

        // Modal events
        document.getElementById('modalOverlay').addEventListener('click', (e) => {
            if (e.target === document.getElementById('modalOverlay')) {
                this.closeModal();
            }
        });

        // Keyboard events
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    // Close mobile menu after clicking
                    document.getElementById('navMenu').classList.remove('active');
                }
            });
        });
    }

    // Theme management
    setTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        const themeIcon = document.querySelector('#themeToggle i');
        themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        this.currentTheme = theme;
        localStorage.setItem('theme', theme);
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    // Career rendering
    renderCareers() {
        const grid = document.getElementById('careersGrid');
        grid.innerHTML = '';

        careers.forEach((career, index) => {
            const card = this.createCareerCard(career, index);
            grid.appendChild(card);
        });

        // Animate cards on load
        this.animateCareerCards();
    }

    createCareerCard(career, index) {
        const card = document.createElement('div');
        card.className = 'career-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        const tagsHtml = career.skills.slice(0, 4).map(skill => 
            `<span class="career-tag">${skill}</span>`
        ).join('');

        card.innerHTML = `
            <div class="career-header">
                <div class="career-icon">
                    <i class="${career.icon}"></i>
                </div>
                <div class="career-info">
                    <h3>${career.title}</h3>
                    <span class="career-category">${career.category}</span>
                </div>
            </div>
            <p class="career-description">${career.description}</p>
            <div class="career-stats">
                <div class="career-stat">
                    <div class="career-stat-value">${career.salary.india}</div>
                    <div class="career-stat-label">India Salary</div>
                </div>
                <div class="career-stat">
                    <div class="career-stat-value">${career.salary.usa}</div>
                    <div class="career-stat-label">USA Salary</div>
                </div>
            </div>
            <div class="career-tags">${tagsHtml}</div>
            <div class="career-actions">
                <button class="btn btn-primary btn-small" onclick="app.openCareerModal('${career.id}')">
                    <i class="fas fa-eye"></i> View Details
                </button>
                <button class="btn btn-secondary btn-small" onclick="app.addToComparison('${career.id}')">
                    <i class="fas fa-balance-scale"></i> Compare
                </button>
            </div>
        `;

        return card;
    }

    filterAndRenderCareers() {
        const filteredCareers = careers.filter(career => {
            const matchesSearch = this.searchQuery === '' || 
                career.title.toLowerCase().includes(this.searchQuery) ||
                career.description.toLowerCase().includes(this.searchQuery) ||
                career.skills.some(skill => skill.toLowerCase().includes(this.searchQuery));

            const matchesFilter = this.activeFilter === 'all' || career.category === this.activeFilter;

            return matchesSearch && matchesFilter;
        });

        const grid = document.getElementById('careersGrid');
        grid.innerHTML = '';

        if (filteredCareers.length === 0) {
            grid.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search" style="font-size: 3rem; color: var(--text-secondary); margin-bottom: 1rem;"></i>
                    <h3>No careers found</h3>
                    <p>Try adjusting your search or filter criteria.</p>
                </div>
            `;
            return;
        }

        filteredCareers.forEach((career, index) => {
            const card = this.createCareerCard(career, index);
            grid.appendChild(card);
        });

        this.animateCareerCards();
    }

    animateCareerCards() {
        const cards = document.querySelectorAll('.career-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    // Modal management
    openCareerModal(careerId) {
        const career = careers.find(c => c.id === careerId);
        if (!career) return;

        const modal = document.getElementById('careerModal');
        const overlay = document.getElementById('modalOverlay');
        const title = document.getElementById('modalTitle');
        const body = document.getElementById('modalBody');

        title.textContent = career.title;
        body.innerHTML = this.generateModalContent(career);

        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Initialize modal tabs
        this.initModalTabs();
    }

    generateModalContent(career) {
        return `
            <div class="modal-tabs">
                <button class="modal-tab active" data-tab="overview">Overview</button>
                <button class="modal-tab" data-tab="roadmap">Roadmap</button>
                <button class="modal-tab" data-tab="resources">Resources</button>
                <button class="modal-tab" data-tab="salary">Salary & Growth</button>
            </div>
            
            <div class="tab-content active" id="overview-content">
                ${this.generateOverviewContent(career)}
            </div>
            
            <div class="tab-content" id="roadmap-content">
                ${this.generateRoadmapContent(career)}
            </div>
            
            <div class="tab-content" id="resources-content">
                ${this.generateResourcesContent(career)}
            </div>
            
            <div class="tab-content" id="salary-content">
                ${this.generateSalaryContent(career)}
            </div>
        `;
    }

    generateOverviewContent(career) {
        const skillsHtml = career.skills.map(skill => 
            `<span class="timeline-skill">${skill}</span>`
        ).join('');

        return `
            <div class="overview-section">
                <h3>About This Career</h3>
                <p style="font-size: 1.125rem; line-height: 1.7; margin-bottom: 2rem;">${career.detailedDescription || career.description}</p>
                
                <h4>Key Skills Required</h4>
                <div class="timeline-skills" style="margin-bottom: 2rem;">${skillsHtml}</div>
                
                <h4>Career Highlights</h4>
                <div class="career-highlights">
                    <div class="highlight-item">
                        <i class="fas fa-chart-line"></i>
                        <div>
                            <strong>Growth Rate</strong>
                            <p>${career.growth}</p>
                        </div>
                    </div>
                    <div class="highlight-item">
                        <i class="fas fa-clock"></i>
                        <div>
                            <strong>Learning Timeline</strong>
                            <p>${career.timeline || '6-18 months to job-ready'}</p>
                        </div>
                    </div>
                    <div class="highlight-item">
                        <i class="fas fa-briefcase"></i>
                        <div>
                            <strong>Job Opportunities</strong>
                            <p>${career.opportunities || 'High demand across industries'}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    generateRoadmapContent(career) {
        if (!career.detailedRoadmap) {
            return `
                <div class="roadmap-placeholder">
                    <i class="fas fa-construction" style="font-size: 3rem; color: var(--warning); margin-bottom: 1rem;"></i>
                    <h3>Detailed Roadmap Coming Soon</h3>
                    <p>We're working on creating a comprehensive, timeline-based roadmap for ${career.title}.</p>
                </div>
            `;
        }

        return `
            <div class="roadmap-intro">
                <h3>Your Journey to Becoming a ${career.title}</h3>
                <p>This roadmap provides a structured path with estimated timelines and key milestones.</p>
            </div>
            <div class="timeline">
                ${career.detailedRoadmap.map((phase, index) => `
                    <div class="timeline-item">
                        <div class="timeline-phase">
                            <div class="timeline-header">
                                <h4 class="timeline-title">${phase.title}</h4>
                                <span class="timeline-duration">${phase.duration}</span>
                            </div>
                            <p class="timeline-description">${phase.description}</p>
                            <div class="timeline-skills">
                                ${phase.skills.map(skill => `<span class="timeline-skill">${skill}</span>`).join('')}
                            </div>
                            ${phase.resources ? `
                                <div class="timeline-resources">
                                    <h5><i class="fas fa-book"></i> Recommended Resources</h5>
                                    <div class="resource-list">
                                        ${phase.resources.map(resource => `
                                            <a href="${resource.url}" class="resource-item" target="_blank" rel="noopener noreferrer">
                                                <i class="resource-icon ${resource.icon}"></i>
                                                <div class="resource-info">
                                                    <h6>${resource.name}</h6>
                                                    <span class="resource-type">${resource.type}</span>
                                                </div>
                                                <i class="fas fa-external-link-alt" style="margin-left: auto; opacity: 0.7;"></i>
                                            </a>
                                        `).join('')}
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="roadmap-tips">
                <h4><i class="fas fa-lightbulb"></i> Pro Tips</h4>
                <ul style="margin-left: 1.5rem; color: var(--text-secondary);">
                    <li>Build projects while learning each phase</li>
                    <li>Join communities and network with professionals</li>
                    <li>Consider getting certifications for credibility</li>
                    <li>Practice regularly and stay updated with trends</li>
                </ul>
            </div>
        `;
    }

    generateResourcesContent(career) {
        return `
            <div class="resources-section">
                <h3>Curated Learning Resources</h3>
                <div class="resource-categories">
                    ${career.resources.map(category => `
                        <div class="resource-category">
                            <h4><i class="${category.icon}"></i> ${category.category}</h4>
                            <div class="resource-list">
                                ${category.items.map(item => `
                                    <a href="${item.url}" class="resource-item" target="_blank" rel="noopener noreferrer">
                                        <i class="resource-icon fas fa-external-link-alt"></i>
                                        <div class="resource-info">
                                            <h6>${item.name}</h6>
                                            <span class="resource-type">${item.type} ${item.price ? '- ' + item.price : ''}</span>
                                        </div>
                                        ${item.rating ? `<span class="resource-rating">${'⭐'.repeat(Math.floor(item.rating))}</span>` : ''}
                                    </a>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    generateSalaryContent(career) {
        return `
            <div class="salary-section">
                <h3>Salary & Career Growth</h3>
                
                <div class="salary-comparison">
                    <div class="salary-region">
                        <h4><i class="fas fa-map-marker-alt"></i> India</h4>
                        <div class="salary-breakdown">
                            <div class="salary-level">
                                <span class="level-title">Entry Level</span>
                                <span class="level-salary">${career.salaryBreakdown?.india?.entry || '₹3-6 LPA'}</span>
                            </div>
                            <div class="salary-level">
                                <span class="level-title">Mid Level</span>
                                <span class="level-salary">${career.salaryBreakdown?.india?.mid || '₹8-15 LPA'}</span>
                            </div>
                            <div class="salary-level">
                                <span class="level-title">Senior Level</span>
                                <span class="level-salary">${career.salaryBreakdown?.india?.senior || '₹20-40 LPA'}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="salary-region">
                        <h4><i class="fas fa-map-marker-alt"></i> United States</h4>
                        <div class="salary-breakdown">
                            <div class="salary-level">
                                <span class="level-title">Entry Level</span>
                                <span class="level-salary">${career.salaryBreakdown?.usa?.entry || '$60-80K'}</span>
                            </div>
                            <div class="salary-level">
                                <span class="level-title">Mid Level</span>
                                <span class="level-salary">${career.salaryBreakdown?.usa?.mid || '$90-130K'}</span>
                            </div>
                            <div class="salary-level">
                                <span class="level-title">Senior Level</span>
                                <span class="level-salary">${career.salaryBreakdown?.usa?.senior || '$150-250K+'}</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="growth-info">
                    <h4><i class="fas fa-chart-line"></i> Market Growth</h4>
                    <p>${career.growth}</p>
                    
                    <h4><i class="fas fa-building"></i> Top Companies Hiring</h4>
                    <div class="company-tags">
                        ${(career.topCompanies || ['Google', 'Microsoft', 'Amazon', 'Apple', 'Facebook']).map(company => 
                            `<span class="company-tag">${company}</span>`
                        ).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    initModalTabs() {
        document.querySelectorAll('.modal-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                // Remove active class from all tabs and content
                document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked tab
                e.target.classList.add('active');
                
                // Show corresponding content
                const targetContent = document.getElementById(e.target.dataset.tab + '-content');
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }

    closeModal() {
        const overlay = document.getElementById('modalOverlay');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Career comparison
    populateCareerSelects() {
        const select1 = document.getElementById('career1');
        const select2 = document.getElementById('career2');
        
        const options = careers.map(career => 
            `<option value="${career.id}">${career.title}</option>`
        ).join('');
        
        select1.innerHTML += options;
        select2.innerHTML += options;
    }

    updateComparison() {
        const career1Id = document.getElementById('career1').value;
        const career2Id = document.getElementById('career2').value;
        const resultsContainer = document.getElementById('comparisonResults');

        if (!career1Id || !career2Id) {
            resultsContainer.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">Select two careers to compare</p>';
            return;
        }

        const career1 = careers.find(c => c.id === career1Id);
        const career2 = careers.find(c => c.id === career2Id);

        resultsContainer.innerHTML = `
            <div class="comparison-card">
                <h3 class="comparison-title">${career1.title}</h3>
                <div class="comparison-metrics">
                    ${this.generateComparisonMetrics(career1)}
                </div>
            </div>
            <div class="comparison-card">
                <h3 class="comparison-title">${career2.title}</h3>
                <div class="comparison-metrics">
                    ${this.generateComparisonMetrics(career2)}
                </div>
            </div>
        `;
    }

    generateComparisonMetrics(career) {
        return `
            <div class="comparison-metric">
                <span class="metric-label">Avg. Salary (India)</span>
                <span class="metric-value">${career.salary.india}</span>
            </div>
            <div class="comparison-metric">
                <span class="metric-label">Avg. Salary (USA)</span>
                <span class="metric-value">${career.salary.usa}</span>
            </div>
            <div class="comparison-metric">
                <span class="metric-label">Learning Timeline</span>
                <span class="metric-value">${career.timeline || '6-12 months'}</span>
            </div>
            <div class="comparison-metric">
                <span class="metric-label">Job Market</span>
                <span class="metric-value">${career.demand || 'High'}</span>
            </div>
            <div class="comparison-metric">
                <span class="metric-label">Remote Work</span>
                <span class="metric-value">${career.remote || 'Yes'}</span>
            </div>
            <div class="comparison-metric">
                <span class="metric-label">Entry Barrier</span>
                <span class="metric-value">${career.barrier || 'Medium'}</span>
            </div>
        `;
    }

    addToComparison(careerId) {
        const select1 = document.getElementById('career1');
        const select2 = document.getElementById('career2');

        if (!select1.value) {
            select1.value = careerId;
        } else if (!select2.value) {
            select2.value = careerId;
        } else {
            select2.value = careerId;
        }

        this.updateComparison();
        
        // Scroll to comparison section
        document.getElementById('compare').scrollIntoView({ behavior: 'smooth' });
        
        // Show feedback
        this.showNotification('Career added to comparison!', 'success');
    }

    // Skill Assessment
    startAssessment() {
        const intro = document.querySelector('.assessment-intro');
        const quiz = document.getElementById('assessmentQuiz');
        
        intro.style.display = 'none';
        quiz.style.display = 'block';
        
        this.assessmentData.currentQuestion = 0;
        this.assessmentData.answers = {};
        this.renderAssessmentQuestion();
    }

    renderAssessmentQuestion() {
        const quiz = document.getElementById('assessmentQuiz');
        const question = assessmentQuestions[this.assessmentData.currentQuestion];
        
        quiz.innerHTML = `
            <div class="assessment-progress">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${((this.assessmentData.currentQuestion) / assessmentQuestions.length) * 100}%"></div>
                </div>
                <p>Question ${this.assessmentData.currentQuestion + 1} of ${assessmentQuestions.length}</p>
            </div>
            
            <div class="question">
                <h4>${question.question}</h4>
                <div class="question-options">
                    ${question.options.map((option, index) => `
                        <label class="option">
                            <input type="radio" name="question_${this.assessmentData.currentQuestion}" value="${index}">
                            <span>${option}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
            
            <div class="assessment-actions">
                <button class="btn btn-secondary" onclick="app.prevAssessmentQuestion()" ${this.assessmentData.currentQuestion === 0 ? 'disabled' : ''}>
                    <i class="fas fa-arrow-left"></i> Previous
                </button>
                <button class="btn btn-primary" onclick="app.nextAssessmentQuestion()">
                    ${this.assessmentData.currentQuestion === assessmentQuestions.length - 1 ? 'Finish' : 'Next'} 
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `;
    }

    nextAssessmentQuestion() {
        const selectedOption = document.querySelector(`input[name="question_${this.assessmentData.currentQuestion}"]:checked`);
        
        if (!selectedOption) {
            this.showNotification('Please select an answer', 'warning');
            return;
        }
        
        this.assessmentData.answers[this.assessmentData.currentQuestion] = parseInt(selectedOption.value);
        
        if (this.assessmentData.currentQuestion === assessmentQuestions.length - 1) {
            this.calculateAssessmentResults();
        } else {
            this.assessmentData.currentQuestion++;
            this.renderAssessmentQuestion();
        }
    }

    prevAssessmentQuestion() {
        if (this.assessmentData.currentQuestion > 0) {
            this.assessmentData.currentQuestion--;
            this.renderAssessmentQuestion();
        }
    }

    calculateAssessmentResults() {
        // Simple scoring algorithm
        const scores = {};
        const careerTypes = ['development', 'design', 'data', 'infrastructure', 'security'];
        
        careerTypes.forEach(type => scores[type] = 0);
        
        Object.values(this.assessmentData.answers).forEach((answer, questionIndex) => {
            const question = assessmentQuestions[questionIndex];
            const selectedWeight = question.weights[answer];
            
            Object.keys(selectedWeight).forEach(careerType => {
                scores[careerType] += selectedWeight[careerType];
            });
        });
        
        // Find top 3 career matches
        const sortedScores = Object.entries(scores)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 3);
        
        this.displayAssessmentResults(sortedScores);
    }

    displayAssessmentResults(sortedScores) {
        const quiz = document.getElementById('assessmentQuiz');
        const results = document.getElementById('assessmentResults');
        
        quiz.style.display = 'none';
        results.style.display = 'block';
        
        const matchedCareers = sortedScores.map(([careerType, score]) => {
            const matchingCareers = careers.filter(c => c.category === careerType);
            return {
                type: careerType,
                score: score,
                careers: matchingCareers.slice(0, 2) // Top 2 careers per category
            };
        });
        
        results.innerHTML = `
            <div class="results-header">
                <h3>Your Career Assessment Results</h3>
                <p>Based on your responses, here are your top career matches:</p>
            </div>
            
            <div class="career-matches">
                ${matchedCareers.map((match, index) => `
                    <div class="career-match" style="animation-delay: ${index * 0.2}s;">
                        <div class="match-rank">#${index + 1}</div>
                        <div class="match-content">
                            <h4>${this.capitalize(match.type)} Careers</h4>
                            <div class="match-score">
                                <span>Match Score: ${Math.round((match.score / 20) * 100)}%</span>
                                <div class="score-bar">
                                    <div class="score-fill" style="width: ${(match.score / 20) * 100}%"></div>
                                </div>
                            </div>
                            <div class="recommended-careers">
                                ${match.careers.map(career => `
                                    <div class="recommended-career">
                                        <i class="${career.icon}"></i>
                                        <div>
                                            <strong>${career.title}</strong>
                                            <p>${career.description.substring(0, 100)}...</p>
                                            <button class="btn btn-small btn-primary" onclick="app.openCareerModal('${career.id}')">
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="results-actions">
                <button class="btn btn-secondary" onclick="app.retakeAssessment()">
                    <i class="fas fa-redo"></i> Retake Assessment
                </button>
                <button class="btn btn-primary" onclick="app.exploreRecommendations()">
                    <i class="fas fa-compass"></i> Explore Recommendations
                </button>
            </div>
        `;
    }

    retakeAssessment() {
        const intro = document.querySelector('.assessment-intro');
        const results = document.getElementById('assessmentResults');
        
        results.style.display = 'none';
        intro.style.display = 'block';
        
        this.assessmentData = {
            currentQuestion: 0,
            answers: {},
            results: null
        };
    }

    exploreRecommendations() {
        this.scrollToSection('careers');
        this.closeModal();
    }

    // Resource management
    loadResources() {
        this.loadResourceTab('courses');
    }

    loadResourceTab(tab) {
        const content = document.getElementById('resourcesContent');
        
        switch(tab) {
            case 'courses':
                content.innerHTML = this.generateCoursesContent();
                break;
            case 'books':
                content.innerHTML = this.generateBooksContent();
                break;
            case 'tools':
                content.innerHTML = this.generateToolsContent();
                break;
            case 'communities':
                content.innerHTML = this.generateCommunitiesContent();
                break;
        }
    }

    generateCoursesContent() {
        const courses = [
            {
                title: "Complete Web Development Bootcamp",
                provider: "Udemy",
                rating: 4.8,
                price: "₹499",
                icon: "fab fa-html5",
                description: "Learn HTML, CSS, JavaScript, and modern frameworks"
            },
            {
                title: "Machine Learning Specialization",
                provider: "Coursera",
                rating: 4.9,
                price: "Free",
                icon: "fas fa-brain",
                description: "Andrew Ng's comprehensive ML course"
            },
            {
                title: "React - The Complete Guide",
                provider: "Udemy",
                rating: 4.7,
                price: "₹799",
                icon: "fab fa-react",
                description: "Master React with hooks, context, and more"
            }
        ];

        return this.generateResourceGrid(courses, 'course');
    }

    generateBooksContent() {
        const books = [
            {
                title: "Clean Code",
                provider: "Robert C. Martin",
                rating: 4.9,
                price: "₹650",
                icon: "fas fa-book",
                description: "A handbook of agile software craftsmanship"
            },
            {
                title: "Designing Data-Intensive Applications",
                provider: "Martin Kleppmann",
                rating: 4.8,
                price: "₹850",
                icon: "fas fa-database",
                description: "The big ideas behind reliable systems"
            }
        ];

        return this.generateResourceGrid(books, 'book');
    }

    generateToolsContent() {
        const tools = [
            {
                title: "Visual Studio Code",
                provider: "Microsoft",
                rating: 4.9,
                price: "Free",
                icon: "fas fa-code",
                description: "Powerful code editor with extensions"
            },
            {
                title: "Figma",
                provider: "Figma Inc.",
                rating: 4.8,
                price: "Free/Paid",
                icon: "fab fa-figma",
                description: "Collaborative interface design tool"
            }
        ];

        return this.generateResourceGrid(tools, 'tool');
    }

    generateCommunitiesContent() {
        const communities = [
            {
                title: "Stack Overflow",
                provider: "Developer Community",
                rating: 4.7,
                price: "Free",
                icon: "fab fa-stack-overflow",
                description: "Q&A platform for programmers"
            },
            {
                title: "GitHub",
                provider: "Microsoft",
                rating: 4.8,
                price: "Free/Paid",
                icon: "fab fa-github",
                description: "Code hosting and collaboration platform"
            }
        ];

        return this.generateResourceGrid(communities, 'community');
    }

    generateResourceGrid(items, type) {
        return `
            <div class="resources-grid">
                ${items.map(item => `
                    <div class="resource-card">
                        <div class="resource-header">
                            <div class="resource-card-icon">
                                <i class="${item.icon}"></i>
                            </div>
                            <div>
                                <h4>${item.title}</h4>
                                <span class="resource-meta">${item.provider}</span>
                            </div>
                        </div>
                        <p>${item.description}</p>
                        <div class="resource-meta">
                            <span><i class="fas fa-star"></i> ${item.rating}</span>
                            <span><i class="fas fa-tag"></i> ${item.price}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Utility functions
    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    showLoading() {
        document.getElementById('loadingSpinner').classList.add('active');
    }

    hideLoading() {
        document.getElementById('loadingSpinner').classList.remove('active');
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${this.getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        `;

        // Add to body
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => notification.classList.add('show'), 100);

        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }

    getNotificationIcon(type) {
        const icons = {
            success: 'check-circle',
            warning: 'exclamation-triangle',
            error: 'times-circle',
            info: 'info-circle'
        };
        return icons[type] || icons.info;
    }

    scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Intersection Observer for animations
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    }
}

// Assessment Questions Data
const assessmentQuestions = [
    {
        question: "Which type of work environment excites you most?",
        options: [
            "Building user interfaces and visual experiences",
            "Working with data and algorithms",
            "Designing system architecture and infrastructure",
            "Protecting systems from security threats",
            "Creating beautiful and intuitive designs"
        ],
        weights: [
            { development: 3, design: 4, data: 1, infrastructure: 1, security: 1 },
            { development: 2, design: 1, data: 4, infrastructure: 2, security: 1 },
            { development: 2, design: 1, data: 2, infrastructure: 4, security: 2 },
            { development: 1, design: 1, data: 2, infrastructure: 3, security: 4 },
            { development: 1, design: 4, data: 1, infrastructure: 1, security: 1 }
        ]
    },
    {
        question: "What type of problem-solving appeals to you?",
        options: [
            "Making things look beautiful and function well",
            "Finding patterns in large datasets",
            "Optimizing performance and scalability",
            "Identifying and fixing security vulnerabilities",
            "Understanding user behavior and needs"
        ],
        weights: [
            { development: 3, design: 4, data: 1, infrastructure: 2, security: 1 },
            { development: 1, design: 1, data: 4, infrastructure: 1, security: 2 },
            { development: 2, design: 1, data: 2, infrastructure: 4, security: 2 },
            { development: 1, design: 1, data: 2, infrastructure: 2, security: 4 },
            { development: 2, design: 4, data: 3, infrastructure: 1, security: 1 }
        ]
    },
    {
        question: "Which programming aspect interests you most?",
        options: [
            "Frontend frameworks like React or Vue",
            "Machine learning libraries like TensorFlow",
            "Cloud platforms like AWS or Azure",
            "Cybersecurity tools and techniques",
            "I prefer visual design tools over programming"
        ],
        weights: [
            { development: 4, design: 2, data: 1, infrastructure: 2, security: 1 },
            { development: 2, design: 1, data: 4, infrastructure: 2, security: 1 },
            { development: 2, design: 1, data: 3, infrastructure: 4, security: 2 },
            { development: 1, design: 1, data: 2, infrastructure: 2, security: 4 },
            { development: 1, design: 4, data: 1, infrastructure: 1, security: 1 }
        ]
    },
    {
        question: "What motivates you most in your career?",
        options: [
            "Creating applications that millions of people use",
            "Discovering insights that drive business decisions",
            "Building robust systems that never fail",
            "Protecting organizations from cyber threats",
            "Crafting beautiful experiences that users love"
        ],
        weights: [
            { development: 4, design: 3, data: 2, infrastructure: 2, security: 1 },
            { development: 2, design: 2, data: 4, infrastructure: 1, security: 1 },
            { development: 2, design: 1, data: 2, infrastructure: 4, security: 3 },
            { development: 1, design: 1, data: 2, infrastructure: 3, security: 4 },
            { development: 2, design: 4, data: 1, infrastructure: 1, security: 1 }
        ]
    },
    {
        question: "Which work style suits you best?",
        options: [
            "Collaborative development with frequent iterations",
            "Research-heavy work with hypothesis testing",
            "Behind-the-scenes work ensuring everything runs smoothly",
            "Constant vigilance and rapid response to threats",
            "Creative work with user feedback and testing"
        ],
        weights: [
            { development: 4, design: 3, data: 2, infrastructure: 2, security: 1 },
            { development: 1, design: 2, data: 4, infrastructure: 1, security: 2 },
            { development: 2, design: 1, data: 2, infrastructure: 4, security: 3 },
            { development: 1, design: 1, data: 2, infrastructure: 3, security: 4 },
            { development: 2, design: 4, data: 2, infrastructure: 1, security: 1 }
        ]
    }
];

// Global functions for onclick handlers
function scrollToSection(sectionId) {
    app.scrollToSection(sectionId);
}

function openAssessment() {
    app.scrollToSection('assessment');
}

function startAssessment() {
    app.startAssessment();
}

function closeModal() {
    app.closeModal();
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new TechCareerApp();
});

// Handle window resize for responsive behavior
window.addEventListener('resize', () => {
    // Close mobile menu on resize
    if (window.innerWidth > 768) {
        document.getElementById('navMenu').classList.remove('active');
    }
});

// Handle scroll for header background
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(var(--glass-bg), 0.95)';
        header.style.backdropFilter = 'blur(20px)';
    } else {
        header.style.background = 'var(--glass-bg)';
        header.style.backdropFilter = 'var(--backdrop-blur)';
    }
});

// Service Worker for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Additional CSS for notifications
const notificationStyles = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--glass-bg);
        backdrop-filter: var(--backdrop-blur);
        border: 1px solid var(--glass-border);
        border-radius: 0.75rem;
        padding: 1rem 1.5rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        z-index: 1000;
        min-width: 300px;
        transform: translateX(400px);
        transition: transform 0.3s ease, opacity 0.3s ease;
        opacity: 0;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }

    .notification.show {
        transform: translateX(0);
        opacity: 1;
    }

    .notification-success {
        border-left: 4px solid var(--success);
        color: var(--success);
    }

    .notification-warning {
        border-left: 4px solid var(--warning);
        color: var(--warning);
    }

    .notification-error {
        border-left: 4px solid var(--danger);
        color: var(--danger);
    }

    .notification-info {
        border-left: 4px solid var(--info);
        color: var(--info);
    }

    .notification-close {
        background: none;
        border: none;
        color: var(--text-secondary);
        cursor: pointer;
        margin-left: auto;
        padding: 0.25rem;
        border-radius: 0.25rem;
        transition: var(--transition);
    }

    .notification-close:hover {
        background: var(--danger);
        color: white;
    }

    .animate-in {
        animation: slideInUp 0.6s ease-out forwards;
    }

    .career-highlights {
        display: grid;
        gap: 1rem;
        margin: 1.5rem 0;
    }

    .highlight-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        background: var(--glass-bg);
        border-radius: 0.75rem;
        border: 1px solid var(--glass-border);
    }

    .highlight-item i {
        font-size: 1.5rem;
        color: var(--primary);
        width: 2rem;
        text-align: center;
    }

    .highlight-item strong {
        display: block;
        margin-bottom: 0.25rem;
        color: var(--text-primary);
    }

    .highlight-item p {
        margin: 0;
        color: var(--text-secondary);
        font-size: 0.9rem;
    }

    .salary-breakdown {
        display: grid;
        gap: 1rem;
        margin: 1rem 0;
    }

    .salary-level {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.75rem;
        background: var(--glass-bg);
        border-radius: 0.5rem;
        border: 1px solid var(--glass-border);
    }

    .level-title {
        font-weight: 500;
        color: var(--text-secondary);
    }

    .level-salary {
        font-weight: 600;
        color: var(--primary);
    }

    .company-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin: 1rem 0;
    }

    .company-tag {
        background: var(--primary);
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
        font-size: 0.75rem;
        font-weight: 500;
    }

    .career-matches {
        display: grid;
        gap: 2rem;
        margin: 2rem 0;
    }

    .career-match {
        display: flex;
        gap: 1.5rem;
        align-items: flex-start;
        padding: 2rem;
        background: var(--glass-bg);
        border-radius: 1rem;
        border: 1px solid var(--glass-border);
        animation: slideInLeft 0.6s ease-out forwards;
        opacity: 0;
    }

    .career-match.show {
        opacity: 1;
    }

    .match-rank {
        background: var(--gradient-primary);
        color: white;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 1.25rem;
        flex-shrink: 0;
    }

    .match-content {
        flex: 1;
    }

    .match-content h4 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }

    .match-score {
        margin-bottom: 1.5rem;
    }

    .match-score span {
        font-weight: 600;
        color: var(--primary);
        margin-bottom: 0.5rem;
        display: block;
    }

    .score-bar {
        width: 100%;
        height: 0.5rem;
        background: var(--glass-bg);
        border-radius: 0.25rem;
        overflow: hidden;
    }

    .score-fill {
        height: 100%;
        background: var(--gradient-primary);
        border-radius: 0.25rem;
        transition: width 1s ease-out;
    }

    .recommended-careers {
        display: grid;
        gap: 1rem;
    }

    .recommended-career {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        padding: 1rem;
        background: rgba(var(--primary), 0.05);
        border-radius: 0.75rem;
        border: 1px solid rgba(var(--primary), 0.1);
    }

    .recommended-career i {
        font-size: 1.5rem;
        color: var(--primary);
        margin-top: 0.25rem;
    }

    .recommended-career strong {
        display: block;
        margin-bottom: 0.5rem;
        color: var(--text-primary);
    }

    .recommended-career p {
        margin: 0 0 1rem 0;
        color: var(--text-secondary);
        font-size: 0.9rem;
        line-height: 1.5;
    }

    .no-results {
        grid-column: 1 / -1;
        text-align: center;
        padding: 3rem;
        color: var(--text-secondary);
    }

    .no-results h3 {
        margin: 1rem 0;
        color: var(--text-primary);
    }

    @media (max-width: 768px) {
        .notification {
            right: 10px;
            left: 10px;
            min-width: auto;
            transform: translateY(-100px);
        }

        .notification.show {
            transform: translateY(0);
        }

        .career-match {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .match-rank {
            margin-bottom: 1rem;
        }
    }
`;

// Inject notification styles
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);
