document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const faqItem = question.parentElement;
                const isActive = faqItem.classList.contains('active');
                
                // Close all FAQ items
                document.querySelectorAll('.faq-item').forEach(item => {
                    item.classList.remove('active');
                });
                
                // Toggle the clicked item if it wasn't already active
                if (!isActive) {
                    faqItem.classList.add('active');
                }
            });
        });
    }
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Language toggle functionality
    const languageToggle = document.getElementById('language-toggle');
    
    if (languageToggle) {
        languageToggle.addEventListener('click', function() {
            const currentLang = languageToggle.getAttribute('data-lang');
            
            if (currentLang === 'en') {
                translateToSpanish();
                languageToggle.setAttribute('data-lang', 'es');
                languageToggle.textContent = 'English';
            } else {
                translateToEnglish();
                languageToggle.setAttribute('data-lang', 'en');
                languageToggle.textContent = 'Español';
            }
        });
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For now, we'll just show an alert
            alert('Thank you for your message, ' + name + '! We will contact you soon.');
            contactForm.reset();
        });
    }
    
    // Translations
    const translations = {
        en: {
            'our-family': 'Our Family',
            'our-business': 'Our Business',
            'news': 'News',
            'careers': 'Careers',
            'car-care': 'Car Care Tips',
            'roadside': 'Roadside Assistance',
            'get-quote': 'Get a Quote',
            'services': 'Services',
            'shop-tires': 'Shop Tires',
            'locations': 'Locations',
            'my-club': 'MyCar Club',
            'coupons': 'Coupons',
            'schedule': 'Schedule Your Visit',
            'hero-title': 'All Your Car Needs.',
            'hero-subtitle': 'We go beyond what any dealer or any other competitor can offer.',
            'hero-text-1': 'From a ',
            'hero-text-2': 'curated tire collection',
            'hero-text-3': ' to ',
            'hero-text-4': 'expert technicians',
            'hero-text-5': ' to ',
            'hero-text-6': 'comfortable surroundings',
            'hero-text-7': ' to ',
            'hero-text-8': 'unique extras',
            'hero-text-9': ' like roadside assistance coverage, our mission is to take the stress out of auto repair.',
            'try-us': 'Try us today.',
            'view-services': 'View Services',
            'view-services-text': 'Any day. Any year. Any car. Our technicians can do it all.',
            'more-info': 'More Info',
            'schedule-visit': 'Schedule Your Visit',
            'schedule-visit-text': 'Extended hours. Convenient locations. Schedule your visit today.',
            'schedule-now': 'Schedule Now',
            'shop-tires-title': 'Shop Tires',
            'shop-tires-text': 'Top brands. 110% price guarantee. Search by vehicle or tire size.',
            'shop-now': 'Shop Now',
            'more-than-service': 'MORE THAN JUST GREAT AUTO SERVICE',
            'tire-service': 'Tire Service',
            'tire-service-text': 'Sale, installation and repair of tires from the best brands.',
            'preventive': 'Preventive Maintenance',
            'preventive-text': 'Maintenance services to keep your vehicle in optimal condition.',
            'mechanical': 'Mechanical Repairs',
            'mechanical-text': 'Diagnosis and repair of mechanical problems by certified technicians.',
            'electrical': 'Electrical Services',
            'electrical-text': 'Diagnosis and repair of electrical and electronic systems.',
            'roadside-service': 'Roadside Assistance',
            'roadside-text': 'Assistance service in case of emergencies on the road.',
            'testimonials': 'WHAT OUR CUSTOMERS SAY',
            'testimonial-1': '"Excellent service, friendly and professional staff. I always trust E.M.A for my vehicle maintenance."',
            'testimonial-2': '"Fair prices and quality work. They explained the entire process and there were no surprises on the final bill."',
            'testimonial-3': '"Fast and efficient. They solved my problem in less time than expected and at a reasonable price."',
            'contact-us': 'CONTACT US',
            'name': 'Name',
            'email': 'Email',
            'phone': 'Phone',
            'message': 'Message',
            'send-message': 'Send Message',
            'our-locations': 'OUR LOCATIONS',
            'main-branch': 'Main Branch',
            'north-branch': 'North Branch',
            'quick-links': 'Quick Links',
            'contact-info': 'Contact Us',
            'follow-us': 'Follow Us',
            'copyright': '© 2025 E.M.A Tire & Auto. All rights reserved.'
        },
        es: {
            'our-family': 'Nuestra Familia',
            'our-business': 'Nuestro Negocio',
            'news': 'Noticias',
            'careers': 'Carreras',
            'car-care': 'Cuidados',
            'roadside': 'Asistencia',
            'get-quote': 'Obtener Cotización',
            'services': 'Servicios',
            'shop-tires': 'Comprar Llantas',
            'locations': 'Ubicaciones',
            'my-club': 'Club de Miembros',
            'coupons': 'Cupones',
            'schedule': 'Agendar su Visita',
            'hero-title': 'Todas Sus Necesidades Automotrices.',
            'hero-subtitle': 'Vamos más allá de lo que cualquier taller o competidor puede ofrecer.',
            'hero-text-1': 'Desde una ',
            'hero-text-2': 'selección cuidadosa de llantas',
            'hero-text-3': ' hasta ',
            'hero-text-4': 'técnicos expertos',
            'hero-text-5': ', ',
            'hero-text-6': 'ambientes cómodos',
            'hero-text-7': ' y ',
            'hero-text-8': 'extras únicos',
            'hero-text-9': ' como cobertura de asistencia en carretera, nuestra misión es eliminar el estrés de las reparaciones automotrices.',
            'try-us': 'Pruébenos hoy.',
            'view-services': 'Ver Servicios',
            'view-services-text': 'Cualquier día. Cualquier año. Cualquier automóvil. Nuestros técnicos pueden hacerlo todo.',
            'more-info': 'Más Información',
            'schedule-visit': 'Agendar Su Visita',
            'schedule-visit-text': 'Horarios extendidos. Ubicaciones convenientes. Agende su visita hoy.',
            'schedule-now': 'Agendar Ahora',
            'shop-tires-title': 'Comprar Llantas',
            'shop-tires-text': 'Mejores marcas. Garantía de precio -110%. Busque por vehículo o tamaño de llanta.',
            'shop-now': 'Comprar Ahora',
            'more-than-service': 'MÁS QUE SOLO SERVICIO AUTOMOTRIZ',
            'tire-service': 'Servicio de Llantas',
            'tire-service-text': 'Venta, instalación y reparación de llantas de las mejores marcas.',
            'preventive': 'Mantenimiento Preventivo',
            'preventive-text': 'Servicios de mantenimiento para mantener su vehículo en óptimas condiciones.',
            'mechanical': 'Reparaciones Mecánicas',
            'mechanical-text': 'Diagnóstico y reparación de problemas mecánicos por técnicos certificados.',
            'electrical': 'Servicios Eléctricos',
            'electrical-text': 'Diagnóstico y reparación de sistemas eléctricos y electrónicos.',
            'roadside-service': 'Asistencia en Carretera',
            'roadside-text': 'Servicio de asistencia en caso de emergencias en el camino.',
            'testimonials': 'LO QUE DICEN NUESTROS CLIENTES',
            'testimonial-1': '"Excelente servicio, personal amable y profesional. Siempre confío en E.M.A para el mantenimiento de mi vehículo."',
            'testimonial-2': '"Precios justos y trabajo de calidad. Me explicaron todo el proceso y no hubo sorpresas en la factura final."',
            'testimonial-3': '"Rápidos y eficientes. Resolvieron mi problema en menos tiempo del esperado y a un precio razonable."',
            'contact-us': 'CONTÁCTENOS',
            'name': 'Nombre',
            'email': 'Correo Electrónico',
            'phone': 'Teléfono',
            'message': 'Mensaje',
            'send-message': 'Enviar Mensaje',
            'our-locations': 'NUESTRAS UBICACIONES',
            'main-branch': 'Sucursal Principal',
            'north-branch': 'Sucursal Norte',
            'quick-links': 'Enlaces Rápidos',
            'contact-info': 'Contáctenos',
            'follow-us': 'Síguenos',
            'copyright': '© 2025 E.M.A Tire & Auto. Todos los derechos reservados.'
        }
    };
    
    function translateToSpanish() {
        translatePage('es');
    }
    
    function translateToEnglish() {
        translatePage('en');
    }
    
    function translatePage(lang) {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
    }
    
    // Testimonial slider (simplified version)
    let currentSlide = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    
    function showSlide(index) {
        testimonials.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }
    
    // Only initialize slider if there are testimonials and more than one
    if (testimonials.length > 1) {
        // Show first slide initially
        showSlide(currentSlide);
        
        // Auto-advance slides every 5 seconds
        setInterval(() => {
            currentSlide = (currentSlide + 1) % testimonials.length;
            showSlide(currentSlide);
        }, 5000);
    }
});
