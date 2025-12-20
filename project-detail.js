import { projects } from "./projects-data.js";

const detailRoot = document.querySelector("[data-project-detail]");
const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");
const project = projects.find((item) => item.id === projectId);

const mediaFactories = {
  model: (media) => {
    const viewer = document.createElement("model-viewer");
    viewer.src = media.src;
    viewer.alt = media.alt;
    viewer.setAttribute("camera-controls", "");
    viewer.setAttribute("auto-rotate", "");
    viewer.setAttribute("disable-zoom", "");
    viewer.setAttribute("bounds", "tight");
    viewer.setAttribute("field-of-view", "30deg");
    if (media.scale) {
      viewer.setAttribute("scale", media.scale);
    }
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
    if (media.fit === "contain") {
      img.classList.add("media-fit-contain");
    }
    return img;
  },
};

const heroNoteEl = detailRoot?.querySelector("[data-project-hero-note]");
const titleEl = detailRoot?.querySelector("[data-project-title]");
const overviewEl = detailRoot?.querySelector("[data-project-overview]");
const scopeContainer = detailRoot?.querySelector("[data-project-scope]");
const yearEl = detailRoot?.querySelector("[data-project-year]");
const clientEl = detailRoot?.querySelector("[data-project-client]");
const heroMediaEl = detailRoot?.querySelector("[data-project-hero-media]");
const problemEl = detailRoot?.querySelector("[data-project-problem]");
const approachEl = detailRoot?.querySelector("[data-project-approach]");
const galleryEl = detailRoot?.querySelector("[data-project-gallery]");
const fallbackSection = detailRoot?.querySelector("[data-project-empty]");
const toggledSections = detailRoot
  ? detailRoot.querySelectorAll(".detail-hero, .detail-body, .detail-gallery")
  : [];

const renderMedia = (media) => {
  if (!media) return null;
  const factory = mediaFactories[media.type];
  return factory ? factory(media) : null;
};

const toggleDetailVisibility = (isVisible) => {
  toggledSections.forEach((section) => {
    section.hidden = !isVisible;
  });
  if (fallbackSection) {
    fallbackSection.hidden = isVisible;
  }
};

function renderDetail(currentProject) {
  if (
    !detailRoot ||
    !heroNoteEl ||
    !titleEl ||
    !overviewEl ||
    !scopeContainer ||
    !yearEl ||
    !clientEl ||
    !heroMediaEl ||
    !problemEl ||
    !approachEl ||
    !galleryEl
  ) {
    return;
  }

  toggleDetailVisibility(true);

  heroNoteEl.textContent = currentProject.detail.heroNote;
  titleEl.textContent = currentProject.title;
  overviewEl.textContent = currentProject.detail.overview;

  scopeContainer.innerHTML = "";
  currentProject.detail.scope.forEach((scopeItem) => {
    const badge = document.createElement("span");
    badge.textContent = scopeItem;
    scopeContainer.appendChild(badge);
  });
  yearEl.textContent = `Year ${currentProject.detail.year}`;
  clientEl.textContent = `Client ${currentProject.detail.client}`;

  heroMediaEl.innerHTML = "";
  const heroMedia = renderMedia(currentProject.detail.heroMedia);
  if (heroMedia) {
    heroMediaEl.appendChild(heroMedia);
  }

  problemEl.textContent = currentProject.detail.problem;
  approachEl.textContent = currentProject.detail.approach;

  galleryEl.innerHTML = "";
  currentProject.detail.gallery.forEach((mediaItem) => {
    const figure = document.createElement("figure");
    const rendered = renderMedia(mediaItem);
    if (rendered) {
      figure.appendChild(rendered);
    }
    const caption = document.createElement("figcaption");
    caption.textContent = mediaItem.alt;
    figure.appendChild(caption);
    galleryEl.appendChild(figure);
  });
}

if (project) {
  renderDetail(project);
} else {
  toggleDetailVisibility(false);
}
