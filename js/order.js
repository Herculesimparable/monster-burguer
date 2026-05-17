(function () {
  "use strict";

  const WHATSAPP = "244922505397";
  const PHONE_DISPLAY = "+244 922 505 397";
  const CART_KEY = "monsterburguer-cart";

  const I = window.MB_IMG;

  const MENU = [
    { id: "combo-monster", name: "Combo Monster", desc: "Hambúrguer + batatas + gasosa", price: 8500, category: "ofertas", badge: "Mais pedido", img: I.comboMonster },
    { id: "combo-duplo", name: "Combo Duplo", desc: "2 hambúrgueres + batatas grandes", price: 12000, category: "ofertas", badge: "Oferta", img: I.comboDuplo },
    { id: "combo-familia", name: "Combo Família", desc: "4 hambúrgueres + 2 batatas", price: 22000, category: "ofertas", badge: "Economia", img: I.comboFamilia },
    { id: "monster-classic", name: "Monster Classic", desc: "Carne 180g, queijo, molho especial", price: 4500, category: "burgers", img: I.burgerClassic },
    { id: "monster-bacon", name: "Monster Bacon", desc: "Bacon crocante, cheddar, cebola", price: 5500, category: "burgers", img: I.burgerBacon },
    { id: "monster-cheese", name: "Monster Cheese", desc: "Duplo queijo, molho cheddar", price: 5000, category: "burgers", img: I.burgerCheese },
    { id: "monster-veg", name: "Monster Vegetariano", desc: "Hambúrguer de legumes, queijo", price: 4800, category: "burgers", img: I.burgerVeg },
    { id: "monster-bbq", name: "Monster BBQ", desc: "Molho barbecue, cebola caramelizada", price: 5200, category: "burgers", img: I.burgerBbq },
    { id: "monster-picante", name: "Monster Picante", desc: "Jalapeños, queijo e molho picante", price: 5300, category: "burgers", badge: "Picante", img: I.burgerPicante },
    { id: "monster-duplo", name: "Monster Duplo", desc: "Dupla carne 180g, queijo e molho", price: 6200, category: "burgers", badge: "Premium", img: I.burgerDuplo },
    { id: "batatas", name: "Batatas Fritas", desc: "Porção generosa, sal e tempero", price: 1500, category: "sides", img: I.batatas },
    { id: "batatas-cheddar", name: "Batatas com Cheddar", desc: "Batatas com molho cheddar", price: 2200, category: "sides", img: I.batatasCheddar },
    { id: "onion-rings", name: "Onion Rings", desc: "Anéis de cebola empanados", price: 2000, category: "sides", img: I.onionRings },
    { id: "refri", name: "Gasosa", desc: "Coca-Cola, Fanta ou Sprite 33cl", price: 800, category: "drinks", img: I.gasosa },
    { id: "agua", name: "Água", desc: "Água mineral 50cl", price: 500, category: "drinks", img: I.agua },
    { id: "sumo", name: "Sumo Natural", desc: "Sumo fresco do dia", price: 1200, category: "drinks", img: I.sumo },
  ];

  const CATEGORIES = [
    { id: "all", label: "Todos" },
    { id: "ofertas", label: "Ofertas" },
    { id: "burgers", label: "Hambúrgueres" },
    { id: "sides", label: "Acompanhamentos" },
    { id: "drinks", label: "Bebidas" },
  ];

  let cart = [];
  let activeCategory = "all";
  let searchQuery = "";
  let toastTimer;

  const menuGrid = document.getElementById("menu-grid");
  const menuTabs = document.getElementById("menu-tabs");
  const menuEmpty = document.getElementById("menu-empty");
  const menuSearch = document.getElementById("menu-search");
  const cartItems = document.getElementById("cart-items");
  const cartEmpty = document.getElementById("cart-empty");
  const cartTotal = document.getElementById("cart-total");
  const cartCount = document.getElementById("cart-count");
  const cartBarCount = document.getElementById("cart-bar-count");
  const btnWhatsApp = document.getElementById("btn-whatsapp-order");
  const btnClearCart = document.getElementById("btn-clear-cart");
  const checkoutPhone = document.getElementById("checkout-phone");
  const orderNote = document.getElementById("order-note");
  const orderName = document.getElementById("order-name");
  const toast = document.getElementById("toast");
  const cartBackdrop = document.getElementById("cart-backdrop");
  const cartDrawer = document.getElementById("cart-drawer");
  const cartToggle = document.getElementById("cart-toggle");
  const cartClose = document.getElementById("cart-close");

  function formatPrice(kz) {
    return kz.toLocaleString("pt-AO") + " Kz";
  }

  function normalize(str) {
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function getCartCount() {
    return cart.reduce((sum, item) => sum + item.qty, 0);
  }

  function getCartTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  function findProduct(id) {
    return MENU.find((p) => p.id === id);
  }

  function saveCart() {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (_) {
      /* ignore quota / private mode */
    }
  }

  function loadCart() {
    try {
      const raw = localStorage.getItem(CART_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return;
      cart = parsed.filter((item) => findProduct(item.id) && item.qty > 0);
    } catch (_) {
      cart = [];
    }
  }

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    toast.classList.add("toast--visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("toast--visible");
      toast.hidden = true;
    }, 2600);
  }

  function getFilteredMenu() {
    const q = normalize(searchQuery.trim());
    return MENU.filter((p) => {
      const matchCategory = activeCategory === "all" || p.category === activeCategory;
      if (!matchCategory) return false;
      if (!q) return true;
      const haystack = normalize([p.name, p.desc, p.badge || ""].join(" "));
      return haystack.includes(q);
    });
  }

  function addToCart(id) {
    const product = findProduct(id);
    if (!product) return;

    const existing = cart.find((c) => c.id === id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ id: product.id, name: product.name, price: product.price, qty: 1 });
    }
    saveCart();
    renderCart();
    updateCounts();
    showToast(`${product.name} adicionado ao pedido`);
    if (window.innerWidth < 960) openCart();
  }

  function changeQty(id, delta) {
    const item = cart.find((c) => c.id === id);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter((c) => c.id !== id);
    }
    saveCart();
    renderCart();
    updateCounts();
  }

  function removeFromCart(id) {
    const product = findProduct(id);
    cart = cart.filter((c) => c.id !== id);
    saveCart();
    renderCart();
    updateCounts();
    if (product) showToast(`${product.name} removido`);
  }

  function clearCart() {
    if (cart.length === 0) return;
    cart = [];
    saveCart();
    renderCart();
    updateCounts();
    showToast("Carrinho limpo");
    closeCart();
  }

  function updateCounts() {
    const count = getCartCount();
    [cartCount, cartBarCount].forEach((el) => {
      if (el) {
        el.textContent = count;
        el.hidden = count === 0;
      }
    });
    if (btnWhatsApp) btnWhatsApp.disabled = count === 0;
    if (btnClearCart) btnClearCart.hidden = count === 0;
    if (cartTotal) cartTotal.textContent = formatPrice(getCartTotal());
  }

  function buildWhatsAppMessage() {
    const siteName = window.MB_SITE?.name || "Monster Burguer";
    let msg = `🍔 *PEDIDO — ${siteName}*\n\n`;
    const name = orderName?.value.trim();
    if (name) msg += `👤 Cliente: ${name}\n\n`;
    cart.forEach((item) => {
      msg += `• ${item.qty}x ${item.name} — ${formatPrice(item.price * item.qty)}\n`;
    });
    msg += `\n*TOTAL: ${formatPrice(getCartTotal())}*`;
    const note = orderNote?.value.trim();
    if (note) msg += `\n\n📝 Observações: ${note}`;
    msg += `\n\n_Enviado pelo site ${siteName}_`;
    return msg;
  }

  function renderMenu() {
    if (!menuGrid) return;

    const filtered = getFilteredMenu();

    if (menuEmpty) menuEmpty.hidden = filtered.length > 0;
    menuGrid.hidden = filtered.length === 0;

    menuGrid.innerHTML = filtered
      .map(
        (p) => `
      <article class="menu-card" data-id="${p.id}">
        ${p.badge ? `<span class="menu-card__badge">${p.badge}</span>` : ""}
        <div class="menu-card__img">
          <img src="${p.img}" alt="${p.name}" loading="lazy" width="400" height="300">
        </div>
        <div class="menu-card__body">
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
          <div class="menu-card__footer">
            <span class="menu-card__price">${formatPrice(p.price)}</span>
            <button type="button" class="btn btn--primary btn--sm menu-card__add" data-add="${p.id}">
              + Adicionar
            </button>
          </div>
        </div>
      </article>
    `
      )
      .join("");

    menuGrid.querySelectorAll("[data-add]").forEach((btn) => {
      btn.addEventListener("click", () => {
        addToCart(btn.dataset.add);
        btn.textContent = "✓ Adicionado";
        btn.disabled = true;
        setTimeout(() => {
          btn.textContent = "+ Adicionar";
          btn.disabled = false;
        }, 1200);
      });
    });
  }

  function renderTabs() {
    if (!menuTabs) return;

    menuTabs.innerHTML = CATEGORIES.map(
      (cat) => `
      <button type="button" class="menu-tabs__btn ${cat.id === activeCategory ? "active" : ""}" data-category="${cat.id}">
        ${cat.label}
      </button>
    `
    ).join("");

    menuTabs.querySelectorAll("[data-category]").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCategory = btn.dataset.category;
        renderTabs();
        renderMenu();
      });
    });
  }

  function renderCart() {
    if (!cartItems) return;

    if (cart.length === 0) {
      cartItems.innerHTML = "";
      if (cartEmpty) cartEmpty.hidden = false;
      return;
    }

    if (cartEmpty) cartEmpty.hidden = true;

    cartItems.innerHTML = cart
      .map(
        (item) => `
      <li class="cart-item">
        <div class="cart-item__info">
          <strong>${item.name}</strong>
          <span>${formatPrice(item.price)} / un.</span>
        </div>
        <div class="cart-item__actions">
          <button type="button" class="cart-qty-btn" data-qty="${item.id}" data-delta="-1" aria-label="Menos">−</button>
          <span class="cart-item__qty">${item.qty}</span>
          <button type="button" class="cart-qty-btn" data-qty="${item.id}" data-delta="1" aria-label="Mais">+</button>
          <button type="button" class="cart-item__remove" data-remove="${item.id}" aria-label="Remover">×</button>
        </div>
        <span class="cart-item__subtotal">${formatPrice(item.price * item.qty)}</span>
      </li>
    `
      )
      .join("");

    cartItems.querySelectorAll("[data-qty]").forEach((btn) => {
      btn.addEventListener("click", () => {
        changeQty(btn.dataset.qty, parseInt(btn.dataset.delta, 10));
      });
    });

    cartItems.querySelectorAll("[data-remove]").forEach((btn) => {
      btn.addEventListener("click", () => removeFromCart(btn.dataset.remove));
    });
  }

  function openCart() {
    cartDrawer?.classList.add("open");
    document.body.classList.add("cart-open");
    if (cartBackdrop) {
      cartBackdrop.hidden = false;
      cartBackdrop.setAttribute("aria-hidden", "false");
    }
  }

  function closeCart() {
    cartDrawer?.classList.remove("open");
    document.body.classList.remove("cart-open");
    if (cartBackdrop) {
      cartBackdrop.hidden = true;
      cartBackdrop.setAttribute("aria-hidden", "true");
    }
  }

  if (btnWhatsApp) {
    btnWhatsApp.addEventListener("click", () => {
      if (cart.length === 0) return;
      const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(buildWhatsAppMessage())}`;
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }

  if (checkoutPhone) {
    checkoutPhone.href = `tel:+${WHATSAPP}`;
    checkoutPhone.textContent = PHONE_DISPLAY;
  }

  btnClearCart?.addEventListener("click", clearCart);
  cartToggle?.addEventListener("click", openCart);
  cartClose?.addEventListener("click", closeCart);
  cartBackdrop?.addEventListener("click", closeCart);

  menuSearch?.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderMenu();
  });

  document.querySelectorAll("[href='#pedidos']").forEach((link) => {
    link.addEventListener("click", () => closeCart());
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCart();
  });

  function renderGallery() {
    const track = document.getElementById("gallery-track");
    if (!track) return;

    const siteName = window.MB_SITE?.name || "Monster Burguer";

    track.innerHTML = MENU.map(
      (p, i) => `
      <article class="gallery-carousel__slide" data-index="${i}">
        <button
          type="button"
          class="gallery-carousel__btn"
          data-lightbox="${p.img}"
          data-caption="${p.name} — ${siteName}"
          aria-label="Ver ${p.name} em tamanho grande"
        >
          <img src="${p.img}" alt="${p.name}" loading="${i === 0 ? "eager" : "lazy"}" width="800" height="600">
          <span class="gallery-carousel__zoom">Ver foto</span>
        </button>
      </article>
    `
    ).join("");

    window.dispatchEvent(new CustomEvent("gallery-ready"));
  }

  window.MONSTER_MENU = MENU;

  loadCart();
  renderTabs();
  renderMenu();
  renderCart();
  renderGallery();
  updateCounts();
})();
