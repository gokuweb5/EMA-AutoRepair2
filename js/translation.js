// Translation functionality for EMA Tire & Auto website
// Esperar a que la página se cargue completamente para evitar parpadeos
window.addEventListener('load', function() {
    // Get the language toggle button
    const languageToggle = document.getElementById('language-toggle');
    
    // Check if we have a saved language preference
    let currentLang = localStorage.getItem('emaLanguage') || 'en';
    
    // Set initial language based on saved preference
    setLanguage(currentLang);
    
    // Add click event to language toggle button
    if (languageToggle) {
        languageToggle.addEventListener('click', function() {
            // Toggle between languages
            currentLang = currentLang === 'en' ? 'es' : 'en';
            
            // Save language preference
            localStorage.setItem('emaLanguage', currentLang);
            
            // Apply the language change
            setLanguage(currentLang);
        });
    }
    
    // Function to set the language
    function setLanguage(lang) {
        // Update button text
        if (languageToggle) {
            languageToggle.textContent = lang === 'en' ? 'Español' : 'English';
            languageToggle.setAttribute('data-lang', lang);
        }
        
        // Añadir clase al body para indicar el idioma actual
        document.body.classList.remove('lang-en', 'lang-es');
        document.body.classList.add('lang-' + lang);
        
        // Apply translations
        if (lang === 'es') {
            translateToSpanish();
        } else {
            translateToEnglish();
        }
    }
    
    // Function to translate to Spanish
    function translateToSpanish() {
        const translations = {
            // Navigation
            'services': 'Servicios',
            'shop-tires': 'Comprar Neumáticos',
            'locations': 'Ubicaciones',
            'my-club': 'Club de Auto',
            'ofertas': 'Ofertas',
            'schedule': 'Programar Visita',
            
            // Top bar
            'our-business': 'Nuestro Negocio',
            'news': 'Noticias',
            'careers': 'Carreras',
            'car-care': 'Consejos para el Auto',
            'roadside': 'Asistencia en Carretera',
            'get-quote': 'Obtener Cotización',
            
            // Ofertas page
            'Current Offers': 'Ofertas Actuales',
            'Take advantage of these special promotions on our services and products': 'Aproveche estas promociones especiales en nuestros servicios y productos',
            'New Customer Special': 'Especial para Nuevos Clientes',
            '15% discount on all services for new customers': '15% de descuento en todos los servicios para nuevos clientes',
            'Save 15%': 'Ahorre 15%',
            'Valid for first-time customers only': 'Válido solo para clientes nuevos',
            'Applies to all automotive services': 'Aplica a todos los servicios automotrices',
            'Cannot be combined with other offers': 'No se puede combinar con otras ofertas',
            'Oil Change': 'Cambio de Aceite',
            'Conventional oil change with filter included': 'Cambio de aceite convencional con filtro incluido',
            'Includes up to 5 quarts of oil': 'Incluye hasta 5 cuartos de aceite',
            'Standard oil filter': 'Filtro de aceite estándar',
            '21-point inspection': 'Inspección de 21 puntos',
            'Wheel Alignment': 'Alineación de Ruedas',
            'Computerized 4-wheel alignment': 'Alineación computarizada de 4 ruedas',
            'Camber, caster and toe adjustment': 'Ajuste de camber, caster y toe',
            'Suspension inspection': 'Inspección de la suspensión',
            'Printed alignment report': 'Reporte impreso de alineación',
            'Tire Purchase': 'Compra de Neumáticos',
            'On the purchase of 4 selected tires': 'En la compra de 4 neumáticos seleccionados',
            'Save $50': 'Ahorre $50',
            'Participating brands: Michelin, Bridgestone, Goodyear': 'Marcas participantes: Michelin, Bridgestone, Goodyear',
            'Free installation included': 'Instalación gratuita incluida',
            'Wheel balancing included': 'Balanceo de ruedas incluido',
            'Brake Service': 'Servicio de Frenos',
            'Front or rear brake pad replacement': 'Reemplazo de pastillas de freno delanteras o traseras',
            'Premium quality brake pads': 'Pastillas de freno de calidad premium',
            'Brake system inspection': 'Inspección del sistema de frenos',
            'Adjustment and performance testing': 'Ajuste y prueba de rendimiento',
            'How to Redeem These Offers': 'Cómo Canjear Estas Ofertas',
            'Follow these simple steps to take advantage of our promotions': 'Siga estos sencillos pasos para aprovechar nuestras promociones',
            'Print or Save': 'Imprima o Guarde',
            'Print this page or save it on your mobile device': 'Imprima esta página o guárdela en su dispositivo móvil',
            'Schedule Your Visit': 'Programe su Visita',
            'Call or use our online scheduling system': 'Llame o use nuestro sistema de programación en línea',
            'Mention the Offer': 'Mencione la Oferta',
            'Mention the offer when you arrive at our shop': 'Mencione la oferta al llegar a nuestro taller',
            'Enjoy the Savings!': '¡Disfrute el Ahorro!',
            'Receive your service with the discount applied': 'Reciba su servicio con el descuento aplicado',
            'Terms and Conditions': 'Términos y Condiciones',
            'Questions about our offers?': '¿Preguntas sobre nuestras ofertas?',
            'Our team is ready to help you with any inquiries about our promotions.': 'Nuestro equipo está listo para ayudarle con cualquier consulta sobre nuestras promociones.',
            'Contact Us': 'Contáctenos',
            'Shop Tires': 'Comprar Neumáticos',
            'Schedule Service': 'Programar Servicio',
            'SPECIAL OFFERS': 'OFERTAS ESPECIALES',
            'Save on our services and products with these exclusive offers': 'Ahorre en nuestros servicios y productos con estas ofertas exclusivas',
            'Valid until:': 'Válido hasta:',
            
            // Footer
            'Quick Links': 'Enlaces Rápidos',
            'Our Services': 'Nuestros Servicios',
            'Contact Us': 'Contáctenos',
            'Follow Us': 'Síguenos',
            'All Rights Reserved': 'Todos los Derechos Reservados'
        };
        
        // Solo traducir elementos con data-translate attribute para evitar parpadeos
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });
        
        // Traducir elementos específicos de la página de ofertas
        if (window.location.href.includes('ofertas.html')) {
            // Traducir títulos principales
            const mainTitle = document.querySelector('.hero-content h1');
            if (mainTitle && mainTitle.textContent === 'SPECIAL OFFERS') {
                mainTitle.textContent = 'OFERTAS ESPECIALES';
            }
            
            const subTitle = document.querySelector('.hero-content p');
            if (subTitle) {
                subTitle.textContent = 'Ahorre en nuestros servicios y productos con estas ofertas exclusivas';
            }
            
            // Traducir sección de ofertas actuales
            const currentOffers = document.querySelector('.section-title h2');
            if (currentOffers && currentOffers.textContent === 'Current Offers') {
                currentOffers.textContent = 'Ofertas Actuales';
            }
            
            // Traducir fechas de validez
            document.querySelectorAll('.oferta-expiry').forEach(element => {
                element.textContent = element.textContent.replace('Valid until:', 'Válido hasta:');
            });
            
            // Traducir botones de CTA
            document.querySelectorAll('.cta-button').forEach(button => {
                if (button.textContent === 'Schedule Service') {
                    button.textContent = 'Programar Servicio';
                }
            });
        }
    }
    
    // Function to translate back to English
    function translateToEnglish() {
        // Instead of reloading the page, we'll just not apply translations
        // The page is already in English by default
        console.log('Switched to English');
        // No need to do anything as the page is already in English
    }
});
