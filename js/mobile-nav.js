/**
 * MOBILE NAVIGATION COMPONENT - MixPlus Website (Expanded Bottom Bar Mode)
 * نوار پایین با قابلیت گشادشون شدن برای دسترسی سریع
 */

// ==================== HTML STRING ====================
const mobileNavHTML = `
  <!-- MOBILE BOTTOM NAV BAR -->
  <nav class="mix-mobile-bottom-bar" id="mobile-nav-bar">
    
    <!-- آیتم 1: خانه -->
    <div class="mobile-nav-item" onclick="window.location.href='index.html'">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
      <span class="text-fa">خانه</span><span class="text-en hidden">Home</span>
    </div>

    <!-- آیتم 2: محصولات -->
    <div class="mobile-nav-item" onclick="window.location.href='products.html'">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
      <span class="text-fa">محصولات</span><span class="text-en hidden">Prod</span>
    </div>

    <!-- آیتم 3: کاتالوگ -->
    <div class="mobile-nav-item" id="mobile-catalog-btn">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
      <span class="text-fa">کاتالوگ</span><span class="text-en hidden">Cat</span>
    </div>

    <!-- آیتم 4: منو (گشادشون شونده) -->
    <div class="mobile-nav-item" id="mobile-menu-trigger">
      <span class="text-fa">منو</span><span class="text-en hidden">Menu</span>
      <!-- فلش کوچک برای نمایش گشادشون بودن -->
      <svg class="mobile-nav-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="6 9 12 15 18 9"></polyline></svg>
    </div>

  </nav>

  <!-- بخش گشادشونده (Expanded Section) -->
  <div class="mobile-expanded-section" id="mobile-expanded-menu">
    
    <!-- دکمه 1: درباره ما -->
    <div class="mobile-nav-item" onclick="window.location.href='about.html'">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="7" r="4"></circle><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><path d="M12 11v9"></path><path d="M8 21h8"></path></svg>
      <span class="text-fa">درباره ما</span><span class="text-en hidden">About</span>
    </div>

    <!-- دکمه 2: نمایندگی‌ها -->
    <div class="mobile-nav-item" onclick="window.location.href='dealers.html'">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 21h18M5 21V7l8-4v14"></path><path d="M19 21V5l-8 4v14"></path></svg>
      <span class="text-fa">نمایندگی‌ها</span><span class="text-en hidden">Dealers</span>
    </div>

    <!-- دکمه 3: تغییر زبان -->
    <div class="mobile-nav-item" id="mobile-lang-link">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10"></path><path d="M12 12a2 2 0 0 1 2-2"></path><path d="M12 17a2 2 0 0 1 2-2"></path></svg>
      <span class="text-fa">زبان</span><span class="text-en hidden">Lang</span>
    </div>

    <!-- دکمه 4: تغییر تم -->
    <div class="mobile-nav-item" id="mobile-theme-link">
      <!-- آیکون ماه (تم روشن) -->
      <svg class="theme-icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2"></path><path d="M12 21v-2"></path><path d="M4.22 4.22l5.64 5.64"></path><path d="M18.36 18.36l5.64-5.64"></path><path d="M1 12h2"></path><path d="M21 12h2"></path><path d="M4.22 19.78l1.42-1.42"></path><path d="M18.36 4.22l1.42 1.42"></path></svg>
    </div>

  </div>
`;


// ==================== INITIALIZATION & LOGIC ====================

function loadMobileNav() {
  if (document.getElementById('mobile-nav-bar')) return; // Prevent duplicate load

  document.body.insertAdjacentHTML('beforeend', mobileNavHTML);
  setupMobileEvents();
}

