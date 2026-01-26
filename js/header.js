/**
 * HEADER COMPONENT - MixPlus Website (Updated)
 * اضافه شدن سیستم ارسال رویداد برای رفع مشکل لود همزمان
 */

// ==================== HTML STRING ====================
const headerHTML = `
  <!-- MOBILE BOTTOM NAV -->
  <nav class="mix-mobile-bottom-bar" id="mobile-nav-bar">
    <div class="mobile-nav-item" onclick="window.scrollTo(0,0)">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
      <span class="text-fa">خانه</span><span class="text-en hidden">Home</span>
    </div>
    <div class="mobile-nav-item" onclick="document.getElementById('categories')?.scrollIntoView()">
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
    <a href="#" class="mix-mobile-full-link">
      <span class="text-fa">خدمات پس از فروش</span>
      <span class="text-en hidden">After-Sales</span>
    </a>
    <a href="#" class="mix-mobile-full-link">
      <span class="text-fa">نمایندگی‌ها</span>
      <span class="text-en hidden">Dealers</span>
    </a>
    <a href="#" class="mix-mobile-full-link">
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

  <!-- HEADER (Desktop) -->
  <header class="mix-header" id="header">
    <div class="mix-header__container">
      
      <!-- PRIMARY NAV -->
      <nav class="mix-header__nav mix-header__nav--primary">
        <div style="position: relative;">
          <button class="mix-header__item" id="products-trigger">
            <span class="text-fa">محصولات</span>
            <span class="text-en hidden">Products</span>
          </button>
          <div class="mix-megamenu" id="products-mega">
            <div class="mix-megamenu__content">
              <div class="mix-megamenu__col">
                <div class="mix-megamenu__root-item active" data-category="hob">
                  <span class="text-fa">اجاق گاز</span><span class="text-en hidden">Hob</span>
                </div>
                <div class="mix-megamenu__root-item" data-category="sink">
                  <span class="text-fa">سینک ظرف‌شویی</span><span class="text-en hidden">Sink</span>
                </div>
                <div class="mix-megamenu__root-item" data-category="oven">
                  <span class="text-fa">فر توکار</span><span class="text-en hidden">Built-in Oven</span>
                </div>
                <div class="mix-megamenu__root-item" data-category="hood">
                  <span class="text-fa">هود</span><span class="text-en hidden">Hood</span>
                </div>
              </div>
              <div class="mix-megamenu__col" id="products-subs"></div>
            </div>
          </div>
        </div>
        
        <div class="mix-header__divider"></div>
        
        <a href="#" class="mix-header__item">
          <span class="text-fa">نمایندگی‌های مجاز</span>
          <span class="text-en hidden">Dealers</span>
        </a>
        
        <div class="mix-header__divider"></div>
        
        <div style="position: relative;">
          <button class="mix-header__item" id="aftersales-trigger">
            <span class="text-fa">خدمات پس از فروش</span>
            <span class="text-en hidden">After-Sales</span>
          </button>
          <div class="mix-megamenu" id="aftersales-mega">
            <div class="mix-dropdown-simple">
              <a href="#">
                <span class="text-fa">فرآیند رسیدگی به شکایات</span>
                <span class="text-en hidden">Complaint Process</span>
              </a>
              <a href="#">
                <span class="text-fa">شرایط گارانتی محصولات</span>
                <span class="text-en hidden">Warranty Terms</span>
              </a>
              <a href="#">
                <span class="text-fa">درخواست نصب محصول</span>
                <span class="text-en hidden">Installation Request</span>
              </a>
              <a href="#">
                <span class="text-fa">ثبت شکایت</span>
                <span class="text-en hidden">Register Complaint</span>
              </a>
            </div>
          </div>
        </div>
        
        <a href="#" class="mix-header__item">
          <span class="text-fa hidden"></span> 
          <span class="text-en">About Us</span>
        </a>
      </nav>
      
      <!-- CENTER LOGO -->
      <a href="index.html" class="mix-header__logo">
        <img src="images/logos/logo-light.svg" alt="MixPlus Logo" class="logo-light">
        <img src="images/logos/logo-dark.svg" alt="MixPlus Logo" class="logo-dark hidden">
      </a>
      
      <!-- SECONDARY NAV -->
      <nav class="mix-header__nav mix-header__nav--secondary">
        <button class="mix-header__icon-btn" id="search-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>
        </button>
        
        <div class="mix-header__divider"></div>
        
        <div style="position: relative;">
          <button class="mix-header__item" id="social-trigger">#</button>
          <div class="mix-megamenu" id="social-dropdown" style="min-width: 200px;">
             <div class="mix-dropdown-simple">
              <a href="https://www.linkedin.com/company/mixplus" target="_blank" style="justify-content: flex-start; gap: 10px;">
                <img src="svg/linkedin.svg" style="width: 20px; height: 20px;" alt="LinkedIn">
                LinkedIn
              </a>
              <a href="https://www.instagram.com/mixplus.co" target="_blank" style="justify-content: flex-start; gap: 10px;">
                <img src="svg/instagram.svg" style="width: 20px; height: 20px;" alt="Instagram">
                Instagram
              </a>
              <a href="https://www.youtube.com/@mixplusmovie" target="_blank" style="justify-content: flex-start; gap: 10px;">
                <img src="svg/youtube.svg" style="width: 20px; height: 20px;" alt="YouTube">
                YouTube
              </a>
              <a href="https://www.aparat.com/mixplus.co" target="_blank" style="justify-content: flex-start; gap: 10px;">
                <img src="svg/aparat.svg" style="width: 20px; height: 20px;" alt="Aparat">
                Aparat
              </a>
              <a href="https://t.me/mixplus_co_bot" target="_blank" style="justify-content: flex-start; gap: 10px;">
                <img src="svg/telegram.svg" style="width: 20px; height: 20px;" alt="Telegram">
                Telegram
              </a>
             </div>
          </div>
        </div>
        
        <div class="mix-header__divider"></div>
        
        <a href="#" class="mix-header__item" id="catalog-link">
          <span class="text-fa">دانلود کاتالوگ</span>
          <span class="text-en hidden">Download Catalog</span>
        </a>
        
        <div class="mix-header__divider"></div>
        
        <div style="position: relative;">
          <button class="mix-header__item" id="lang-trigger">
            <span class="text-fa">فارسی</span>
            <span class="text-en hidden">English</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; margin-inline-start: 4px;"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="mix-megamenu" id="lang-dropdown" style="min-width: 180px;">
             <div class="mix-dropdown-simple">
              <a href="#" id="switch-lang">
                <span class="text-fa hidden">English</span>
                <span class="text-en hidden">فارسی</span>
              </a>
             </div>
          </div>
        </div>
        
        <div class="mix-header__divider"></div>
        
        <button class="mix-header__icon-btn" id="theme-toggle">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" id="theme-icon-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" id="theme-icon-moon" class="hidden"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </button>
      </nav>
    </div>
  </header>
`;


