/**
 * MAIN LOGIC - MixPlus Website (Updated)
 * رفع مشکل Race Condition با استفاده از Event Listener
 */

// ==================== CONFIGURATION & DATA ====================

const videos = {
  aparat: 'https://www.aparat.com/video/video/embed/videohash/rqy7870/vt/frame',
  youtube: 'https://www.youtube.com/embed/eaICa0IHvu0'
};

const heroVideos = [
  'videos/hero-01.mp4',
  'videos/hero-02.mp4',
  'videos/hero-03.mp4',
  'videos/hero-04.mp4'
];

const categories = {
  hob: { fa: [{ name: 'اجاق استیل' }, { name: 'اجاق شیشه‌ای' }], en: [{ name: 'Steel Hob' }, { name: 'Glass Hob' }] },
  sink: { fa: [{ name: 'سینک دست‌ساز' }, { name: 'گرانیتی' }], en: [{ name: 'Handmade' }, { name: 'Granite' }] },
  oven: { fa: [{ name: 'مشاهده همه' }], en: [{ name: 'View All' }] },
  hood: { fa: [{ name: 'هود توکار' }, { name: 'هود دیواری' }], en: [{ name: 'Built-in' }, { name: 'Wall' }] }
};

const heroSlides = {
  fa: [
    { title: 'کیفیت برتر با طراحی ایتالیایی', subtitle: 'محصولات آشپزخانه که زندگی شما را متحول می‌کنند' },
    { title: 'زیبایی در هر جزئیات', subtitle: 'تلفیق هنر و مهندسی در محصولات میکس‌پلاس' },
    { title: 'آسایش و راحتی واقعی', subtitle: 'تجربه آشپزی حرفه‌ای در خانه' }
  ],
  en: [
    { title: 'Premium Quality with Italian Design', subtitle: 'Kitchen products that transform your life' },
    { title: 'Beauty in Every Detail', subtitle: 'Combining art and engineering in MixPlus products' },
    { title: 'True Comfort and Ease', subtitle: 'Experience professional cooking at home' }
  ]
};

// ==================== GLOBAL STATE ====================

let currentLang = localStorage.getItem('mix_lang') || 'fa';
let currentTheme = localStorage.getItem('mix_theme') || 'light';

// ==================== THEME LOGIC ====================

window.setTheme = function(theme) {
  currentTheme = theme;
  const html = document.documentElement;
  
  // Set Attributes
  html.setAttribute('data-theme', theme);
  html.classList.remove('theme-light', 'theme-dark');
  html.classList.add(`theme-${theme}`);
  
  // Update Icons (if they exist)
  const iconSun = document.getElementById('theme-icon-sun');
  const iconMoon = document.getElementById('theme-icon-moon');
  
  if (iconSun && iconMoon) {
    iconSun.classList.toggle('hidden', theme === 'dark');
    iconMoon.classList.toggle('hidden', theme === 'light');
  }

  // Update Logos (Light/Dark versions)
  const logoLight = document.querySelector('.logo-light');
  const logoDark = document.querySelector('.logo-dark');
  const footerLogoLight = document.querySelector('.footer-logo-light');
  const footerLogoDark = document.querySelector('.footer-logo-dark');
  
  if (theme === 'dark') {
    if (logoLight) logoLight.classList.remove('hidden');
    if (logoDark) logoDark.classList.add('hidden');
    if (footerLogoLight) footerLogoLight.classList.remove('hidden');
    if (footerLogoDark) footerLogoDark.classList.add('hidden');
  } else {
    if (logoLight) logoLight.classList.add('hidden');
    if (logoDark) logoDark.classList.remove('hidden');
    if (footerLogoLight) footerLogoLight.classList.add('hidden');
    if (footerLogoDark) footerLogoDark.classList.remove('hidden');
  }

  localStorage.setItem('mix_theme', theme);
};

// ==================== LANGUAGE LOGIC ====================

window.setLanguage = function(lang, save = true) {
  currentLang = lang;
  const html = document.documentElement;
  const isFa = lang === 'fa';
  
  // Update HTML Tag Attributes
  html.setAttribute('lang', lang);
  html.setAttribute('dir', isFa ? 'rtl' : 'ltr');
  html.classList.remove('lang-fa', 'lang-en');
  html.classList.add(`lang-${lang}`);

  // Toggle Text Visibility
  document.querySelectorAll('.text-fa').forEach(el => el.classList.toggle('hidden', !isFa));
  document.querySelectorAll('.text-en').forEach(el => el.classList.toggle('hidden', isFa));

  // Update Dynamic Links (if elements exist)
  const catalogLink = document.getElementById('catalog-link');
  const catalogHeroBtn = document.getElementById('catalog-hero-btn');
  const catalogPath = isFa ? 'docs/catalog-fa.pdf' : 'docs/catalog-en.pdf';
  
  if (catalogLink) catalogLink.href = catalogPath;
  if (catalogHeroBtn) catalogHeroBtn.href = catalogPath;

  // Update Iframe Source (Factory Video)
  const iframe = document.getElementById('factory-iframe');
  if (iframe) {
    iframe.src = isFa ? videos.aparat : videos.youtube;
  }

  // Update Header UI Texts
  const switchBtn = document.getElementById('switch-lang');
  const mobileLangBtn = document.getElementById('mobile-lang-link');
  
  if (switchBtn) {
    switchBtn.innerHTML = isFa 
      ? '<span class="text-en">English</span>' 
      : '<span class="text-fa">فارسی</span>';
  }
  if (mobileLangBtn) {
    mobileLangBtn.innerHTML = isFa 
      ? '<span class="text-en">Switch to English</span>' 
      : '<span class="text-fa">تغییر به فارسی</span>';
  }

  // Reset Animations
  resetHeroTextAnimation();

  if (save) localStorage.setItem('mix_lang', lang);
};

