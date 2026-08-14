// ================================================================
// 1. منوی همبرگر
// ================================================================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
    hamburger.classList.toggle('active');
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('show');
      hamburger.classList.remove('active');
    });
  });
}

// ================================================================
// 2. هدر اسکرول
// ================================================================
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (header) {
    header.classList.toggle('scrolled', window.scrollY > 50);
  }
});

// ================================================================
// 3. شمارشگر آمار
// ================================================================
const statNumbers = document.querySelectorAll('.stat-number');
if (statNumbers.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        let current = 0;
        const step = Math.ceil(target / 50);
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            el.textContent = target;
            clearInterval(timer);
          } else {
            el.textContent = current;
          }
        }, 30);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  statNumbers.forEach(num => observer.observe(num));
}

// ================================================================
// 4. گالری
// ================================================================
const galleryItems = [
  // ===== طبیعت =====
  { src: 'https://s25.uupload.ir/files/chaybagh/cbproject/Gallery/tabiat/ima5545ges.jpg', category: 'nature', caption: '' },
  { src: 'https://s25.uupload.ir/files/chaybagh/cbproject/Gallery/tabiat/im45454ages%20(1).jpg', category: 'nature', caption: '' },
  { src: 'https://s25.uupload.ir/files/chaybagh/cbproject/Gallery/tabiat/chaibagh_uspace_1662217327.jpg', category: 'nature', caption: '' },
  { src: 'https://s25.uupload.ir/files/chaybagh/cbproject/Gallery/tabiat/47485241-3397-l__1644.jpg', category: 'nature', caption: '' },
  { src: 'https://s25.uupload.ir/files/chaybagh/cbproject/Gallery/tabiat/47413529-7788-l__4667.jpg', category: 'nature', caption: '' },
  { src: 'https://s25.uupload.ir/files/chaybagh/cbproject/Gallery/tabiat/4226589_16095545--چای-باغ.jpeg', category: 'nature', caption: '' },
  { src: 'https://s25.uupload.ir/files/chaybagh/cbproject/Gallery/tabiat/images%20(1).jpg', category: 'nature', caption: '' },
  // ===== کشاورزی =====
  { src: 'https://s5.uupload.ir/files/chaybagh/cbproject/Gallery/keshavarzi/IMG_20260729_073416_202.jpg', category: 'agriculture', caption: '' },
  { src: 'https://s5.uupload.ir/files/chaybagh/cbproject/Gallery/keshavarzi/IMG_20260729_073410_955.jpg', category: 'agriculture', caption: '' },
  { src: 'https://s5.uupload.ir/files/chaybagh/cbproject/Gallery/keshavarzi/IMG_20260729_073405_703.jpg', category: 'agriculture', caption: '' },
  { src: 'https://s5.uupload.ir/files/chaybagh/cbproject/Gallery/keshavarzi/IMG_20260729_073347_610.jpg', category: 'agriculture', caption: '' },
  // ===== اماکن =====
  { src: 'https://s25.uupload.ir/files/chaybagh/cbproject/Gallery/amaken/IMG_20260724_222449.jpg', category: 'places', caption: '' },
  { src: 'https://s41.uupload.ir/files/chaybagh/cbproject/Gallery/amaken/images%20(2).jpg', category: 'places', caption: '' },
  { src: 'https://s41.uupload.ir/files/chaybagh/cbproject/Gallery/amaken/image_2d6b5c01-03f7-4a4d-834b-28086ac67ac3.jpg', category: 'places', caption: '' },
  { src: 'https://s41.uupload.ir/files/chaybagh/cbproject/Gallery/amaken/im5455454ages%20(2).jpg', category: 'places', caption: '' },
  { src: 'https://s41.uupload.ir/files/chaybagh/cbproject/Gallery/amaken/ariya_uspace_1754478189.webp', category: 'places', caption: '' },
  { src: 'https://s41.uupload.ir/files/chaybagh/cbproject/Gallery/amaken/ariya_uspace_1753963524.webp', category: 'places', caption: '' },
  { src: 'https://s41.uupload.ir/files/chaybagh/cbproject/Gallery/amaken/65581207Master.jpg', category: 'places', caption: '' },
  { src: 'https://s41.uupload.ir/files/chaybagh/cbproject/Gallery/amaken/پل_شاپور_شیرگاه.jpg', category: 'places', caption: '' },
  { src: 'https://s41.uupload.ir/files/chaybagh/cbproject/Gallery/amaken/IMG_20260729_055918_619.jpg', category: 'places', caption: '' },
  { src: 'https://s41.uupload.ir/files/chaybagh/cbproject/Gallery/amaken/IMG_20260729_055219.jpg', category: 'places', caption: '' },
  { src: 'https://s41.uupload.ir/files/chaybagh/cbproject/Gallery/amaken/IMG_20260729_055211.jpg', category: 'places', caption: '' },
  { src: 'https://s41.uupload.ir/files/chaybagh/cbproject/Gallery/amaken/IMG_20260729_055201.jpg', category: 'places', caption: '' },
  { src: 'https://s41.uupload.ir/files/chaybagh/cbproject/Gallery/amaken/IMG_20260729_055148.jpg', category: 'places', caption: '' },
  { src: 'https://s41.uupload.ir/files/chaybagh/cbproject/Gallery/amaken/images.jpg', category: 'places', caption: '' },
  { src: 'https://s41.uupload.ir/files/chaybagh/cbproject/Gallery/amaken/images%20(3).jpg', category: 'places', caption: '' },
  // ===== مراسمات =====
  { src: 'https://s33.uupload.ir/files/chaybagh/cbproject/Gallery/marasemat/photo28821293631.jpg', category: 'ceremonies', caption: '' },
  { src: 'https://s33.uupload.ir/files/chaybagh/cbproject/Gallery/marasemat/IMG_20260729_060811_074.jpg', category: 'ceremonies', caption: '' },
  { src: 'https://s33.uupload.ir/files/chaybagh/cbproject/Gallery/marasemat/IMG_20260729_060806_658.jpg', category: 'ceremonies', caption: '' },
  { src: 'https://s33.uupload.ir/files/chaybagh/cbproject/Gallery/marasemat/IMG_20260729_060716_897.jpg', category: 'ceremonies', caption: '' }
];

