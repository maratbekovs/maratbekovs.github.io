// Internationalization system
const translations = {
    ru: {
        title: "Марат Бекович",
        name: "Марат Бекович",
        hero: {
            title: "Добро пожаловать!",
            subtitle: "Веб-разработчик и программист",
            description: "Создаю современные веб-приложения и решения для бизнеса"
        },
        about: {
            title: "О себе",
            description: "Я веб-разработчик с опытом создания современных веб-приложений. Специализируюсь на фронтенд и бэкенд разработке."
        },
        skills: {
            title: "Навыки",
            databases: "Базы данных"
        },
        contact: {
            title: "Контакты",
            description: "Свяжитесь со мной для обсуждения проектов",
            email: "Email: maratbekov@pc.edu.kg"
        },
        footer: {
            text: "© 2024 Марат Бекович. Все права защищены."
        }
    },
    en: {
        title: "Marat Bekov",
        name: "Marat Bekov",
        hero: {
            title: "Welcome!",
            subtitle: "Web Developer and Programmer",
            description: "Creating modern web applications and business solutions"
        },
        about: {
            title: "About Me",
            description: "I am a web developer with experience in creating modern web applications. I specialize in frontend and backend development."
        },
        skills: {
            title: "Skills",
            databases: "Databases"
        },
        contact: {
            title: "Contact",
            description: "Contact me to discuss projects",
            email: "Email: maratbekov@pc.edu.kg"
        },
        footer: {
            text: "© 2024 Marat Bekov. All rights reserved."
        }
    }
};

// Get translation by key
function getTranslation(lang, key) {
    const keys = key.split('.');
    let result = translations[lang];
    
    for (const k of keys) {
        if (result && result[k]) {
            result = result[k];
        } else {
            return key; // Return key if translation not found
        }
    }
    
    return result;
}

// Apply translations to page
function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(lang, key);
        
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // Update page title
    const titleElement = document.querySelector('title[data-i18n]');
    if (titleElement) {
        document.title = getTranslation(lang, 'title');
    }
    
    // Update html lang attribute
    document.documentElement.lang = lang;
}

// Save language preference
function saveLanguage(lang) {
    localStorage.setItem('preferred-language', lang);
}

// Load language preference
function loadLanguage() {
    return localStorage.getItem('preferred-language') || 'ru';
}