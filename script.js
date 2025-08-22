// Main application JavaScript
class TechNextApp {
    constructor() {
        this.currentTheme = 'light';
        this.isLoading = true;
        this.activeModal = null;
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadTheme();
        this.simulateLoading();
        this.renderCareers();
        this.setupIntersectionObserver();
    }

    // Loading Screen Management
    simulateLoading() {
        const loadingScreen = document.getElementById('loading-screen');
        const mainApp = document.getElementById('main-app');

        // Simulate loading time (2 seconds)
        setTimeout(() => {
            loadingScreen.classList.add('fade-out');
            
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                mainApp.style.display = 'block';
                this.isLoading = false;
                
                // Trigger animations after loading
                this.triggerEntryAnimations();
            }, 500);
        }, 2000);
    }

    // Theme Management
    loadTheme() {
        const savedTheme = localStorage.getItem('techNext-theme') || 'light';
        this.setTheme(savedTheme);
    }

    setTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        
        const themeToggle = document.getElementById('theme-toggle');
        const icon = themeToggle.querySelector('i');
        
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
            themeToggle.title = 'Switch to light mode';
        } else {
            icon.className = 'fas fa-moon';
            themeToggle.title = 'Switch to dark mode';
        }
        
        localStorage.setItem('techNext-theme', theme);
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    // Event Listeners
    setupEventListeners() {
        // Theme toggle
        document.getElementById('theme-toggle')?.addEventListener('click', () => {
            this.toggleTheme();
        });

        // Search functionality
        document.getElementById('search-input')?.addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });

        // Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.getAttribute('href');
                this.handleNavigation(target);
            });
        });

        // Modal close
        document.getElementById('modal-close')?.addEventListener('click', () => {
            this.closeModal();
        });

        // Modal backdrop close
        document.getElementById('career-modal')?.addEventListener('click', (e) => {
            if (e.target.id === 'career-modal') {
                this.closeModal();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.activeModal) {
                this.closeModal();
            }
        });

        // Tab functionality
        document.querySelectorAll('.tab-button').forEach(button => {
            button.addEventListener('click', (e) => {
                this.handleTabClick(e.target);
            });
        });

        // Smooth scroll for buttons
        document.querySelectorAll('[onclick*="scrollToSection"]').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const section = button.getAttribute('onclick').match(/'([^']+)'/)[1];
                this.scrollToSection(section);
            });
        });
    }

    // Navigation
    handleNavigation(target) {
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        document.querySelector(`[href="${target}"]`)?.classList.add('active');
        
        // Scroll to section
        this.scrollToSection(target.substring(1));
    }

    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = section.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

    // Search Functionality
    handleSearch(query) {
        const careersGrid = document.getElementById('careers-grid');
        const cards = careersGrid.querySelectorAll('.career-card');
        
        if (!query.trim()) {
            cards.forEach(card => {
                card.style.display = 'block';
            });
            return;
        }

        const searchTerm = query.toLowerCase();
        
        cards.forEach(card => {
            const title = card.querySelector('.career-title').textContent.toLowerCase();
            const description = card.querySelector('.career-description').textContent.toLowerCase();
            const tags = Array.from(card.querySelectorAll('.career-tag'))
                .map(tag => tag.textContent.toLowerCase());
            
            const matches = title.includes(searchTerm) || 
                           description.includes(searchTerm) ||
                           tags.some(tag => tag.includes(searchTerm));
            
            card.style.display = matches ? 'block' : 'none';
        });
    }

    // Career Cards Rendering
    renderCareers() {
        const careersGrid = document.getElementById('careers-grid');
        
        if (!careersGrid || !window.careersData) {
            console.error('Careers grid or data not found');
            return;
        }

        careersGrid.innerHTML = '';

        Object.entries(window.careersData).forEach(([key, career]) => {
            const card = this.createCareerCard(key, career);
            careersGrid.appendChild(card);
        });

        // Add stagger animation class
        careersGrid.classList.add('stagger-animation');
    }

    createCareerCard(key, career) {
        const card = document.createElement('div');
        card.className = 'career-card';
        card.setAttribute('data-career', key);
        
        card.innerHTML = `
            <div class="career-icon">
                <i class="${career.icon}"></i>
            </div>
            <h3 class="career-title">${career.title}</h3>
            <p class="career-description">${career.description}</p>
            <div class="career-meta">
                <span class="career-salary">${career.salary.split(',')[0]}</span>
                <span class="career-growth">${career.growth.split(' ')[0]} ${career.growth.split(' ')[1]}</span>
            </div>
            <div class="career-tags">
                ${career.tags.map(tag => `<span class="career-tag">${tag}</span>`).join('')}
            </div>
        `;

        card.addEventListener('click', () => {
            this.openCareerModal(key, career);
        });

        return card;
    }

    // Modal Management
    openCareerModal(key, career) {
        const modal = document.getElementById('career-modal');
        this.activeModal = key;
        
        // Update modal content
        document.getElementById('modal-title').textContent = career.title;
        
        // Update overview tab
        document.getElementById('modal-description').textContent = career.description;
        this.renderSkills(career.skills);
        
        // Update other tabs
        this.renderRoadmap(career.roadmap);
        this.renderResources(career.resources);
        this.renderSalary(career.salaryDetails);
        
        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focus management
        modal.focus();
    }

    closeModal() {
        const modal = document.getElementById('career-modal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
        this.activeModal = null;
        
        // Reset to first tab
        this.switchTab('overview');
    }

    // Tab Management
    handleTabClick(button) {
        const tabName = button.getAttribute('data-tab');
        this.switchTab(tabName);
    }

    switchTab(tabName) {
        // Update tab buttons
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`)?.classList.add('active');
        
        // Update tab panes
        document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.remove('active');
        });
        document.getElementById(`${tabName}-tab`)?.classList.add('active');
    }

    // Modal Content Rendering
    renderSkills(skills) {
        const skillsContainer = document.getElementById('modal-skills');
        if (!skills || !skillsContainer) return;
        
        skillsContainer.innerHTML = `
            <h4>Key Skills</h4>
            <div class="skills-list">
                ${skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        `;
    }

    renderRoadmap(roadmap) {
        const roadmapContainer = document.getElementById('modal-roadmap');
        if (!roadmap || !roadmapContainer) return;
        
        roadmapContainer.innerHTML = roadmap.map((step, index) => `
            <div class="roadmap-step">
                <div class="step-number">${index + 1}</div>
                <div class="step-content">
                    <h5>${step.title}</h5>
                    <p>${step.description}</p>
                </div>
            </div>
        `).join('');
    }

    renderResources(resources) {
        const resourcesContainer = document.getElementById('modal-resources');
        if (!resources || !resourcesContainer) return;
        
        resourcesContainer.innerHTML = resources.map(category => `
            <div class="resource-category">
                <h4>${category.category}</h4>
                <div class="resource-list">
                    ${category.items.map(item => `
                        <a href="${item.url}" target="_blank" class="resource-item">
                            <i class="${item.icon} resource-icon"></i>
                            <div class="resource-content">
                                <h5>${item.name}</h5>
                                <p>${item.type}</p>
                            </div>
                        </a>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    renderSalary(salaryDetails) {
        const salaryContainer = document.getElementById('modal-salary');
        if (!salaryDetails || !salaryContainer) return;
        
        salaryContainer.innerHTML = `
            <div class="salary-card">
                <h4>🇮🇳 India Market</h4>
                <div class="salary-amount">${salaryDetails.india.entry}</div>
                <p class="salary-note">Entry Level</p>
                <div class="salary-amount">${salaryDetails.india.mid}</div>
                <p class="salary-note">Mid Level</p>
                <div class="salary-amount">${salaryDetails.india.senior}</div>
                <p class="salary-note">Senior Level</p>
            </div>
            <div class="salary-card">
                <h4>🇺🇸 USA Market</h4>
                <div class="salary-amount">${salaryDetails.usa.entry}</div>
                <p class="salary-note">Entry Level</p>
                <div class="salary-amount">${salaryDetails.usa.mid}</div>
                <p class="salary-note">Mid Level</p>
                <div class="salary-amount">${salaryDetails.usa.senior}</div>
                <p class="salary-note">Senior Level</p>
            </div>
        `;
    }

    // Animation Triggers
    triggerEntryAnimations() {
        // Hero section animation
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.classList.add('fade-in');
        }

        // Stagger career cards animation
        setTimeout(() => {
            const careerCards = document.querySelectorAll('.career-card');
            careerCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('slide-up');
                }, index * 100);
            });
        }, 500);
    }

    // Intersection Observer for scroll animations
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observe sections
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    }

    // Utility Functions
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Public API
    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = section.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
}

// Global function for inline onclick handlers
function scrollToSection(sectionId) {
    if (window.techNextApp) {
        window.techNextApp.scrollToSection(sectionId);
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Make careers data available globally
    window.careersData = careersData;
    
    // Initialize the app
    window.techNextApp = new TechNextApp();
    
    console.log('TechNext Application Initialized Successfully! 🚀');
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.title = '👋 Come back to TechNext!';
    } else {
        document.title = 'TechNext - Discover Your Tech Career Path';
    }
});

// Service Worker Registration (Optional - for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment if you want to add service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}

// Error Handling
window.addEventListener('error', (e) => {
    console.error('Application Error:', e.error);
    // Could add error reporting here
});

// Performance Monitoring
window.addEventListener('load', () => {
    if ('performance' in window) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Page loaded in ${loadTime}ms`);
    }
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TechNextApp;
}