const galleryGrid = document.getElementById('galleryGrid');
const galleryFilter = document.getElementById('galleryFilter');
const toggleBtn = document.getElementById('galleryToggleBtn');
let isFullMode = false;
let currentCategory = 'all';

function getCategoryLabel(cat) {
  const map = {
    nature: 'طبیعت',
    agriculture: 'کشاورزی',
    places: 'اماکن',
    ceremonies: 'مراسمات'
  };
  return map[cat] || cat;
}

function renderGallery(category) {
  const filtered = category === 'all' ? galleryItems : galleryItems.filter(item => item.category === category);
  galleryGrid.innerHTML = '';
  filtered.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.innerHTML = `
      <img src="${item.src}" alt="" loading="lazy" />
      <div class="overlay">
        <i class="fas fa-search-plus" style="font-size:1.8rem; color:#fff; opacity:0.8;"></i>
      </div>
    `;
    div.addEventListener('click', () => {
      const realIndex = galleryItems.indexOf(item);
      openLightbox(realIndex);
    });
    galleryGrid.appendChild(div);
  });
  galleryGrid.classList.toggle('compact', !isFullMode);
  galleryGrid.classList.toggle('full', isFullMode);
}

if (galleryGrid) renderGallery('all');

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    isFullMode = !isFullMode;
    if (isFullMode) {
      galleryFilter.style.display = 'flex';
      toggleBtn.innerHTML = '<i class="fas fa-compress-alt"></i> بستن گالری';
      toggleBtn.className = 'btn btn-outline';
      document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
    } else {
      galleryFilter.style.display = 'none';
      toggleBtn.innerHTML = '<i class="fas fa-images"></i> مشاهده همه تصاویر';
      toggleBtn.className = 'btn btn-primary';
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      document.querySelector('.filter-btn[data-filter="all"]')?.classList.add('active');
      currentCategory = 'all';
      renderGallery('all');
    }
    renderGallery(currentCategory);
  });
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (!isFullMode) return;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.filter;
    renderGallery(currentCategory);
  });
});

