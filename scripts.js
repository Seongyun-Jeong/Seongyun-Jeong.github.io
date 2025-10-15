// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
    // Load publications from JSON file
    loadPublications();

    // Highlight names in Awards section
    highlightAwardsNames();

    // Add smooth scrolling to navigation links
    const navLinks = document.querySelectorAll('.navigation a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add active class to navigation links based on scroll position
    window.addEventListener('scroll', function () {
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.navigation a[href^="#"]');

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
});

// Function to load publications from JSON file
async function loadPublications() {
    try {
        const response = await fetch('publications.json');
        if (!response.ok) {
            throw new Error('Failed to load publications');
        }
        const publications = await response.json();
        displayPublications(publications);
    } catch (error) {
        console.error('Error loading publications:', error);
        // Display a fallback message if publications.json doesn't exist or fails to load
        const publicationsList = document.getElementById('publications-list');
        if (publicationsList) {
            publicationsList.innerHTML = '<p>Publications will be displayed here. Please add your publications to publications.json file.</p>';
        }
    }
}

// Function to display publications
function displayPublications(publications) {
    const publicationsList = document.getElementById('publications-list');
    if (!publicationsList) return;

    if (!publications || publications.length === 0) {
        publicationsList.innerHTML = '<p>No publications available at the moment.</p>';
        return;
    }

    let html = '';
    publications.forEach(publication => {
        // Highlight author name and bold conference acronyms
        const highlightedAuthors = publication.authors.replace(/Seongyun Jeong/g, '<strong>Seongyun Jeong</strong>');
        const highlightedVenue = publication.venue
            .replace(/\b(CCS|S&P|NDSS|ICSE|ICML|NeurIPS|ICLR|CVPR|ECCV|ACL|EMNLP|NAACL|USENIX|ASIACCS|IFIP|AISec|CODASPY|ICICS|ATC|LCN)\b/g, '<strong>$1</strong>');

        html += `
            <div class="publication-item">
                <div class="publication-title">${publication.title}</div>
                <div class="publication-authors">${highlightedAuthors}</div>
                <div class="publication-venue">${highlightedVenue}</div>
                ${publication.note ? `<div class="publication-note">${publication.note}</div>` : ''}
                ${publication.links ? `
                    <div class="publication-links">
                        ${publication.links.map(link =>
            `<a href="${link.url}" target="_blank" rel="noopener">${link.type}</a>`
        ).join('')}
                    </div>
                ` : ''}
            </div>
        `;
    });

    publicationsList.innerHTML = html;
}

// Function to highlight name in Awards section
function highlightAwardsNames() {
    const awardItems = document.querySelectorAll('.award-item');
    awardItems.forEach(item => {
        const teamElement = item.querySelector('.award-team');
        if (teamElement) {
            teamElement.innerHTML = teamElement.innerHTML.replace(/Seongyun Jeong/g, '<strong>Seongyun Jeong</strong>');
        }
    });
}

// Function to format date (optional utility)
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Function to add animation on scroll (optional enhancement)
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Initialize scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Uncomment the line below if you want to add scroll animations
    // addScrollAnimations();
});
