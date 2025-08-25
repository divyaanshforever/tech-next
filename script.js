// Application State
class TechNextApp {
    constructor() {
        this.currentTheme = this.getStoredTheme();
        this.isSearchVisible = false;
        this.currentModal = null;
        this.activeTab = 'overview';
        
        this.init();
    }

    // Initialize the application
    init() {
        this.setTheme(this.currentTheme);
        this.bindEvents();
        this.renderCareerCards();
        this.setupSearch();
    }

    // Event Bindings
    bindEvents() {
        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        themeToggle?.addEventListener('click', () => this.toggleTheme());

        // Search toggle
        const searchToggle = document.getElementById('searchToggle');
        searchToggle?.addEventListener('click', () => this.toggleSearch());

        // Search input
        const searchInput = document.getElementById('searchInput');
        searchInput?.addEventListener('input', (e) => this.handleSearch(e.target.value));
        
        // Search clear
        const searchClear = document.getElementById('searchClear');
        searchClear?.addEventListener('click', () => this.clearSearch());

        // Modal close
        const modalClose = document.getElementById('modalClose');
        const modalOverlay = document.getElementById('modalOverlay');
        
        modalClose?.addEventListener('click', () => this.closeModal());
        modalOverlay?.addEventListener('click', (e) => {
            if (e.target === modalOverlay) this.closeModal();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (this.currentModal) {
                    this.closeModal();
                } else if (this.isSearchVisible) {
                    this.toggleSearch();
                }
            }
        });

