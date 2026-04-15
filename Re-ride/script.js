document.addEventListener('DOMContentLoaded', () => {
    const bikeGrid = document.getElementById('bikeGrid');
    const bikeCards = Array.from(document.querySelectorAll('.bike-card'));
    const resultsCount = document.getElementById('results-count');
    const bikeCountTop = document.getElementById('bike-count');

    // Filter Elements
    const searchInput = document.getElementById('bikeSearch');
    const minPriceInput = document.getElementById('minPrice');
    const maxPriceInput = document.getElementById('maxPrice');
    const typeCheckboxes = document.querySelectorAll('.filter-check');
    const brandCheckboxes = document.querySelectorAll('.accent-blue-900'); // Brand inputs
    const priceRadios = document.querySelectorAll('.price-radio');
    const sortSelect = document.getElementById('sortSelect');
    const clearButton = document.getElementById('clearFilters');

    function applyAllFilters() {
        const searchTerm = searchInput.value.toLowerCase();
        const minPrice = parseInt(minPriceInput.value) || 0;
        const maxPrice = parseInt(maxPriceInput.value) || 500000;

        // Get active vehicle types
        const activeTypes = Array.from(typeCheckboxes)
            .filter(i => i.checked)
            .map(i => i.value);

        // Get active brands
        const activeBrands = Array.from(brandCheckboxes)
            .filter(i => i.checked)
            .map(i => {
                // Extracts brand name from text (e.g., "Royal Enfield (45)" -> "Royal Enfield")
                return i.closest('label').textContent.split('(')[0].trim();
            });

        let visibleCount = 0;

        bikeCards.forEach(card => {
            const price = parseInt(card.dataset.price);
            const type = card.dataset.type;
            const brand = card.dataset.brand;
            const title = card.querySelector('h2').textContent.toLowerCase();

            const matchesSearch = title.includes(searchTerm);
            const matchesPrice = price >= minPrice && price <= maxPrice;
            const matchesType = activeTypes.length === 0 || activeTypes.includes(type);
            const matchesBrand = activeBrands.length === 0 || activeBrands.includes(brand);

            if (matchesSearch && matchesPrice && matchesType && matchesBrand) {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Update UI counters
        resultsCount.innerText = visibleCount;
        if(bikeCountTop) bikeCountTop.innerText = visibleCount;
    }

    // --- Event Listeners ---

    // Search and Price Inputs
    [searchInput, minPriceInput, maxPriceInput].forEach(el => {
        el.addEventListener('input', applyAllFilters);
    });

    // Checkboxes (Type & Brand)
    [...typeCheckboxes, ...brandCheckboxes].forEach(cb => {
        cb.addEventListener('change', applyAllFilters);
    });

    // Price Radios
    priceRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            minPriceInput.value = e.target.dataset.min;
            maxPriceInput.value = e.target.dataset.max;
            applyAllFilters();
        });
    });

    // Sorting
    sortSelect.addEventListener('change', () => {
        const val = sortSelect.value;
        const sorted = [...bikeCards].sort((a, b) => {
            const priceA = parseInt(a.dataset.price);
            const priceB = parseInt(b.dataset.price);
            if (val === 'lowHigh') return priceA - priceB;
            if (val === 'highLow') return priceB - priceA;
            return 0;
        });
        
        bikeGrid.innerHTML = '';
        sorted.forEach(card => bikeGrid.appendChild(card));
    });

    // Clear All
    clearButton.addEventListener('click', () => {
        searchInput.value = '';
        minPriceInput.value = '';
        maxPriceInput.value = '';
        [...typeCheckboxes, ...brandCheckboxes, ...priceRadios].forEach(el => el.checked = false);
        applyAllFilters();
    });
});

