
const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".result-card");

searchInput.addEventListener("keyup", () => {

    const searchTerm = searchInput.value.toLowerCase();

    cards.forEach(card => {

        const text = card.textContent.toLowerCase();

        if (text.includes(searchTerm)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }

    });

});
