const path = window.location.pathname.toLowerCase();

window.addEventListener("load", () => {

    if (path === "/home/overview") {
        const section = document.getElementById("overview");

        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }
    }

    if (path === "/home/commission") {
        const section = document.getElementById("commission");

        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }
    }
});