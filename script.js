// Toggle mobile menu
function toggleMenu() {
  const menu = document.guerySelector(".menu-links");
  const iconenu = document.guerySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Contact form
function handleContactSubmit(event) {
  event.preventDefault();

  const msg = document.getElementById("contact-message");
  msg.textContent = "Tack för ditt meddelande! Jag återkommer inom kort.🤍";
  msg.classList.add("show");

  event.target.reset();

  setTimeout(() => msg.classList.remove("show"), 3000);
  msg.classList.add("show");
}

// Render CV (helper)
function renderCV(data) {
  const container = document.getElementById("cv-container");
  if (!container) return;

  let html = `<div class ="cv-columns">`;
}

document.addEventListener("DOMContentLoaded", loadCV);

// Load CV from cv.json
function loadCV() {
  fetch("./cv.json")
    .then((res) => {
      if (!res.ok) throw new Error("Failed loading cv.json: " + res.status);
      return res.json();
    })
    .then((data) => {
      const container = document.getElementById("cv-container");
      if (!container) {
        console.warn("cv-container not found in DOM");
        return;
      }

      // HTML forming
      let html = `<div class="cv-columns">`;

      // Work experience
      html += `
      <div class="cv-column">
      <h2 class="cv-title">
      <img src="./files/experience.png"
           class="cv-title-icon" 
           alt="experience icon">
           Work Experience
           </h2>
           `;
      if (Array.isArray(data.experience)) {
        data.experience.forEach((exp) => {
          const tasksHtml = Array.isArray(exp.tasks)
            ? exp.tasks.map((t) => `<li>${t}</li>`).join("")
            : "";
          html += `
          <article class="cv-item">
          <h3>${exp.job || ""}</h3>
          <p class="cv-meta">${exp.place || ""} • ${exp.year || ""}</p>
          <ul>${tasksHtml}</ul>
        </article>
      `;
        });
      } else {
        html += `<p>No experience data.</p>`;
      }
      html += `<div>`;

      // Education
      html += `
      <div class="cv-column">
      <h2 class="cv-title">
      <img src="./files/education.png"
           class="cv-title-icon"
           alt="education icon">
        Education
      </h2>
      `;
      if (Array.isArray(data.education)) {
        data.education.forEach((edu) => {
          html += `
      <article class="cv-item">
        <h3>${edu.title || ""}</h3>
        <p class="cv-meta">${edu.school || ""} • ${edu.year || ""}</p>
        ${edu.description ? `<p class="cv-desc">${edu.description}</p>` : ""}
        </article>
      `;
        });
      } else {
        html += `<p>No education data.</p>`;
      }
      html += `</div>`; // end education column

      html += `</div>`; // end cv columns

      container.innerHTML = html;
    })
    .catch((err) => {
      console.error("loadCV error:", err);
      const container = document.getElementById("cv-container");
      if (container)
        container.innerHTML =
          "<p>Could not load CV. Check console for details.</p>";
    });
}

const username = "BegimaiSa";

async function loadProjects() {
  const container = document.getElementById("projects-container");
  if (!container) {
    console.error("projects-container not found in DOM");
    return;
  }

  console.log("-> loadProjects start");

  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos`);
    console.log("fetch status:", res.status, "ok:", res.ok);

    if (!res.ok) {
      const text = await res.text();
      console.error("Github API error:", res.status, text);
      container.innerHTML = `<p>Could not load projects (status ${res.status}). Check console.</p>`;
      return;
    }

    const repos = await res.json();
    console.log("total repos from API:", repos.length);

    const wanted = ["samewave-compatibility-quiz", "portfolio-html-css-js"];
    console.log("wanted:", wanted);

    const shownRepos = repos.filter((r) => wanted.includes(r.name));
    console.log("shownRepos:", shownRepos);

    if (shownRepos.length === 0) {
      container.innerHTML =
        "<p>No matching projects found - showing all public repos below:</p>";
      repos.forEach((repo) => {
        const card = document.createElement("div");
        card.classList.add("project-card");
        card.innerHTML = `
        <h3>${repo.name}<h3/>
        p>${repo.description || "No description"}</p>
        <a href="${repo.html_url}" target="_blank" rel="noreferrer">View</a>
  `;
        container.appendChild(card);
      });
      return;
    }

    shownRepos.forEach((repo) => {
      const card = document.createElement("div");
      card.classList.add("project-card");
      card.innerHTML = `
    <h3>${repo.name}<h3/>
    <p>${repo.description || "No description"}</p>
    <a href="${repo.html_url}" target="_blank" rel="noreferrer">View</a>
  `;
      container.appendChild(card);
    });
  } catch (err) {
    console.error("loadProjects error:", err);
    container.innerHTML = "<p>Could not load projects. Check console.</p>";
  }
}

document.addEventListener("DOMContentLoaded", loadProjects);
