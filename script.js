const searchInput = document.getElementById("search");
const resultsContainer = document.getElementById("search-results");
const resultsHeading = document.getElementById("results-heading");
const portfolioAreas = document.getElementById("portfolio-areas");

searchInput.addEventListener("keyup", () => {
    const searchTerm = searchInput.value.toLowerCase();
    
    resultsContainer.innerHTML = "";
    
    if (searchTerm === "") {
        resultsContainer.innerHTML = "";
        resultsHeading.style.display = "none";
        portfolioAreas.style.display = "block";
        return;
    }
    
    const matches = portfolioItems.filter(item => {
        // Ensure fields exist before calling toLowerCase()
        const titleMatch = item.title ? item.title.toLowerCase().includes(searchTerm) : false;
        const descriptionMatch = item.description ? item.description.toLowerCase().includes(searchTerm) : false;
        
        // Handle keywords safely (check if array or string)
        let keywordsMatch = false;
        if (item.keywords) {
            if (Array.isArray(item.keywords)) {
                keywordsMatch = item.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm));
            } else {
                keywordsMatch = item.keywords.toLowerCase().includes(searchTerm);
            }
        }
        
        return titleMatch || descriptionMatch || keywordsMatch;
    }); // This correctly closes ONLY the filter method

    if (matches.length === 0) {
        resultsHeading.style.display = "block";
        portfolioAreas.style.display = "none";
        resultsContainer.innerHTML = "<p>No matching content found.</p>";
        return; 
    }

    resultsHeading.style.display = "block";
    portfolioAreas.style.display = "none";

    matches.forEach(item => {
        // Safe fallbacks
        const link = item.link || '#';
        const category = item.category || '';
        const title = item.title || '';
        const description = item.description || '';

        // Clean HTML Template String
        resultsContainer.innerHTML += `
            <a href="${link}" class="card-link">
                <div class="card-title">
                    ${category}
                </div>
                <div class="card-content">
                    <strong>${title}</strong><br>
                    ${description}
                </div>
            </a>
        `;
    });
});
