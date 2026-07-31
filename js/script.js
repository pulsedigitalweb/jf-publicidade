/* Menu mobile */
const menuButton = document.querySelector(".menu-mobile");
const navigation = document.querySelector("#navigation");
const menuOverlay = document.querySelector(".menu-overlay");
const navigationLinks = document.querySelectorAll(".menu .nav-link");
const menuIcon = menuButton?.querySelector("i");

function openMenu(){
    if(!menuButton || !navigation || !menuOverlay || !menuIcon) return;

    navigation.classList.add("open");
    menuButton.classList.add("active");
    menuOverlay.classList.add("open");
    document.body.classList.add("menu-open");

    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "Fechar menu de navegação");
    menuIcon.classList.replace("fa-bars", "fa-xmark");
}

function closeMenu(){
    if(!menuButton || !navigation || !menuOverlay || !menuIcon) return;

    navigation.classList.remove("open");
    menuButton.classList.remove("active");
    menuOverlay.classList.remove("open");
    document.body.classList.remove("menu-open");

    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu de navegação");
    menuIcon.classList.replace("fa-xmark", "fa-bars");
}

if(menuButton && navigation){
    menuButton.addEventListener("click", () => {
        navigation.classList.contains("open") ? closeMenu() : openMenu();
    });
}

menuOverlay?.addEventListener("click", closeMenu);
navigationLinks.forEach(link => link.addEventListener("click", closeMenu));

/* Rodapé */
const currentYear = document.querySelector("#current-year");

if(currentYear){
    currentYear.textContent = new Date().getFullYear();
}

/* Modal de palavras-chave */
const seoModal = document.querySelector("#seo-modal");
const openSeoModal = document.querySelector("#open-seo-modal");
const closeSeoModalButtons = document.querySelectorAll("[data-close-seo-modal]");

function showSeoModal(){
    if(!seoModal) return;

    seoModal.classList.add("active");
    seoModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function hideSeoModal(){
    if(!seoModal) return;

    seoModal.classList.remove("active");
    seoModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

openSeoModal?.addEventListener("click", showSeoModal);
closeSeoModalButtons.forEach(button => button.addEventListener("click", hideSeoModal));

/* Atalhos de teclado */
document.addEventListener("keydown", event => {
    if(event.key !== "Escape") return;

    closeMenu();
    hideSeoModal();
});
