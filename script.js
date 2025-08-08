// script.js – v2.5 Smart Version

const roleGrid = document.getElementById('roleGrid');
const roleDetail = document.getElementById('roleDetail');
const roleTitle = document.getElementById('roleTitle');
const roleDesc = document.getElementById('roleDesc');
const tabContent = document.getElementById('tabContent');
const backButton = document.getElementById('backButton');
const toggleTheme = document.getElementById('toggle-theme');

// --- THEME LOGIC ---
function applyTheme(mode) {
  document.body.classList.toggle('dark', mode === 'dark');
  toggleTheme.textContent = mode === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', mode);
}

// Init theme from storage or system preference
const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
applyTheme(savedTheme);

toggleTheme.onclick = () => {
  const isDark = document.body.classList.contains('dark');
  applyTheme(isDark ? 'light' : 'dark');
};

// --- ROLE CARDS ---
Object.entries(techRoles).forEach(([key, role]) => {
  const card = document.createElement('div');
  card.className = 'role-card';
  card.innerHTML = `<h3>${role.title}</h3><p>${role.description}</p>`;
  card.onclick = () => showRole(key);
  roleGrid.appendChild(card);
});

// --- DISPLAY ROLE DETAILS ---
function showRole(key) {
  const role = techRoles[key];
  roleTitle.textContent = role.title;
  roleDesc.textContent = role.description;
  showTab('roadmap', role);
  document.getElementById('home').classList.add('hidden');
  roleDetail.classList.remove('hidden');

  document.querySelectorAll('.tab').forEach(btn => {
    btn.classList.remove('active');
    btn.onclick = () => {
      document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      showTab(btn.dataset.tab, role);
    };
  });
  document.querySelector('.tab[data-tab="roadmap"]').classList.add('active');
}

// --- TABS ---
function showTab(tab, role) {
  tabContent.classList.remove('fade-in');
  void tabContent.offsetWidth; // reset animation
  tabContent.classList.add('fade-in');

  if (tab === 'roadmap') {
    tabContent.innerHTML = `<ul>${role.roadmap.map(item => `<li>${item}</li>`).join('')}</ul>`;
  } else if (tab === 'salary') {
    tabContent.innerHTML = `<p><strong>Salary:</strong> ${role.salary}</p>`;
  } else if (tab === 'growth') {
    tabContent.innerHTML = `<p><strong>Growth:</strong> ${role.growth}</p>`;
  } else if (tab === 'resources') {
    tabContent.innerHTML = `<ul>${role.resources.map(r => `<li><a href="${r.url}" target="_blank">${r.name}</a></li>`).join('')}</ul>`;
  }
}

// --- BACK BUTTON ---
backButton.onclick = () => {
  roleDetail.classList.add('hidden');
  document.getElementById('home').classList.remove('hidden');
};
