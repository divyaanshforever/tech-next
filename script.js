const buttonsDiv = document.getElementById("role-buttons");
const detailsDiv = document.getElementById("role-details");

Object.entries(roles).forEach(([key, role]) => {
  const btn = document.createElement("button");
  btn.textContent = role.title;
  btn.onclick = () => showRole(key);
  buttonsDiv.appendChild(btn);
});

function showRole(key) {
  const role = roles[key];
  detailsDiv.innerHTML = `
    <h2>${role.title}</h2>
    <p>${role.description}</p>
    <p><strong>Salary (India):</strong> ${role.salary.india}</p>
    <p><strong>Job Security:</strong> ${role.jobSecurity}</p>
    <p><strong>Growth:</strong> ${role.growth}</p>

    <h3>Roadmap</h3>
    ${role.roadmap.map(r => `
      <div class="roadmap-phase">
        <strong>${r.phase}</strong>
        <ul>${r.skills.map(s => `<li>${s}</li>`).join('')}</ul>
      </div>
    `).join('')}

    <h3>Resources</h3>
    <ul>
      ${role.resources.map(res => `<li><a href="${res.url}" target="_blank">${res.name}</a></li>`).join('')}
    </ul>
  `;
}

// Load first role by default
showRole('fullstack');
