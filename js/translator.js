// Diccionario de traducciones
const translations = {
    // Navegación
    'Inicio': 'Home',
    'Carta': 'Menu',
    'Historia': 'Our Story',
    'Eventos': 'Events',
    'Música': 'Music',
    'Contacto': 'Contact',
    
    // Hero
    'Sabores del mundo en la Vera': 'World flavors in La Vera',
    'Color, fusión y amor en cada bocado': 'Color, fusion and love in every bite',
    'Reservar mesa': 'Book a table',
    'Ver carta': 'See menu',
    
    // Carta - Categorías
    'Nuestra Carta': 'Our Menu',
    'Platos': 'Dishes',
    'Postres': 'Desserts',
    'Vinos': 'Wines',
    'Espumosos': 'Sparkling Wines',
    'Tintos': 'Red Wines',
    'Copa': 'Glass',

    // Carta - Platos
    'Sopa de cebolla': 'French Onion Soup',
    'Cremita de calabaza asada': 'Roasted Pumpkin Cream',
    'Hongos glaseados con crema de patata': 'Glazed Mushrooms with Potato Cream',
    'Torrija de tomate con sardina ahumada': 'Tomato French Toast with Smoked Sardine',
    'Buñuelos de bacalao': 'Cod Fritters',
    'Saam de gambón (3 unidades)': 'Prawn Saam (3 units)',
    'Rollito de primavera crujiente': 'Crispy Spring Roll',
    'Brioche de manitas (picante)': 'Pork Trotters Brioche (spicy)',
    'Chipirones salteados': 'Sautéed Baby Squid',
    'Bacalao con suquet de bogavantes': 'Cod with Lobster Suquet',
    'Cordero con migas Garam Masala': 'Lamb with Garam Masala Crumbs',
    'Guiso de ossobuco sobre arroz basmati': 'Ossobuco Stew on Basmati Rice',
    'Tartar de pato japo': 'Japanese Duck Tartar',
    'Carrillera oriental': 'Oriental Pork Cheek',
    'Yogurt de foie (2 unidades)': 'Foie Yogurt (2 units)',
    'Codillo de cerdo al horno': 'Baked Pork Knuckle',
    'Gyozas (Vegetales, pato o pollo)': 'Gyozas (Vegetables, duck or chicken)',
    'Pan bao de ternera estofada': 'Stewed Beef Bao Bun',
    'Samosas': 'Samosas',
    'Tacos de alitas BBQ (2 unidades)': 'BBQ Chicken Wings Tacos (2 units)',
    'unidad': 'unit',

    // Carta - Postres
    'Yogurt y violetas': 'Yogurt and Violets',
    'Tatin con crema inglesa': 'Tatin with Custard',
    'Tarta de queso': 'Cheesecake',
    'Frambuesa y chocolate (Homenaje a heladería Copelia, La Habana)': 'Raspberry and Chocolate (Tribute to Copelia Ice Cream Parlor, Havana)',
    'Tiempo de cítricos': 'Citrus Time',

    // Carta - Vinos
    'Vía de la Plata Brut Nature': 'Vía de la Plata Brut Nature',
    'Roger Goulart Brut Nature Reserva': 'Roger Goulart Brut Nature Reserva',
    'Gramona La Cuvée Brut (D.O. Corpinnat)': 'Gramona La Cuvée Brut (D.O. Corpinnat)',
    'Champagne Veuve Clicquot': 'Champagne Veuve Clicquot',
    'Buche Valle Del Raposo (Vino de Extremadura)': 'Buche Valle Del Raposo (Extremadura Wine)',
    'Pétalos del Bierzo (D.O. Bierzo)': 'Pétalos del Bierzo (D.O. Bierzo)',
    'Pentateuco Basic 2020 (V.T. Extremadura)': 'Pentateuco Basic 2020 (V.T. Extremadura)',
    'Antídoto (D.O. Ribera del Duero)': 'Antídoto (D.O. Ribera del Duero)',
    'La Planta de Arzuaga (D.O. Ribera del Duero)': 'La Planta de Arzuaga (D.O. Ribera del Duero)',
    'Roda (D.O. La Rioja)': 'Roda (D.O. La Rioja)',
    'Sierra Cantabria (D.O. La Rioja)': 'Sierra Cantabria (D.O. La Rioja)',
    'Pago de Capellanes (D.O. Ribera del Duero)': 'Pago de Capellanes (D.O. Ribera del Duero)',
    'Artuke (D.O. La Rioja)': 'Artuke (D.O. La Rioja)',
    'Copa 3€': 'Glass 3€',
    'Vino de Extremadura': 'Extremadura Wine',
    
    // Historia
    'Nuestra Historia': 'Our Story',
    'Conoce toda nuestra historia': 'Learn our full story',
    '¡Hola! Me presento, soy Ruth, la propietaria de Al Norte.': 'Hello! Let me introduce myself, I\'m Ruth, the owner of Al Norte.',
    'A través de mis viajes importo sabores y técnicas de los países que visito, enriqueciendo constantemente nuestro repertorio y abriendo nuestras mentes y paladares a nuevas sensaciones.': 'Through my travels, I import flavors and techniques from the countries I visit, constantly enriching our repertoire and opening our minds and palates to new sensations.',
    'Mi maravilloso equipo formado por -NOMBRES- aporta su pasión y trayectoria para crear una experiencia única en la cocina.': 'My wonderful team formed by -NAMES- brings their passion and experience to create a unique experience in the kitchen.',
    'Nuestro origen': 'Our origins',
    'Nuestra cocina es un espacio abierto, un lugar donde la creatividad y el amor por lo que hacemos se fusionan. Para nosotros, la cocina es una forma de decir "te quiero".': 'Our kitchen is an open space, a place where creativity and love for what we do merge. For us, cooking is a way of saying "I love you".',
    'Amamos nuestro trabajo, nuestra cocina y, sobre todo, a nuestros clientes. Es nuestra manera de cuidarles, de hacerles disfrutar y de transmitirles todo nuestro cariño a través de cada plato.': 'We love our work, our cuisine and, above all, our customers. It is our way of taking care of them, making them enjoy and transmitting all our affection through each dish.',
    'Nuestra filosofía se basa en el slow food, en disfrutar cada momento, en vivir despacio para saborear cada detalle.': 'Our philosophy is based on slow food, enjoying each moment, living slowly to savor every detail.',
    'Nuestro arte': 'Our art',
    'La decoración de nuestro restaurante es muy especial para nosotros, ya que los cuadros que adornan nuestras paredes han sido creados con mucho cariño por mí y por mi madre.': 'The decoration of our restaurant is very special to us, as the paintings that adorn our walls have been created with great care by myself and my mother.',
    'Cada obra refleja no solo nuestro talento y pasión por el arte, sino también el amor y la dedicación que ponemos en cada detalle de nuestro local.': 'Each work reflects not only our talent and passion for art, but also the love and dedication we put into every detail of our venue.',
    'Estos cuadros no solo embellecen el espacio, sino que también le dan un toque único y personal, haciendo que cada visita sea una experiencia más cálida y auténtica para nuestros clientes.': 'These paintings not only beautify the space, but also give it a unique and personal touch, making each visit a warmer and more authentic experience for our customers.',
    'Para nosotros, estos cuadros representan una parte importante de nuestra historia y nuestro compromiso por ofrecer un ambiente acogedor y lleno de significado.': 'For us, these paintings represent an important part of our history and our commitment to offer a cozy and meaningful environment.',
    'Nuestros reconocimientos': 'Our recognitions',
    'Me llena de orgullo compartir algunos de los logros que he alcanzado junto a mi increíble equipo en nuestro restaurante.': 'I am proud to share some of the achievements that I have reached together with my incredible team in our restaurant.',
    'Haber sido galardonados con la Guía Michelin en 2023 y 2024, así como con el premio Tapas 2023, son reconocimientos que nos llenan de alegría y nos motivan a seguir trabajando con pasión y dedicación.': 'Having been awarded the Michelin Guide in 2023 and 2024, as well as the Tapas 2023 award, are recognitions that fill us with joy and motivate us to continue working with passion and dedication.',
    'Estos premios no solo representan la calidad de nuestra comida y servicio, sino también el esfuerzo diario de todo nuestro equipo para ofrecer una experiencia memorable.': 'These awards not only represent the quality of our food and service, but also the daily effort of our entire team to offer a memorable experience.',
    'La Guía Michelin es uno de los reconocimientos más prestigiosos en el mundo de la gastronomía, y que nos hayan otorgado estas distinciones en dos años consecutivos nos impulsa a seguir innovando y mejorando cada día.': 'The Michelin Guide is one of the most prestigious recognitions in the world of gastronomy, and having been awarded these distinctions in two consecutive years encourages us to continue innovating and improving every day.',
    'El premio Tapas 2023, por su parte, refleja nuestro compromiso por ofrecer sabores auténticos y creativos en cada bocado, buscando siempre sorprender y deleitar a nuestros clientes.': 'The Tapas 2023 award, for its part, reflects our commitment to offer authentic and creative flavors in every bite, always looking to surprise and delight our customers.',
    'Para nosotros, estos reconocimientos son un testimonio del cariño y confianza que nos brindan, y nos motivan a seguir trabajando con entusiasmo para que cada visita a nuestro restaurante sea especial.': 'For us, these recognitions are a testimony of the affection and trust that they give us, and they motivate us to continue working with enthusiasm so that each visit to our restaurant is special.',
    'Volver a la página principal': 'Back to main page',
    
    // Música
    '¿A qué suenan nuestros platos?': 'What do our dishes sound like?',
    'En nuestro restaurante, la música que escuchan nuestros clientes tiene un papel fundamental para crear una experiencia única y memorable.': 'In our restaurant, the music our customers listen to plays a fundamental role in creating a unique and memorable experience.',
    'Nos enorgullece ofrecer una selección de los mejores temas de todos los géneros musicales, porque creemos que la variedad y la calidad en la música enriquecen cada momento que compartimos aquí.': 'We are proud to offer a selection of the best tracks from all musical genres, because we believe that variety and quality in music enrich every moment we share here.',
    'La música no solo acompaña la comida, sino que también ayuda a crear un clima cálido, acogedor y lleno de energía positiva.': 'Music not only accompanies food, but also helps create a warm, welcoming atmosphere full of positive energy.',
    'Queremos que cada visita sea especial, y la música es una parte esencial para lograr ese ambiente perfecto donde nuestros clientes puedan relajarse, disfrutar y sentirse como en casa.': 'We want each visit to be special, and music is an essential part of achieving that perfect atmosphere where our customers can relax, enjoy and feel at home.',
    '¿Quieres saber a qué suena Al Norte?': 'Want to know what Al Norte sounds like?',
    '¡Escucha nuestra Playlist!': 'Listen to our Playlist!',
    'Playlist de Al Norte': 'Al Norte Playlist',
    'Descubre la música que inspira nuestros platos': 'Discover the music that inspires our dishes',
    
    // Eventos
    'Próximos eventos': 'Upcoming events',
    'Descubre las experiencias gastronómicas y eventos especiales que organizamos para ti': 'Discover the gastronomic experiences and special events that we organize for you',
    'Cata de vinos de la Vera': 'Wine tasting in La Vera',
    'Prueba una gran selección de vinos acompañados de los mejores maridajes.': 'Try a great selection of wines accompanied by the best pairings.',
    'Noche de tapas y vino': 'Tapas and wine night',
    'Disfruta una selección especial de tapas españolas maridadas con vinos locales.': 'Enjoy a special selection of Spanish tapas paired with local wines.',
    'Ver todos los eventos': 'See all events',
    '9 de Mayo': 'May 9',
    '15 de Mayo': 'May 15',
    
    // Contacto
    'Av. Soledad Vega Ortiz, 125, 10450 Jarandilla de la Vera, Cáceres': 'Av. Soledad Vega Ortiz, 125, 10450 Jarandilla de la Vera, Cáceres, Spain',
    'Escríbenos por WhatsApp': 'Write to us on WhatsApp',
    'Viernes': 'Friday',
    'Sábado': 'Saturday',
    'Domingo': 'Sunday',
    'Lunes a Jueves': 'Monday to Thursday',
    'Cerrado': 'Closed',
    
    // Footer
    'Todos los derechos reservados.': 'All rights reserved.',
    
    // Eventos - General
    'Nuestros Eventos': 'Our Events',
    'Descubre todas las experiencias gastronómicas y eventos especiales que organizamos para ti': 'Discover all the gastronomic experiences and special events that we organize for you',
    'Próximos eventos': 'Upcoming Events',
    'Eventos pasados': 'Past Events',
    'Ver galería': 'View Gallery',
    'Reservar ahora': 'Book Now',
    'Volver a la página principal': 'Back to Main Page',
    'por persona': 'per person',
    
    // Eventos - Nombres de eventos
    'Cata de vinos de la Vera': 'Wine Tasting in La Vera',
    'Prueba una gran selección de vinos acompañados de los mejores maridajes en un ambiente único y acogedor.': 'Try a great selection of wines accompanied by the best pairings in a unique and cozy atmosphere.',
    'Noche de tapas y vino': 'Tapas and Wine Night',
    'Disfruta una selección especial de tapas españolas maridadas con vinos locales. Música en vivo y ambiente acogedor.': 'Enjoy a special selection of Spanish tapas paired with local wines. Live music and cozy atmosphere.',
    'Brunch dominical con jazz': 'Sunday Jazz Brunch',
    'Buffet de brunch con platos dulces y salados, acompañados de música jazz en vivo para un ambiente relajado y elegante.': 'Brunch buffet with sweet and savory dishes, accompanied by live jazz music for a relaxed and elegant atmosphere.',
    'Taller de cocina española': 'Spanish Cooking Workshop',
    'Un taller práctico donde aprendiste los secretos de la cocina española tradicional con nuestro chef.': 'A practical workshop where you learned the secrets of traditional Spanish cuisine with our chef.',
    'Cena maridaje con el enólogo': 'Wine Pairing Dinner with the Winemaker',
    'Una experiencia única donde pudiste disfrutar de una cena de 5 platos maridada con vinos seleccionados por nuestro enólogo.': 'A unique experience where you could enjoy a 5-course dinner paired with wines selected by our winemaker.',
    'Noche de flamenco y gastronomía': 'Flamenco and Gastronomy Night',
    'Una noche donde la gastronomía y el arte flamenco se fusionaron para crear una experiencia sensorial inolvidable.': 'A night where gastronomy and flamenco art merged to create an unforgettable sensory experience.',
    
    // Fechas y horas
    '9 de Mayo, 2024': 'May 9, 2024',
    '15 de Mayo, 2024': 'May 15, 2024',
    '21 de Mayo, 2024': 'May 21, 2024',
    '10 de Abril, 2024': 'April 10, 2024',
    '25 de Marzo, 2024': 'March 25, 2024',
    '15 de Febrero, 2024': 'February 15, 2024',
    
    // Historia - Elementos específicos
    'Nuestra Historia - Al Norte Restaurante': 'Our Story - Al Norte Restaurant',
    'Nuestro origen': 'Our origins',
    'Nuestro arte': 'Our art',
    'Nuestros reconocimientos': 'Our recognitions',
    'Al Norte Logo': 'Al Norte Logo',
    'Premio Michelin Al Norte': 'Michelin Award Al Norte',
    'Premio Tapas Al Norte': 'Tapas Award Al Norte',
    'Historia del restaurante': 'Restaurant history',
    'Nuestro arte en Al Norte': 'Our art at Al Norte',
    
    // Historia - Párrafos completos que tienen estilos inline
    '¡Hola! Me presento, soy Ruth, la propietaria de Al Norte. \nA través de mis viajes importo sabores y técnicas de los países que visito, enriqueciendo constantemente nuestro repertorio y abriendo nuestras mentes y paladares a nuevas sensaciones. Mi maravilloso equipo formado por -NOMBRES- aporta su pasión y trayectoria para crear una experiencia única en la cocina.': 'Hello! Let me introduce myself, I\'m Ruth, the owner of Al Norte. \nThrough my travels, I import flavors and techniques from the countries I visit, constantly enriching our repertoire and opening our minds and palates to new sensations. My wonderful team formed by -NAMES- brings their passion and experience to create a unique experience in the kitchen.',
    
    'La decoración de nuestro restaurante es muy especial para nosotros, ya que los cuadros que adornan nuestras paredes han sido creados con mucho cariño por mí y por mi madre. Cada obra refleja no solo nuestro talento y pasión por el arte, sino también el amor y la dedicación que ponemos en cada detalle de nuestro local.': 'The decoration of our restaurant is very special to us, as the paintings that adorn our walls have been created with great care by myself and my mother. Each work reflects not only our talent and passion for art, but also the love and dedication we put into every detail of our venue.',
    
    'Estos cuadros no solo embellecen el espacio, sino que también le dan un toque único y personal, haciendo que cada visita sea una experiencia más cálida y auténtica para nuestros clientes. Para nosotros, estos cuadros representan una parte importante de nuestra historia y nuestro compromiso por ofrecer un ambiente acogedor y lleno de significado.': 'These paintings not only beautify the space, but also give it a unique and personal touch, making each visit a warmer and more authentic experience for our customers. For us, these paintings represent an important part of our history and our commitment to offer a cozy and meaningful environment.',
    
    'Me llena de orgullo compartir algunos de los logros que he alcanzado junto a mi increíble equipo en nuestro restaurante. Haber sido galardonados con la Guía Michelin en 2023 y 2024, así como con el premio Tapas 2023, son reconocimientos que nos llenan de alegría y nos motivan a seguir trabajando con pasión y dedicación.': 'I am proud to share some of the achievements that I have reached together with my incredible team in our restaurant. Having been awarded the Michelin Guide in 2023 and 2024, as well as the Tapas 2023 award, are recognitions that fill us with joy and motivate us to continue working with passion and dedication.',
    
    // Textos fragmentados o con formato especial
    'Guía Michelin en 2023 y 2024': 'Michelin Guide in 2023 and 2024',
    'premio Tapas 2023': 'Tapas 2023 award',
    'cuadros que adornan nuestras paredes': 'paintings that adorn our walls',
    'han sido creados con mucho cariño por mí y por mi madre': 'have been created with great care by myself and my mother',
    '2025 Al Norte Restaurante': '2025 Al Norte Restaurant',
    
    // Historia - Elementos específicos adicionales
    'copyright': '&copy; 2025 Al Norte Restaurant. All rights reserved.',
    '&copy; 2025 Al Norte Restaurante. Todos los derechos reservados.': '&copy; 2025 Al Norte Restaurant. All rights reserved.',
    'volver': '<i class="fas fa-arrow-left"></i> Back to main page',
    
    // Historia - Traducciones para atributos data-translate
    'intro': 'Hello! Let me introduce myself, I\'m Ruth, the owner of Al Norte. \nThrough my travels, I import flavors and techniques from the countries I visit, constantly enriching our repertoire and opening our minds and palates to new sensations. My wonderful team formed by -NAMES- brings their passion and experience to create a unique experience in the kitchen.',
    'cocina': 'Our kitchen is an open space, a place where creativity and love for what we do merge. For us, cooking is a way of saying "I love you".',
    'amor': 'We love our work, our cuisine and, above all, our customers. It is our way of taking care of them, making them enjoy and transmitting all our affection through each dish.',
    'filosofia': 'Our philosophy is based on slow food, enjoying each moment, living slowly to savor every detail.',
    'decoracion': 'The decoration of our restaurant is very special to us, as the paintings that adorn our walls have been created with great care by myself and my mother. Each work reflects not only our talent and passion for art, but also the love and dedication we put into every detail of our venue.',
    'cuadros': 'These paintings not only beautify the space, but also give it a unique and personal touch, making each visit a warmer and more authentic experience for our customers. For us, these paintings represent an important part of our history and our commitment to offer a cozy and meaningful environment.',
    'reconocimientos': 'I am proud to share some of the achievements that I have reached together with my incredible team in our restaurant. Having been awarded the Michelin Guide in 2023 and 2024, as well as the Tapas 2023 award, are recognitions that fill us with joy and motivate us to continue working with passion and dedication.',
    'premios': 'These awards not only represent the quality of our food and service, but also the daily effort of our entire team to offer a memorable experience.',
    'michelin': 'The Michelin Guide is one of the most prestigious recognitions in the world of gastronomy, and having been awarded these distinctions in two consecutive years encourages us to continue innovating and improving every day.',
    'tapas': 'The Tapas 2023 award, for its part, reflects our commitment to offer authentic and creative flavors in every bite, always looking to surprise and delight our customers.',
    'motivacion': 'For us, these recognitions are a testimony of the affection and trust that they give us, and they motivate us to continue working with enthusiasm so that each visit to our restaurant is special.',
};

