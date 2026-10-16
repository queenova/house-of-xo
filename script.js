/* HOUSE OF XO — sélecteur de langue, menu mobile et interactions */
const translations = {
  fr: {
    languageLabel:"LANGUE / LANGUAGE",languageGuide:"Cliquez sur le bouton <strong>FR / EN</strong> en haut à droite pour changer la langue. / Click <strong>FR / EN</strong> in the top-right corner..",navSocials:"Réseaux",navArchive:"XO Live Archive",navCommunity:"Communauté",heroBadge:"THE WEEKND FAN COMMUNITY",heroTagline:"Tout l’univers XO, au même endroit.",heroDescription:"Un espace créé par des fans, pour les fans de The Weeknd. Retrouve nos réseaux, nos contenus et notre communauté XO au même endroit.",heroSocialButton:"DÉCOUVRIR MES RÉSEAUX",heroDiscordButton:"REJOINDRE LE DISCORD",heroMeta:"CRÉÉ PAR XO, POUR XO",
    socialKicker:"RESTE CONNECTÉ",socialTitle:"Retrouve-moi <span>partout.</span>",socialIntro:"Actualités, vidéos, discussions et moments XO : choisis ta plateforme.",instagramDesc:"Actualités · Photos · Edits",tiktokDesc:"Vidéos · Edits · Moments drôles",discordDesc:"Discussions · Communauté · Archive",discordHandle:"Rejoins la famille XO",xDesc:"News · Actualités · XO",xHandle:"Suivre les actualités",socialNote:"Tous les liens s’ouvrent dans un nouvel onglet.",
    archiveKicker:"UN PROJET HOUSE OF XO",archiveLead:"Le spectacle ne s’arrête jamais.",archiveDescription:"Revivez l’After Hours Til Dawn Tour grâce à une collection de vidéos de concerts classées par date et par ville. Retrouvez des performances, des moments marquants et des souvenirs de la tournée.",archiveTag1:"VIDÉOS DE CONCERTS",archiveTag2:"PAR DATE & VILLE",accessTitle:"ACCÈS VIA DISCORD",accessDescription:"Le lien de XO Live Archive est partagé sur le serveur Discord House of XO. Rejoins le serveur pour le retrouver.",archiveButton:"ACCÉDER VIA DISCORD",archiveFootnote:"Le lien de l’archive est partagé sur notre serveur Discord.",
    aboutKicker:"BIENVENUE DANS L’UNIVERS XO",aboutTitle:"Plus qu’un fan site. <span>Une communauté.</span>",aboutHeading:"Bienvenue chez House of XO 🌙",aboutText:"House of XO est une communauté de fans française et internationale dédiée à The Weeknd. Notre objectif : rassembler les XO autour des actualités, des concerts, des edits, des collections et de tout ce qui fait l’univers d’Abel.",aboutText2:"Actualités, concerts, edits, archives, collections et tout l’univers XO — au même endroit. Que tu parles français ou anglais, tu es le ou la bienvenue ici.",
    communityKicker:"CE QUE TU TROUVERAS ICI",communityTitle:"Tout l’univers <span>XO.</span>",communityIntro:"Des contenus pour vivre la passion The Weeknd ensemble.",feature1Title:"Actualités",feature1Text:"Les dernières nouvelles, annonces et informations autour de The Weeknd.",feature2Title:"Concerts & lives",feature2Text:"Des moments live, des photos et des vidéos de la tournée.",feature3Title:"Edits & créations",feature3Text:"Des vidéos, edits et créations partagés par les fans.",feature4Title:"Collections & merch",feature4Text:"Vinyles, merchandising et collections de la communauté.",erasKicker:"UN ARTISTE. PLUSIEURS UNIVERS.",erasTitle:"À travers les <span>ères.</span>",closingEyebrow:"POUR TOUS LES XO, PARTOUT.",closingButton:"RETROUVONS-NOUS SUR DISCORD",closingSign:"CRÉÉ PAR XO, POUR XO",footerLine:"Une communauté de fans indépendante, créée avec passion.",footerDisclaimer:"Communauté de fans indépendante · Non affiliée officiellement à The Weeknd.",backToTop:"Retour en haut",scrollCue:"DÉFILER POUR EXPLORER",openMenu:"Ouvrir le menu",closeMenu:"Fermer le menu"
  },
  en: {
    languageLabel:"LANGUAGE / LANGUE",languageGuide:"Click the <strong>FR / EN</strong> button in the top-right corner to change the language. / Cliquez sur <strong>FR / EN</strong> en haut à droite..",navSocials:"Socials",navArchive:"XO Live Archive",navCommunity:"Community",heroBadge:"THE WEEKND FAN COMMUNITY",heroTagline:"Everything XO, all in one place.",heroDescription:"A space created by fans, for The Weeknd fans. Find our socials, content and XO community all in one place.",heroSocialButton:"EXPLORE MY SOCIALS",heroDiscordButton:"JOIN THE DISCORD",heroMeta:"BUILT BY XO, FOR XO",
    socialKicker:"STAY CONNECTED",socialTitle:"Find us <span>everywhere.</span>",socialIntro:"News, videos, conversations and XO moments — choose your platform.",instagramDesc:"News · Photos · Edits",tiktokDesc:"Videos · Edits · Funny moments",discordDesc:"Chat · Community · Archive",discordHandle:"Join the XO family",xDesc:"News · Updates · XO",xHandle:"Follow the latest updates",socialNote:"All links open in a new tab.",
    archiveKicker:"A HOUSE OF XO PROJECT",archiveLead:"The show never ends.",archiveDescription:"Relive the After Hours Til Dawn Tour through a collection of concert videos organized by date and city. Discover performances, unforgettable moments and memories from the tour.",archiveTag1:"CONCERT VIDEOS",archiveTag2:"BY DATE & CITY",accessTitle:"ACCESS THROUGH DISCORD",accessDescription:"The XO Live Archive link is shared on the House of XO Discord server. Join the server to find it.",archiveButton:"ACCESS VIA DISCORD",archiveFootnote:"The archive link is shared on our Discord server.",
    aboutKicker:"WELCOME TO THE XO UNIVERSE",aboutTitle:"More than a fan site. <span>A community.</span>",aboutHeading:"Welcome to House of XO 🌙",aboutText:"House of XO is a French and international fan community dedicated to The Weeknd. Our goal is to bring XO fans together around news, concerts, edits, collections and everything that makes up Abel’s universe.",aboutText2:"News, concerts, edits, archives, collections and everything XO — all in one place. Whether you speak French or English, you’re welcome here.",
    communityKicker:"WHAT YOU’LL FIND HERE",communityTitle:"Everything <span>XO.</span>",communityIntro:"Content to share our love for The Weeknd together.",feature1Title:"News & updates",feature1Text:"The latest news, announcements and updates about The Weeknd.",feature2Title:"Concerts & live moments",feature2Text:"Live moments, photos and videos from the tour.",feature3Title:"Edits & creativity",feature3Text:"Videos, edits and creations shared by fans.",feature4Title:"Collections & merch",feature4Text:"Vinyl, merchandise and community collections.",erasKicker:"ONE ARTIST. MANY WORLDS.",erasTitle:"Through the <span>eras.</span>",closingEyebrow:"FOR XO FANS, EVERYWHERE.",closingButton:"MEET US ON DISCORD",closingSign:"BUILT BY XO, FOR XO",footerLine:"An independent fan community, created with passion.",footerDisclaimer:"Independent fan community · Not officially affiliated with The Weeknd.",backToTop:"Back to top",scrollCue:"SCROLL TO EXPLORE",openMenu:"Open menu",closeMenu:"Close menu"
  }
};

