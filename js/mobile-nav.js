/**
 * MOBILE NAVIGATION COMPONENT - MixPlus Website
 * مدیریت نوار پایین و منوی تمام صفحه موبایل
 */

// ==================== HTML STRING ====================
const mobileNavHTML = `
  <!-- MOBILE BOTTOM NAV -->
  <nav class="mix-mobile-bottom-bar" id="mobile-nav-bar">
    <div class="mobile-nav-item" onclick="window.location.href='index.html'">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
      <span class="text-fa">خانه</span><span class="text-en hidden">Home</span>
    </div>
    <div class="mobile-nav-item" onclick="window.location.href='products.html'">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
      <span class="text-fa">محصولات</span><span class="text-en hidden">Prod</span>
    </div>
    <div class="mobile-nav-item" id="mobile-catalog-btn">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
      <span class="text-fa">کاتالوگ</span><span class="text-en hidden">Cat</span>
    </div>
    <div class="mobile-nav-item" id="mobile-menu-trigger">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
      <span class="text-fa">منو</span><span class="text-en hidden">Menu</span>
    </div>
  </nav>

  <!-- MOBILE MENU OVERLAY -->
  <div class="mix-mobile-overlay" id="mobile-overlay"></div>
  <div class="mix-mobile-menu-full" id="mobile-menu-full">
    <a href="after-sales.html" class="mix-mobile-full-link">
      <span class="text-fa">خدمات پس از فروش</span>
      <span class="text-en hidden">After-Sales</span>
    </a>
    <a href="dealers.html" class="mix-mobile-full-link">
      <span class="text-fa">نمایندگی‌ها</span>
      <span class="text-en hidden">Dealers</span>
    </a>
    <a href="about.html" class="mix-mobile-full-link">
      <span class="text-fa">درباره ما</span>
      <span class="text-en hidden">About Us</span>
    </a>
    <div class="mix-header__divider" style="margin: 1rem 0;"></div>
    <a href="#" class="mix-mobile-full-link" id="mobile-lang-link">
      <span class="text-fa">تغییر زبان</span>
      <span class="text-en hidden">Switch Lang</span>
    </a>
    <a href="#" class="mix-mobile-full-link" id="mobile-theme-link">
      <span class="text-fa">تغییر تم</span>
      <span class="text-en hidden">Switch Theme</span>
    </a>
  </div>
`;


// ==================== INITIALIZATION & LOGIC ====================

function loadMobileNav() {
  // چک می‌کنیم که قبلا لود نشده باشد تا تکراری ایجاد نشود
  if (document.getElementById('mobile-nav-bar')) return;

  document.body.insertAdjacentHTML('beforeend', mobileNavHTML);
  setupMobileEvents();
}

function setupMobileEvents() {
  const menuBtn = document.getElementById('mobile-menu-trigger');
  const fullMenu = document.getElementById('mobile-menu-full');
  const overlay = document.getElementById('mobile-overlay');
  const mobileCatalogBtn = document.getElementById('mobile-catalog-btn');
  const navBar = document.getElementById('mobile-nav-bar');

  // --- Toggle Menu ---
  function toggleMobileMenu() {
    fullMenu.classList.toggle('active');
    overlay.classList.toggle('active');
  }
  
  if (menuBtn && fullMenu && overlay) {
    menuBtn.addEventListener('click', toggleMobileMenu);
    overlay.addEventListener('click', toggleMobileMenu);
  }

  // --- Catalog Button ---
  if (mobileCatalogBtn) {
    mobileCatalogBtn.onclick = () => {
      // چک می‌کنیم که آیا main.js لود شده و زبان موجود است یا خیر
      if (typeof currentLang !== 'undefined') {
        window.open(currentLang === 'fa' ? 'docs/catalog-fa.pdf' : 'docs/catalog-en.pdf', '_blank');
      } else {
        // حالت پیش‌فرض در صورت خطا
        window.open('docs/catalog-fa.pdf', '_blank');
      }
    };
  }

  // --- Language & Theme Links ---
  const mobileLangBtn = document.getElementById('mobile-lang-link');
  const mobileThemeBtn = document.getElementById('mobile-theme-link');
  
  if (mobileLangBtn) {
    mobileLangBtn.addEventListener('click', () => {
      if (typeof setLanguage === 'function') {
        setLanguage(typeof currentLang !== 'undefined' && currentLang === 'fa' ? 'en' : 'fa');
      }
      toggleMobileMenu();
    });
  }
  if (mobileThemeBtn) {
    mobileThemeBtn.addEventListener('click', () => {
      if (typeof setTheme === 'function') {
        setTheme(typeof currentTheme !== 'undefined' && currentTheme === 'light' ? 'dark' : 'light');
      }
      toggleMobileMenu();
    });
  }

  // --- Scroll Logic for Mobile Nav Bar Visibility ---
  if (navBar && window.innerWidth < 969) {
    window.addEventListener('scroll', () => {
      const hero = document.getElementById('hero-section');
      if (hero) {
        const heroRect = hero.getBoundingClientRect();
        // اگر پایین هیرو بالاتر از پایین صفحه شد، نوار را نشان بده
        if (heroRect.bottom < window.innerHeight) {
          navBar.classList.add('visible');
        } else {
          navBar.classList.remove('visible');
        }
      }
    });
  }
}

// Load when DOM is ready
document.addEventListener('DOMContentLoaded', loadMobileNav);