function setupMobileEvents() {
  const menuTrigger = document.getElementById('mobile-menu-trigger');
  const expandedMenu = document.getElementById('mobile-expanded-menu');
  const mobileCatalogBtn = document.getElementById('mobile-catalog-btn');
  const mobileLangBtn = document.getElementById('mobile-lang-link');
  const mobileThemeBtn = document.getElementById('mobile-theme-link');
  const arrowIcon = document.querySelector('.mobile-nav-arrow');

  // --- TOGGLE EXPANDED MENU ---
  function toggleExpandedMenu() {
    if (expandedMenu) {
      const isOpen = expandedMenu.classList.toggle('open');
      
      // چرخش فلش (Arrow Up vs Arrow Down)
      // چون فلش اولیه پایین است (Rotate 180)، وقتی باز شود باید بالا شود (Rotate 0)
      if (arrowIcon) {
        if (isOpen) {
          arrowIcon.style.transform = 'rotate(0deg)'; // باز شده، فلش بالا
        } else {
          arrowIcon.style.transform = 'rotate(180deg)'; // بسته شده، فلش پایین
        }
      }
    }
  }

  if (menuTrigger) {
    menuTrigger.addEventListener('click', (e) => {
      e.stopPropagation(); // جلوگیری از کلیک روی خودش
      toggleExpandedMenu();
    });
  }

  // --- بستن منو با کلیک در فضای بیرون ---
  document.addEventListener('click', (e) => {
    if (expandedMenu && expandedMenu.classList.contains('open')) {
      if (!expandedMenu.contains(e.target)) {
        expandedMenu.classList.remove('open');
        if (arrowIcon) arrowIcon.style.transform = 'rotate(180deg)';
      }
    }
  });

  // --- CATALOG BUTTON ---
  if (mobileCatalogBtn) {
    mobileCatalogBtn.onclick = () => {
      // بستن منو در صورت باز بودن
      if (expandedMenu) expandedMenu.classList.remove('open');
      if (arrowIcon) arrowIcon.style.transform = 'rotate(180deg)';

      if (typeof currentLang !== 'undefined') {
        window.open(currentLang === 'fa' ? 'docs/catalog-fa.pdf' : 'docs/catalog-en.pdf', '_blank');
      } else {
        // فال‌بک
        window.open('docs/catalog-fa.pdf', '_blank');
      }
    };
  }

  // --- LANGUAGE BUTTON ---
  if (mobileLangBtn) {
    mobileLangBtn.onclick = () => {
      if (expandedMenu) expandedMenu.classList.remove('open');
      if (arrowIcon) arrowIcon.style.transform = 'rotate(180deg)';

      if (typeof setLanguage === 'function') {
        setLanguage(typeof currentLang !== 'undefined' && currentLang === 'fa' ? 'en' : 'fa');
      }
    };
  }

  // --- THEME BUTTON ---
  if (mobileThemeBtn) {
    mobileThemeBtn.onclick = () => {
      if (expandedMenu) expandedMenu.classList.remove('open');
      if (arrowIcon) arrowIcon.style.transform = 'rotate(180deg)';

      if (typeof setTheme === 'function') {
        setTheme(typeof currentTheme !== 'undefined' && currentTheme === 'light' ? 'dark' : 'light');
      }
    };
  }

  // --- استایل دینامیک برای آیکون تم (ماه و خورشید) ---
  function updateThemeIcon() {
    if (typeof currentTheme === 'undefined') return;
    
    const sunIcon = document.querySelector('.theme-icon-sun');
    // می‌توانیم اینجا لوگوی خورشید را هم اضافه کنیم اگر خواستید، فعلا فقط سوییچ ساده است
    if (sunIcon) {
      if (currentTheme === 'dark') {
        sunIcon.style.stroke = 'currentColor'; // آیکون ساده در حالت تاریک
      } else {
        sunIcon.style.stroke = 'currentColor';
      }
    }
  }
  
  // گوش دادن به تغییر تم
  // چون main.js متغیر را ست می‌کند، باید تغییر را شناسایی کنیم
  // یک راه ساده اینه که چک کنیم کلاس body یا html رو هر چند ثانیه چک کنیم
  setInterval(updateThemeIcon, 1000);

} // <-- THIS CLOSING BRACE WAS MISSING!

// --- LOGIC FOR FOOTER/MOBILE SYNC (اختیاری) ---
// اگر نیاز دارید که نوار پایین فقط در موبایل نمایش داده شود
// اما استایل CSS (max-width: 968px) قبلاً این کار را انجام می‌دهد

// Load when DOM is ready
document.addEventListener('DOMContentLoaded', loadMobileNav);