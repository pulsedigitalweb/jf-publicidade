const pageSections = document.querySelectorAll("section[id]");
const menuLinks = document.querySelectorAll(".nav-link");

function setActiveLink(sectionId){
    menuLinks.forEach(link => {
        link.classList.toggle("active",link.getAttribute("href") === `#${sectionId}`);
    });
}

if("IntersectionObserver" in window){
    const observer = new IntersectionObserver(entries => {
        const visibleSections = entries
            .filter(entry => entry.isIntersecting)
            .sort((a,b) => b.intersectionRatio - a.intersectionRatio);

        if(visibleSections.length){
            setActiveLink(visibleSections[0].target.id);
        }
    },{
        rootMargin:"-25% 0px -60% 0px",
        threshold:[0.1,0.25,0.5,0.75]
    });

    pageSections.forEach(section => observer.observe(section));
}
