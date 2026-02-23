/* ============================================================
   i18n.js – Translation Engine (Expanded)
   ============================================================ */

const translations = {
    en: {
        // Navigation & Global
        "nav_home": "Home",
        "nav_coffee": "Coffee",
        "nav_agri": "Agriculture",
        "nav_about": "About",
        "nav_impact": "Impact",
        "nav_contact": "Contact",
        "nav_get_in_touch": "Get In Touch",
        "back_to_home": "← Back to Home",
        "logo_sub": "Business Dev. Co.",
        "footer_copyright": "© 2026 NTT BDC – Business Development Company. All rights reserved.",
        "footer_made_with": "Made with ❤️ in Ethiopia",
        "footer_desc": "Empowering Ethiopia through premium coffee manufacturing and high-impact agricultural solutions.",
        "footer_company": "Company",

        // Home Page Hero
        "hero_tagline": "Empowering Ethiopia",
        "coffee_div_title": "Naty's Coffee",
        "coffee_div_sub": "Division",
        "coffee_div_desc": "Premium Ethiopian coffee — sourced, roasted & delivered with passion",
        "explore_coffee": "Explore Coffee",
        "agri_div_title": "Agriculture",
        "agri_div_sub": "Division",
        "agri_div_desc": "High-yield European fertilizers blended for Ethiopian farmland",
        "explore_agri": "Explore Agriculture",

        // Impact & About
        "impact_tag": "Our Impact",
        "impact_title": "Numbers That",
        "impact_title_span": "Define Us",
        "about_tag": "Who We Are",
        "about_title": "Ethiopia's Most",
        "about_title_span": "Versatile",
        "btn_partner": "Partner With Us",

        // Coffee Page Specific
        "coffee_hero_title": "The Soul of",
        "coffee_hero_span": "Ethiopian Highlands",
        "coffee_hero_desc": "Naty's Coffee is more than a division — it's a celebration of heritage. We source the finest beans from Kaffa to Sidamo, roasting them to perfection.",
        "coffee_about_tag": "Our Coffee Journey",
        "coffee_about_title": "Sourced from the",
        "coffee_about_span": "Birthplace",
        "process_tag": "The Art of Roasting",
        "process_title": "From Seed to",
        "process_span": "Exceptional Cup",
        "roast_step_1": "Selective Harvesting",
        "roast_step_2": "Sun Drying",
        "roast_step_3": "Expert Roasting",
        "roast_step_4": "Precision Grinding",

        // Agriculture Page Specific
        "agri_hero_title": "Enriching Ethiopia's",
        "agri_hero_span": "Farmland",
        "agri_hero_tag": "NTT BDC — Agriculture Division",
        "agri_hero_sub": "Bringing European-certified fertilizers from Czech Republic, blended locally for Ethiopian soil.",
        "import_tag": "Czech Republic Partnership",
        "import_title": "What We",
        "import_span": "Import",
        "blending_tag": "Our Technology",
        "blending_title": "Local Blending,",
        "blending_span": "Global Standards",

        // Contact Page Specific
        "contact_hero_title": "Get In",
        "contact_hero_span": "Touch",
        "contact_hero_tag": "Let's Connect",
        "contact_card_call": "Call Us",
        "contact_card_wa": "WhatsApp",
        "contact_card_email": "Email Us",
        "contact_card_loc": "Our Office"
    },
    cs: {
        // Navigation & Global
        "nav_home": "Domů",
        "nav_coffee": "Káva",
        "nav_agri": "Zemědělství",
        "nav_about": "O nás",
        "nav_impact": "Dopad",
        "nav_contact": "Kontakt",
        "nav_get_in_touch": "Kontaktujte nás",
        "back_to_home": "← Zpět domů",
        "logo_sub": "Business Dev. Co.",
        "footer_copyright": "© 2026 NTT BDC – Business Development Company. Všechna práva vyhrazena.",
        "footer_made_with": "Vyrobeno s ❤️ v Etiopii",
        "footer_desc": "Posilujeme Etiopii prostřednictvím výroby prémiové kávy a vysoce účinných zemědělských řešení.",
        "footer_company": "Společnost",

        // Home Page Hero
        "hero_tagline": "Posilujeme Etiopii",
        "coffee_div_title": "Naty's Coffee",
        "coffee_div_sub": "Divize",
        "coffee_div_desc": "Prémiová etiopská káva – získávaná, pražená a dodávaná s vášní",
        "explore_coffee": "Prozkoumat kávu",
        "agri_div_title": "Zemědělství",
        "agri_div_sub": "Divize",
        "agri_div_desc": "Vysoce výnosná evropská hnojiva míchaná pro etiopskou zemědělskou půdu",
        "explore_agri": "Prozkoumat zemědělství",

        // Impact & About
        "impact_tag": "Náš dopad",
        "impact_title": "Čísla, která nás",
        "impact_title_span": "Definují",
        "about_tag": "Kdo jsme",
        "about_title": "Nejvšestrannější dům v",
        "about_title_span": "Etiopii",
        "btn_partner": "Partnerství s námi",

        // Coffee Page Specific
        "coffee_hero_title": "Duše",
        "coffee_hero_span": "Etiopské vysočiny",
        "coffee_hero_desc": "Naty's Coffee je víc než jen divize – je to oslava dědictví. Odebíráme ta nejlepší zrna od Kaffy po Sidamo a pražíme je k dokonalosti.",
        "coffee_about_tag": "Naše kávová cesta",
        "coffee_about_title": "Pochází z",
        "coffee_about_span": "Místa vzniku",
        "process_tag": "Umění pražení",
        "process_title": "Od semínka k",
        "process_span": "Výjimečnému šálku",
        "roast_step_1": "Selektivní sklizeň",
        "roast_step_2": "Sušení na slunci",
        "roast_step_3": "Odborné pražení",
        "roast_step_4": "Přesné mletí",

        // Agriculture Page Specific
        "agri_hero_title": "Obohacujeme etiopskou",
        "agri_hero_span": "Zemědělskou půdu",
        "agri_hero_tag": "NTT BDC — Divize zemědělství",
        "agri_hero_sub": "Přinášíme evropsky certifikovaná hnojiva z České republiky, míchaná lokálně pro etiopskou půdu.",
        "import_tag": "Partnerství s Českou republikou",
        "import_title": "Co",
        "import_span": "Dovážíme",
        "blending_tag": "Naše technologie",
        "blending_title": "Lokální míchání,",
        "blending_span": "Globální standardy",

        // Contact Page Specific
        "contact_hero_title": "Buďte v",
        "contact_hero_span": "Kontaktu",
        "contact_hero_tag": "Spojme se",
        "contact_card_call": "Zavolejte nám",
        "contact_card_wa": "WhatsApp",
        "contact_card_email": "Napište nám",
        "contact_card_loc": "Naše kancelář"
    }
};

function applyTranslations(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    localStorage.setItem("selectedLanguage", lang);
    document.documentElement.lang = lang;
}

function initI18n() {
    const savedLang = localStorage.getItem("selectedLanguage") || "en";
    applyTranslations(savedLang);

    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("lang-btn")) {
            const lang = e.target.getAttribute("data-lang");
            applyTranslations(lang);
        }
    });
}

document.addEventListener("DOMContentLoaded", initI18n);