// ================================================================
// 5. لایت‌باکس
// ================================================================
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbCaption = document.getElementById('lbCaption');
let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  updateLightbox();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function updateLightbox() {
  const img = galleryItems[currentIndex];
  lbImg.src = img.src;
  lbImg.alt = '';
  lbCaption.textContent = '';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

if (lightbox) {
  document.getElementById('lbClose').addEventListener('click', closeLightbox);
  document.getElementById('lbPrev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    updateLightbox();
  });
  document.getElementById('lbNext').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    updateLightbox();
  });
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % galleryItems.length;
      updateLightbox();
    }
    if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      updateLightbox();
    }
  });
}

// ================================================================
// 6. کارت‌های رزرو
// ================================================================
const bookings = [
  { name: 'متل آریا', price: 850000, img: 'https://s25.uupload.ir/files/chaybagh/cbproject/body/eghamatgah/ChatGPT%20Image%20۸%20مرداد%20۱۴۰۵،%20۰۵_۲۰_۲۰.png', features: ['نهار', 'شام'] },
  { name: 'خانه بوم‌گردی مهر', price: 620000, img: 'https://s25.uupload.ir/files/chaybagh/cbproject/body/eghamatgah/ChatGPT%20Image%20۸%20مرداد%20۱۴۰۵،%20۰۵_۲۰_۳۰.png', features: ['سنتی', 'حیاط'] },
  { name: 'ویلای جنگلی', price: 1200000, img: 'https://s25.uupload.ir/files/chaybagh/cbproject/body/eghamatgah/ChatGPT%20Image%20۸%20مرداد%20۱۴۰۵،%20۰۵_۲۰_۴۲.png', features: ['جنگل', 'استخر'] },
];

