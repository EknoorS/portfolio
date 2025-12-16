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

function renderDetail(currentProject) {
  detailRoot.innerHTML = "";
  const heroSection = document.createElement("section");
  heroSection.className = "detail-hero";

  const heroContent = document.createElement("div");
  const eyebrow = document.createElement("p");
  eyebrow.className = "eyebrow";
  eyebrow.textContent = currentProject.detail.heroNote;

  const title = document.createElement("h1");
  title.textContent = currentProject.title;

  const overview = document.createElement("p");
  overview.className = "lede";
  overview.textContent = currentProject.detail.overview;

  const meta = document.createElement("div");
  meta.className = "detail-meta";

  currentProject.detail.scope.forEach((scopeItem) => {
    const badge = document.createElement("span");
    badge.textContent = scopeItem;
    meta.appendChild(badge);
  });

  const yearBadge = document.createElement("span");
  yearBadge.textContent = `Year ${currentProject.detail.year}`;
  meta.appendChild(yearBadge);

  const clientBadge = document.createElement("span");
  clientBadge.textContent = `Client ${currentProject.detail.client}`;
  meta.appendChild(clientBadge);

  heroContent.append(eyebrow, title, overview, meta);

  const heroMedia = document.createElement("div");
  heroMedia.className = "detail-hero-media";
  const heroRenderer = mediaFactories[currentProject.detail.heroMedia.type];
  const heroMediaElement = heroRenderer
    ? heroRenderer(currentProject.detail.heroMedia)
    : null;
  if (heroMediaElement) {
    heroMedia.appendChild(heroMediaElement);
  }

  heroSection.append(heroContent, heroMedia);

  const bodySection = document.createElement("section");
  bodySection.className = "detail-body";

  const problemBlock = document.createElement("div");
  const problemHeading = document.createElement("h3");
  problemHeading.textContent = "Problem";
  const problemCopy = document.createElement("p");
  problemCopy.textContent = currentProject.detail.problem;
  problemBlock.append(problemHeading, problemCopy);

  const approachBlock = document.createElement("div");
  const approachHeading = document.createElement("h3");
  approachHeading.textContent = "Approach";
  const approachCopy = document.createElement("p");
  approachCopy.textContent = currentProject.detail.approach;
  approachBlock.append(approachHeading, approachCopy);

  bodySection.append(problemBlock, approachBlock);

  const gallerySection = document.createElement("section");
  gallerySection.className = "detail-gallery";
  currentProject.detail.gallery.forEach((mediaItem) => {
    const figure = document.createElement("figure");
    const renderer = mediaFactories[mediaItem.type];
    const rendered = renderer ? renderer(mediaItem) : null;
    if (rendered) {
      figure.appendChild(rendered);
    }
    const caption = document.createElement("figcaption");
    caption.textContent = mediaItem.alt;
    figure.appendChild(caption);
    gallerySection.appendChild(figure);
  });

  detailRoot.append(heroSection, bodySection, gallerySection);
}

if (project) {
  renderDetail(project);
} else {
  detailRoot.innerHTML = `
    <section>
      <h1>Project not found</h1>
      <p class="lede">
        The case study you're looking for isn't available yet. Head back to the
        <a href="index.html">projects overview</a> to explore other work.
      </p>
    </section>
  `;
}
