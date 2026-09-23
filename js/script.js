const menubtn = document.getElementById("menu-btn");
const mobilemenu=document.getElementById("mobile-menu");
const mobileLinks=mobilemenu.querySelectorAll("a");
menubtn.addEventListener("click",()=>{
    mobilemenu.classList.toggle("hidden");
});

mobileLinks.forEach((link)=>{
    link.addEventListener("click",()=>{
        mobilemenu.classList.add("hidden");
    });
});

const scrollTopBtn = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.remove("hidden");
    } else {
        scrollTopBtn.classList.add("hidden");
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("text-orange-500");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("text-orange-500");
        }
    });
});

const currentYear = document.getElementById("current-year");

currentYear.textContent = new Date().getFullYear();

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        // Update active button
        filterButtons.forEach((btn) => {
            btn.classList.remove("bg-orange-500", "text-white");
            btn.classList.add("bg-slate-900", "text-slate-300");
        });

        button.classList.remove("bg-slate-900", "text-slate-300");
        button.classList.add("bg-orange-500", "text-white");

        // Filter projects
        projectCards.forEach((card) => {
            const categories = card.dataset.category.split(" ");

            if (filter === "all" || categories.includes(filter)) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });
    });
});