// Estado del idioma
let isEnglish = false;

// Función para cambiar el idioma
function toggleLanguage() {
    isEnglish = !isEnglish;
    
    // Actualizar el botón
    const btnLanguage = document.getElementById('btn-language');
    if (isEnglish) {
        btnLanguage.innerHTML = '<i class="fas fa-globe"></i> EN / ES';
    } else {
        btnLanguage.innerHTML = '<i class="fas fa-globe"></i> ES / EN';
    }
    
    // Actualizar el título de la página
    const title = document.querySelector('title');
    if (title) {
        const titleText = title.innerText.trim();
        if (isEnglish && translations[titleText]) {
            if (!title.getAttribute('data-original')) {
                title.setAttribute('data-original', titleText);
            }
            title.innerText = translations[titleText];
        } else if (!isEnglish && title.getAttribute('data-original')) {
            title.innerText = title.getAttribute('data-original');
        }
    }
    
    // Primero, procesar elementos con atributo data-translate
    const taggedElements = document.querySelectorAll('[data-translate]');
    taggedElements.forEach(el => {
        const dataTranslateKey = el.getAttribute('data-translate');
        
        // Si el elemento tiene una key en data-translate y existe en el diccionario
        if (isEnglish && translations[dataTranslateKey]) {
            // Guardar el HTML original si no lo hemos guardado ya
            if (!el.getAttribute('data-original-html')) {
                el.setAttribute('data-original-html', el.innerHTML);
            }
            
            // Usar la traducción directamente desde la key
            el.innerHTML = translations[dataTranslateKey];
            el.classList.add('translated');
            return;
        } 
        // Si no había traducción para la key, intentar traducir el texto
        else {
            const text = el.innerText.trim();
            
            if (isEnglish) {
                // Solo guardar el texto original si no lo hemos guardado ya
                if (!el.getAttribute('data-original')) {
                    el.setAttribute('data-original', text);
                }
                
                // Buscar una traducción para este texto específico
                if (translations[text]) {
                    el.innerHTML = translations[text];
                    // Añadir una clase para indicar que ha sido traducido
                    el.classList.add('translated');
                }
            } else if (!isEnglish) {
                // Usar el HTML original si está disponible
                if (el.getAttribute('data-original-html')) {
                    el.innerHTML = el.getAttribute('data-original-html');
                } 
                // Si no, usar el texto original
                else if (el.getAttribute('data-original')) {
                    el.innerText = el.getAttribute('data-original');
                }
                el.classList.remove('translated');
            }
        }
    });
    
    // Luego, seleccionar y procesar el resto de elementos para traducir
    const elements = document.querySelectorAll('p:not([data-translate]), h1, h2, h3, h4, h5, a, button, span:not(.current-time):not(.total-time), strong, img[alt]');
    
    elements.forEach(el => {
        // Manejar atributos 'alt' para imágenes
        if (el.tagName === 'IMG' && el.hasAttribute('alt')) {
            const altText = el.getAttribute('alt');
            if (altText && altText.trim()) {
                if (isEnglish && translations[altText]) {
                    if (!el.getAttribute('data-original-alt')) {
                        el.setAttribute('data-original-alt', altText);
                    }
                    el.setAttribute('alt', translations[altText]);
                } else if (!isEnglish && el.getAttribute('data-original-alt')) {
                    el.setAttribute('alt', el.getAttribute('data-original-alt'));
                }
            }
            return; // Continuamos con el siguiente elemento
        }
        
        // Procesamiento para elementos de texto
        let text = el.innerText.trim();
        
        // Saltarse elementos vacíos o que solo contienen números/símbolos
        if (!text || /^[0-9.,€\s]+$/.test(text)) return;
        
        // Caso especial para elementos con precios o unidades
        let translation = null;
        
        // Si el texto contiene la palabra "unidad" o termina con un precio, tratarlo especialmente
        if (text.includes('unidad') || /\d+,\d+€(\s+unidad)?$/.test(text)) {
            // Para entradas como "5,90€ unidad" o similares
            const baseText = text.replace(/\s*\d+,\d+€(\s+unidad)?$/, '').trim();
            
            if (translations[baseText]) {
                // Si tenemos traducción para el texto base, aplicarla y mantener el precio/unidad
                const suffix = text.substring(baseText.length);
                translation = translations[baseText] + suffix;
                
                // Reemplazar "unidad" por "unit" si estamos en inglés
                if (isEnglish) {
                    translation = translation.replace(/unidad/, 'unit');
                }
            }
        }
        
        // Buscar traducción en el diccionario normal
        if (!translation) {
            // Primero intentar con el texto exacto
            if (translations[text]) {
                translation = translations[text];
            } else {
                // Para textos largos, intentar normalizar eliminando espacios extra y saltos de línea
                const normalizedText = text.replace(/\s+/g, ' ');
                if (translations[normalizedText]) {
                    translation = translations[normalizedText];
                } else {
                    // Intentar con variaciones del texto para párrafos con estilos inline
                    // que pueden tener diferentes espacios/saltos
                    for (const [key, value] of Object.entries(translations)) {
                        // Normalizar la clave del diccionario también
                        const normalizedKey = key.replace(/\s+/g, ' ');
                        // Si el texto normalizado del elemento es igual o muy parecido a la clave normalizada
                        if (normalizedText.includes(normalizedKey) || normalizedKey.includes(normalizedText)) {
                            translation = value;
                            break;
                        }
                    }
                }
            }
        }
        
        // Para cada elemento, ver si hay una traducción
        if (isEnglish && translation) {
            // Guardar el texto original para poder volver
            if (!el.getAttribute('data-original')) {
                el.setAttribute('data-original', text);
            }
            el.innerText = translation;
        } else if (!isEnglish && el.getAttribute('data-original')) {
            // Volver al español
            el.innerText = el.getAttribute('data-original');
        }
    });
    
    // Actualizar el atributo lang del HTML
    document.documentElement.lang = isEnglish ? 'en' : 'es';
}

// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    const btnLanguage = document.getElementById('btn-language');
    
    if (btnLanguage) {
        btnLanguage.addEventListener('click', toggleLanguage);
    }
    
    // Verificar si hay alguna preferencia de idioma guardada
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang === 'en') {
        // Si el usuario prefería inglés anteriormente, cambiar al inglés
        toggleLanguage();
    }
});

// Guardar la preferencia de idioma cuando el usuario cambia
window.addEventListener('beforeunload', function() {
    localStorage.setItem('preferredLanguage', isEnglish ? 'en' : 'es');
}); 