const roleGrid = document.getElementById('roleGrid');
const roleDetail = document.getElementById('roleDetail');
const roleTitle = document.getElementById('roleTitle');
const roleDesc = document.getElementById('roleDesc');
const tabContent = document.getElementById('tabContent');
const backButton = document.getElementById('backButton');

Object.entries(techRoles).forEach(([key, role]) => {
  const card = document.createElement('div');
  card.className = 'role-card';
  card.innerHTML = `<h3>${role.title}</h3><p>${role.description}</p>`;
  card.onclick = () => showRole(key);
  roleGrid.appendChild(card);
});

function showRole(key) {
  const role = techRoles[key];
  roleTitle.textContent = role.title;
  roleDesc.textContent = role.description;
  showTab('roadmap', role);
  document.getElementById('home').classList.add('hidden');
  roleDetail.classList.remove('hidden');

  document.querySelectorAll('.tab').forEach(btn => {
    btn.onclick = () => showTab(btn.dataset.tab, role);
  });
}

function showTab(tab, role) {
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

backButton.onclick = () => {
  roleDetail.classList.add('hidden');
  document.getElementById('home').classList.remove('hidden');
};

document.getElementById('toggle-theme').onclick = () => {
  document.body.classList.toggle('dark');
};
