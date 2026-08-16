// Interactive Scripts for Hallmark Specimen Portfolio

document.addEventListener("DOMContentLoaded", () => {
  // 1. Permanent Dark Mode Lock
  const htmlElement = document.documentElement;
  htmlElement.setAttribute("data-theme", "dark");
  localStorage.setItem("theme", "dark");

  // 2. Animated Video Lightbox Modal Logic
  const videoFrames = document.querySelectorAll(".project-video-frame");
  const videoModal = document.getElementById("videoModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalVideo = document.getElementById("modalVideo");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalBackdrop = document.getElementById("modalBackdrop");

  function openVideoModal(title, videoSrc) {
    if (!videoModal || !modalVideo || !modalTitle) return;
    
    modalTitle.textContent = title;
    const sourceTag = modalVideo.querySelector("source");
    if (sourceTag) {
      sourceTag.src = videoSrc;
    }
    modalVideo.load();
    
    videoModal.classList.add("is-open");
    videoModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    
    modalVideo.play().catch(err => console.log("Video auto-play suppressed: ", err));
  }

  function closeVideoModal() {
    if (!videoModal || !modalVideo) return;
    
    videoModal.classList.remove("is-open");
    videoModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    
    modalVideo.pause();
  }

  videoFrames.forEach(frame => {
    frame.addEventListener("click", () => {
      const videoSrc = frame.getAttribute("data-video-src");
      const projectTitle = frame.getAttribute("data-project-title");
      if (videoSrc && projectTitle) {
        openVideoModal(projectTitle, videoSrc);
      }
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeVideoModal);
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeVideoModal);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && videoModal && videoModal.classList.contains("is-open")) {
      closeVideoModal();
    }
  });

  // 3. Email Copy Handler
  const copyEmailBtn = document.getElementById("copyEmailBtn");
  const emailLink = document.getElementById("emailLink");
  const copyFeedback = document.getElementById("copyFeedback");

  if (copyEmailBtn && emailLink && copyFeedback) {
    copyEmailBtn.addEventListener("click", async () => {
      const email = emailLink.textContent.trim();
      try {
        await navigator.clipboard.writeText(email);
        copyFeedback.classList.add("is-visible");
        setTimeout(() => {
          copyFeedback.classList.remove("is-visible");
        }, 2400);
      } catch (err) {
        console.error("Failed to copy email: ", err);
      }
    });
  }

  // 4. Live Timezone Clock in Footer
  const localTimezone = document.getElementById("localTimezone");

  function updateClock() {
    if (!localTimezone) return;
    const now = new Date();
    const options = {
      timeZone: "Asia/Karachi",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    };
    const timeString = new Intl.DateTimeFormat("en-GB", options).format(now);
    localTimezone.textContent = `PKT — ${timeString} (UTC+5)`;
  }

  updateClock();
  setInterval(updateClock, 1000);

  // 5. Scroll Reveal IntersectionObserver
  const revealElements = document.querySelectorAll(".reveal-on-scroll");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.08
    });

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add("is-revealed"));
  }

  // 6. Interactive Accordion for Timeline Experience Items
  const timelineItems = document.querySelectorAll(".timeline-item");

  timelineItems.forEach(item => {
    function toggleTimeline() {
      const isExpanded = item.classList.contains("is-expanded");
      
      // Close other timeline items
      timelineItems.forEach(other => {
        if (other !== item) {
          other.classList.remove("is-expanded");
          other.setAttribute("aria-expanded", "false");
          const chevron = other.querySelector(".chevron-icon");
          if (chevron) chevron.textContent = "+";
        }
      });

      if (isExpanded) {
        item.classList.remove("is-expanded");
        item.setAttribute("aria-expanded", "false");
        const chevron = item.querySelector(".chevron-icon");
        if (chevron) chevron.textContent = "+";
      } else {
        item.classList.add("is-expanded");
        item.setAttribute("aria-expanded", "true");
        const chevron = item.querySelector(".chevron-icon");
        if (chevron) chevron.textContent = "−";
      }
    }

    item.addEventListener("click", toggleTimeline);
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleTimeline();
      }
    });
  });

  // 7. Active Nav Link Scroll Sync
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let currentSectionId = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("is-active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("is-active");
      }
    });
  });
});
