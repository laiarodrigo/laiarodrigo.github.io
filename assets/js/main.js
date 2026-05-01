import { siteData } from "./site-data.js";

const icons = {
  email:
    '<svg class="meta-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3.75 6A2.25 2.25 0 0 1 6 3.75h12A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6Zm2.37-.75 5.88 5.39 5.88-5.39H6.12Zm12.63 2.52-5.77 5.29a1.5 1.5 0 0 1-2.03 0L5.25 7.77V18c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75V7.77Z"/></svg>',
  github:
    '<svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .75A11.25 11.25 0 0 0 .75 12a11.25 11.25 0 0 0 7.69 10.68c.56.1.76-.24.76-.54v-1.9c-3.13.68-3.79-1.33-3.79-1.33-.5-1.28-1.23-1.62-1.23-1.62-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.57 1.19 3.19.91.1-.71.38-1.19.69-1.47-2.5-.28-5.14-1.25-5.14-5.57 0-1.23.44-2.23 1.13-3.02-.11-.28-.49-1.43.11-2.98 0 0 .92-.3 3.02 1.15a10.42 10.42 0 0 1 5.5 0c2.09-1.45 3.01-1.15 3.01-1.15.61 1.55.23 2.7.11 2.98.7.79 1.13 1.79 1.13 3.02 0 4.33-2.64 5.29-5.16 5.56.39.34.74 1.01.74 2.04v3.02c0 .3.2.65.77.54A11.25 11.25 0 0 0 23.25 12 11.25 11.25 0 0 0 12 .75Z"/></svg>',
  institution:
    '<svg class="meta-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2.25 7.5 12 12l7.5-3.46V15h1.5V7.5L12 3Zm-6 10.48V18a1.5 1.5 0 0 0 .86 1.35 12.32 12.32 0 0 0 10.28 0A1.5 1.5 0 0 0 18 18v-4.52L12 16.25 6 13.48Z"/></svg>',
  linkedin:
    '<svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5A1.73 1.73 0 1 0 5 6.96 1.73 1.73 0 0 0 4.98 3.5ZM3.5 8.25h3V20.5h-3V8.25Zm5.25 0h2.88v1.68h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.58v7.55h-3v-6.69c0-1.6-.03-3.66-2.23-3.66-2.24 0-2.58 1.75-2.58 3.55v6.8h-3V8.25Z"/></svg>',
  location:
    '<svg class="meta-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.25A6.75 6.75 0 0 0 5.25 9c0 4.7 5.18 11.57 6.02 12.66a.93.93 0 0 0 1.46 0c.84-1.1 6.02-7.96 6.02-12.66A6.75 6.75 0 0 0 12 2.25Zm0 9.5a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5Z"/></svg>',
  orcid:
    '<svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.5 10.5 0 0 0 12 1.5Zm-5 4.75a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Zm1.04 11.48H5.96V9.9h2.08Zm8.29-2.43a3.21 3.21 0 0 1-2.9 1.44h-3.1V8.97h3.02c1.3 0 2.38.38 3.1 1.1a3.82 3.82 0 0 1 .93 2.62 4.27 4.27 0 0 1-1.05 2.61Zm-2.79-4.5h-1.18v3.98h1.11c1.18 0 1.9-.74 1.9-2.07 0-1.24-.68-1.9-1.83-1.9Z"/></svg>',
  website:
    '<svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.25c-5.39 0-9.75 4.36-9.75 9.75s4.36 9.75 9.75 9.75 9.75-4.36 9.75-9.75S17.39 2.25 12 2.25Zm6.82 9H15.7a17.3 17.3 0 0 0-1.15-5.22 8.28 8.28 0 0 1 4.27 5.22ZM12 4.1c.7 0 1.9 2 2.46 5.15H9.54C10.1 6.1 11.3 4.1 12 4.1Zm-2.55 1.93A17.3 17.3 0 0 0 8.3 11.25H5.18a8.28 8.28 0 0 1 4.27-5.22ZM5.18 12.75H8.3c.12 1.84.52 3.63 1.15 5.22a8.28 8.28 0 0 1-4.27-5.22Zm6.82 7.15c-.7 0-1.9-2-2.46-5.15h4.92c-.56 3.15-1.76 5.15-2.46 5.15Zm2.55-1.93c.63-1.59 1.03-3.38 1.15-5.22h3.12a8.28 8.28 0 0 1-4.27 5.22Z"/></svg>'
};

const page = document.body.dataset.page;
const pageTitles = {
  cv: "CV",
  home: siteData.titleSuffix,
  publications: "Publications"
};

document.title =
  page === "home"
    ? `${siteData.siteName} | ${pageTitles.home}`
    : `${pageTitles[page] || "Page"} | ${siteData.siteName}`;

