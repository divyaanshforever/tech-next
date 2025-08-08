// script.js – Enhanced Application Logic v3.0

// Application State
let currentRole = null;
let filteredRoles = Object.entries(techRoles);

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const roleGrid = document.getElementById('roleGrid');
const roleDetail = document.getElementById('roleDetail');
const searchInput = document.getElementById('searchInput');
const closeBtn = document.getElementById('closeBtn');

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
}

themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Search Functionality
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  
  filteredRoles = Object.entries(techRoles).filter(([key, role]) => 
    role.title.toLowerCase().includes(query) || 
    role.description.toLowerCase().includes(query)
  );
  
  renderRoleCards();
});

// Render Role Cards
function renderRoleCards() {
  roleGrid.innerHTML = '';
  
  filteredRoles.forEach(([key, role], index) => {
    const card = document.createElement('div');
    card.className = `role-card fade-in stagger-delay-${Math.min(index % 3 + 1, 3)}`;
    card.innerHTML = `
      <div class="role-icon">
        <i class="${role.icon}"></i>
      </div>
      <h3 class="role-title">${role.title}</h3>
      <p class="role-description">${role.description}</p>
      <div class="role-meta">
        <span class="growth-indicator">
          <i class="fas fa-trending-up"></i> High Growth
        </span>
        <span class="salary-badge">${role.salary.split(',')[0]}</span>
      </div>
    `;
    
    card.addEventListener('click', () => openRoleDetail(key, role));
    roleGrid.appendChild(card);
  });
}

// Role Detail Modal
function openRoleDetail(key, role) {
  currentRole = { key, ...role };
  
  document.getElementById('detailTitle').textContent = role.title;
  document.getElementById('detailDescription').textContent = role.description;
  
  // Reset tabs
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.querySelector('.tab[data-tab="roadmap"]').classList.add('active');
  
  showTabContent('roadmap');
  roleDetail.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeRoleDetail() {
  roleDetail.classList.remove('active');
  document.body.style.overflow = '';
  currentRole = null;
}

// Tab Management
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    showTabContent(tab.dataset.tab);
  });
});

function showTabContent(tabName) {
  const tabContent = document.getElementById('tabContent');
  
  switch(tabName) {
    case 'roadmap':
      tabContent.innerHTML = `
        <ol class="roadmap-list">
          ${currentRole.roadmap.map(step => `
            <li class="roadmap-item">${step}</li>
          `).join('')}
        </ol>
      `;
      break;
      
    case 'salary':
      tabContent.innerHTML = `
        <div class="salary-info">
          <h3><i class="fas fa-money-bill-wave"></i> Salary Information</h3>
          <p><strong>Expected Range:</strong> ${currentRole.salary}</p>
          <p>Salaries vary based on experience, location, company size, and specialization. Entry-level positions typically start at the lower end, while senior roles and those in high-demand areas command premium salaries.</p>
        </div>
      `;
      break;
      
    case 'growth':
      tabContent.innerHTML = `
        <div class="growth-info">
          <h3><i class="fas fa-chart-line"></i> Career Growth & Market Outlook</h3>
          <p>${currentRole.growth}</p>
          <p>This field offers excellent opportunities for career advancement, skill development, and specialization in emerging technologies.</p>
        </div>
      `;
      break;
      
    case 'resources':
      tabContent.innerHTML = `
        <h3><i class="fas fa-book"></i> Learning Resources</h3>
        <div class="resources-grid">
          ${currentRole.resources.map(resource => `
            <a href="${resource.url}" target="_blank" rel="noopener noreferrer" class="resource-card">
              <div class="resource-name">${resource.name}</div>
              <div class="resource-type">Learn & Practice</div>
              <i class="fas fa-external-link-alt"></i>
            </a>
          `).join('')}
        </div>
      `;
      break;
  }
}

// Event Listeners
closeBtn.addEventListener('click', closeRoleDetail);

roleDetail.addEventListener('click', (e) => {
  if (e.target === roleDetail) {
    closeRoleDetail();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && currentRole) {
    closeRoleDetail();
  }
});

// Initialize Application
function init() {
  initTheme();
  renderRoleCards();
  
  // Trigger fade-in animations
  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }, 100);
}

// Start the application
init();
