// Fixed TechNext Application JavaScript
console.log('Script loading...');

// Ensure careersData is available
if (typeof careersData === 'undefined') {
    console.error('careersData is not defined! Make sure data.js is loaded first.');
}

class TechNextApp {
    constructor() {
        console.log('TechNextApp constructor called');
        this.currentTheme = 'light';
        this.isLoading = true;
        this.activeModal = null;
        
        // Bind methods to maintain context
        this.handleSearch = this.handleSearch.bind(this);
        this.toggleTheme = this.toggleTheme.bind(this);
        this.closeModal = this.closeModal.bind(this);
        
        // Initialize immediately
        this.init();
    }

    init() {
        console.log('Initializing TechNext App...');
        
        // Load theme first
        this.loadTheme();
        
        // Start loading simulation
        this.simulateLoading();
        
        // Setup event listeners
        this.setupEventListeners();
        
        // Render careers data
        setTimeout(() => {
            this.renderCareers();
        }, 100);
    }

    // Loading Screen Management - FIXED
    simulateLoading() {
        console.log('Starting loading simulation...');
        
        const loadingScreen = document.getElementById('loading-screen');
        const mainApp = document.getElementById('main-app');

        if (!loadingScreen || !mainApp) {
            console.error('Loading elements not found!');
            return;
        }

        // Shorter loading time for better UX
        setTimeout(() => {
            console.log('Hiding loading screen...');
            
            loadingScreen.classList.add('fade-out');
            
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                mainApp.style.display = 'block';
                this.isLoading = false;
                
                console.log('App loaded successfully!');
                
                // Trigger animations after loading
                this.triggerEntryAnimations();
            }, 300); // Reduced from 500ms
        }, 1500); // Reduced from 2000ms
    }

    // Theme Management
    loadTheme() {
        try {
            const savedTheme = localStorage.getItem('techNext-theme') || 'light';
            this.setTheme(savedTheme);
        } catch (error) {
            console.warn('Could not load theme from localStorage:', error);
            this.setTheme('light');
        }
    }

    setTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (icon) {
                if (theme === 'dark') {
                    icon.className = 'fas fa-sun';
                    themeToggle.title = 'Switch to light mode';
                } else {
                    icon.className = 'fas fa-moon';
                    themeToggle.title = 'Switch to dark mode';
                }
            }
        }
        
        try {
            localStorage.setItem('techNext-theme', theme);
        } catch (error) {
            console.warn('Could not save theme to localStorage:', error);
        }
    }

    toggleTheme() {
        console.log('Toggling theme...');
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    // Event Listeners - FIXED
    setupEventListeners() {
        console.log('Setting up event listeners...');
        
        // Theme toggle
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', this.toggleTheme);
            console.log('Theme toggle listener added');
        }

        // Search functionality
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.handleSearch(e.target.value);
            });
            console.log('Search listener added');
        }

        // Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.getAttribute('href');
                this.handleNavigation(target);
            });
        });

        // Modal close
        const modalClose = document.getElementById('modal-close');
        if (modalClose) {
            modalClose.addEventListener('click', this.closeModal);
        }

        // Modal backdrop close
        const careerModal = document.getElementById('career-modal');
        if (careerModal) {
            careerModal.addEventListener('click', (e) => {
                if (e.target.id === 'career-modal') {
                    this.closeModal();
                }
            });
        }

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

        console.log('Event listeners setup complete');
    }

    // Navigation
    handleNavigation(target) {
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        const targetLink = document.querySelector(`[href="${target}"]`);
        if (targetLink) {
            targetLink.classList.add('active');
        }
        
        // Scroll to section
        if (target) {
            this.scrollToSection(target.substring(1));
        }
    }

    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const header = document.querySelector('.header');
            const headerHeight = header ? header.offsetHeight : 80;
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
        if (!careersGrid) return;
        
        const cards = careersGrid.querySelectorAll('.career-card');
        
        if (!query.trim()) {
            cards.forEach(card => {
                card.style.display = 'block';
            });
            return;
        }

        const searchTerm = query.toLowerCase();
        
        cards.forEach(card => {
            const title = card.querySelector('.career-title');
            const description = card.querySelector('.career-description');
            const tags = card.querySelectorAll('.career-tag');
            
            const titleText = title ? title.textContent.toLowerCase() : '';
            const descriptionText = description ? description.textContent.toLowerCase() : '';
            const tagTexts = Array.from(tags).map(tag => tag.textContent.toLowerCase());
            
            const matches = titleText.includes(searchTerm) || 
                           descriptionText.includes(searchTerm) ||
                           tagTexts.some(tag => tag.includes(searchTerm));
            
            card.style.display = matches ? 'block' : 'none';
        });
    }

    // Career Cards Rendering - FIXED
    renderCareers() {
        console.log('Rendering careers...');
        
        const careersGrid = document.getElementById('careers-grid');
        
        if (!careersGrid) {
            console.error('Careers grid element not found');
            return;
        }

        // Check if careersData exists
        if (typeof careersData === 'undefined') {
            console.error('careersData is not defined');
            careersGrid.innerHTML = '<p style="text-align: center; color: var(--text-muted);">Career data not available. Please check data.js file.</p>';
            return;
        }

        console.log('Career data found:', Object.keys(careersData));
        careersGrid.innerHTML = '';

        try {
            Object.entries(careersData).forEach(([key, career]) => {
                const card = this.createCareerCard(key, career);
                careersGrid.appendChild(card);
            });

            // Add stagger animation class
            careersGrid.classList.add('stagger-animation');
            console.log(`Rendered ${Object.keys(careersData).length} career cards`);
        } catch (error) {
            console.error('Error rendering careers:', error);
            careersGrid.innerHTML = '<p style="text-align: center; color: var(--text-muted);">Error loading career data.</p>';
        }
    }

    createCareerCard(key, career) {
        const card = document.createElement('div');
        card.className = 'career-card';
        card.setAttribute('data-career', key);
        
        // Safely extract salary and growth info
        const salaryParts = career.salary ? career.salary.split(',') : ['Salary info not available'];
        const growthParts = career.growth ? career.growth.split(' ') : ['Growth', 'info'];
        const displaySalary = salaryParts[0] || 'Salary TBD';
        const displayGrowth = `${growthParts[0] || 'High'} ${growthParts[1] || 'demand'}`;
        
        card.innerHTML = `
            <div class="career-icon">
                <i class="${career.icon || 'fas fa-code'}"></i>
            </div>
            <h3 class="career-title">${career.title || 'Career Title'}</h3>
            <p class="career-description">${career.description || 'Career description not available.'}</p>
            <div class="career-meta">
                <span class="career-salary">${displaySalary}</span>
                <span class="career-growth">${displayGrowth}</span>
            </div>
            <div class="career-tags">
                ${(career.tags || []).map(tag => `<span class="career-tag">${tag}</span>`).join('')}
            </div>
        `;

        card.addEventListener('click', () => {
            this.openCareerModal(key, career);
        });

        return card;
    }

    // Modal Management
    openCareerModal(key, career) {
        console.log('Opening modal for:', career.title);
        
        const modal = document.getElementById('career-modal');
        if (!modal) return;
        
        this.activeModal = key;
        
        // Update modal content
        const modalTitle = document.getElementById('modal-title');
        if (modalTitle) {
            modalTitle.textContent = career.title || 'Career Title';
        }
        
        // Update overview tab
        const modalDescription = document.getElementById('modal-description');
        if (modalDescription) {
            modalDescription.textContent = career.description || 'Description not available.';
        }
        
        this.renderSkills(career.skills);
        this.renderRoadmap(career.roadmap);
        this.renderResources(career.resources);
        this.renderSalary(career.salaryDetails);
        
        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Reset to first tab
        this.switchTab('overview');
    }

    closeModal() {
        const modal = document.getElementById('career-modal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            this.activeModal = null;
        }
    }

    // Tab Management
    handleTabClick(button) {
        const tabName = button.getAttribute('data-tab');
        if (tabName) {
            this.switchTab(tabName);
        }
    }

    switchTab(tabName) {
        // Update tab buttons
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });
        const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
        if (activeTab) {
            activeTab.classList.add('active');
        }
        
        // Update tab panes
        document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.remove('active');
        });
        const activePane = document.getElementById(`${tabName}-tab`);
        if (activePane) {
            activePane.classList.add('active');
        }
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
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-xl);">
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
            </div>
        `;
    }

    // Animation Triggers
    triggerEntryAnimations() {
        console.log('Triggering entry animations...');
        
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
        }, 300);
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
    console.log('DOM Content Loaded');
    
    // Check if careersData exists
    if (typeof careersData === 'undefined') {
        console.error('careersData not found! Make sure data.js is loaded before script.js');
        // Try to show error message
        setTimeout(() => {
            const loadingScreen = document.getElementById('loading-screen');
            const mainApp = document.getElementById('main-app');
            
            if (loadingScreen) loadingScreen.style.display = 'none';
            if (mainApp) {
                mainApp.style.display = 'block';
                mainApp.innerHTML = `
                    <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; text-align: center; padding: 2rem;">
                        <div>
                            <h2 style="color: var(--text-primary); margin-bottom: 1rem;">Data Loading Error</h2>
                            <p style="color: var(--text-secondary);">Please make sure data.js is loaded properly.</p>
                            <button onclick="location.reload()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: var(--primary); color: white; border: none; border-radius: 0.5rem; cursor: pointer;">Reload Page</button>
                        </div>
                    </div>
                `;
            }
        }, 2000);
        return;
    }
    
    // Initialize the app
    console.log('Initializing TechNext App...');
    window.techNextApp = new TechNextApp();
    
    console.log('TechNext Application Initialized Successfully! 🚀');
});

// Handle page load
window.addEventListener('load', () => {
    console.log('Window loaded');
});

// Error Handling
window.addEventListener('error', (e) => {
    console.error('Application Error:', e.error);
});

console.log('Script loaded successfully');
