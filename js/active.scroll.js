document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section"); // Select all sections
    const navLinks = document.querySelectorAll(".menu-links a");
    let lastActiveSection = "home"; // Default to home section

    function changeActiveSection() {
        let scrollPosition = window.scrollY + window.innerHeight / 3; // Adjusted for better accuracy
        let currentSection = lastActiveSection; // Default to last active section

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        if (currentSection !== lastActiveSection) {
            lastActiveSection = currentSection;
        }

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(lastActiveSection)) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", changeActiveSection);
    changeActiveSection(); // Run on page load
});

