(function () {
  "use strict";

  const SUPPORTED = ["pt", "en", "es", "fr"];
  const DEFAULT_LANG = "pt";

  const STRINGS = {
    pt: {
      meta: {
        description:
          "Monster Burguer — Hamburgueres artesanais em Luanda, Angola. Sabor monstruosamente irresistível.",
        ogDescription:
          "Hamburgueres artesanais em Luanda, Angola. Sabor monstruosamente irresistível.",
      },
      nav: {
        aria: "Navegação principal",
        home: "Início",
        orders: "Pedidos",
        locations: "Locais",
        about: "Quem Somos",
        buffet: "Bufê",
        contact: "Contacto",
        orderCta: "Fazer Pedido",
        openMenu: "Abrir menu",
      },
      hero: {
        bannerAlt: "Monster Burguer — Hamburgueres em Luanda, Angola",
        tagline: "1 sabor monstruosamente irresistível",
        ctaMenu: "Ver Cardápio & Pedir",
        ctaLocations: "Ver Locais",
        scroll: "Ir para pedidos",
      },
      showcase: {
        aria: "Destaque do produto",
        alt: "Monster Duplo — 1 sabor monstruosamente irresistível",
        cta: "Montar o meu pedido",
      },
      pedidos: {
        label: "Cardápio online",
        title: "Faça o seu pedido",
        intro:
          "Escolha produtos e ofertas, monte o pedido e envie tudo pronto no WhatsApp.",
        search: "Pesquisar no cardápio",
        searchPlaceholder: "Pesquisar hambúrguer, batatas, gasosa...",
        tabsAria: "Categorias do cardápio",
        empty: "Nenhum produto encontrado. Tente outra pesquisa.",
      },
      cart: {
        aria: "O seu pedido",
        title: "O seu pedido",
        close: "Fechar pedido",
        empty: "O carrinho está vazio. Adicione produtos do cardápio.",
        name: "O seu nome",
        namePlaceholder: "Como devemos chamar-lhe?",
        total: "Total",
        note: "Observações (opcional)",
        notePlaceholder: "Ex: sem cebola, entrega em Talatona...",
        whatsapp: "Enviar pedido no WhatsApp",
        clear: "Limpar carrinho",
        call: "Prefere ligar? Disponível ao finalizar:",
      },
      toast: {
        added: "{name} adicionado ao pedido",
        removed: "{name} removido",
        cleared: "Carrinho limpo",
      },
      menu: {
        add: "+ Adicionar",
        added: "✓ Adicionado",
        perUnit: "/ un.",
        cat: {
          all: "Todos",
          ofertas: "Ofertas",
          burgers: "Hambúrgueres",
          sides: "Acompanhamentos",
          drinks: "Bebidas",
        },
        badge: {
          popular: "Mais pedido",
          offer: "Oferta",
          economy: "Economia",
          spicy: "Picante",
          premium: "Premium",
        },
        items: {
          comboMonster: {
            name: "Combo Monster",
            desc: "Hambúrguer + batatas + gasosa",
          },
          comboDuplo: {
            name: "Combo Duplo",
            desc: "2 hambúrgueres + batatas grandes",
          },
          comboFamilia: {
            name: "Combo Família",
            desc: "4 hambúrgueres + 2 batatas",
          },
          classic: {
            name: "Monster Classic",
            desc: "Carne 180g, queijo, molho especial",
          },
          bacon: {
            name: "Monster Bacon",
            desc: "Bacon crocante, cheddar, cebola",
          },
          cheese: {
            name: "Monster Cheese",
            desc: "Duplo queijo, molho cheddar",
          },
          veg: {
            name: "Monster Vegetariano",
            desc: "Hambúrguer de legumes, queijo",
          },
          bbq: {
            name: "Monster BBQ",
            desc: "Molho barbecue, cebola caramelizada",
          },
          picante: {
            name: "Monster Picante",
            desc: "Jalapeños, queijo e molho picante",
          },
          duplo: {
            name: "Monster Duplo",
            desc: "Dupla carne 180g, queijo e molho",
          },
          batatas: {
            name: "Batatas Fritas",
            desc: "Porção generosa, sal e tempero",
          },
          batatasCheddar: {
            name: "Batatas com Cheddar",
            desc: "Batatas com molho cheddar",
          },
          onionRings: {
            name: "Onion Rings",
            desc: "Anéis de cebola empanados",
          },
          gasosa: {
            name: "Gasosa",
            desc: "Coca-Cola, Fanta ou Sprite 33cl",
          },
          agua: {
            name: "Água",
            desc: "Água mineral 50cl",
          },
          sumo: {
            name: "Sumo Natural",
            desc: "Sumo fresco do dia",
          },
        },
      },
      whatsapp: {
        title: "PEDIDO — {site}",
        client: "Cliente",
        total: "TOTAL",
        notes: "Observações",
        footer: "Enviado pelo site {site}",
      },
      locais: {
        label: "Onde estamos",
        title: "Locais em Angola",
        map: "Abrir no Mapa",
        talatonaHours: "Seg–Sex: 11h–22h · Sáb–Dom: 12h–23h",
        maiangaHours: "Ter–Dom: 12h–21h",
      },
      about: {
        logoAlt: "Identidade Monster Burguer",
        label: "Quem Somos",
        title: "A marca que conquistou Luanda",
        p1: 'A <strong>Monster Burguer</strong> nasceu em Angola com uma missão simples: servir o hambúrguer mais saboroso da cidade. Cada receita é preparada na hora, com pão macio, carnes selecionadas e molhos exclusivos que fazem a diferença.',
        p2: "Somos apaixonados por street food de qualidade — do almoço rápido ao bufê do seu evento. Em Talatona, Maianga e onde o nosso food truck aparecer, levamos sabor, energia e aquela experiência que fica na memória.",
        badge1: "🇦🇴 Feito em Angola",
        badge2: "🔥 Na hora",
        badge3: "👹 Sabor monstruoso",
      },
      gallery: {
        aria: "Galeria Monster Burguer",
        label: "Galeria",
        title: "O nosso cardápio visual",
        carouselAria: "Carrossel do cardápio",
        dotsAria: "Navegar fotos do cardápio",
        zoom: "Ver foto",
        viewLarge: "Ver {name} em tamanho grande",
        photoOf: "Foto {n} de {total}",
        caption: "{name} — {site}",
      },
      lightbox: {
        aria: "Ver imagem ampliada",
        close: "Fechar",
      },
      buffet: {
        tag: "Bufê",
        imgAlt: "Bufê Monster Burguer com mini hambúrgueres",
        label: "Eventos",
        title: "Serviço de Bufê",
        intro:
          "Leve a Monster Burguer ao seu evento em Luanda! Bufê completo para festas, empresas e celebrações com montagem no local e equipa dedicada.",
        li1: "Hambúrgueres artesanais (vários sabores)",
        li2: "Mini burgers e sliders",
        li3: "Acompanhamentos: batatas, saladas, molhos",
        li4: "Bebidas e sobremesas sob consulta",
        li5: "Opções vegetarianas disponíveis",
        name: "Nome",
        email: "Email",
        date: "Data do evento",
        submit: "Solicitar Orçamento",
        namePh: "O seu nome",
        emailPh: "email@exemplo.ao",
      },
      contact: {
        label: "Fale connosco",
        title: "Contacto",
        address: "Endereço",
        orders: "Pedidos",
        ordersHtml:
          'Faça o seu pedido online na secção <a href="#pedidos">Cardápio &amp; Pedidos</a>.',
        email: "Email",
        name: "Nome",
        subject: "Assunto",
        message: "Mensagem",
        submit: "Enviar Mensagem",
        namePh: "O seu nome",
        emailPh: "email@exemplo.ao",
        subjectPh: "Como podemos ajudar?",
        messagePh: "A sua mensagem...",
      },
      footer: {
        rights: "© 2026 Monster Burguer — Luanda, Angola. Todos os direitos reservados.",
      },
      mobile: {
        aria: "Pedido rápido",
        cart: "Ver pedido",
        menu: "Cardápio",
      },
      fab: { orders: "Ir para pedidos" },
      forms: {
        error: "Por favor, preencha todos os campos correctamente.",
        contactOk:
          "Mensagem enviada com sucesso! Entraremos em contacto em breve.",
        buffetOk: "Pedido de orçamento recebido! Responderemos em até 24 horas.",
      },
    },
    en: {
      meta: {
        description:
          "Monster Burguer — Artisan burgers in Luanda, Angola. Monstrously irresistible flavor.",
        ogDescription:
          "Artisan burgers in Luanda, Angola. Monstrously irresistible flavor.",
      },
      nav: {
        aria: "Main navigation",
        home: "Home",
        orders: "Orders",
        locations: "Locations",
        about: "About Us",
        buffet: "Buffet",
        contact: "Contact",
        orderCta: "Order Now",
        openMenu: "Open menu",
      },
      hero: {
        bannerAlt: "Monster Burguer — Burgers in Luanda, Angola",
        tagline: "1 monstrously irresistible flavor",
        ctaMenu: "View Menu & Order",
        ctaLocations: "View Locations",
        scroll: "Go to orders",
      },
      showcase: {
        aria: "Product highlight",
        alt: "Monster Duplo — 1 monstrously irresistible flavor",
        cta: "Build my order",
      },
      pedidos: {
        label: "Online menu",
        title: "Place your order",
        intro: "Choose items and deals, build your order and send it ready on WhatsApp.",
        search: "Search the menu",
        searchPlaceholder: "Search burger, fries, soda...",
        tabsAria: "Menu categories",
        empty: "No products found. Try another search.",
      },
      cart: {
        aria: "Your order",
        title: "Your order",
        close: "Close order",
        empty: "Your cart is empty. Add items from the menu.",
        name: "Your name",
        namePlaceholder: "What should we call you?",
        total: "Total",
        note: "Notes (optional)",
        notePlaceholder: "E.g. no onion, delivery to Talatona...",
        whatsapp: "Send order on WhatsApp",
        clear: "Clear cart",
        call: "Prefer to call? Available at checkout:",
      },
      toast: {
        added: "{name} added to order",
        removed: "{name} removed",
        cleared: "Cart cleared",
      },
      menu: {
        add: "+ Add",
        added: "✓ Added",
        perUnit: "/ ea.",
        cat: {
          all: "All",
          ofertas: "Deals",
          burgers: "Burgers",
          sides: "Sides",
          drinks: "Drinks",
        },
        badge: {
          popular: "Best seller",
          offer: "Deal",
          economy: "Value",
          spicy: "Spicy",
          premium: "Premium",
        },
        items: {
          comboMonster: {
            name: "Monster Combo",
            desc: "Burger + fries + soda",
          },
          comboDuplo: {
            name: "Double Combo",
            desc: "2 burgers + large fries",
          },
          comboFamilia: {
            name: "Family Combo",
            desc: "4 burgers + 2 fries",
          },
          classic: {
            name: "Monster Classic",
            desc: "180g beef, cheese, special sauce",
          },
          bacon: {
            name: "Monster Bacon",
            desc: "Crispy bacon, cheddar, onion",
          },
          cheese: {
            name: "Monster Cheese",
            desc: "Double cheese, cheddar sauce",
          },
          veg: {
            name: "Monster Veggie",
            desc: "Veggie patty burger with cheese",
          },
          bbq: {
            name: "Monster BBQ",
            desc: "BBQ sauce, caramelized onion",
          },
          picante: {
            name: "Monster Spicy",
            desc: "Jalapeños, cheese & hot sauce",
          },
          duplo: {
            name: "Monster Double",
            desc: "Double 180g patty, cheese & sauce",
          },
          batatas: {
            name: "French Fries",
            desc: "Generous portion, salt & seasoning",
          },
          batatasCheddar: {
            name: "Cheddar Fries",
            desc: "Fries with cheddar sauce",
          },
          onionRings: {
            name: "Onion Rings",
            desc: "Breaded onion rings",
          },
          gasosa: {
            name: "Soda",
            desc: "Coca-Cola, Fanta or Sprite 33cl",
          },
          agua: {
            name: "Water",
            desc: "Mineral water 50cl",
          },
          sumo: {
            name: "Fresh Juice",
            desc: "Fresh juice of the day",
          },
        },
      },
      whatsapp: {
        title: "ORDER — {site}",
        client: "Customer",
        total: "TOTAL",
        notes: "Notes",
        footer: "Sent from {site} website",
      },
      locais: {
        label: "Find us",
        title: "Locations in Angola",
        map: "Open in Maps",
        talatonaHours: "Mon–Fri: 11am–10pm · Sat–Sun: 12pm–11pm",
        maiangaHours: "Tue–Sun: 12pm–9pm",
      },
      about: {
        logoAlt: "Monster Burguer brand",
        label: "About Us",
        title: "The brand that won Luanda over",
        p1: '<strong>Monster Burguer</strong> was born in Angola with a simple mission: serve the tastiest burger in the city. Every recipe is made fresh, with soft buns, selected meats and exclusive sauces.',
        p2: "We love quality street food — from a quick lunch to catering your event. In Talatona, Maianga and wherever our food truck goes, we bring flavor, energy and a memorable experience.",
        badge1: "🇦🇴 Made in Angola",
        badge2: "🔥 Fresh off the grill",
        badge3: "👹 Monstrous flavor",
      },
      gallery: {
        aria: "Monster Burguer gallery",
        label: "Gallery",
        title: "Our visual menu",
        carouselAria: "Menu carousel",
        dotsAria: "Browse menu photos",
        zoom: "View photo",
        viewLarge: "View {name} full size",
        photoOf: "Photo {n} of {total}",
        caption: "{name} — {site}",
      },
      lightbox: {
        aria: "View enlarged image",
        close: "Close",
      },
      buffet: {
        tag: "Buffet",
        imgAlt: "Monster Burguer buffet with mini burgers",
        label: "Events",
        title: "Buffet Service",
        intro:
          "Bring Monster Burguer to your event in Luanda! Full buffet for parties, companies and celebrations with on-site setup and dedicated team.",
        li1: "Artisan burgers (various flavors)",
        li2: "Mini burgers and sliders",
        li3: "Sides: fries, salads, sauces",
        li4: "Drinks and desserts on request",
        li5: "Vegetarian options available",
        name: "Name",
        email: "Email",
        date: "Event date",
        submit: "Request Quote",
        namePh: "Your name",
        emailPh: "email@example.com",
      },
      contact: {
        label: "Get in touch",
        title: "Contact",
        address: "Address",
        orders: "Orders",
        ordersHtml:
          'Place your order online in the <a href="#pedidos">Menu &amp; Orders</a> section.',
        email: "Email",
        name: "Name",
        subject: "Subject",
        message: "Message",
        submit: "Send Message",
        namePh: "Your name",
        emailPh: "email@example.com",
        subjectPh: "How can we help?",
        messagePh: "Your message...",
      },
      footer: {
        rights: "© 2026 Monster Burguer — Luanda, Angola. All rights reserved.",
      },
      mobile: {
        aria: "Quick order",
        cart: "View order",
        menu: "Menu",
      },
      fab: { orders: "Go to orders" },
      forms: {
        error: "Please fill in all fields correctly.",
        contactOk: "Message sent successfully! We will contact you soon.",
        buffetOk: "Quote request received! We will reply within 24 hours.",
      },
    },
    es: {
      meta: {
        description:
          "Monster Burguer — Hamburguesas artesanales en Luanda, Angola. Sabor monstruosamente irresistible.",
        ogDescription:
          "Hamburguesas artesanales en Luanda, Angola. Sabor monstruosamente irresistible.",
      },
      nav: {
        aria: "Navegación principal",
        home: "Inicio",
        orders: "Pedidos",
        locations: "Locales",
        about: "Quiénes Somos",
        buffet: "Buffet",
        contact: "Contacto",
        orderCta: "Hacer Pedido",
        openMenu: "Abrir menú",
      },
      hero: {
        bannerAlt: "Monster Burguer — Hamburguesas en Luanda, Angola",
        tagline: "1 sabor monstruosamente irresistible",
        ctaMenu: "Ver Carta y Pedir",
        ctaLocations: "Ver Locales",
        scroll: "Ir a pedidos",
      },
      showcase: {
        aria: "Destacado del producto",
        alt: "Monster Duplo — 1 sabor monstruosamente irresistible",
        cta: "Armar mi pedido",
      },
      pedidos: {
        label: "Carta online",
        title: "Haz tu pedido",
        intro:
          "Elige productos y ofertas, arma el pedido y envíalo listo por WhatsApp.",
        search: "Buscar en la carta",
        searchPlaceholder: "Buscar hamburguesa, patatas, refresco...",
        tabsAria: "Categorías de la carta",
        empty: "Ningún producto encontrado. Prueba otra búsqueda.",
      },
      cart: {
        aria: "Tu pedido",
        title: "Tu pedido",
        close: "Cerrar pedido",
        empty: "El carrito está vacío. Añade productos de la carta.",
        name: "Tu nombre",
        namePlaceholder: "¿Cómo debemos llamarte?",
        total: "Total",
        note: "Observaciones (opcional)",
        notePlaceholder: "Ej: sin cebolla, entrega en Talatona...",
        whatsapp: "Enviar pedido por WhatsApp",
        clear: "Vaciar carrito",
        call: "¿Prefieres llamar? Disponible al finalizar:",
      },
      toast: {
        added: "{name} añadido al pedido",
        removed: "{name} eliminado",
        cleared: "Carrito vaciado",
      },
      menu: {
        add: "+ Añadir",
        added: "✓ Añadido",
        perUnit: "/ ud.",
        cat: {
          all: "Todos",
          ofertas: "Ofertas",
          burgers: "Hamburguesas",
          sides: "Acompañamientos",
          drinks: "Bebidas",
        },
        badge: {
          popular: "Más pedido",
          offer: "Oferta",
          economy: "Ahorro",
          spicy: "Picante",
          premium: "Premium",
        },
        items: {
          comboMonster: {
            name: "Combo Monster",
            desc: "Hamburguesa + patatas + refresco",
          },
          comboDuplo: {
            name: "Combo Doble",
            desc: "2 hamburguesas + patatas grandes",
          },
          comboFamilia: {
            name: "Combo Familiar",
            desc: "4 hamburguesas + 2 patatas",
          },
          classic: {
            name: "Monster Classic",
            desc: "Carne 180g, queso, salsa especial",
          },
          bacon: {
            name: "Monster Bacon",
            desc: "Bacon crujiente, cheddar, cebolla",
          },
          cheese: {
            name: "Monster Cheese",
            desc: "Doble queso, salsa cheddar",
          },
          veg: {
            name: "Monster Vegetariano",
            desc: "Hamburguesa de verduras con queso",
          },
          bbq: {
            name: "Monster BBQ",
            desc: "Salsa barbecue, cebolla caramelizada",
          },
          picante: {
            name: "Monster Picante",
            desc: "Jalapeños, queso y salsa picante",
          },
          duplo: {
            name: "Monster Doble",
            desc: "Doble carne 180g, queso y salsa",
          },
          batatas: {
            name: "Patatas Fritas",
            desc: "Ración generosa, sal y especias",
          },
          batatasCheddar: {
            name: "Patatas con Cheddar",
            desc: "Patatas con salsa cheddar",
          },
          onionRings: {
            name: "Aros de Cebolla",
            desc: "Aros de cebolla empanados",
          },
          gasosa: {
            name: "Refresco",
            desc: "Coca-Cola, Fanta o Sprite 33cl",
          },
          agua: {
            name: "Agua",
            desc: "Agua mineral 50cl",
          },
          sumo: {
            name: "Zumo Natural",
            desc: "Zumo fresco del día",
          },
        },
      },
      whatsapp: {
        title: "PEDIDO — {site}",
        client: "Cliente",
        total: "TOTAL",
        notes: "Observaciones",
        footer: "Enviado desde el sitio {site}",
      },
      locais: {
        label: "Dónde estamos",
        title: "Locales en Angola",
        map: "Abrir en Mapa",
        talatonaHours: "Lun–Vie: 11h–22h · Sáb–Dom: 12h–23h",
        maiangaHours: "Mar–Dom: 12h–21h",
      },
      about: {
        logoAlt: "Identidad Monster Burguer",
        label: "Quiénes Somos",
        title: "La marca que conquistó Luanda",
        p1: '<strong>Monster Burguer</strong> nació en Angola con una misión simple: servir la hamburguesa más sabrosa de la ciudad. Cada receta se prepara al momento, con pan suave, carnes seleccionadas y salsas exclusivas.',
        p2: "Nos apasiona la street food de calidad — del almuerzo rápido al buffet de tu evento. En Talatona, Maianga y donde aparezca nuestro food truck, llevamos sabor, energía y una experiencia memorable.",
        badge1: "🇦🇴 Hecho en Angola",
        badge2: "🔥 Al momento",
        badge3: "👹 Sabor monstruoso",
      },
      gallery: {
        aria: "Galería Monster Burguer",
        label: "Galería",
        title: "Nuestra carta visual",
        carouselAria: "Carrusel de la carta",
        dotsAria: "Navegar fotos de la carta",
        zoom: "Ver foto",
        viewLarge: "Ver {name} en grande",
        photoOf: "Foto {n} de {total}",
        caption: "{name} — {site}",
      },
      lightbox: {
        aria: "Ver imagen ampliada",
        close: "Cerrar",
      },
      buffet: {
        tag: "Buffet",
        imgAlt: "Buffet Monster Burguer con mini hamburguesas",
        label: "Eventos",
        title: "Servicio de Buffet",
        intro:
          "¡Lleva Monster Burguer a tu evento en Luanda! Buffet completo para fiestas, empresas y celebraciones con montaje en el lugar y equipo dedicado.",
        li1: "Hamburguesas artesanales (varios sabores)",
        li2: "Mini burgers y sliders",
        li3: "Acompañamientos: patatas, ensaladas, salsas",
        li4: "Bebidas y postres bajo consulta",
        li5: "Opciones vegetarianas disponibles",
        name: "Nombre",
        email: "Email",
        date: "Fecha del evento",
        submit: "Solicitar Presupuesto",
        namePh: "Tu nombre",
        emailPh: "email@ejemplo.com",
      },
      contact: {
        label: "Hablemos",
        title: "Contacto",
        address: "Dirección",
        orders: "Pedidos",
        ordersHtml:
          'Haz tu pedido online en la sección <a href="#pedidos">Carta &amp; Pedidos</a>.',
        email: "Email",
        name: "Nombre",
        subject: "Asunto",
        message: "Mensaje",
        submit: "Enviar Mensaje",
        namePh: "Tu nombre",
        emailPh: "email@ejemplo.com",
        subjectPh: "¿Cómo podemos ayudar?",
        messagePh: "Tu mensaje...",
      },
      footer: {
        rights: "© 2026 Monster Burguer — Luanda, Angola. Todos los derechos reservados.",
      },
      mobile: {
        aria: "Pedido rápido",
        cart: "Ver pedido",
        menu: "Carta",
      },
      fab: { orders: "Ir a pedidos" },
      forms: {
        error: "Por favor, rellena todos los campos correctamente.",
        contactOk: "¡Mensaje enviado con éxito! Te contactaremos pronto.",
        buffetOk: "¡Solicitud de presupuesto recibida! Responderemos en 24 horas.",
      },
    },
    fr: {
      meta: {
        description:
          "Monster Burguer — Burgers artisanaux à Luanda, Angola. Une saveur monstrueusement irrésistible.",
        ogDescription:
          "Burgers artisanaux à Luanda, Angola. Saveur monstrueusement irrésistible.",
      },
      nav: {
        aria: "Navigation principale",
        home: "Accueil",
        orders: "Commandes",
        locations: "Adresses",
        about: "À propos",
        buffet: "Buffet",
        contact: "Contact",
        orderCta: "Commander",
        openMenu: "Ouvrir le menu",
      },
      hero: {
        bannerAlt: "Monster Burguer — Burgers à Luanda, Angola",
        tagline: "1 saveur monstrueusement irrésistible",
        ctaMenu: "Voir la Carte & Commander",
        ctaLocations: "Voir les Adresses",
        scroll: "Aller aux commandes",
      },
      showcase: {
        aria: "Mise en avant du produit",
        alt: "Monster Duplo — 1 saveur monstrueusement irrésistible",
        cta: "Composer ma commande",
      },
      pedidos: {
        label: "Carte en ligne",
        title: "Passez votre commande",
        intro:
          "Choisissez vos produits et offres, composez la commande et envoyez-la sur WhatsApp.",
        search: "Rechercher dans la carte",
        searchPlaceholder: "Burger, frites, soda...",
        tabsAria: "Catégories de la carte",
        empty: "Aucun produit trouvé. Essayez une autre recherche.",
      },
      cart: {
        aria: "Votre commande",
        title: "Votre commande",
        close: "Fermer la commande",
        empty: "Le panier est vide. Ajoutez des produits de la carte.",
        name: "Votre nom",
        namePlaceholder: "Comment doit-on vous appeler ?",
        total: "Total",
        note: "Remarques (optionnel)",
        notePlaceholder: "Ex : sans oignon, livraison Talatona...",
        whatsapp: "Envoyer la commande sur WhatsApp",
        clear: "Vider le panier",
        call: "Vous préférez appeler ? Disponible à la fin :",
      },
      toast: {
        added: "{name} ajouté à la commande",
        removed: "{name} retiré",
        cleared: "Panier vidé",
      },
      menu: {
        add: "+ Ajouter",
        added: "✓ Ajouté",
        perUnit: "/ unité",
        cat: {
          all: "Tout",
          ofertas: "Offres",
          burgers: "Burgers",
          sides: "Accompagnements",
          drinks: "Boissons",
        },
        badge: {
          popular: "Le plus commandé",
          offer: "Offre",
          economy: "Économie",
          spicy: "Épicé",
          premium: "Premium",
        },
        items: {
          comboMonster: {
            name: "Combo Monster",
            desc: "Burger + frites + soda",
          },
          comboDuplo: {
            name: "Combo Double",
            desc: "2 burgers + grandes frites",
          },
          comboFamilia: {
            name: "Combo Famille",
            desc: "4 burgers + 2 frites",
          },
          classic: {
            name: "Monster Classic",
            desc: "180g de bœuf, fromage, sauce spéciale",
          },
          bacon: {
            name: "Monster Bacon",
            desc: "Bacon croustillant, cheddar, oignon",
          },
          cheese: {
            name: "Monster Cheese",
            desc: "Double fromage, sauce cheddar",
          },
          veg: {
            name: "Monster Végétarien",
            desc: "Burger aux légumes avec fromage",
          },
          bbq: {
            name: "Monster BBQ",
            desc: "Sauce barbecue, oignon caramélisé",
          },
          picante: {
            name: "Monster Épicé",
            desc: "Jalapeños, fromage et sauce piquante",
          },
          duplo: {
            name: "Monster Double",
            desc: "Double viande 180g, fromage et sauce",
          },
          batatas: {
            name: "Frites",
            desc: "Portion généreuse, sel et épices",
          },
          batatasCheddar: {
            name: "Frites au Cheddar",
            desc: "Frites avec sauce cheddar",
          },
          onionRings: {
            name: "Onion Rings",
            desc: "Rondelles d'oignon panées",
          },
          gasosa: {
            name: "Soda",
            desc: "Coca-Cola, Fanta ou Sprite 33cl",
          },
          agua: {
            name: "Eau",
            desc: "Eau minérale 50cl",
          },
          sumo: {
            name: "Jus Frais",
            desc: "Jus frais du jour",
          },
        },
      },
      whatsapp: {
        title: "COMMANDE — {site}",
        client: "Client",
        total: "TOTAL",
        notes: "Remarques",
        footer: "Envoyé depuis le site {site}",
      },
      locais: {
        label: "Où nous trouver",
        title: "Adresses en Angola",
        map: "Ouvrir dans Maps",
        talatonaHours: "Lun–Ven : 11h–22h · Sam–Dim : 12h–23h",
        maiangaHours: "Mar–Dim : 12h–21h",
      },
      about: {
        logoAlt: "Identité Monster Burguer",
        label: "À propos",
        title: "La marque qui a conquis Luanda",
        p1: "<strong>Monster Burguer</strong> est née en Angola avec une mission simple : servir le burger le plus savoureux de la ville. Chaque recette est préparée sur place, avec du pain moelleux, des viandes sélectionnées et des sauces exclusives.",
        p2: "Nous aimons la street food de qualité — du déjeuner rapide au buffet de votre événement. À Talatona, Maianga et partout où passe notre food truck, nous apportons saveur, énergie et une expérience mémorable.",
        badge1: "🇦🇴 Fabriqué en Angola",
        badge2: "🔥 Sur le moment",
        badge3: "👹 Saveur monstrueuse",
      },
      gallery: {
        aria: "Galerie Monster Burguer",
        label: "Galerie",
        title: "Notre carte visuelle",
        carouselAria: "Carrousel de la carte",
        dotsAria: "Parcourir les photos",
        zoom: "Voir la photo",
        viewLarge: "Voir {name} en grand",
        photoOf: "Photo {n} sur {total}",
        caption: "{name} — {site}",
      },
      lightbox: {
        aria: "Voir l'image agrandie",
        close: "Fermer",
      },
      buffet: {
        tag: "Buffet",
        imgAlt: "Buffet Monster Burguer avec mini burgers",
        label: "Événements",
        title: "Service Buffet",
        intro:
          "Amenez Monster Burguer à votre événement à Luanda ! Buffet complet pour fêtes, entreprises et célébrations avec installation sur place et équipe dédiée.",
        li1: "Burgers artisanaux (plusieurs saveurs)",
        li2: "Mini burgers et sliders",
        li3: "Accompagnements : frites, salades, sauces",
        li4: "Boissons et desserts sur demande",
        li5: "Options végétariennes disponibles",
        name: "Nom",
        email: "Email",
        date: "Date de l'événement",
        submit: "Demander un Devis",
        namePh: "Votre nom",
        emailPh: "email@exemple.com",
      },
      contact: {
        label: "Contactez-nous",
        title: "Contact",
        address: "Adresse",
        orders: "Commandes",
        ordersHtml:
          'Passez votre commande en ligne dans la section <a href="#pedidos">Carte &amp; Commandes</a>.',
        email: "Email",
        name: "Nom",
        subject: "Sujet",
        message: "Message",
        submit: "Envoyer le Message",
        namePh: "Votre nom",
        emailPh: "email@exemple.com",
        subjectPh: "Comment pouvons-nous aider ?",
        messagePh: "Votre message...",
      },
      footer: {
        rights: "© 2026 Monster Burguer — Luanda, Angola. Tous droits réservés.",
      },
      mobile: {
        aria: "Commande rapide",
        cart: "Voir commande",
        menu: "Carte",
      },
      fab: { orders: "Aller aux commandes" },
      forms: {
        error: "Veuillez remplir tous les champs correctement.",
        contactOk: "Message envoyé avec succès ! Nous vous contacterons bientôt.",
        buffetOk: "Demande de devis reçue ! Réponse sous 24 heures.",
      },
    },
  };

  let currentLang = DEFAULT_LANG;

  function detectLang() {
    const list = navigator.languages?.length
      ? navigator.languages
      : [navigator.language || DEFAULT_LANG];
    for (const raw of list) {
      const code = String(raw).toLowerCase().split("-")[0];
      if (SUPPORTED.includes(code)) return code;
    }
    return DEFAULT_LANG;
  }

  function getNested(obj, path) {
    return path.split(".").reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), obj);
  }

  function t(key, vars) {
    const table = STRINGS[currentLang] || STRINGS[DEFAULT_LANG];
    let text = getNested(table, key) ?? getNested(STRINGS[DEFAULT_LANG], key) ?? key;
    if (vars) {
      Object.keys(vars).forEach((k) => {
        text = text.replace(new RegExp(`\\{${k}\\}`, "g"), vars[k]);
      });
    }
    return text;
  }

  function localeCode() {
    return { pt: "pt-AO", en: "en-US", es: "es-ES", fr: "fr-FR" }[currentLang] || "pt-AO";
  }

  function applyPage() {
    document.documentElement.lang =
      currentLang === "pt" ? "pt-AO" : currentLang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const attr = el.dataset.i18nAttr;
      const value = t(key);
      if (attr === "placeholder") el.placeholder = value;
      else if (attr === "aria-label") el.setAttribute("aria-label", value);
      else if (attr === "title") el.title = value;
      else el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      el.innerHTML = t(el.dataset.i18nHtml);
    });

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = t("meta.description");
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = t("meta.ogDescription");
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) lang = DEFAULT_LANG;
    currentLang = lang;
    window.MB_LANG = lang;
    window.MB_t = t;
    window.MB_locale = localeCode;
    applyPage();
    window.dispatchEvent(new CustomEvent("language-changed", { detail: { lang } }));
  }

  function initI18n() {
    setLang(detectLang());
    window.addEventListener("languagechange", () => setLang(detectLang()));
  }

  window.MB_I18N = { t, setLang, detectLang, SUPPORTED, STRINGS };
  initI18n();
})();
