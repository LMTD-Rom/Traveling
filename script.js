// Hide/Show Header saat scroll
let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 80) {
        // Scroll ke bawah → sembunyikan header
        header.classList.add("hide");
    } else {
        // Scroll ke atas → tampilkan header
        header.classList.remove("hide");
    }

    lastScroll = currentScroll;
});