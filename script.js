// Main JavaScript functionality
let currentLanguage = 'ru';

// Change language function
function changeLanguage(lang) {
    currentLanguage = lang;
    applyTranslations(lang);
    saveLanguage(lang);
    updateLanguageButtons(lang);
}

// Update language button states
function updateLanguageButtons(activeLang) {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.id === `lang-${activeLang}`) {
            button.classList.add('active');
        }
    });
}

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language preference
    const savedLang = loadLanguage();
    currentLanguage = savedLang;
    
    // Apply translations
    applyTranslations(currentLanguage);
    updateLanguageButtons(currentLanguage);
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to sections
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
});