        // Tab switching
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('tab-btn')) {
                this.switchTab(e.target.dataset.tab);
            }
        });
    }

    // Theme Management
    getStoredTheme() {
        const stored = localStorage.getItem('theme');
        if (stored) return stored;
        
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    setTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        const themeIcon = document.getElementById('themeIcon');
        if (themeIcon) {
            themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    // Search Functionality
    toggleSearch() {
        this.isSearchVisible = !this.isSearchVisible;
        const searchContainer = document.getElementById('searchContainer');
        const searchInput = document.getElementById('searchInput');
        
        if (this.isSearchVisible) {
            searchContainer?.classList.add('visible');
            searchInput?.focus();
        } else {
            searchContainer?.classList.remove('visible');
            this.clearSearch();
        }
    }

    handleSearch(query) {
        const searchClear = document.getElementById('searchClear');
        const searchResults = document.getElementById('searchResults');
        
        if (query.length > 0) {
            searchClear?.classList.add('visible');
            this.showSearchResults(query);
        } else {
            searchClear?.classList.remove('visible');
            searchResults?.classList.remove('visible');
        }
    }

    showSearchResults(query) {
        const searchResults = document.getElementById('searchResults');
        const results = this.searchCareers(query);
        
        if (results.length > 0) {
            searchResults.innerHTML = results.map(result => `
                <div class="search-result-item" onclick="app.openModal('${result.id}')">
                    <i class="${result.icon}"></i>
                    <div>
                        <div class="font-semibold">${result.title}</div>
                        <div class="text-secondary text-sm">${result.description}</div>
                    </div>
                </div>
            `).join('');
            searchResults?.classList.add('visible');
        } else {
            searchResults.innerHTML = `
                <div class="search-result-item">
                    <i class="fas fa-search"></i>
                    <div class="text-secondary">No results found for "${query}"</div>
                </div>
            `;
            searchResults?.classList.add('visible');
        }
    }

    searchCareers(query) {
        const lowercaseQuery = query.toLowerCase();
        return Object.entries(careerData)
            .filter(([id, career]) => {
                return career.title.toLowerCase().includes(lowercaseQuery) ||
                       career.description.toLowerCase().includes(lowercaseQuery) ||
                       career.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery));
            })
            .map(([id, career]) => ({ id, ...career }))
            .slice(0, 5); // Limit to 5 results
    }

    clearSearch() {
        const searchInput = document.getElementById('searchInput');
        const searchClear = document.getElementById('searchClear');
        const searchResults = document.getElementById('searchResults');
        
        if (searchInput) searchInput.value = '';
        searchClear?.classList.remove('visible');
        searchResults?.classList.remove('visible');
    }

    // Career Cards Rendering
    renderCareerCards() {
        const careersGrid = document.getElementById('careersGrid');
        if (!careersGrid) return;

        const careerCards = Object.entries(careerData).map(([id, career]) => {
            return this.createCareerCard(id, career);
        }).join('');

        careersGrid.innerHTML = careerCards;
        careersGrid.classList.add('stagger-children');
    }

    createCareerCard(id, career) {
        return `
            <div class="career-card" onclick="app.openModal('${id}')">
                <div class="career-icon">
                    <i class="${career.icon}"></i>
                </div>
                <h3 class="career-title">${career.title}</h3>
                <p class="career-description">${career.description}</p>
                <div class="career-tags">
                    ${career.tags.map(tag => `<span class="career-tag">${tag}</span>`).join('')}
                </div>
                <div class="career-stats">
                    <div class="career-salary">${career.salary.india} • ${career.salary.usa}</div>
                    <i class="fas fa-arrow-right career-arrow"></i>
                </div>
            </div>
        `;
    }

    // Modal Management
    openModal(careerId) {
        const career = careerData[careerId];
        if (!career) return;

        this.currentModal = careerId;
        this.renderModal(career);
        
        const modalOverlay = document.getElementById('modalOverlay');
        modalOverlay?.classList.add('visible');
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        const modalOverlay = document.getElementById('modalOverlay');
        modalOverlay?.classList.remove('visible');
        
        this.currentModal = null;
        
        // Restore body scroll
        document.body.style.overflow = '';
    }

    renderModal(career) {
        this.renderModalHeader(career);
        this.renderModalContent(career);
        this.activeTab = 'overview'; // Reset to overview tab
    }

    renderModalHeader(career) {
        const modalHeader = document.getElementById('modalHeader');
        if (!modalHeader) return;

        modalHeader.innerHTML = `
            <div class="modal-icon">
                <i class="${career.icon}"></i>
            </div>
            <h2 class="modal-title">${career.title}</h2>
            <p class="modal-subtitle">${career.description}</p>
        `;
    }

    renderModalContent(career) {
        const modalContent = document.getElementById('modalContent');
        if (!modalContent) return;

        modalContent.innerHTML = `
            <div class="tab-content active" id="overview-tab">
                <div class="overview-content">
                    <p>${career.description}</p>
                    <br>
                    <p><strong>Key Technologies:</strong> ${career.tags.join(', ')}</p>
                    <br>
                    <p><strong>Career Growth:</strong> ${career.growth}</p>
                </div>
            </div>
            
            <div class="tab-content" id="roadmap-tab">
                <div class="roadmap-content">
                    ${career.roadmap.map((step, index) => `
                        <div class="roadmap-step">
                            <div class="step-number">${index + 1}</div>
                            <div class="step-content">
                                <h4>${step.title}</h4>
                                <p>${step.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="tab-content" id="resources-tab">
                <div class="resources-content">
                    ${career.resources.map(resource => `
                        <a href="${resource.url}" target="_blank" rel="noopener noreferrer" class="resource-item">
                            <div class="resource-icon">
                                <i class="fas ${this.getResourceIcon(resource.type)}"></i>
                            </div>
                            <div class="resource-content">
                                <h4>${resource.name}</h4>
                                <p>${resource.description}</p>
                            </div>
                        </a>
                    `).join('')}
                </div>
            </div>
            
            <div class="tab-content" id="salary-tab">
                <div class="salary-content">
                    <div class="salary-section">
                        <h4>Salary Ranges</h4>
                        <div class="salary-range">
                            <div class="salary-card">
                                <h5>🇮🇳 India</h5>
                                <div class="salary-amount">${career.salary.india}</div>
                                <div class="salary-note">Annual package in Indian companies</div>
                            </div>
                            <div class="salary-card">
                                <h5>🇺🇸 United States</h5>
                                <div class="salary-amount">${career.salary.usa}</div>
                                <div class="salary-note">Annual salary in US companies</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="growth-info">
                        <h5>📈 Market Growth & Outlook</h5>
                        <p>${career.growth}</p>
                    </div>
                    
                    <div class="salary-section">
                        <h4>Experience-based Breakdown</h4>
                        <div class="salary-range">
                            <div class="salary-card">
                                <h5>Junior (0-2 years)</h5>
                                <div class="salary-amount">${career.salary.details.junior.india}</div>
                                <div class="salary-note">India • ${career.salary.details.junior.usa} USA</div>
                            </div>
                            <div class="salary-card">
                                <h5>Mid-level (2-5 years)</h5>
                                <div class="salary-amount">${career.salary.details.mid.india}</div>
                                <div class="salary-note">India • ${career.salary.details.mid.usa} USA</div>
                            </div>
                            <div class="salary-card">
                                <h5>Senior (5+ years)</h5>
                                <div class="salary-amount">${career.salary.details.senior.india}</div>
                                <div class="salary-note">India • ${career.salary.details.senior.usa} USA</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    getResourceIcon(type) {
        const icons = {
            'Course': 'fa-graduation-cap',
            'Documentation': 'fa-book',
            'Blog': 'fa-rss',
            'Video': 'fa-play',
            'Practice': 'fa-code',
            'Research': 'fa-microscope',
            'Platform': 'fa-laptop',
            'Tutorial': 'fa-chalkboard-teacher',
            'Certification': 'fa-certificate',
            'Resource': 'fa-star',
            'Guide': 'fa-map',
            'Framework': 'fa-tools',
            'Inspiration': 'fa-lightbulb',
            'Book': 'fa-book-open'
        };
        
        return icons[type] || 'fa-external-link-alt';
    }

    // Tab Management
    switchTab(tabName) {
        // Update active tab button
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`)?.classList.add('active');

        // Update active tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(`${tabName}-tab`)?.classList.add('active');

        this.activeTab = tabName;
    }

    // Utility Methods
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

    // Analytics & Tracking (placeholder for future implementation)
    trackEvent(eventName, properties = {}) {
        console.log(`Event: ${eventName}`, properties);
        // Implement analytics tracking here
    }

    // Error Handling
    handleError(error, context = '') {
        console.error(`Error in ${context}:`, error);
        // Implement error reporting here
    }

    // Performance Monitoring
    measurePerformance(name, fn) {
        const start = performance.now();
        const result = fn();
        const end = performance.now();
        console.log(`${name} took ${end - start} milliseconds`);
        return result;
    }
}

// DOM Content Loaded Handler
document.addEventListener('DOMContentLoaded', () => {
    // Check if careerData is available
    if (typeof careerData === 'undefined') {
        console.error('Career data not loaded! Make sure data.js is included before script.js');
        return;
    }

    // Initialize the application
    window.app = new TechNextApp();
    
    // Add loading animation cleanup
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
});

// Service Worker Registration (for future PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Performance Observer (for monitoring)
if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
                console.log('LCP:', entry.startTime);
            }
        }
    });
    
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
}

// Export for testing or external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TechNextApp;
}