// ==================== INITIALIZATION & LOGIC ====================

function loadHeader() {
  const container = document.getElementById('header-container');
  if (container) {
    container.innerHTML = headerHTML;
    setupHeaderEvents();
    
    // --- TRIGGER EVENT ---
    // اطلاع به main.js که هدر کامل لود شد تا تنظیمات روی آن اعمال شود
    window.dispatchEvent(new Event('headerReady'));
  }
}

function setupHeaderEvents() {
  // --- Mega Menu Logic ---
  function setupMegaMenu(triggerId, megaId) {
    const trigger = document.getElementById(triggerId);
    const mega = document.getElementById(megaId);
    if (!trigger || !mega) return;
    
    let timeout;
    
    trigger.addEventListener('mouseenter', () => { 
      clearTimeout(timeout); 
      timeout = setTimeout(() => mega.classList.add('active'), 150); 
    });
    trigger.addEventListener('mouseleave', () => { 
      clearTimeout(timeout); 
      timeout = setTimeout(() => { if (!mega.matches(':hover')) mega.classList.remove('active'); }, 150); 
    });
    mega.addEventListener('mouseenter', () => { clearTimeout(timeout); mega.classList.add('active'); });
    mega.addEventListener('mouseleave', () => { timeout = setTimeout(() => mega.classList.remove('active'), 150); });
  }

  setupMegaMenu('products-trigger', 'products-mega');
  setupMegaMenu('aftersales-trigger', 'aftersales-mega');
  setupMegaMenu('social-trigger', 'social-dropdown'); 

  // --- Product Category Click (Desktop) ---
  document.querySelectorAll('.mix-megamenu__root-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
      document.querySelectorAll('.mix-megamenu__root-item').forEach(i => i.classList.remove('active'));
      this.classList.add('active');
      // Call global update function if exists
      if (typeof updateProductsSubmenu === 'function') {
        updateProductsSubmenu(this.getAttribute('data-category'));
      }
    });
  });

  // --- Lang Dropdown Click ---
  const langTrigger = document.getElementById('lang-trigger');
  const langDropdown = document.getElementById('lang-dropdown');
  if (langTrigger && langDropdown) {
    langTrigger.addEventListener('click', (e) => { 
      e.stopPropagation(); 
      langDropdown.classList.toggle('active'); 
    });
    document.getElementById('switch-lang').addEventListener('click', (e) => { 
      e.preventDefault(); 
      langDropdown.classList.remove('active'); 
      // Call global setLanguage if exists
      if (typeof setLanguage === 'function') setLanguage(typeof currentLang !== 'undefined' && currentLang === 'fa' ? 'en' : 'fa');
    });
  }

  // --- Mobile Navigation Logic ---
  const menuBtn = document.getElementById('mobile-menu-trigger');
  const fullMenu = document.getElementById('mobile-menu-full');
  const overlay = document.getElementById('mobile-overlay');
  const mobileCatalogBtn = document.getElementById('mobile-catalog-btn');

  if (menuBtn && fullMenu && overlay) {
    function toggleMobileMenu() {
      fullMenu.classList.toggle('active');
      overlay.classList.toggle('active');
    }
    
    menuBtn.addEventListener('click', toggleMobileMenu);
    overlay.addEventListener('click', toggleMobileMenu);
    
    const mobileLangBtn = document.getElementById('mobile-lang-link');
    const mobileThemeBtn = document.getElementById('mobile-theme-link');
    
    if (mobileLangBtn) {
      mobileLangBtn.addEventListener('click', () => {
        if (typeof setLanguage === 'function') setLanguage(typeof currentLang !== 'undefined' && currentLang === 'fa' ? 'en' : 'fa');
        toggleMobileMenu();
      });
    }
    if (mobileThemeBtn) {
      mobileThemeBtn.addEventListener('click', () => {
        if (typeof setTheme === 'function') setTheme(typeof currentTheme !== 'undefined' && currentTheme === 'light' ? 'dark' : 'light');
        toggleMobileMenu();
      });
    }
  }

  if (mobileCatalogBtn && typeof currentLang !== 'undefined') {
    mobileCatalogBtn.onclick = () => window.open(currentLang === 'fa' ? 'docs/catalog-fa.pdf' : 'docs/catalog-en.pdf', '_blank');
  }

  // --- Close dropdowns on body click ---
  document.addEventListener('click', () => {
    if (langDropdown) langDropdown.classList.remove('active');
    const socialDropdown = document.getElementById('social-dropdown');
    if (socialDropdown) socialDropdown.classList.remove('active');
  });

  // --- Global Header Listeners (Theme, Scroll) ---
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle && typeof setTheme === 'function') {
    themeToggle.addEventListener('click', () => {
      if (typeof setTheme === 'function') setTheme(typeof currentTheme !== 'undefined' && currentTheme === 'light' ? 'dark' : 'light');
    });
  }

  // --- Mobile Nav Scroll Logic ---
  const navBar = document.getElementById('mobile-nav-bar');
  const headerElement = document.getElementById('header');
  
  if (navBar && headerElement) {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 50) headerElement.classList.add('mix-header--scrolled');
      else headerElement.classList.remove('mix-header--scrolled');

      if (window.innerWidth < 969) {
        const hero = document.getElementById('hero-section');
        if (hero) {
          const heroRect = hero.getBoundingClientRect();
          if (heroRect.bottom < window.innerHeight) {
            navBar.classList.add('visible');
          } else {
            navBar.classList.remove('visible');
          }
        }
      }
    });
  }
}

// Load header when DOM is ready
document.addEventListener('DOMContentLoaded', loadHeader);