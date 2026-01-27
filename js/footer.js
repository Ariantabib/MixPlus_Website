/**
 * FOOTER COMPONENT - MixPlus Website
 * این فایل شامل HTML کامل فوتر است.
 */

// ==================== HTML STRING ====================
const footerHTML = `
  <!-- FOOTER -->
  <footer class="mix-footer">
    <div class="mix-footer__grid">
      <!-- Column 1: Brand & Description -->
      <div class="mix-footer__col">
        <img src="images/logos/logo-light.svg" alt="MixPlus" class="footer-logo-light" style="height: 40px; margin-bottom: 1.5rem;">
        <img src="images/logos/logo-dark.svg" alt="MixPlus" class="footer-logo-dark hidden" style="height: 40px; margin-bottom: 1.5rem;">
        <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.8;">
          <span class="text-fa">ما با الهام از طراحی ایتالیایی و استفاده از بهترین مواد اولیه، محصولاتی تولید می‌کنیم که علاوه بر زیبایی، دوام و کارایی بالایی دارند.</span>
          <span class="text-en hidden">Inspired by Italian design and using the finest raw materials, we manufacture products that combine beauty with durability and high performance.</span>
        </p>
      </div>
      
      <!-- Column 2: Quick Links -->
      <div class="mix-footer__col">
        <h4>
          <span class="text-fa">لینک‌های سریع</span>
          <span class="text-en hidden">Quick Links</span>
        </h4>
        <ul class="mix-footer__links">
          <li><a href="about.html"><span class="text-fa">درباره ما</span><span class="text-en hidden">About Us</span></a></li>
          <li><a href="products.html"><span class="text-fa">محصولات</span><span class="text-en hidden">Products</span></a></li>
          <li><a href="#"><span class="text-fa">نمایندگی‌ها</span><span class="text-en hidden">Dealers</span></a></li>
          <li><a href="contact.html"><span class="text-fa">تماس با ما</span><span class="text-en hidden">Contact Us</span></a></li>
        </ul>
      </div>
      
      <!-- Column 3: Customer Service -->
      <div class="mix-footer__col">
        <h4>
          <span class="text-fa">خدمات مشتریان</span>
          <span class="text-en hidden">Customer Service</span>
        </h4>
        <ul class="mix-footer__links">
          <li><a href="#"><span class="text-fa">شرایط گارانتی</span><span class="text-en hidden">Warranty</span></a></li>
          <li><a href="#"><span class="text-fa">شرایط بازگشت کالا</span><span class="text-en hidden">Return Policy</span></a></li>
          <li><a href="#"><span class="text-fa">سوالات متداول</span><span class="text-en hidden">FAQ</span></a></li>
          <li><a href="#"><span class="text-fa">درخواست نصب</span><span class="text-en hidden">Installation Request</span></a></li>
        </ul>
      </div>
      
      <!-- Column 4: Contact Info -->
      <div class="mix-footer__col">
        <h4>
          <span class="text-fa">تماس با ما</span>
          <span class="text-en hidden">Contact Us</span>
        </h4>
        <ul class="mix-footer__links">
          <li>
             <span class="text-fa">تهران، تهرانپارس، خیابان اتحاد، پلاک 1+66</span>
             <span class="text-en hidden">Tehran, Tehranpars, Ettehad St, No 1+66</span>
          </li>
          <li>
             <span class="text-fa">شماره تماس: 0217353</span>
             <span class="text-en hidden">Phone: 0217353</span>
          </li>
          <li>
             <span class="text-fa">خدمات پس از فروش: 02174905</span>
             <span class="text-en hidden">After-Sales: 02174905</span>
          </li>
          <li>info@mixplus.co</li>
        </ul>
      </div>
    </div>
    
    <div class="mix-footer__bottom">
      <p style="color: var(--text-muted); font-size: 0.9rem;">
        <span class="text-fa">© ۱۴۰۳ میکس‌پلاس. تمامی حقوق محفوظ است.</span>
        <span class="text-en hidden">© 2024 MixPlus. All rights reserved.</span>
      </p>
      <div style="display: flex; gap: 1.5rem;">
        <a href="#" class="mix-footer__link" style="font-size: 0.9rem;">
          <span class="text-fa">حریم خصوصی</span><span class="text-en hidden">Privacy Policy</span>
        </a>
        <a href="#" class="mix-footer__link" style="font-size: 0.9rem;">
          <span class="text-fa">قوانین استفاده</span><span class="text-en hidden">Terms of Use</span>
        </a>
      </div>
    </div>
  </footer>
`;

// ==================== INITIALIZATION ====================

function loadFooter() {
  const container = document.getElementById('footer-container');
  if (container) {
    container.innerHTML = footerHTML;
    
    // اضافه کردن این خط ضروری است
    window.dispatchEvent(new Event('footerReady'));
  }
}

// Load footer when DOM is ready
document.addEventListener('DOMContentLoaded', loadFooter);
