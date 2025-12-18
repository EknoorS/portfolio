import { projects } from "./projects-data.js";

const grid = document.querySelector("[data-project-grid]");
const filterButtons = document.querySelectorAll("[data-filter]");

const mediaFactories = {
  model: (media) => {
    const viewer = document.createElement("model-viewer");
    viewer.src = media.src;
    viewer.alt = media.alt;
    viewer.setAttribute("camera-controls", "");
    viewer.setAttribute("auto-rotate", "");
    viewer.setAttribute("disable-zoom", "");
    viewer.setAttribute("exposure", "1.1");
    return viewer;
  },
  video: (media) => {
    const iframe = document.createElement("iframe");
    iframe.src = `${media.src}?rel=0&modestbranding=1`;
    iframe.title = media.alt;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    return iframe;
  },
  image: (media) => {
    const img = document.createElement("img");
    img.src = media.src;
    img.alt = media.alt;
    img.loading = "lazy";
    return img;
  },
};

function renderProjects(projectList) {
  grid.innerHTML = "";
  projectList.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.tabIndex = 0;
    card.setAttribute("role", "link");
    card.setAttribute("aria-label", `View ${project.title}`);

    const mediaWrap = document.createElement("div");
    mediaWrap.className = "project-media";
    const mediaRenderer = mediaFactories[project.media.type];
    const mediaElement = mediaRenderer ? mediaRenderer(project.media) : null;
    if (mediaElement) {
      mediaWrap.appendChild(mediaElement);
    }

    const title = document.createElement("h3");
    title.textContent = project.title;

    const summary = document.createElement("p");
    summary.textContent = project.summary;

    const tagGroup = document.createElement("div");
    tagGroup.className = "tag-group";
    project.tags.forEach((tag) => {
      const tagEl = document.createElement("span");
      tagEl.className = "tag";
      tagEl.textContent = tag;
      tagGroup.appendChild(tagEl);
    });

    const goToDetail = () => {
      const detailPage = project.detailPage || `project.html?id=${project.id}`;
      window.location.href = detailPage;
    };

    card.addEventListener("click", goToDetail);
    card.addEventListener("keypress", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        goToDetail();
      }
    });

    card.append(mediaWrap, title, summary, tagGroup);
    grid.appendChild(card);
  });
}

function setActiveFilter(target) {
  filterButtons.forEach((btn) => btn.classList.remove("active"));
  target.classList.add("active");
}

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;
    setActiveFilter(btn);
    if (filter === "all") {
      renderProjects(projects);
      return;
    }
    const filtered = projects.filter((project) => project.category === filter);
    renderProjects(filtered);
  });
});

renderProjects(projects);