const bookingGrid = document.getElementById('bookingGrid');
if (bookingGrid) {
  bookings.forEach(item => {
    const div = document.createElement('div');
    div.className = 'booking-card';
    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}" loading="lazy" />
      <div class="body">
        <h3>${item.name}</h3>
        <div class="features">
          <span><i class="fas fa-user"></i> ${item.features.length} نفر</span>
          ${item.features.map(f => `<span><i class="fas fa-check"></i> ${f}</span>`).join('')}
        </div>
        <div><span class="price">${item.price.toLocaleString()}</span> <span class="unit">تومان / شب</span></div>
        <button class="btn btn-primary" style="margin-top:10px;" onclick="window.openModal()">رزرو</button>
      </div>
    `;
    bookingGrid.appendChild(div);
  });
}

// ================================================================
// 7. مودال رزرو
// ================================================================
const modal = document.getElementById('bookingModal');
const modalClose = document.getElementById('modalClose');

window.openModal = function() {
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
};

function closeModal() {
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

if (modal) {
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

document.getElementById('bookingForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    name: document.getElementById('bookName').value.trim(),
    phone: document.getElementById('bookPhone').value.trim(),
    checkin: document.getElementById('bookCheckin').value,
    checkout: document.getElementById('bookCheckout').value,
    guests: document.getElementById('bookGuests').value,
  };
  if (!data.name || !data.phone || !data.checkin || !data.checkout) {
    alert('لطفاً تمام فیلدها را پر کنید.');
    return;
  }
  let list = JSON.parse(localStorage.getItem('reservations')) || [];
  list.push(data);
  localStorage.setItem('reservations', JSON.stringify(list));
  alert('رزرو شما با موفقیت ثبت شد.');
  document.getElementById('bookingForm').reset();
  closeModal();
});

// ================================================================
// 8. فرم تماس
// ================================================================
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value.trim(),
  };
  if (!data.name || !data.email || !data.message) {
    alert('لطفاً نام، ایمیل و پیام را پر کنید.');
    return;
  }
  let list = JSON.parse(localStorage.getItem('messages')) || [];
  list.push(data);
  localStorage.setItem('messages', JSON.stringify(list));
  alert('پیام شما با موفقیت ارسال شد.');
  document.getElementById('contactForm').reset();
});

// ================================================================
// 9. دکمه برگشت به بالا
// ================================================================
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('show', window.scrollY > 400);
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ================================================================
// 10. توابع تاریخ شمسی برای ادمین
// ================================================================
function toPersianDate(dateStr) {
  if (!dateStr) return '-';
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('fa-IR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'Asia/Tehran'
    });
  } catch {
    return dateStr;
  }
}

function toPersianDateTime(dateStr) {
  if (!dateStr) return '-';
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('fa-IR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Tehran'
    });
  } catch {
    return dateStr;
  }
}

// ================================================================
// 11. مدیریت رزروها (ادمین)
// ================================================================
function fixReservationsData() {
  let data = JSON.parse(localStorage.getItem('reservations')) || [];
  let changed = false;
  data.forEach(item => {
    if (!item.createdAt) {
      item.createdAt = new Date().toISOString();
      changed = true;
    }
  });
  if (changed) localStorage.setItem('reservations', JSON.stringify(data));
  return data;
}

function updateStats(data) {
  const totalEl = document.getElementById('totalCount');
  const todayEl = document.getElementById('todayCount');
  if (totalEl) totalEl.textContent = data.length;
  if (todayEl) {
    const today = new Date().toISOString().slice(0, 10);
    const todayReserves = data.filter(item => item.checkin === today).length;
    todayEl.textContent = todayReserves;
  }
}

function deleteReservation(index) {
  if (!confirm('آیا از حذف این رزرو اطمینان دارید؟')) return;
  let data = JSON.parse(localStorage.getItem('reservations')) || [];
  data.splice(index, 1);
  localStorage.setItem('reservations', JSON.stringify(data));
  loadReservations();
}

function clearAll() {
  if (!confirm('⚠️ همه رزروها به طور دائمی حذف شوند؟')) return;
  localStorage.removeItem('reservations');
  loadReservations();
}

function loadReservations() {
  const container = document.getElementById('reservationsList');
  if (!container) return;
  const data = fixReservationsData();
  updateStats(data);

  if (data.length === 0) {
    container.innerHTML = '<div class="empty">هیچ رزروی ثبت نشده است.</div>';
    return;
  }

  let html = `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>#</th><th>نام</th><th>تلفن</th>
            <th>تاریخ ورود (شمسی)</th>
            <th>تاریخ خروج (شمسی)</th>
            <th>تعداد مهمان</th>
            <th>تاریخ ثبت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
  `;
  data.forEach((item, index) => {
    html += `
      <tr>
        <td>${index + 1}</td>
        <td>${item.name || '-'}</td>
        <td>${item.phone || '-'}</td>
        <td>
          ${toPersianDate(item.checkin)}
          <span class="date-miladi">${item.checkin || '-'}</span>
        </td>
        <td>
          ${toPersianDate(item.checkout)}
          <span class="date-miladi">${item.checkout || '-'}</span>
        </td>
        <td><span class="badge">${item.guests || '۰'}</span></td>
        <td>${toPersianDateTime(item.createdAt)}</td>
        <td><button class="btn-sm" onclick="deleteReservation(${index})">حذف</button></td>
      </tr>
    `;
  });
  html += `</tbody></table></div>`;
  container.innerHTML = html;
}

// بارگذاری اولیه ادمین
if (document.getElementById('reservationsList')) {
  window.deleteReservation = deleteReservation;
  window.clearAll = clearAll;
  window.loadReservations = loadReservations;
  window.onload = loadReservations;
}

console.log('✅ پروژه چای‌باغ با موفقیت بارگذاری شد!');
