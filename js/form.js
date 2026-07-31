/* WhatsApp */
const WHATSAPP_NUMBER = "5527997333798";
const DEFAULT_WHATSAPP_MESSAGE = "Olá! Encontrei a JF Publicidade pelo site e gostaria de solicitar um orçamento.";

function buildWhatsappUrl(message){
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function openWhatsapp(event){
    event.preventDefault();
    window.open(buildWhatsappUrl(DEFAULT_WHATSAPP_MESSAGE), "_blank", "noopener,noreferrer");
}

/* Botões de orçamento */
const whatsappButtons = document.querySelectorAll(
    ".btn-primary, .profile-social-card, .service-link, #btn-footer-wpp, #btn-footer"
);

whatsappButtons.forEach(button => {
    button.addEventListener("click", openWhatsapp);
});

/* Formulário de contato */
const contactForm = document.querySelector("#contact-form");

if(contactForm){
    contactForm.addEventListener("submit", event => {
        event.preventDefault();

        const name = contactForm.querySelector("#contact-name")?.value.trim() || "";
        const email = contactForm.querySelector("#contact-email")?.value.trim() || "";
        const phone = contactForm.querySelector("#contact-phone")?.value.trim() || "";
        const service = contactForm.querySelector("#contact-service")?.value || "";
        const message = contactForm.querySelector("#contact-message")?.value.trim() || "";

        const whatsappMessage = `Olá, JF Publicidade! Gostaria de solicitar um orçamento.\n\n*Nome:* ${name}\n*E-mail:* ${email}\n*Telefone:* ${phone}\n*Serviço:* ${service}\n\n*Mensagem:*\n${message}`;

        window.open(buildWhatsappUrl(whatsappMessage), "_blank", "noopener,noreferrer");
    });
}