// ==================== PRODUCT SUBMENU LOGIC ====================

window.updateProductsSubmenu = function(category = 'hob') {
  const subs = categories[category][currentLang];
  const container = document.getElementById('products-subs');
  if (!container || !subs) return;
  
  container.innerHTML = '';
  subs.forEach(sub => {
    const link = document.createElement('a');
    link.href = '#';
    link.className = 'mix-megamenu__sub-item';
    link.textContent = sub.name;
    container.appendChild(link);
  });
};

// ==================== HERO ANIMATIONS ====================

let heroInterval = null;
let heroTimeouts = [];

function clearHeroTimers() {
  if (heroInterval) clearInterval(heroInterval);
  heroTimeouts.forEach(t => clearTimeout(t));
  heroTimeouts = [];
}

function setupHeroTextLoop() {
  const contentWrapper = document.querySelector('.mix-hero__content');
  const titleEl = document.getElementById('hero-title-text');
  const subEl = document.getElementById('hero-subtitle-text');

  // اگر المان‌های هیرو در صفحه نباشند
  if (!contentWrapper || !titleEl || !subEl) return;
  
  const slides = heroSlides[currentLang];
  let index = 0;

  const typeText = (element, text, speed = 30, callback) => {
    element.textContent = '';
    let i = 0;
    const timer = setInterval(() => {
      element.textContent = text.substring(0, i + 1);
      i++;
      if (i >= text.length) {
        clearInterval(timer);
        if (callback) callback();
      }
    }, speed);
    heroTimeouts.push(timer);
  };

  const runCycle = () => {
    if (!document.body.contains(contentWrapper)) {
       clearHeroTimers();
       return; 
    }

    const slide = slides[index];

    contentWrapper.style.opacity = '0';
    
    heroTimeouts.push(setTimeout(() => {
      titleEl.textContent = slide.title;
      subEl.textContent = ''; 
      contentWrapper.style.opacity = '1';
      
      heroTimeouts.push(setTimeout(() => {
        typeText(subEl, slide.subtitle, 30, () => {
          heroTimeouts.push(setTimeout(() => {
            index = (index + 1) % slides.length;
            runCycle();
          }, 5000));
        });
      }, 500)); 

    }, 500)); 
  };

  runCycle();
}

function resetHeroTextAnimation() {
  clearHeroTimers();
  setupHeroTextLoop();
}

let currentVideoIndex = 0;
function setupHeroVideoLoop() {
  const videoElement = document.getElementById('hero-video');
  if(!videoElement) return; 
  
  videoElement.onended = function() {
    currentVideoIndex++;
    if (currentVideoIndex >= heroVideos.length) currentVideoIndex = 0;
    
    videoElement.style.opacity = 0;
    
    setTimeout(() => {
      videoElement.src = heroVideos[currentVideoIndex];
      videoElement.load();
      videoElement.play().then(() => { videoElement.style.opacity = 1; }).catch(() => {});
    }, 500);
  };
  
  videoElement.onerror = function() { videoElement.onended(); };
}

// ==================== OBSERVERS (REVEAL EFFECT) ====================

function setupObservers() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ==================== INITIALIZATION ====================

function init() {
  window.scrollTo(0, 0);
  
  // Apply saved settings immediately
  window.setTheme(currentTheme);
  window.setLanguage(currentLang, false); 
  
  // Start features
  setupObservers();
  setupHeroVideoLoop();
  setupHeroTextLoop(); 
}

// Run Init when DOM is ready
document.addEventListener('DOMContentLoaded', init);

// ==================== EVENT LISTENERS FOR COMPONENTS (FIX FOR RACE CONDITION) ====================
// وقتی هدر یا فوتر لود شد، دوباره تنظیمات اعمال شود تا مشکلات ظاهری حل شود

window.addEventListener('headerReady', () => {
  console.log('Header loaded, applying theme/lang fixes...');
  window.setTheme(localStorage.getItem('mix_theme') || 'light');
  window.setLanguage(localStorage.getItem('mix_lang') || 'fa', false);
});

window.addEventListener('footerReady', () => {
  console.log('Footer loaded, applying theme/lang fixes...');
  window.setTheme(localStorage.getItem('mix_theme') || 'light');
  window.setLanguage(localStorage.getItem('mix_lang') || 'fa', false);
});