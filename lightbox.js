const initLightbox = () => {
  const lightboxOverlay = document.createElement("div");
  lightboxOverlay.className = "lightbox-overlay";
  lightboxOverlay.setAttribute("aria-hidden", "true");
  lightboxOverlay.innerHTML = `
    <div class="lightbox-content">
      <button class="lightbox-close" aria-label="Close viewer">×</button>
      <div class="lightbox-viewer"></div>
      <p class="lightbox-caption"></p>
    </div>
  `;

  document.body.appendChild(lightboxOverlay);

  const viewer = lightboxOverlay.querySelector(".lightbox-viewer");
  const lightboxCaption = lightboxOverlay.querySelector(".lightbox-caption");
  const closeButton = lightboxOverlay.querySelector(".lightbox-close");

  const closeLightbox = () => {
    lightboxOverlay.setAttribute("aria-hidden", "true");
    viewer.innerHTML = "";
    document.body.style.overflow = "";
  };

  const openLightbox = ({ src, caption, type }) => {
    if (!src) return;
    viewer.innerHTML = "";

    if (type === "pdf") {
      const iframe = document.createElement("iframe");
      iframe.src = src;
      iframe.title = caption || "Document preview";
      iframe.loading = "lazy";
      viewer.appendChild(iframe);
    } else {
      const img = document.createElement("img");
      img.src = src;
      img.alt = caption || "";
      viewer.appendChild(img);
    }

    lightboxCaption.textContent = caption || "";
    lightboxOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  closeButton.addEventListener("click", closeLightbox);
  lightboxOverlay.addEventListener("click", (event) => {
    if (event.target === lightboxOverlay) {
      closeLightbox();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLightbox();
    }
  });

  document.querySelectorAll("[data-lightbox]").forEach((trigger) => {
    if (trigger.tagName === "IMG") {
      trigger.style.cursor = "zoom-in";
    }

    const activate = (event) => {
      if (event) {
        event.preventDefault();
      }
      const type = trigger.dataset.lightboxType || "image";
      const caption =
        trigger.dataset.lightboxCaption ||
        trigger.getAttribute("alt") ||
        trigger.textContent.trim();
      const source =
        trigger.dataset.lightboxSrc ||
        trigger.getAttribute("href") ||
        trigger.src;

      openLightbox({ src: source, caption, type });
    };

    trigger.addEventListener("click", activate);
    trigger.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        activate(event);
      }
    });
  });
};

document.addEventListener("DOMContentLoaded", initLightbox);
