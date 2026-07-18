/* Contact Form */

const contactForm = document.querySelector("#contact-form");

if(contactForm){

    contactForm.addEventListener("submit", event => {

        event.preventDefault();

        const name = document.querySelector("#contact-name").value.trim();
        const email = document.querySelector("#contact-email").value.trim();
        const phone = document.querySelector("#contact-phone").value.trim();
        const service = document.querySelector("#contact-service").value;
        const message = document.querySelector("#contact-message").value.trim();

        const whatsappNumber = "5527999999999";

        const whatsappMessage = `
Olá, JF Publicidade!

Gostaria de solicitar um orçamento.

*Nome:* ${name}
*E-mail:* ${email}
*Telefone:* ${phone}
*Serviço:* ${service}

*Mensagem:*
${message}
        `.trim();

        const whatsappUrl = `https://wa.me/${5527997333798}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappUrl, "_blank");

    });

}