renderShared();
renderPage(page);
setActiveNav(page);
setupThemeToggle();

function renderShared() {
  document.querySelectorAll("[data-site-name]").forEach((node) => {
    node.textContent = siteData.siteName;
  });

  const profileImage = document.querySelector("[data-profile-image]");
  if (profileImage) {
    profileImage.src = siteData.profile.avatar;
    profileImage.alt = `${siteData.profile.name} profile image`;
  }

  const profileName = document.querySelector("[data-profile-name]");
  if (profileName) {
    profileName.textContent = siteData.profile.name;
  }

  const profileTitle = document.querySelector("[data-profile-title]");
  if (profileTitle) {
    profileTitle.textContent = siteData.profile.title;
  }

  const metaList = document.querySelector("[data-profile-meta]");
  if (metaList) {
    metaList.innerHTML = siteData.profile.meta
      .map((item) => {
        const content = item.href
          ? `<a href="${item.href}">${item.text}</a>`
          : `<span>${item.text}</span>`;
        return `<li>${icon(item.icon)}${content}</li>`;
      })
      .join("");
  }

  const profileLinks = document.querySelector("[data-profile-links]");
  if (profileLinks) {
    profileLinks.innerHTML = siteData.profile.links
      .map(
        (link) =>
          `<a href="${link.href}" target="_blank" rel="noreferrer">${icon(link.icon)}<span>${link.label}</span></a>`
      )
      .join("");
  }
}

function renderPage(currentPage) {
  if (currentPage === "home") {
    renderAbout();
    return;
  }

  if (currentPage === "publications") {
    renderPublications();
    return;
  }

  if (currentPage === "cv") {
    renderCv();
  }
}

function renderAbout() {
  const aboutHeading = document.querySelector("[data-about-heading]");
  if (aboutHeading) {
    aboutHeading.textContent = siteData.about.heading;
  }

  const aboutLead = document.querySelector("[data-about-lead]");
  if (aboutLead) {
    aboutLead.innerHTML = siteData.about.lead;
  }

  const aboutBody = document.querySelector("[data-about-body]");
  if (aboutBody) {
    aboutBody.innerHTML = siteData.about.paragraphs
      .map((paragraph) => `<p>${paragraph}</p>`)
      .join("");
  }
}

function renderPublications() {
  const publicationList = document.querySelector("[data-publications]");
  if (!publicationList) {
    return;
  }

  publicationList.innerHTML = siteData.publications
    .map(
      (publication) => `
        <article class="publication-card">
          <h3>${publication.title}</h3>
          <div class="publication-meta">${publication.authors} · ${publication.venue}</div>
          <p>${publication.summary}</p>
          <div class="publication-links">
            ${publication.links
              .map(
                (link) =>
                  `<a class="chip-link" href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`
              )
              .join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderCv() {
  renderCvActions();

  const cvSections = document.querySelector("[data-cv-sections]");
  if (!cvSections) {
    return;
  }

  cvSections.innerHTML = siteData.cv
    .map(
      (section) => `
        <section class="cv-section">
          <h3>${section.title}</h3>
          ${section.entries
            .map(
              (entry) => `
                <article class="cv-entry">
                  <div class="cv-entry__header">
                    <div>
                      <div class="cv-entry__title">${entry.role}</div>
                      ${entry.place ? `<div class="cv-entry__place">${entry.place}</div>` : ""}
                    </div>
                    ${entry.period ? `<div class="cv-entry__period">${entry.period}</div>` : ""}
                  </div>
                  ${entry.description ? `<p>${entry.description}</p>` : ""}
                  ${
                    Array.isArray(entry.details) && entry.details.length
                      ? `<ul class="cv-detail-list">${entry.details
                          .map((detail) => `<li>${detail}</li>`)
                          .join("")}</ul>`
                      : ""
                  }
                </article>
              `
            )
            .join("")}
        </section>
      `
    )
    .join("");
}

function renderCvActions() {
  const cvActions = document.querySelector("[data-cv-actions]");
  if (!cvActions || !siteData.cvDownload) {
    return;
  }

  cvActions.innerHTML = `<a class="primary-link" href="${siteData.cvDownload.href}" target="_blank" rel="noreferrer">${siteData.cvDownload.label}</a>`;
}

function setActiveNav(currentPage) {
  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === currentPage) {
      link.setAttribute("aria-current", "page");
    }
  });
}

function setupThemeToggle() {
  const root = document.documentElement;
  const toggle = document.querySelector("[data-theme-toggle]");
  const storedTheme = localStorage.getItem("theme");
  const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = storedTheme || (preferredDark ? "dark" : "light");

  root.dataset.theme = theme;

  if (!toggle) {
    return;
  }

  toggle.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
  });
}

function icon(name) {
  return icons[name] || "";
}
