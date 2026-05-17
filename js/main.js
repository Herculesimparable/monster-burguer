(function () {
  "use strict";

  const nav = document.querySelector(".nav");
  const navToggle = document.querySelector(".nav__toggle");
  const navList = document.querySelector(".nav__list");
  const navLinks = document.querySelectorAll(".nav__list a");
  const sections = document.querySelectorAll("section[id], header[id]");

  /* Nav scroll effect */
  function onScroll() {
    if (nav) {
      nav.classList.toggle("scrolled", window.scrollY > 60);
    }
    setActiveNav();
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile menu */
  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      const isOpen = navList.classList.toggle("open");
      navToggle.classList.toggle("open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navList.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* Active nav link */
  function setActiveNav() {
    const scrollY = window.scrollY + 140;

    sections.forEach((section) => {
      const id = section.getAttribute("id");
      if (!id) return;

      const top = section.offsetTop;
      const height = section.offsetHeight;

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  }

  /* Scroll reveal */
  const revealEls = document.querySelectorAll(
    ".card, .about__brand, .about__text, .buffet__visual, .buffet__content, .cta-sabor__visual, .cta-sabor__content, .section__header"
  );

  revealEls.forEach((el) => el.classList.add("reveal"));

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealEls.forEach((el) => revealObserver.observe(el));

  /* Form validation */
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateForm(form) {
    let valid = true;
    const fields = form.querySelectorAll("input, textarea");

    fields.forEach((field) => {
      field.classList.remove("invalid");
      let fieldValid = true;

      if (field.hasAttribute("required") && !field.value.trim()) {
        fieldValid = false;
      }

      if (field.type === "email" && field.value.trim() && !validateEmail(field.value.trim())) {
        fieldValid = false;
      }

      if (field.type === "date" && field.value) {
        const selected = new Date(field.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selected < today) fieldValid = false;
      }

      if (!fieldValid) {
        field.classList.add("invalid");
        valid = false;
      }
    });

    return valid;
  }

  function handleSubmit(form, messageEl, successText) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      messageEl.textContent = "";
      messageEl.className = "form-message";

      if (!validateForm(form)) {
        messageEl.textContent = "Por favor, preencha todos os campos correctamente.";
        messageEl.classList.add("error");
        return;
      }

      const data = new FormData(form);
      console.log("Formulário enviado:", Object.fromEntries(data.entries()));

      messageEl.textContent = successText;
      messageEl.classList.add("success");
      form.reset();
    });
  }

  const contactForm = document.getElementById("contact-form");
  const contactMessage = document.getElementById("contact-message");
  if (contactForm && contactMessage) {
    handleSubmit(
      contactForm,
      contactMessage,
      "Mensagem enviada com sucesso! Entraremos em contacto em breve."
    );
  }

  const buffetForm = document.getElementById("buffet-form");
  const buffetMessage = document.getElementById("buffet-message");
  if (buffetForm && buffetMessage) {
    handleSubmit(
      buffetForm,
      buffetMessage,
      "Pedido de orçamento recebido! Responderemos em até 24 horas."
    );
  }

  const buffetDate = document.getElementById("buffet-data");
  if (buffetDate) {
    buffetDate.setAttribute("min", new Date().toISOString().split("T")[0]);
  }

  /* Gallery lightbox */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = lightbox?.querySelector(".lightbox__img");
  const lightboxCaption = lightbox?.querySelector(".lightbox__caption");
  const lightboxClose = lightbox?.querySelector(".lightbox__close");
  const galleryCarousel = document.getElementById("gallery-carousel");
  const galleryTrack = document.getElementById("gallery-track");
  const galleryCaption = document.getElementById("gallery-caption");
  const galleryDots = document.getElementById("gallery-dots");
  let carouselTimer;
  let carouselIndex = 0;

  function openLightbox(src, caption) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = caption;
    if (lightboxCaption) lightboxCaption.textContent = caption;
    lightbox.hidden = false;
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    lightboxClose?.focus();
  }

  function closeLightbox() {
    if (!lightbox || !lightboxImg) return;
    lightbox.hidden = true;
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }

  function getCarouselSlides() {
    return galleryTrack?.querySelectorAll(".gallery-carousel__slide") || [];
  }

  function goToCarouselSlide(index) {
    const slides = getCarouselSlides();
    if (!slides.length || !galleryTrack) return;

    carouselIndex = ((index % slides.length) + slides.length) % slides.length;
    galleryTrack.style.transform = `translateX(-${carouselIndex * 100}%)`;

    slides.forEach((slide, i) => {
      slide.classList.toggle("is-active", i === carouselIndex);
    });

    galleryDots?.querySelectorAll(".gallery-carousel__dot").forEach((dot, i) => {
      dot.classList.toggle("is-active", i === carouselIndex);
      dot.setAttribute("aria-selected", String(i === carouselIndex));
    });

    const activeBtn = slides[carouselIndex]?.querySelector(".gallery-carousel__btn");
    if (galleryCaption && activeBtn) {
      galleryCaption.textContent = activeBtn.dataset.caption || "";
    }
  }

  function nextCarouselSlide() {
    goToCarouselSlide(carouselIndex + 1);
  }

  function startCarouselAutoplay() {
    stopCarouselAutoplay();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    carouselTimer = window.setInterval(nextCarouselSlide, 3000);
  }

  function stopCarouselAutoplay() {
    if (carouselTimer) {
      clearInterval(carouselTimer);
      carouselTimer = null;
    }
  }

  function initGalleryCarousel() {
    const slides = getCarouselSlides();
    if (!slides.length || !galleryDots) return;

    galleryDots.innerHTML = "";
    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "gallery-carousel__dot";
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", `Foto ${i + 1} de ${slides.length}`);
      dot.addEventListener("click", () => {
        goToCarouselSlide(i);
        startCarouselAutoplay();
      });
      galleryDots.appendChild(dot);
    });

    goToCarouselSlide(0);
    startCarouselAutoplay();

    galleryCarousel?.addEventListener("mouseenter", stopCarouselAutoplay);
    galleryCarousel?.addEventListener("mouseleave", startCarouselAutoplay);
    galleryCarousel?.addEventListener("focusin", stopCarouselAutoplay);
    galleryCarousel?.addEventListener("focusout", startCarouselAutoplay);
  }

  window.addEventListener("gallery-ready", initGalleryCarousel);
  if (getCarouselSlides().length) initGalleryCarousel();

  galleryTrack?.addEventListener("click", (e) => {
    const btn = e.target.closest(".gallery-carousel__btn");
    if (!btn) return;
    openLightbox(btn.dataset.lightbox || "", btn.dataset.caption || "");
  });

  lightboxClose?.addEventListener("click", closeLightbox);

  lightbox?.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox && !lightbox.hidden) closeLightbox();
  });
})();
