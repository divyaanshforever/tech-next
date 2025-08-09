/**
 * TechNext - Career Hub JavaScript
 * Enhanced with bug fixes, performance improvements, and accessibility features
 */

class TechCareerHub {
    constructor() {
        this.currentFilter = 'all';
        this.searchResults = [];
        this.isSearchActive = false;
        this.debounceTimer = null;
        this.currentModal = null;
        this.activeTab = 'overview';
        
        // Initialize the application
        this.init();
    }

    /**
     * Initialize the application
     */
    async init() {
        try {
            await this.loadCareerData();
            this.setupEventListeners();
            this.setupTheme();
            this.renderCareerGrid();
            this.hideLoadingScreen();
            this.setupAccessibility();
            this.setupServiceWorker();
        } catch (error) {
            console.error('Failed to initialize TechCareerHub:', error);
            this.showToast('Failed to load application. Please refresh the page.', 'error');
        }
    }

    /**
     * Load career data
     */
    async loadCareerData() {
        // Check if data is available from data.js
        if (typeof window.careerData === 'undefined') {
            throw new Error('Career data not loaded. Please ensure data.js is included.');
        }
        this.careerData = window.careerData;
    }

    /**
     * Setup event listeners
     */
    setupEventListeners() {
        // Navigation events
        this.setupNavigationEvents();
        
        // Search events
        this.setupSearchEvents();
        
        // Filter events
        this.setupFilterEvents();
        
        // Modal events
        this.setupModalEvents();
        
        // Theme events
        this.setupThemeEvents();
        
        // Keyboard events
        this.setupKeyboardEvents();
        
        // Window events
        this.setupWindowEvents();
    }

