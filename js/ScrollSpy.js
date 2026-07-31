/* ScrollSpy */
const pageSections = document.querySelectorAll("section[id]");
const menuLinks = document.querySelectorAll(".nav-link");

function setActiveLink(sectionId){
    menuLinks.forEach(link => {
        const isCurrentSection = link.getAttribute("href") === `#${sectionId}`;
        link.classList.toggle("active", isCurrentSection);
    });
}

/* Observação das seções */
if("IntersectionObserver" in window){
    const observer = new IntersectionObserver(entries => {
        const visibleSections = entries
            .filter(entry => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if(visibleSections.length){
            setActiveLink(visibleSections[0].target.id);
        }
    }, {
        rootMargin:"-20% 0px -50% 0px",
        threshold:0
    });

    pageSections.forEach(section => observer.observe(section));
}
