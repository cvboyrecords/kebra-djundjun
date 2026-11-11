const PRICE_PER_BAG = 12;

// Dicionário de Traduções (Crioulo de Santiago, PT, FR, EN)
const translations = {
    cv: {
        heroBadge: "🍪 100% Tradicional i Fetu ku Amor em casa",
        heroTitle: "Sabor Ki Ta Fazenu Aprokìssima Di Nôz Terra",
        heroSubtitle: "Bolacha tradicional di Cabo verde, fetu ku receita di família, pa bu chinti kalor di terra na Suíça.",
        seal1: "Fetu ku Amor em casa",
        seal2: "Entréga na Suíça",
        seal3: "Receita di Ilha de Santiago",
        calcTitle: "Fazi bu incomenda rápidu",
        calcSubtitle: "Preço unitáriu: 12 CHF pa kada saku",
        pack1Name: "Pack Individual",
        pack3Name: "Pack Família",
        pack5Name: "Pack Banquete",
        mostPopular: "Mâz bendedu",
        qtyLabel: "Kantu saku bu krê?",
        totalText: "Total pa Paga:",
        addressLabel: "Morada di Entréga na Suíça (Rua, Código Postal, Cidade):",
        addressPlaceholder: "Ex: Rue de Lausanne 12, 1201 Genève",
        ctaButton: "Faze Encomenda via WhatsApp",
        galleryTitle: "Nha Tradiçon di Bolacha Tradicional",
        tiktokDesc: "Odja vídeo di nôz trabadju i bastidõriz na TikTok.",
        footerLegal: "Termos di Encomenda & Privacidade. Pagamentu combinadu diretamenti via WhatsApp."
    },
    pt: {
        heroBadge: "🍪 100% Tradicional & Feito em Casa",
        heroTitle: "O Sabor Que Nos Aproxima da Nossa Terra",
        heroSubtitle: "As autênticas bolachas tradicionais de Cabo Verde, feitas com receita de família e entregues na Suíça.",
        seal1: "Feito em Casa",
        seal2: "Envio na Suíça",
        seal3: "Receita da Ilha de Santiago",
        calcTitle: "Faça a sua Encomenda Rápida",
        calcSubtitle: "Preço unitário: 12 CHF por saco",
        pack1Name: "Pack Individual",
        pack3Name: "Pack Família",
        pack5Name: "Pack Banquete",
        mostPopular: "Mais Popular",
        qtyLabel: "Quantidade de Sacos:",
        totalText: "Total a Pagar:",
        addressLabel: "Morada de Entrega na Suíça (Rua, CP, Cidade):",
        addressPlaceholder: "Ex: Rue de Lausanne 12, 1201 Genève",
        ctaButton: "Encomendar via WhatsApp",
        galleryTitle: "A Nossa Tradição em Detalhes",
        tiktokDesc: "Veja os vídeos dos bastidores e a nossa arte tradicional no TikTok.",
        footerLegal: "Termos de Encomenda & Privacidade. Pagamento combinado diretamente via WhatsApp."
    },
    fr: {
        heroBadge: "🍪 100% Traditionnel & Fait Maison",
        heroTitle: "Le Goût Qui Nous Rapproche de Nos Racines",
        heroSubtitle: "Les authentiques biscuits traditionnels de Cap Vert, faits maison et livrés en Suisse.",
        seal1: "Fait Maison",
        seal2: "Livraison en Suisse",
        seal3: "Recette d'ile Santiago",
        calcTitle: "Passez Votre Commande Rapide",
        calcSubtitle: "Prix unitaire : 12 CHF par sachet",
        pack1Name: "Pack Solo",
        pack3Name: "Pack Famille",
        pack5Name: "Pack Festin",
        mostPopular: "Le Plus Vendu",
        qtyLabel: "Nombre de sachets :",
        totalText: "Total à Payer :",
        addressLabel: "Adresse de livraison en Suisse (Rue, NPA, Ville) :",
        addressPlaceholder: "Ex: Rue de Lausanne 12, 1201 Genève",
        ctaButton: "Commander sur WhatsApp",
        galleryTitle: "Notre Tradition en Images",
        tiktokDesc: "Découvrez nos coulisses et notre savoir-faire sur TikTok.",
        footerLegal: "Conditions de commande & Confidentialité. Paiement arrangé directement sur WhatsApp."
    },
    en: {
        heroBadge: "🍪 100% Traditional & Homemade",
        heroTitle: "The Taste That Brings Us Closer to Home",
        heroSubtitle: "Authentic traditional cookies from Cap Vert, baked with family recipes and delivered in Switzerland.",
        seal1: "Homemade",
        seal2: "Swiss Delivery",
        seal3: "Santiago Islands Recipe",
        calcTitle: "Place Your Quick Order",
        calcSubtitle: "Unit price: 12 CHF per bag",
        pack1Name: "Single Pack",
        pack3Name: "Family Pack",
        pack5Name: "Banquet Pack",
        mostPopular: "Most Popular",
        qtyLabel: "Number of Bags:",
        totalText: "Total Amount:",
        addressLabel: "Delivery Address in Switzerland (Street, ZIP, City):",
        addressPlaceholder: "Ex: Rue de Lausanne 12, 1201 Genève",
        ctaButton: "Order via WhatsApp",
        galleryTitle: "Our Tradition in Detail",
        tiktokDesc: "Watch our behind-the-scenes videos and traditional process on TikTok.",
        footerLegal: "Order Terms & Privacy. Payment arranged directly via WhatsApp."
    }
};

let currentLang = 'pt';

function changeLang(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) el.placeholder = t[key];
    });
}

function setPack(qty) {
    document.getElementById('quantity').value = qty;
    updateTotal();
}

function adjustQty(amount) {
    const qtyInput = document.getElementById('quantity');
    let val = parseInt(qtyInput.value) + amount;
    if (val < 1) val = 1;
    qtyInput.value = val;
    updateTotal();
}

function updateTotal() {
    const qty = parseInt(document.getElementById('quantity').value) || 1;
    const total = qty * PRICE_PER_BAG;
    document.getElementById('totalPrice').textContent = total + ' CHF';
}

function sendWhatsAppOrder() {
    const qty = document.getElementById('quantity').value;
    const total = qty * PRICE_PER_BAG;
    const address = document.getElementById('clientAddress').value.trim();

    if (!address) {
        alert(currentLang === 'cv' ? 'Por favor, indika bu morada di entréga!' : 'Por favor, indique a sua morada de entrega!');
        document.getElementById('clientAddress').focus();
        return;
    }

    const phone = "41779093515";
    let text = "";

    if (currentLang === 'cv') {
        text = `Olá! Krê faze encomenda di ${qty} saku(s) di bolacha Kebra-Djundjun (Total: ${total} CHF). Morada di entréga: ${address}. Dja n aguarda kumpanhu di pagamentu.`;
    } else if (currentLang === 'fr') {
        text = `Bonjour ! Je souhaite commander ${qty} sachet(s) de Kebra-Djundjun (Total : ${total} CHF). Adresse de livraison : ${address}. Merci de m'indiquer les modalités de paiement.`;
    } else if (currentLang === 'en') {
        text = `Hello! I want to order ${qty} bag(s) of Kebra-Djundjun cookies (Total: ${total} CHF). Delivery address: ${address}. Please let me know how to proceed with payment.`;
    } else {
        text = `Olá! Quero encomendar ${qty} saco(s) de bolachas Kebra-Djundjun (Total: ${total} CHF). A minha morada para entrega é: ${address}. Como podemos combinar o pagamento?`;
    }

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
}