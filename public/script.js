async function loadCountries() {
    try {
        const res = await fetch('/api/countries');
        const countries = await res.json();
        const countrySelect = document.getElementById('country');
        
        countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country.code;
            option.textContent = `${country.flag} ${country.name}`;
            countrySelect.appendChild(option);
        });
    } catch (error) {
        console.error('Error loading countries:', error);
    }
}

async function searchGigs() {
    const category = document.getElementById("category").value;
    const country = document.getElementById("country").value;
    const min_price = document.getElementById("min_price").value;
    const max_price = document.getElementById("max_price").value;

    const tbody = document.querySelector("#results-table tbody");
    const searchButton = document.querySelector(".search-btn");

    tbody.innerHTML = '<tr><td colspan="8"><div style="text-align: center; padding: 20px;"><i class="fas fa-spinner fa-spin"></i> Loading...</div></td></tr>';
    searchButton.disabled = true;

    try {
        const res = await fetch(`/api/trending?category=${category}&country=${country}&min_price=${min_price}&max_price=${max_price}`);
        const data = await res.json();

        tbody.innerHTML = "";

        if (!res.ok) {
            throw new Error(data.error || "An unknown error occurred.");
        }
        
        if (data.length === 0) {
            tbody.innerHTML = '<tr><td colspan="8" style="text-align: center; padding: 20px;"><i class="fas fa-search"></i> No results found.</td></tr>';
            return;
        }

        data.forEach((gig, index) => {
            const ratingStars = gig.rating ? '⭐'.repeat(Math.round(gig.rating)) : '-';
            const levelColor = gig.seller_level === 'Top Rated' ? '#1DBF73' : '#1a9b59';
            
            tbody.innerHTML += `
                <tr style="animation: slideIn 0.3s ease-out ${index * 50}ms both;">
                    <td><strong>${gig.title}</strong></td>
                    <td>${gig.seller}</td>
                    <td>${ratingStars} ${gig.rating ?? '-'}</td>
                    <td><span style="background: #e8f5e9; padding: 4px 8px; border-radius: 5px;">${gig.reviews}</span></td>
                    <td><strong style="color: #1DBF73;">$${gig.price}</strong></td>
                    <td><strong>${gig.trending_score?.toFixed(2) ?? '-'}</strong></td>
                    <td>${gig.publish_date ?? 'Unknown'}</td>
                    <td><a href="${gig.link}" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i> View</a></td>
                </tr>
            `;
        });
    } catch (error) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; padding: 20px; color: #e74c3c;"><i class="fas fa-exclamation-circle"></i> Error: ${error.message}</td></tr>`;
    } finally {
        searchButton.disabled = false;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `;
    document.head.appendChild(style);
    loadCountries();
});
