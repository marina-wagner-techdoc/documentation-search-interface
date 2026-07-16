
const portfolioItems = [

    {
        title: "Users API",
        category: "API Documentation",
        description: "REST API endpoint for retrieving and creating users.",
        keywords: "api users rest json documentation",
        link: "https://github.com/marina-wagner-techdoc/technical-writing-portfolio/blob/main/api-doc/users.md"
    },

    {
        title: "Cycle API",
        category: "API Documentation",
        description: "Cycle tracking endpoints with request and response examples.",
        keywords: "api cycle tracking json response request",
        link: "https://github.com/marina-wagner-techdoc/technical-writing-portfolio/blob/main/api-doc/cycle.md"
    },

    {
        title: "Error Messages",
        category: "UX Writing",
        description: "Examples of actionable and user-friendly error messages.",
        keywords: "error message ux writing microcopy",
        link: "https://github.com/marina-wagner-techdoc/technical-writing-portfolio/tree/main/ux-writing"
    },

    {
        title: "Getting Started Guide",
        category: "User Documentation",
        description: "Task-based onboarding guide for new users.",
        keywords: "guide onboarding getting started help",
        link: "https://github.com/marina-wagner-techdoc/technical-writing-portfolio/blob/main/user-guide/getting-started.md"
    },

    {
        title: "Privacy Notice",
        category: "Compliance & Privacy",
        description: "Plain language privacy communication examples.",
        keywords: "privacy gdpr consent compliance",
        link: "https://github.com/marina-wagner-techdoc/technical-writing-portfolio/tree/main/compliance"
    }

];

const searchInput = document.getElementById("search");
const resultsContainer = document.getElementById("search-results");

searchInput.addEventListener("keyup", () => {

    const searchTerm = searchInput.value.toLowerCase();

    resultsContainer.innerHTML = "";

    if (searchTerm === "") {
        return;
    }

    const matches = portfolioItems.filter(item =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.keywords.toLowerCase().includes(searchTerm)
    );

    matches.forEach(item => {

        resultsContainer.innerHTML += `
            ${item.link}
                <div class="card-title">
                    ${item.category}
                </div>

                <div class="card-content">
                    <strong>${item.title}</strong><br>
                    ${item.description}
                </div>
            </a>
        `;

    });

});