    /**
     * Setup navigation events
     */
    setupNavigationEvents() {
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        const searchToggle = document.getElementById('searchToggle');
        const searchContainer = document.getElementById('searchContainer');

        if (mobileMenuToggle && mobileMenu) {
            mobileMenuToggle.addEventListener('click', () => {
                const isActive = mobileMenu.classList.contains('active');
                this.toggleMobileMenu(!isActive);
            });

            // Close mobile menu when clicking menu items
            mobileMenu.querySelectorAll('.mobile-menu-item').forEach(item => {
                item.addEventListener('click', () => {
                    this.toggleMobileMenu(false);
                });
            });
        }

        if (searchToggle && searchContainer) {
            searchToggle.addEventListener('click', () => {
                const isActive = searchContainer.classList.contains('active');
                this.toggleSearch(!isActive);
            });
        }

        // Handle smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href !== '#') {
                    e.preventDefault();
                    this.scrollToSection(href.substring(1));
                }
            });
        });
    }

    /**
     * Setup search events
     */
    setupSearchEvents() {
        const searchInput = document.getElementById('searchInput');
        const searchClear = document.getElementById('searchClear');
        const searchResults = document.getElementById('searchResults');

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.debounceSearch(e.target.value);
            });

            searchInput.addEventListener('focus', () => {
                if (searchInput.value.trim()) {
                    this.showSearchResults();
                }
            });

            searchInput.addEventListener('keydown', (e) => {
                this.handleSearchKeydown(e);
            });
        }

        if (searchClear) {
            searchClear.addEventListener('click', () => {
                this.clearSearch();
            });
        }

        // Close search when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container') && !e.target.closest('#searchToggle')) {
                this.toggleSearch(false);
            }
        });
    }

    /**
     * Setup filter events
     */
    setupFilterEvents() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.dataset.filter;
                this.setActiveFilter(filter);
            });
        });
    }

    /**
     * Setup modal events
     */
    setupModalEvents() {
        const modal = document.getElementById('careerModal');
        const modalOverlay = modal?.querySelector('.modal-overlay');
        const modalClose = modal?.querySelector('.modal-close');
        const tabButtons = modal?.querySelectorAll('.tab-btn');

        if (modalOverlay) {
            modalOverlay.addEventListener('click', () => {
                this.closeModal();
            });
        }

        if (modalClose) {
            modalClose.addEventListener('click', () => {
                this.closeModal();
            });
        }

        if (tabButtons) {
            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const tab = button.dataset.tab;
                    this.switchTab(tab);
                });
            });
        }
    }

    /**
     * Setup theme events
     */
    setupThemeEvents() {
        const themeToggle = document.getElementById('themeToggle');
        
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
    }

    /**
     * Setup keyboard events
     */
    setupKeyboardEvents() {
        document.addEventListener('keydown', (e) => {
            // Escape key handling
            if (e.key === 'Escape') {
                if (this.currentModal) {
                    this.closeModal();
                } else if (this.isSearchActive) {
                    this.toggleSearch(false);
                } else {
                    const activeMenu = document.querySelector('.mobile-menu.active');
                    if (activeMenu) {
                        this.toggleMobileMenu(false);
                    }
                }
            }

            // Tab navigation in modal
            if (this.currentModal && e.key === 'Tab') {
                this.handleModalTabNavigation(e);
            }
        });
    }

    /**
     * Setup window events
     */
    setupWindowEvents() {
        // Handle resize
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                this.handleResize();
            }, 250);
        });

        // Handle scroll
        let scrollTimer;
        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(() => {
                this.handleScroll();
            }, 10);
        });

        // Handle visibility change
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.handlePageHidden();
            } else {
                this.handlePageVisible();
            }
        });

        // Handle online/offline
        window.addEventListener('online', () => {
            this.showToast('Connection restored', 'success');
        });

        window.addEventListener('offline', () => {
            this.showToast('You are now offline', 'error');
        });
    }

    /**
     * Setup theme system
     */
    setupTheme() {
        // Check for saved theme preference or default to 'light'
        const savedTheme = this.getThemeFromStorage();
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const initialTheme = savedTheme || systemTheme;
        
        this.setTheme(initialTheme);

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!this.getThemeFromStorage()) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    /**
     * Setup accessibility features
     */
    setupAccessibility() {
        // Add skip link
        this.addSkipLink();
        
        // Ensure focus management
        this.setupFocusManagement();
        
        // Add ARIA labels dynamically
        this.enhanceARIA();
        
        // Setup reduced motion
        this.setupReducedMotion();
    }

    /**
     * Setup service worker
     */
    setupServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then((registration) => {
                    console.log('SW registered: ', registration);
                })
                .catch((registrationError) => {
                    console.log('SW registration failed: ', registrationError);
                });
        }
    }

    /**
     * Toggle mobile menu
     */
    toggleMobileMenu(show) {
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        
        if (mobileMenu && mobileMenuToggle) {
            mobileMenu.classList.toggle('active', show);
            mobileMenuToggle.setAttribute('aria-expanded', show.toString());
            
            if (show) {
                mobileMenu.querySelector('.mobile-menu-item')?.focus();
            }
        }
    }

    /**
     * Toggle search
     */
    toggleSearch(show) {
        const searchContainer = document.getElementById('searchContainer');
        const searchToggle = document.getElementById('searchToggle');
        const searchInput = document.getElementById('searchInput');
        
        if (searchContainer && searchToggle) {
            searchContainer.classList.toggle('active', show);
            searchToggle.setAttribute('aria-expanded', show.toString());
            this.isSearchActive = show;
            
            if (show) {
                setTimeout(() => searchInput?.focus(), 100);
            } else {
                this.hideSearchResults();
                searchInput.value = '';
                this.updateSearchClearButton('');
            }
        }
    }

    /**
     * Debounced search function
     */
    debounceSearch(query) {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
            this.performSearch(query);
        }, 300);
    }

    /**
     * Perform search
     */
    performSearch(query) {
        const trimmedQuery = query.trim().toLowerCase();
        this.updateSearchClearButton(query);
        
        if (trimmedQuery.length < 2) {
            this.hideSearchResults();
            return;
        }

        try {
            this.searchResults = this.careerData.filter(career => {
                return (
                    career.title.toLowerCase().includes(trimmedQuery) ||
                    career.description.toLowerCase().includes(trimmedQuery) ||
                    career.category.toLowerCase().includes(trimmedQuery) ||
                    career.skills?.some(skill => skill.toLowerCase().includes(trimmedQuery)) ||
                    career.keywords?.some(keyword => keyword.toLowerCase().includes(trimmedQuery))
                );
            });

            this.renderSearchResults();
        } catch (error) {
            console.error('Search error:', error);
            this.showToast('Search failed. Please try again.', 'error');
        }
    }

    /**
     * Render search results
     */
    renderSearchResults() {
        const searchResults = document.getElementById('searchResults');
        
        if (!searchResults) return;

        if (this.searchResults.length === 0) {
            searchResults.innerHTML = `
                <div class="search-result-item">
                    <div class="search-result-icon">
                        <i class="fas fa-search"></i>
                    </div>
                    <div class="search-result-content">
                        <div class="search-result-title">No results found</div>
                        <div class="search-result-description">Try different keywords or browse all careers below.</div>
                    </div>
                </div>
            `;
        } else {
            searchResults.innerHTML = this.searchResults.map(career => `
                <div class="search-result-item" data-career="${career.id}" tabindex="0" role="option">
                    <div class="search-result-icon">
                        <i class="${career.icon}"></i>
                    </div>
                    <div class="search-result-content">
                        <div class="search-result-title">${this.sanitizeHTML(career.title)}</div>
                        <div class="search-result-description">${this.sanitizeHTML(career.description.substring(0, 80))}...</div>
                    </div>
                </div>
            `).join('');

            // Add click events to search results
            searchResults.querySelectorAll('.search-result-item[data-career]').forEach(item => {
                item.addEventListener('click', () => {
                    const careerId = item.dataset.career;
                    const career = this.careerData.find(c => c.id === careerId);
                    if (career) {
                        this.openCareerModal(career);
                        this.toggleSearch(false);
                    }
                });

                item.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        item.click();
                    }
                });
            });
        }

        this.showSearchResults();
    }

    /**
     * Show search results
     */
    showSearchResults() {
        const searchResults = document.getElementById('searchResults');
        if (searchResults) {
            searchResults.style.display = 'block';
        }
    }

    /**
     * Hide search results
     */
    hideSearchResults() {
        const searchResults = document.getElementById('searchResults');
        if (searchResults) {
            searchResults.style.display = 'none';
        }
    }

    /**
     * Update search clear button visibility
     */
    updateSearchClearButton(query) {
        const searchClear = document.getElementById('searchClear');
        if (searchClear) {
            searchClear.style.display = query.trim() ? 'flex' : 'none';
        }
    }

    /**
     * Clear search
     */
    clearSearch() {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = '';
            searchInput.focus();
            this.updateSearchClearButton('');
            this.hideSearchResults();
        }
    }

    /**
     * Handle search keydown events
     */
    handleSearchKeydown(e) {
        const searchResults = document.getElementById('searchResults');
        if (!searchResults || searchResults.style.display === 'none') return;

        const resultItems = searchResults.querySelectorAll('.search-result-item[data-career]');
        const currentFocus = document.activeElement;
        let currentIndex = Array.from(resultItems).indexOf(currentFocus);

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                currentIndex = Math.min(currentIndex + 1, resultItems.length - 1);
                resultItems[currentIndex]?.focus();
                break;
            case 'ArrowUp':
                e.preventDefault();
                if (currentIndex <= 0) {
                    document.getElementById('searchInput')?.focus();
                } else {
                    currentIndex = Math.max(currentIndex - 1, 0);
                    resultItems[currentIndex]?.focus();
                }
                break;
            case 'Enter':
                if (currentFocus.classList.contains('search-result-item')) {
                    currentFocus.click();
                }
                break;
        }
    }

    /**
     * Set active filter
     */
    setActiveFilter(filter) {
        this.currentFilter = filter;
        
        // Update filter button states
        document.querySelectorAll('.filter-btn').forEach(btn => {
            const isActive = btn.dataset.filter === filter;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-selected', isActive.toString());
        });
        
        // Re-render career grid
        this.renderCareerGrid();
        
        // Update URL without page reload
        const url = new URL(window.location);
        if (filter === 'all') {
            url.searchParams.delete('filter');
        } else {
            url.searchParams.set('filter', filter);
        }
        window.history.pushState({}, '', url);
    }

    /**
     * Render career grid
     */
    renderCareerGrid() {
        const careerGrid = document.getElementById('careerGrid');
        const emptyState = document.getElementById('emptyState');
        
        if (!careerGrid || !this.careerData) return;

        try {
            const filteredCareers = this.getFilteredCareers();
            
            if (filteredCareers.length === 0) {
                careerGrid.style.display = 'none';
                if (emptyState) {
                    emptyState.style.display = 'block';
                }
                return;
            }

            careerGrid.style.display = 'grid';
            if (emptyState) {
                emptyState.style.display = 'none';
            }

            careerGrid.innerHTML = filteredCareers.map(career => `
                <div class="career-card fade-in-up" data-career="${career.id}" tabindex="0" role="article">
                    <div class="career-card-header">
                        <div class="career-icon">
                            <i class="${career.icon}" aria-hidden="true"></i>
                        </div>
                        <div>
                            <h4 class="career-title">${this.sanitizeHTML(career.title)}</h4>
                            <div class="career-category">${this.sanitizeHTML(career.category)}</div>
                        </div>
                    </div>
                    
                    <p class="career-description">${this.sanitizeHTML(career.description)}</p>
                    
                    <div class="career-stats">
                        <div class="career-stat">
                            <span class="career-stat-value">${career.difficulty || 'Medium'}</span>
                            <span class="career-stat-label">Difficulty</span>
                        </div>
                        <div class="career-stat">
                            <span class="career-stat-value">${career.timeToLearn || '6-12M'}</span>
                            <span class="career-stat-label">Time to Learn</span>
                        </div>
                        <div class="career-stat">
                            <span class="career-stat-value">${career.jobGrowth || 'High'}</span>
                            <span class="career-stat-label">Job Growth</span>
                        </div>
                    </div>
                    
                    <div class="career-tags">
                        ${career.skills ? career.skills.slice(0, 3).map(skill => `
                            <span class="career-tag">${this.sanitizeHTML(skill)}</span>
                        `).join('') : ''}
                    </div>
                    
                    <div class="career-footer">
                        <div class="salary-range">
                            <i class="fas fa-rupee-sign" aria-hidden="true"></i>
                            ${this.sanitizeHTML(career.salaryIndia || 'Competitive')}
                        </div>
                        <button class="learn-more" aria-label="Learn more about ${this.sanitizeHTML(career.title)}">
                            Learn More
                            <i class="fas fa-arrow-right" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            `).join('');

            // Add event listeners to career cards
            this.addCareerCardListeners();

        } catch (error) {
            console.error('Error rendering career grid:', error);
            this.showToast('Failed to load careers. Please try again.', 'error');
        }
    }

    /**
     * Get filtered careers based on current filter
     */
    getFilteredCareers() {
        if (this.currentFilter === 'all') {
            return this.careerData;
        }
        
        return this.careerData.filter(career => 
            career.category.toLowerCase().includes(this.currentFilter.toLowerCase()) ||
            career.type?.toLowerCase() === this.currentFilter.toLowerCase()
        );
    }

    /**
     * Add event listeners to career cards
     */
    addCareerCardListeners() {
        const careerCards = document.querySelectorAll('.career-card');
        
        careerCards.forEach(card => {
            const careerId = card.dataset.career;
            const career = this.careerData.find(c => c.id === careerId);
            
            if (career) {
                // Click event
                card.addEventListener('click', (e) => {
                    // Don't open modal if clicking on learn more button
                    if (!e.target.closest('.learn-more')) {
                        this.openCareerModal(career);
                    }
                });

                // Keyboard event
                card.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.openCareerModal(career);
                    }
                });

                // Learn more button
                const learnMoreBtn = card.querySelector('.learn-more');
                if (learnMoreBtn) {
                    learnMoreBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        this.openCareerModal(career);
                    });
                }
            }
        });
    }

    /**
     * Open career modal
     */
    openCareerModal(career) {
        const modal = document.getElementById('careerModal');
        const modalTitle = document.getElementById('modalTitle');
        
        if (!modal || !career) return;

        try {
            this.currentModal = career;
            
            // Set modal title
            if (modalTitle) {
                modalTitle.textContent = career.title;
            }

            // Populate modal content
            this.populateModalContent(career);

            // Show modal
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            
            // Focus management
            setTimeout(() => {
                const firstFocusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                firstFocusable?.focus();
            }, 100);

            // Prevent body scroll
            document.body.style.overflow = 'hidden';

        } catch (error) {
            console.error('Error opening modal:', error);
            this.showToast('Failed to load career details.', 'error');
        }
    }

    /**
     * Populate modal content
     */
    populateModalContent(career) {
        // Overview tab
        this.populateOverviewTab(career);
        
        // Roadmap tab
        this.populateRoadmapTab(career);
        
        // Resources tab
        this.populateResourcesTab(career);
        
        // Salary tab
        this.populateSalaryTab(career);
        
        // Reset to first tab
        this.switchTab('overview');
    }

    /**
     * Populate overview tab
     */
    populateOverviewTab(career) {
        const descriptionEl = document.querySelector('#overview .career-description');
        const growthRateEl = document.querySelector('#overview .growth-rate');
        const difficultyEl = document.querySelector('#overview .difficulty-level');
        
        if (descriptionEl) {
            descriptionEl.textContent = career.description;
        }
        
        if (growthRateEl) {
            growthRateEl.textContent = career.growth || career.jobGrowth || 'High';
        }
        
        if (difficultyEl) {
            difficultyEl.textContent = career.difficulty || 'Medium';
        }
    }

    /**
     * Populate roadmap tab
     */
    populateRoadmapTab(career) {
        const roadmapContainer = document.querySelector('#roadmap .roadmap-timeline');
        
        if (!roadmapContainer || !career.roadmap) return;

        roadmapContainer.innerHTML = career.roadmap.map((step, index) => `
            <div class="roadmap-step">
                <h5>Step ${index + 1}</h5>
                <p>${this.sanitizeHTML(step)}</p>
            </div>
        `).join('');
    }

    /**
     * Populate resources tab
     */
    populateResourcesTab(career) {
        const resourcesContainer = document.querySelector('#resources .resources-container');
        
        if (!resourcesContainer) return;

        if (!career.resources || career.resources.length === 0) {
            resourcesContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-book-open"></i>
                    <h4>No resources available</h4>
                    <p>Resources for this career are being updated. Check back soon!</p>
                </div>
            `;
            return;
        }

        resourcesContainer.innerHTML = career.resources.map(resource => `
            <a href="${resource.url}" target="_blank" rel="noopener noreferrer" class="resource-item">
                <div class="resource-icon">
                    <i class="${resource.icon || 'fas fa-external-link-alt'}" aria-hidden="true"></i>
                </div>
                <div class="resource-content">
                    <h6>${this.sanitizeHTML(resource.name)}</h6>
                    <p>${this.sanitizeHTML(resource.description || 'External learning resource')}</p>
                </div>
            </a>
        `).join('');
    }

    /**
     * Populate salary tab
     */
    populateSalaryTab(career) {
        const indiaContainer = document.querySelector('#salary .india-salary');
        const usaContainer = document.querySelector('#salary .usa-salary');
        
        if (indiaContainer && career.salaryIndia) {
            this.renderSalaryRange(indiaContainer, career.salaryIndia, 'INR');
        }
        
        if (usaContainer && career.salaryUSA) {
            this.renderSalaryRange(usaContainer, career.salaryUSA, 'USD');
        }
    }

    /**
     * Render salary range
     */
    renderSalaryRange(container, salaryData, currency) {
        if (typeof salaryData === 'string') {
            container.innerHTML = `<div class="salary-level">
                <span class="salary-level-name">Average</span>
                <span class="salary-level-amount">${salaryData}</span>
            </div>`;
            return;
        }

        if (typeof salaryData === 'object' && salaryData.levels) {
            container.innerHTML = salaryData.levels.map(level => `
                <div class="salary-level">
                    <span class="salary-level-name">${level.name}</span>
                    <span class="salary-level-amount">${level.amount}</span>
                </div>
            `).join('');
        }
    }

    /**
     * Switch modal tab
     */
    switchTab(tabName) {
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabPanes = document.querySelectorAll('.tab-pane');
        
        this.activeTab = tabName;
        
        // Update tab buttons
        tabButtons.forEach(btn => {
            const isActive = btn.dataset.tab === tabName;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-selected', isActive.toString());
        });
        
        // Update tab panes
        tabPanes.forEach(pane => {
            pane.classList.toggle('active', pane.id === tabName);
        });
    }

    /**
     * Close modal
     */
    closeModal() {
        const modal = document.getElementById('careerModal');
        
        if (modal && this.currentModal) {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            this.currentModal = null;
            
            // Restore body scroll
            document.body.style.overflow = '';
            
            // Return focus to the card that opened the modal
            setTimeout(() => {
                const careerCard = document.querySelector(`[data-career="${this.currentModal?.id}"]`);
                careerCard?.focus();
            }, 100);
        }
    }

    /**
     * Handle modal tab navigation
     */
    handleModalTabNavigation(e) {
        const modal = document.getElementById('careerModal');
        if (!modal || !modal.classList.contains('active')) return;

        const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    }

    /**
     * Toggle theme
     */
    toggleTheme() {
        const currentTheme = document.documentElement.dataset.theme || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    /**
     * Set theme
     */
    setTheme(theme) {
        document.documentElement.dataset.theme = theme;
        
        // Update theme toggle button
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.setAttribute('aria-pressed', (theme === 'dark').toString());
            const icon = themeToggle.querySelector('.theme-icon');
            if (icon) {
                icon.className = `fas theme-icon ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`;
            }
        }
        
        // Save theme preference
        this.saveThemeToStorage(theme);
        
        // Update meta theme-color
        let metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.name = 'theme-color';
            document.head.appendChild(metaThemeColor);
        }
        metaThemeColor.content = theme === 'dark' ? '#0a0a0f' : '#fdfbfb';
    }

    /**
     * Get theme from storage
     */
    getThemeFromStorage() {
        try {
            return localStorage.getItem('tech-career-hub-theme');
        } catch {
            return null;
        }
    }

    /**
     * Save theme to storage
     */
    saveThemeToStorage(theme) {
        try {
            localStorage.setItem('tech-career-hub-theme', theme);
        } catch (error) {
            console.warn('Failed to save theme preference:', error);
        }
    }

    /**
     * Scroll to section
     */
    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;
            const targetPosition = section.offsetTop - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

    /**
     * Show toast notification
     */
    showToast(message, type = 'info') {
        const toastId = type === 'error' ? 'errorToast' : 'successToast';
        const toast = document.getElementById(toastId);
        
        if (!toast) return;

        const messageEl = toast.querySelector('.toast-message');
        const closeBtn = toast.querySelector('.toast-close');
        
        if (messageEl) {
            messageEl.textContent = message;
        }
        
        // Show toast
        toast.style.display = 'block';
        setTimeout(() => toast.classList.add('show'), 10);
        
        // Auto hide after 5 seconds
        const hideTimeout = setTimeout(() => {
            this.hideToast(toastId);
        }, 5000);
        
        // Close button handler
        if (closeBtn) {
            const closeHandler = () => {
                clearTimeout(hideTimeout);
                this.hideToast(toastId);
                closeBtn.removeEventListener('click', closeHandler);
            };
            closeBtn.addEventListener('click', closeHandler);
        }
    }

    /**
     * Hide toast notification
     */
    hideToast(toastId) {
        const toast = document.getElementById(toastId);
        if (toast) {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.style.display = 'none';
            }, 300);
        }
    }

    /**
     * Handle page resize
     */
    handleResize() {
        // Close mobile menu on larger screens
        if (window.innerWidth > 768) {
            this.toggleMobileMenu(false);
        }
        
        // Adjust modal positioning if needed
        if (this.currentModal) {
            // Modal positioning is handled by CSS, but we can trigger reflow
            const modal = document.getElementById('careerModal');
            if (modal) {
                modal.style.display = 'none';
                modal.offsetHeight; // Force reflow
                modal.style.display = 'flex';
            }
        }
    }

    /**
     * Handle page scroll
     */
    handleScroll() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            const scrolled = window.scrollY > 50;
            navbar.classList.toggle('scrolled', scrolled);
        }
    }

    /**
     * Handle page hidden
     */
    handlePageHidden() {
        // Pause any ongoing animations or timers
        clearTimeout(this.debounceTimer);
    }

    /**
     * Handle page visible
     */
    handlePageVisible() {
        // Resume normal operation
        // Nothing specific needed for now
    }

    /**
     * Hide loading screen
     */
    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }

    /**
     * Add skip link for accessibility
     */
    addSkipLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'sr-only';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--primary);
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 10000;
            transition: top 0.3s;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        // Add main landmark if it doesn't exist
        const main = document.querySelector('main');
        if (main && !main.id) {
            main.id = 'main';
        }
    }

    /**
     * Setup focus management
     */
    setupFocusManagement() {
        // Ensure all interactive elements are focusable
        document.querySelectorAll('button, a, input, select, textarea').forEach(el => {
            if (!el.hasAttribute('tabindex') && !el.disabled) {
                el.tabIndex = 0;
            }
        });
    }

    /**
     * Enhance ARIA labels
     */
    enhanceARIA() {
        // Add ARIA labels to icons
        document.querySelectorAll('i[class*="fa-"]').forEach(icon => {
            if (!icon.hasAttribute('aria-hidden') && !icon.hasAttribute('aria-label')) {
                icon.setAttribute('aria-hidden', 'true');
            }
        });
        
        // Enhance form labels
        document.querySelectorAll('input, select, textarea').forEach(input => {
            if (!input.hasAttribute('aria-label') && !input.hasAttribute('aria-labelledby')) {
                const label = document.querySelector(`label[for="${input.id}"]`);
                if (!label && input.placeholder) {
                    input.setAttribute('aria-label', input.placeholder);
                }
            }
        });
    }

    /**
     * Setup reduced motion
     */
    setupReducedMotion() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        
        if (prefersReducedMotion.matches) {
            document.documentElement.style.setProperty('--transition-fast', '0.01ms');
            document.documentElement.style.setProperty('--transition-base', '0.01ms');
            document.documentElement.style.setProperty('--transition-slow', '0.01ms');
        }
        
        prefersReducedMotion.addEventListener('change', (e) => {
            const duration = e.matches ? '0.01ms' : null;
            document.documentElement.style.setProperty('--transition-fast', duration);
            document.documentElement.style.setProperty('--transition-base', duration);
            document.documentElement.style.setProperty('--transition-slow', duration);
        });
    }

    /**
     * Sanitize HTML to prevent XSS
     */
    sanitizeHTML(str) {
        const temp = document.createElement('div');
        temp.textContent = str;
        return temp.innerHTML;
    }

    /**
     * Utility function to check if element is in viewport
     */
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    /**
     * Lazy load images when they come into viewport
     */
    setupLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }
}

// Global functions for HTML onclick handlers
window.scrollToSection = function(sectionId) {
    if (window.techCareerHub) {
        window.techCareerHub.scrollToSection(sectionId);
    }
};

window.openModal = function(modalType) {
    if (window.techCareerHub) {
        // This can be extended to handle different modal types
        console.log('Opening modal:', modalType);
    }
};

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.techCareerHub = new TechCareerHub();
});

// Handle page load
window.addEventListener('load', () => {
    // Setup lazy loading after page load
    if (window.techCareerHub) {
        window.techCareerHub.setupLazyLoading();
    }
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
    if (window.techCareerHub) {
        window.techCareerHub.showToast('An unexpected error occurred. Please refresh the page.', 'error');
    }
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    if (window.techCareerHub) {
        window.techCareerHub.showToast('An error occurred while processing your request.', 'error');
    }
});