const languageButtons = document.querySelectorAll("[data-lang]");
const translatedElements = document.querySelectorAll("[data-i18n]");
const navLinks = document.querySelector("#nav-links");
const menuToggle = document.querySelector(".menu-toggle");
const backToTop = document.querySelector(".back-to-top");

function setLanguage(language) {
  const selected = translations[language] ? language : "fr";
  document.documentElement.lang = selected;
  translatedElements.forEach((element) => {
    const value = translations[selected][element.dataset.i18n];
    if (value !== undefined) element.innerHTML = value;
  });
  languageButtons.forEach((button) => {
    const active = button.dataset.lang === selected;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
    button.setAttribute("aria-label", selected === "fr" ? (button.dataset.lang === "fr" ? "Afficher le site en français" : "Afficher le site en anglais") : (button.dataset.lang === "fr" ? "Display the website in French" : "Display the website in English"));
  });
  if (menuToggle) menuToggle.setAttribute("aria-label", translations[selected][navLinks.classList.contains("is-open") ? "closeMenu" : "openMenu"]);
  if (backToTop) backToTop.setAttribute("aria-label", translations[selected].backToTop);
  try { localStorage.setItem("houseOfXOLanguage", selected); } catch (_) { /* Le site fonctionne aussi sans stockage local. */ }
}

languageButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    const lang = document.documentElement.lang || "fr";
    menuToggle.setAttribute("aria-label", translations[lang][isOpen ? "closeMenu" : "openMenu"]);
  });
  navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", translations[document.documentElement.lang || "fr"].openMenu);
  }));
  document.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
      navLinks.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add("is-visible"); currentObserver.unobserve(entry.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
} else document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));

window.addEventListener("scroll", () => backToTop.classList.toggle("visible", window.scrollY > 450), { passive: true });
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
document.querySelector("#year").textContent = new Date().getFullYear();
let savedLanguage = "fr";
try { savedLanguage = localStorage.getItem("houseOfXOLanguage") || "fr"; } catch (_) { /* Valeur par défaut */ }
setLanguage(savedLanguage);


/* XO motion layer: progress, soft particles, pointer spotlight and card tilt */
(() => {
  const progressBar = document.querySelector("#scroll-progress-bar");
  let scrollTicking = false;
  const updateProgress = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
    if (progressBar) progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    scrollTicking = false;
  };
  window.addEventListener("scroll", () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(updateProgress);
      scrollTicking = true;
    }
  }, { passive: true });
  updateProgress();

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canvas = document.querySelector("#xo-particles");
  const context = canvas?.getContext("2d");
  if (canvas && context && !reduceMotion) {
    let width = 0, height = 0, particles = [], frame = 0;
    const createParticles = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth; height = window.innerHeight;
      canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`; canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(54, Math.max(18, Math.round(width / 25)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width, y: Math.random() * height,
        radius: Math.random() * 1.4 + .35,
        speed: Math.random() * .22 + .07,
        alpha: Math.random() * .48 + .12,
        phase: Math.random() * Math.PI * 2
      }));
    };
    const draw = () => {
      context.clearRect(0, 0, width, height);
      particles.forEach((particle) => {
        particle.y -= particle.speed;
        particle.phase += .008;
        particle.x += Math.sin(particle.phase) * .12;
        if (particle.y < -5) { particle.y = height + 5; particle.x = Math.random() * width; }
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(100,255,158,${particle.alpha * (.65 + Math.sin(particle.phase) * .35)})`;
        context.fill();
      });
      frame = window.requestAnimationFrame(draw);
    };
    createParticles(); draw();
    window.addEventListener("resize", createParticles, { passive: true });
    window.addEventListener("pagehide", () => window.cancelAnimationFrame(frame), { once: true });
  }

  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches && !reduceMotion) {
    const root = document.body;
    window.addEventListener("pointermove", (event) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
    }, { passive: true });

    document.querySelectorAll(".social-card").forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        card.style.setProperty("--card-x", `${x * 100}%`);
        card.style.setProperty("--card-y", `${y * 100}%`);
        card.style.transform = `perspective(850px) rotateX(${(0.5 - y) * 3.5}deg) rotateY(${(x - 0.5) * 4}deg) translateY(-3px)`;
      });
      card.addEventListener("pointerleave", () => { card.style.transform = ""; });
    });
  }
})();
