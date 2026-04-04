const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'tb7MbYKTO00W2hM9N', 
    SERVICE_ID: 'service_gwx47gd',     
    TEMPLATE_ID: 'template_f7tlubt'    
};

// Initialize EmailJS
(function () {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
        console.log('EmailJS initialized');
    } else {
        console.error('EmailJS not loaded');
    }
})();

// ============================================
// PORTFOLIO DATA
// ============================================
const portfolioAcademicProjects = [
    {
        id: 1,
        title: 'Bee Space',
        category: 'Design',
        description: 'Comprehensive architectural study showcasing innovative design solutions and spatial planning. This project explores the intersection of form and function, creating dynamic spaces that respond to user needs while maintaining aesthetic integrity.',
        thumbnail: 'sampulacademic/Bee Space.jpg',
        images: ['academicimages/academicprojectbeespace1.png', 'academicimages/academicprojectbeespace2.png'],
        location: 'Jakarta, Indonesia',
        year: '2022'
    },
    {
        id: 2,
        title: 'Sunhap',
        category: 'Design Landscape',
        description: 'Sustainable landscape architecture that harmonizes natural elements with modern design principles. This project demonstrates environmental sensitivity while creating functional outdoor spaces that enhance community well-being.',
        thumbnail: 'sampulacademic/Sunhap.jpg',
        images: ['academicimages/academicprojectsunhap3.png', 'academicimages/academicprojectsunhap4.png'],
        location: 'Jakarta, Indonesia',
        year: '2023'
    },
    {
        id: 3,
        title: 'Sport Hall',
        category: 'Design Construction',
        description: 'Multi-functional sports facility designed with advanced structural systems and sustainable construction methods. This project showcases technical excellence in creating large-span spaces that support diverse athletic activities.',
        thumbnail: 'sampulacademic/Sport Hall.jpg',
        images: ['academicimages/academicprojectsporthall5.png', 'academicimages/academicprojectsporthall6.png'],
        location: 'Jakarta, Indonesia',
        year: '2023'
    },
    {
        id: 4,
        title: 'Betang Global Academy',
        category: 'Design Vernacular',
        description: 'Educational facility that reinterprets traditional Dayak Betang architecture through contemporary lens. This project celebrates cultural heritage while meeting modern educational requirements, creating a bridge between past and present.',
        thumbnail: 'sampulacademic/Betang Global Academy.jpg',
        images: ['academicimages/academicprojectbetangglobalacademy7.png', 'academicimages/academicprojectbetangglobalacademy8.png'],
        location: 'Jakarta, Indonesia',
        year: '2023'
    },
    {
        id: 5,
        title: 'Yukata Hotel',
        category: 'Design Sustainable',
        description: 'Eco-friendly hospitality design incorporating passive cooling strategies and renewable energy systems. This project demonstrates how luxury and sustainability can coexist, creating comfortable spaces with minimal environmental impact.',
        thumbnail: 'sampulacademic/Yukata Hotel.jpg',
        images: ['academicimages/academicprojectyukatahotel9.png', 'academicimages/academicprojectyukatahotel10.png', 'academicimages/academicprojectyukatahotel11.png', 'academicimages/academicprojectyukatahotel12.png'],
        location: 'Jakarta, Indonesia',
        year: '2024'
    },
    {
        id: 6,
        title: 'Golden Serenity',
        category: 'Design Sustainable',
        description: 'Luxury residential development that prioritizes environmental responsibility without compromising on elegance. Features include green roofs, rainwater harvesting, and natural ventilation systems that reduce energy consumption.',
        thumbnail: 'sampulacademic/Golden Serenity.jpg',
        images: ['academicimages/academicprojectgoldenserenity13.png', 'academicimages/academicprojectgoldenserenity14.png', 'academicimages/academicprojectgoldenserenity15.png', 'academicimages/academicprojectgoldenserenity16.png'],
        location: 'Jakarta, Indonesia',
        year: '2025'
    }
];

const portfolioIndependentProjects = [
    {
        id: 1,
        title: 'Maintenance Rumah Tinggal',
        category: 'Maintenance',
        description: 'Rehabilitasi menyeluruh hunian residensial di Jakarta yang mengalami kerusakan struktural dan estetik. Tantangan utama: memperbaiki plafon, dinding, dan finishing tanpa mengganggu aktivitas penghuni. Solusi: penjadwalan kerja bertahap dengan material terpilih yang meminimalkan gangguan harian.',
        thumbnail: 'sampulprojects/Maintenance Rumah Tinggal.jpg',
        images: ['Independent Work/MAINTENANCE RUMAH TINGGAL/1.webp', 'Independent Work/MAINTENANCE RUMAH TINGGAL/2.webp', 'Independent Work/MAINTENANCE RUMAH TINGGAL/3.webp', 'Independent Work/MAINTENANCE RUMAH TINGGAL/4.webp', 'Independent Work/MAINTENANCE RUMAH TINGGAL/5.webp'],
        location: 'Jakarta, Indonesia',
        year: '2023'
    },
    {
        id: 2,
        title: 'Rehabilitas Plafon',
        category: 'Maintenance',
        description: 'Proyek rehabilitasi plafon pada bangunan residensial dengan kondisi material lama yang sudah melampaui usia pakai. Pendekatan: assessment menyeluruh sebelum eksekusi, penggantian material dengan sistem modern yang lebih ringan dan tahan lembap, serta finishing rapi yang selaras dengan interior existing.',
        thumbnail: 'sampulprojects/Rehabilitas Plafon.jpg',
        images: ['Independent Work/REHABILITASI PLAFON/1.webp', 'Independent Work/REHABILITASI PLAFON/2.webp', 'Independent Work/REHABILITASI PLAFON/3.webp'],
        location: 'Jakarta, Indonesia',
        year: '2024'
    },
    {
        id: 3,
        title: 'Up House',
        category: 'Design and Build',
        description: 'Hunian dua lantai yang dirancang untuk memaksimalkan luas lahan terbatas di lingkungan padat. Konsep "up" mengeksplorasi vertikalitas — ruang terbuka di lantai dasar, area privat yang tenang di atas. Desain fasad yang tegas namun ramah dengan material lokal berkualitas.',
        thumbnail: 'sampulprojects/Up House.jpg',
        images: ['Independent Work/UP HOUSE/1.webp', 'Independent Work/UP HOUSE/2.webp', 'Independent Work/UP HOUSE/3.webp', 'Independent Work/UP HOUSE/4.webp', 'Independent Work/UP HOUSE/5.webp'],
        location: 'Jakarta, Indonesia',
        year: '2024'
    },
    {
        id: 4,
        title: 'Design Interior',
        category: 'Design Interior',
        description: 'Perancangan interior ruang hunian dengan pendekatan kontemporer yang hangat. Klien menginginkan ruang yang terasa luas namun personal — dijawab dengan palet netral, pencahayaan lapis, dan furnitur custom built-in yang efisien. Hasilnya: ruang 45m² yang terasa lapang dan penuh karakter.',
        thumbnail: 'sampulprojects/Design Interior.jpg',
        images: ['Independent Work/DESIGN INTERIOR/1.webp', 'Independent Work/DESIGN INTERIOR/2.webp', 'Independent Work/DESIGN INTERIOR/3.webp', 'Independent Work/DESIGN INTERIOR/4.webp', 'Independent Work/DESIGN INTERIOR/5.webp'],
        location: 'Jakarta, Indonesia',
        year: '2024'
    },
    {
        id: 5,
        title: 'Kubika Classic House',
        category: 'Design and Build',
        description: 'Hunian klasik modern dengan komposisi kubik yang kuat dan proporsi yang harmonis. Proyek ini menggabungkan detail-detail arsitektur klasik — seperti kolom, cornice, dan simetri — ke dalam bahasa desain kontemporer yang relevan dan elegan untuk konteks residensial urban Jakarta.',
        thumbnail: 'sampulprojects/Kubika Classic House.jpg',
        images: ['Independent Work/KUBIKA CLASSIC HOUSE/1.webp', 'Independent Work/KUBIKA CLASSIC HOUSE/2.webp', 'Independent Work/KUBIKA CLASSIC HOUSE/3.webp', 'Independent Work/KUBIKA CLASSIC HOUSE/4.webp'],
        location: 'Jakarta, Indonesia',
        year: '2024'
    },
    {
        id: 6,
        title: 'Revive With Melamic',
        category: 'Maintenance',
        description: 'Peremajaan furnitur dan elemen kayu existing melalui aplikasi finishing melamic berkualitas tinggi. Proyek ini membuktikan bahwa dengan material dan teknik yang tepat, furnitur lama bisa kembali tampil seperti baru — bahkan lebih baik — tanpa perlu penggantian total.',
        thumbnail: 'sampulprojects/Revive With Melamic.jpg',
        images: ['Independent Work/REVIVE WITH MELAMIC/1.webp', 'Independent Work/REVIVE WITH MELAMIC/2.webp', 'Independent Work/REVIVE WITH MELAMIC/3.webp'],
        location: 'Jakarta, Indonesia',
        year: '2025'
    },
    {
        id: 7,
        title: 'Subang House',
        category: 'Design and Build',
        description: 'Hunian di Subang yang mengintegrasikan konteks alam sekitarnya ke dalam desain — orientasi bangunan mengikuti arah angin dan matahari, bukaan besar yang mengundang cahaya alami, serta material lokal yang memperkuat identitas arsitektur vernakular kontemporer.',
        thumbnail: 'sampulprojects/Subang House.jpg',
        images: ['Independent Work/SUBANG HOUSE/1.webp', 'Independent Work/SUBANG HOUSE/2.webp', 'Independent Work/SUBANG HOUSE/3.webp', 'Independent Work/SUBANG HOUSE/4.webp', 'Independent Work/SUBANG HOUSE/5.webp', 'Independent Work/SUBANG HOUSE/6.webp', 'Independent Work/SUBANG HOUSE/7.webp', 'Independent Work/SUBANG HOUSE/8.webp'],
        location: 'Jakarta, Indonesia',
        year: '2025'
    },
];

// ============================================
// PORTFOLIO NAVIGATION ARROWS
// Swipe di mobile ditangani CSS scroll-snap native — tidak perlu JS touch handler
// ============================================
function setupPortfolioNavigation(scrollId, prevId, nextId) {
    const scroll = document.getElementById(scrollId);
    const prevBtn = document.getElementById(prevId);
    const nextBtn = document.getElementById(nextId);

    if (!scroll) return;

    // Geser satu card width saat tombol panah diklik
    const getCardWidth = () => {
        const card = scroll.querySelector('.portfolio-horizontal-card');
        if (!card) return scroll.clientWidth * 0.8;
        return card.offsetWidth + parseInt(getComputedStyle(scroll).gap || 0);
    };

    if (prevBtn) prevBtn.addEventListener('click', () => {
        scroll.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
    });
    if (nextBtn) nextBtn.addEventListener('click', () => {
        scroll.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
    });
}


// ============================================
// GLOBAL VARIABLES
// ============================================
let currentPortfolioType = 'academic';
let currentProjectIndex = 0;
let currentImageIndex = 0;
let ticking = false;

// ============================================
// DOM ELEMENTS
// ============================================
const elements = {
    preloader: document.getElementById('preloader'),
    navbar: document.getElementById('navbar'),
    menuToggle: document.getElementById('menuToggle'),
    navMenu: document.getElementById('navMenu'),
    navOverlay: document.getElementById('navOverlay'),
    navLinks: document.querySelectorAll('.nav-link'),
    projectDetailPanel: document.getElementById('projectDetailPanel'),
    panelClose: document.getElementById('panelClose'),
    panelMainImage: document.getElementById('panelMainImage'),
    contactForm: document.getElementById('contactForm'),
    formStatus: document.getElementById('formStatus'),
    backToTop: document.getElementById('backToTop')
};

// ============================================
// UTILITY FUNCTIONS
// ============================================
const getCategoryIcon = (category) => {
    const icons = {
        'Design': '🎨',
        'Design Landscape': '🌿',
        'Design Construction': '🏗️',
        'Design Vernacular': '🏛️',
        'Design Sustainable': '♻️',
        'Maintenance': '🔧',
        'Design and Build': '🏠',
        'Design Interior': '🪑',
        'Independent Work': '🗂️'
    };
    return icons[category] || '🏗️';
};

// ============================================
// PRELOADER
// ============================================
function hidePreloader() {
    var p = document.getElementById('preloader');
    if (p) {
        p.setAttribute('style', 'display:none!important;opacity:0!important;visibility:hidden!important;pointer-events:none!important;');
        p.classList.add('hidden');
        try { p.parentNode.removeChild(p); } catch(e) {}
    }
    document.body.style.overflow = 'visible';
    document.documentElement.style.overflow = '';
}

window.addEventListener('load', function() { hidePreloader(); setTimeout(hidePreloader, 300); });
document.addEventListener('DOMContentLoaded', function() { setTimeout(hidePreloader, 800); });
setTimeout(hidePreloader, 1500);
setTimeout(hidePreloader, 3000);

// ============================================
// NAVIGATION
// ============================================
let lastScroll = 0;

// Single unified scroll handler for all scroll-based effects
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const currentScroll = window.pageYOffset;

            // Navbar scroll effect
            if (elements.navbar) {
                if (currentScroll > 100) {
                    elements.navbar.classList.add('scrolled');
                } else {
                    elements.navbar.classList.remove('scrolled');
                }
            }

            // Back to top button
            if (elements.backToTop) {
                if (currentScroll > 500) {
                    elements.backToTop.classList.add('visible');
                } else {
                    elements.backToTop.classList.remove('visible');
                }
            }

            // Parallax for hero shapes
            const hero = document.querySelector('.hero');
            if (hero && currentScroll < window.innerHeight) {
                const shapes = document.querySelectorAll('.shape');
                shapes.forEach((shape, index) => {
                    const speed = 0.5 + (index * 0.2);
                    shape.style.transform = `translateY(${currentScroll * speed}px) rotate(${45 + currentScroll * 0.05}deg)`;
                });
            }

            lastScroll = currentScroll;
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });

// Mobile menu toggle
// ============================================
// MOBILE MENU HELPERS
// ============================================
function openMenu() {
    if (!elements.navMenu || !elements.menuToggle) return;
    elements.navMenu.classList.add('active');
    elements.menuToggle.setAttribute('aria-expanded', 'true');
    if (elements.navOverlay) elements.navOverlay.classList.add('active');
    const spans = elements.menuToggle.querySelectorAll('span');
    spans[0].style.transform = 'rotate(45deg) translateY(10px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
}

function closeMenu() {
    if (!elements.navMenu || !elements.menuToggle) return;
    elements.navMenu.classList.remove('active');
    elements.menuToggle.setAttribute('aria-expanded', 'false');
    if (elements.navOverlay) elements.navOverlay.classList.remove('active');
    const spans = elements.menuToggle.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
}

if (elements.menuToggle && elements.navMenu) {
    elements.menuToggle.addEventListener('click', () => {
        if (elements.navMenu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
}

// Close menu when clicking overlay
if (elements.navOverlay) {
    elements.navOverlay.addEventListener('click', closeMenu);
}

// Close menu when clicking nav link
elements.navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Close mobile menu
        closeMenu();
        
        // Smooth scroll
        if (targetSection && elements.navbar) {
            const navbarHeight = elements.navbar.offsetHeight;
            const targetPosition = targetSection.offsetTop - navbarHeight;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (elements.navMenu && elements.menuToggle && 
        !elements.navMenu.contains(e.target) && 
        !elements.menuToggle.contains(e.target) &&
        !(elements.navOverlay && elements.navOverlay.contains(e.target)) &&
        elements.navMenu.classList.contains('active')) {
        closeMenu();
    }
});

// ============================================
// IMAGE UTILITIES — No lazy loading, WebP+JPG fallback
// ============================================

// Helper: convert any image path to WebP equivalent
function toWebp(src) {
    return src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
}

// Helper: convert any image path to JPG equivalent
function toJpg(src) {
    return src.replace(/\.(webp|png)$/i, '.jpg');
}

// Build a <picture> element with WebP source + original fallback
function buildPicture(src, alt, className) {
    const ext = src.split('.').pop().toLowerCase();
    let webpSrc, fallbackSrc;

    if (ext === 'webp') {
        webpSrc     = src;
        fallbackSrc = toJpg(src);
    } else if (ext === 'jpg' || ext === 'jpeg') {
        webpSrc     = toWebp(src);
        fallbackSrc = src;
    } else {
        // .png or other — try webp but always fall back to original src
        webpSrc     = toWebp(src);
        fallbackSrc = src;  // keep original (.png) as fallback
    }

    const picture = document.createElement('picture');

    const sourceWebp = document.createElement('source');
    sourceWebp.setAttribute('srcset', webpSrc);
    sourceWebp.setAttribute('type', 'image/webp');
    picture.appendChild(sourceWebp);

    const img = document.createElement('img');
    img.src   = src;           // UTAMA: file asli langsung (.webp/.jpg/.png)
    img.alt   = alt || '';
    if (className) img.className = className;
    img.setAttribute('decoding', 'async');
    img.onerror = function() {
        this.onerror = null;
        this.src = fallbackSrc;
    };
    picture.appendChild(img);

    return picture;
}

// Kept for backward compat — no-op since we no longer lazy load
function observeLazyImages(container) {
    // Intentionally empty: lazy loading removed per requirement
}

// ============================================
// INTERSECTION OBSERVER - SCROLL ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

const animateElements = document.querySelectorAll('[data-animate]');
animateElements.forEach(el => observer.observe(el));

// Parallax is now handled inside the unified scroll listener above

// ============================================
// PORTFOLIO HORIZONTAL GALLERY
// ============================================
function generatePortfolioHorizontal(projects, gridId, portfolioType) {
    const portfolioGrid = document.getElementById(gridId);
    if (!portfolioGrid) return;
    
    portfolioGrid.innerHTML = '';
    
    projects.forEach((project, projectIndex) => {
        const portfolioCard = document.createElement('div');
        portfolioCard.className = 'portfolio-horizontal-card';
        portfolioCard.setAttribute('data-animate', '');

        // Build image container using <picture> for WebP+JPG fallback
        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'portfolio-horizontal-image';

        // Overlay (View Details)
        const overlay = document.createElement('div');
        overlay.className = 'portfolio-horizontal-overlay';
        overlay.innerHTML = `<div class="portfolio-horizontal-overlay-text">View Details</div>`;
        imageWrapper.appendChild(overlay);

        // Thumbnail card — file asli utama, fallback ke .jpg
        const cardImg = document.createElement('img');
        cardImg.src = project.thumbnail;    // UTAMA: .jpg/.webp/.png
        cardImg.alt = project.title;
        cardImg.setAttribute('decoding', 'async');

        const placeholder = document.createElement('div');
        placeholder.className = 'portfolio-horizontal-image-placeholder';
        placeholder.style.display = 'none';
        placeholder.innerHTML = `<div class="horizontal-placeholder-icon">${getCategoryIcon(project.category)}</div>`;

        cardImg.onerror = function() {
            const jpg = project.thumbnail.replace(/\.webp$/i, '.jpg');
            if (this.src.indexOf(jpg) === -1) {
                this.onerror = null;
                this.src = jpg;             // FALLBACK: .jpg
            } else {
                this.style.display = 'none';
                placeholder.style.display = 'flex';
            }
        };

        imageWrapper.appendChild(cardImg);
        imageWrapper.appendChild(placeholder);

        // Info (minimal text — just category + title)
        const infoDiv = document.createElement('div');
        infoDiv.className = 'portfolio-horizontal-info';
        infoDiv.innerHTML = `
            <div class="portfolio-horizontal-category">${project.category}</div>
            <h3 class="portfolio-horizontal-title">${project.title}</h3>
            <p class="portfolio-horizontal-count">${project.images.length} ${project.images.length > 1 ? 'Photos' : 'Photo'}</p>
        `;

        portfolioCard.appendChild(imageWrapper);
        portfolioCard.appendChild(infoDiv);
        portfolioGrid.appendChild(portfolioCard);

        // Click event — mobile-aware
        portfolioCard.addEventListener('click', () => {
            if (window.innerWidth <= 768 && typeof openMobPanel === 'function') {
                openMobPanel(portfolioType, projectIndex);
            } else {
                openProjectPanel(portfolioType, projectIndex);
            }
        });
    });

    // Re-observe new elements for scroll animations
    const newAnimateElements = portfolioGrid.querySelectorAll('[data-animate]');
    newAnimateElements.forEach(el => observer.observe(el));
}

// ============================================
// PROJECT DETAIL PANEL - NEW PRESENTATION MODE
// ============================================
function getCurrentProjects() {
    return currentPortfolioType === 'academic' ? portfolioAcademicProjects : portfolioIndependentProjects;
}

function openProjectPanel(portfolioType, projectIndex) {
    currentPortfolioType = portfolioType;
    currentProjectIndex = projectIndex;
    currentImageIndex = 0;
    
    const backdrop = document.getElementById('projectDetailBackdrop');
    const panel = document.getElementById('projectDetailPanel');
    
    if (!panel) return;
    
    updatePanelContent();
    panel.classList.add('active');
    
    if (backdrop) {
        backdrop.classList.add('active');
    }
    
    document.body.style.overflow = 'hidden';
}

function closePanel() {
    const backdrop = document.getElementById('projectDetailBackdrop');
    const panel = document.getElementById('projectDetailPanel');
    
    if (panel) {
        panel.classList.remove('active');
    }
    
    if (backdrop) {
        backdrop.classList.remove('active');
    }
    
    document.body.style.overflow = 'visible';
}

function updatePanelContent() {
    const projects = getCurrentProjects();
    const project = projects[currentProjectIndex];
    
    // Update Header Info
    const headerCategory = document.getElementById('headerCategory');
    const headerTitle = document.getElementById('headerTitle');
    const currentImageEl = document.getElementById('currentImage');
    const totalImagesEl = document.getElementById('totalImages');
    
    if (headerCategory) headerCategory.textContent = project.category;
    if (headerTitle) headerTitle.textContent = project.title;
    if (currentImageEl) currentImageEl.textContent = currentImageIndex + 1;
    if (totalImagesEl) totalImagesEl.textContent = project.images.length;
    
    // Update Main Image — file asli sebagai utama, fallback ke .jpg via onerror
    const panelMainImage = document.getElementById('panelMainImage');
    if (panelMainImage) {
        const src = project.images[currentImageIndex];
        panelMainImage.onerror = null;
        panelMainImage.src = src;       // UTAMA: .webp / .jpg / .png
        panelMainImage.alt = `${project.title} - Image ${currentImageIndex + 1}`;
        panelMainImage.style.display = '';
        panelMainImage.onerror = function() {
            this.onerror = null;
            this.src = src.replace(/\.webp$/i, '.jpg');  // FALLBACK: .jpg
        };
    }
    
    // Update Project Title
    const projectTitle = document.querySelector('.panel-project-title');
    if (projectTitle) {
        projectTitle.textContent = project.title;
    }
    
    // Update Meta Information
    const metaValues = document.querySelectorAll('.panel-meta-value');
    if (metaValues.length >= 4) {
        metaValues[0].textContent = project.location;
        metaValues[1].textContent = project.year;
        metaValues[2].textContent = project.category;
        metaValues[3].textContent = `${project.images.length} Images`;
    }
    
    // Update Description
    const description = document.querySelector('.panel-description-text');
    if (description) {
        description.textContent = project.description;
    }
    
    // Generate Thumbnails
    generatePanelThumbnails();
    
    // Preload adjacent images
    preloadAdjacentImages();
}

function generatePanelThumbnails() {
    const projects = getCurrentProjects();
    const project = projects[currentProjectIndex];
    const thumbnailsContainer = document.getElementById('panelThumbnails');
    
    if (!thumbnailsContainer) return;
    
    thumbnailsContainer.innerHTML = '';
    
    project.images.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `panel-thumbnail ${index === currentImageIndex ? 'active' : ''}`;

        const tImg = document.createElement('img');
        tImg.src = image;               // UTAMA: file asli (.webp/.jpg/.png)
        tImg.alt = `${project.title} ${index + 1}`;
        tImg.setAttribute('decoding', 'async');
        tImg.onerror = function() {     // FALLBACK: .jpg kalau utama gagal
            this.onerror = null;
            this.src = image.replace(/\.webp$/i, '.jpg');
        };
        thumbnail.appendChild(tImg);

        thumbnail.addEventListener('click', () => {
            currentImageIndex = index;
            updatePanelContent();
            scrollToActiveThumbnail();
        });
        thumbnailsContainer.appendChild(thumbnail);
    });
}

function showPrevImage() {
    const projects = getCurrentProjects();
    const project = projects[currentProjectIndex];
    currentImageIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
    updatePanelContent();
    scrollToActiveThumbnail();
}

function showNextImage() {
    const projects = getCurrentProjects();
    const project = projects[currentProjectIndex];
    currentImageIndex = (currentImageIndex + 1) % project.images.length;
    updatePanelContent();
    scrollToActiveThumbnail();
}

function scrollToActiveThumbnail() {
    const activeThumbnail = document.querySelector('.panel-thumbnail.active');
    if (activeThumbnail) {
        activeThumbnail.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }
}

function preloadAdjacentImages() {
    const projects = getCurrentProjects();
    const project = projects[currentProjectIndex];
    
    // Preload next image
    const nextIndex = (currentImageIndex + 1) % project.images.length;
    const nextImg = new Image();
    nextImg.src = project.images[nextIndex];
    
    // Preload previous image
    const prevIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
    const prevImg = new Image();
    prevImg.src = project.images[prevIndex];
}

// Panel event listeners
const panelClose = document.getElementById('panelClose');
if (panelClose) {
    panelClose.addEventListener('click', closePanel);
}

const panelPrev = document.getElementById('panelPrev');
if (panelPrev) {
    panelPrev.addEventListener('click', showPrevImage);
}

const panelNext = document.getElementById('panelNext');
if (panelNext) {
    panelNext.addEventListener('click', showNextImage);
}

// Close panel when clicking backdrop
const projectBackdrop = document.getElementById('projectDetailBackdrop');
if (projectBackdrop) {
    projectBackdrop.addEventListener('click', closePanel);
}

// Keyboard navigation for panel
document.addEventListener('keydown', (e) => {
    const panel = document.getElementById('projectDetailPanel');
    if (!panel || !panel.classList.contains('active')) return;
    
    switch(e.key) {
        case 'Escape':
            closePanel();
            break;
        case 'ArrowLeft':
            showPrevImage();
            break;
        case 'ArrowRight':
            showNextImage();
            break;
        case 'f':
        case 'F':
            toggleFullscreen();
            break;
    }
});

// Touch/Swipe Support for Main Image
function setupPanelSwipe() {
    const mainImageContainer = document.querySelector('.panel-main-display');
    if (!mainImageContainer) return;
    
    let touchStartX = 0;
    let touchEndX = 0;
    
    mainImageContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    mainImageContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handlePanelSwipeGesture();
    }, { passive: true });
    
    function handlePanelSwipeGesture() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                showNextImage();
            } else {
                showPrevImage();
            }
        }
    }
}

// Fullscreen Toggle
function toggleFullscreen() {
    const panel = document.getElementById('projectDetailPanel');
    if (!panel) return;
    
    if (!document.fullscreenElement) {
        if (panel.requestFullscreen) {
            panel.requestFullscreen();
        } else if (panel.webkitRequestFullscreen) {
            panel.webkitRequestFullscreen();
        } else if (panel.msRequestFullscreen) {
            panel.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

// ============================================
// CONTACT FORM - EMAILJS
// ============================================
if (elements.contactForm) {
    elements.contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitButton = this.querySelector('.btn-primary');
        const originalText = submitButton.innerHTML;
        
        submitButton.disabled = true;
        submitButton.innerHTML = '<span>Sending...</span>';
        elements.formStatus.style.display = 'none';
        
        // Check if EmailJS is configured
        if (typeof emailjs === 'undefined' || EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE') {
            elements.formStatus.textContent = '⚠️ Email service is not configured. Please configure EmailJS in script.js or contact us directly.';
            elements.formStatus.className = 'form-status error';
            elements.formStatus.style.display = 'block';
            submitButton.disabled = false;
            submitButton.innerHTML = originalText;
            return;
        }
        
        // Send email using EmailJS
        emailjs.sendForm(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, this)
            .then(function(response) {
                elements.formStatus.textContent = '✓ Thank you! Your message has been sent successfully. We will get back to you within 24 hours.';
                elements.formStatus.className = 'form-status success';
                elements.formStatus.style.display = 'block';
                elements.contactForm.reset();
                
                setTimeout(() => {
                    submitButton.disabled = false;
                    submitButton.innerHTML = originalText;
                    elements.formStatus.style.display = 'none';
                }, 5000);
            }, function(error) {
                elements.formStatus.textContent = '✗ Oops! Something went wrong. Please try again or contact us directly via email.';
                elements.formStatus.className = 'form-status error';
                elements.formStatus.style.display = 'block';
                submitButton.disabled = false;
                submitButton.innerHTML = originalText;
                
                setTimeout(() => {
                    elements.formStatus.style.display = 'none';
                }, 5000);
            });
    });
}

// ============================================
// BACK TO TOP BUTTON
// ============================================
if (elements.backToTop) {
    elements.backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================
// SMOOTH SCROLL FOR ALL INTERNAL LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '#!') return;
        
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        
        if (targetElement && elements.navbar) {
            const navbarHeight = elements.navbar.offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
    });
});

// ============================================
// NEWSLETTER FORM
// ============================================
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    const newsletterButton = newsletterForm.querySelector('button');
    const newsletterInput = newsletterForm.querySelector('input');
    
    if (newsletterButton && newsletterInput) {
        newsletterButton.addEventListener('click', (e) => {
            e.preventDefault();
            const email = newsletterInput.value.trim();
            
            if (email && email.includes('@') && email.includes('.')) {
                newsletterButton.textContent = '✓';
                newsletterButton.style.background = '#4caf50';
                newsletterInput.value = '';
                
                setTimeout(() => {
                    newsletterButton.textContent = '→';
                    newsletterButton.style.background = '';
                }, 2500);
            } else {
                newsletterButton.textContent = '✗';
                newsletterButton.style.background = '#f44336';
                
                setTimeout(() => {
                    newsletterButton.textContent = '→';
                    newsletterButton.style.background = '';
                }, 2500);
            }
        });
        
        newsletterInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                newsletterButton.click();
            }
        });
    }
}

// ============================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && elements.navMenu && elements.navMenu.classList.contains('active')) {
        closeMenu();
    }
});

// ============================================
// SERVICES NAVIGATION
// ============================================
function setupServicesNavigation() {
    const scroll = document.getElementById('servicesScroll');
    const prevBtn = document.getElementById('servicesPrev');
    const nextBtn = document.getElementById('servicesNext');
    
    if (!scroll || !prevBtn || !nextBtn) return;

    const getScrollAmount = () => Math.min(scroll.clientWidth * 0.8, 450);

    prevBtn.addEventListener('click', () => {
        scroll.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    });
    
    nextBtn.addEventListener('click', () => {
        scroll.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    });
}

// Services swipe ditangani CSS scroll-snap native — fungsi ini dikosongkan
function setupServicesSwipe() {
    // Tidak perlu JS touch handler — browser handle sendiri via CSS scroll-snap
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Generate portfolio horizontal grids
    generatePortfolioHorizontal(portfolioAcademicProjects, 'portfolioAcademicGrid', 'academic');
    generatePortfolioHorizontal(portfolioIndependentProjects, 'portfolioIndependentGrid', 'independent');

    // Tag independent project cards with data-category for filter functionality
    const indGrid = document.getElementById('portfolioIndependentGrid');
    if (indGrid) {
        const indCards = indGrid.querySelectorAll('.portfolio-horizontal-card');
        indCards.forEach((card, i) => {
            if (portfolioIndependentProjects[i]) {
                card.setAttribute('data-category', portfolioIndependentProjects[i].category);
            }
        });
    }

    // Setup portfolio navigation arrows
    setupPortfolioNavigation('independentScroll', 'independentPrev', 'independentNext');
    setupPortfolioNavigation('academicScroll', 'academicPrev', 'academicNext');

    setupServicesNavigation();
    setupServicesSwipe();
    setupPanelSwipe();
    
    const serviceCards = document.querySelectorAll('.service-card-horizontal');
    serviceCards.forEach(card => observer.observe(card));
    
    // Log initialization
    console.log('%c SEGARIZ ARCH ', 'background: #d4af37; color: #000; font-size: 20px; padding: 10px; font-weight: bold;');
    console.log('%c Crafted with Excellence ', 'background: #1a1a1a; color: #d4af37; font-size: 12px; padding: 5px;');
    console.log('✓ Website initialized successfully');
    console.log('✓ Academic projects loaded:', portfolioAcademicProjects.length);
    console.log('✓ Independent projects loaded:', portfolioIndependentProjects.length);
    
    const totalAcademicImages = portfolioAcademicProjects.reduce((sum, project) => sum + project.images.length, 0);
    const totalIndependentImages = portfolioIndependentProjects.reduce((sum, project) => sum + project.images.length, 0);
    console.log('✓ Total images:', totalAcademicImages + totalIndependentImages);
    
    if (EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE') {
        console.warn('⚠️ EmailJS is not configured. Please add your credentials in script.js');
    }
});
// ============================================
// MOBILE PANEL — Instagram-style
// Dipanggil langsung dari generatePortfolioHorizontal
// ============================================
let mobProject   = null;
let mobImgIndex  = 0;
let mobTouchX    = 0;
let mobTouchY    = 0;
let mobDirLocked = null;

function openMobPanel(portfolioType, projectIndex) {
    const projects = portfolioType === 'academic'
        ? portfolioAcademicProjects
        : portfolioIndependentProjects;

    mobProject  = projects[projectIndex];
    mobImgIndex = 0;

    mobRender();

    const panel = document.getElementById('mobPanel');
    if (panel) {
        panel.classList.add('mob-active');
        document.body.style.overflow = 'hidden';
        const sheet = document.getElementById('mobSheet');
        if (sheet) sheet.scrollTop = 0;

        // Push state ke history supaya tombol back HP nutup panel dulu,
        // bukan langsung keluar dari website
        history.pushState({ mobPanelOpen: true }, '');
    }
}

function closeMobPanel() {
    const panel = document.getElementById('mobPanel');
    if (panel) panel.classList.remove('mob-active');
    document.body.style.overflow = '';
}

// Tangkap tombol back HP — kalau panel masih terbuka, tutup saja panelnya
window.addEventListener('popstate', () => {
    const panel = document.getElementById('mobPanel');
    if (panel && panel.classList.contains('mob-active')) {
        panel.classList.remove('mob-active');
        document.body.style.overflow = '';
    }
});

// Cegah wheel/touch scroll di dalam panel bocor ke halaman utama
;(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const panel = document.getElementById('mobPanel');
        if (!panel) return;

        // Wheel event (desktop/trackpad)
        panel.addEventListener('wheel', (e) => {
            if (!panel.classList.contains('mob-active')) return;
            const info = document.getElementById('mobInfo');
            if (!info) return;
            const atTop    = info.scrollTop === 0;
            const atBottom = info.scrollTop + info.clientHeight >= info.scrollHeight - 1;
            // Blokir hanya jika sudah di ujung scroll (mencegah propagasi ke body)
            if ((e.deltaY < 0 && atTop) || (e.deltaY > 0 && atBottom)) {
                e.preventDefault();
            }
            e.stopPropagation();
        }, { passive: false });
    });
})();

// ── Swipe-down-to-close + blokir horizontal gesture browser ──
;(function () {
    let _startX = 0, _startY = 0, _dirLocked = null, _dragging = false;

    document.addEventListener('DOMContentLoaded', () => {
        const panel  = document.getElementById('mobPanel');
        const topbar = document.querySelector('.mob-topbar');
        if (!panel) return;

        // Drag handle = topbar (area atas panel) agar tidak bentrok dengan scroll konten
        const dragHandle = topbar || panel;

        dragHandle.addEventListener('touchstart', (e) => {
            if (!panel.classList.contains('mob-active')) return;
            _startX    = e.touches[0].clientX;
            _startY    = e.touches[0].clientY;
            _dirLocked = null;
            _dragging  = false;
        }, { passive: true });

        dragHandle.addEventListener('touchmove', (e) => {
            if (!panel.classList.contains('mob-active')) return;
            const dx = e.touches[0].clientX - _startX;
            const dy = e.touches[0].clientY - _startY;

            if (!_dirLocked && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
                _dirLocked = Math.abs(dy) > Math.abs(dx) ? 'v' : 'h';
            }

            if (_dirLocked === 'h') {
                // Blokir horizontal agar tidak trigger browser back/forward
                e.preventDefault();
                return;
            }

            if (_dirLocked === 'v' && dy > 0) {
                // Swipe ke bawah — geser panel mengikuti jari
                _dragging = true;
                e.preventDefault();
                panel.style.transition = 'none';
                panel.style.transform  = 'translateY(' + dy + 'px)';
            }
        }, { passive: false });

        dragHandle.addEventListener('touchend', (e) => {
            if (!panel.classList.contains('mob-active')) return;
            const dy = e.changedTouches[0].clientY - _startY;

            panel.style.transition = '';
            panel.style.transform  = '';

            if (_dragging && dy > 100) {
                // Cukup jauh ke bawah → tutup panel
                closeMobPanel();
            }
            _dragging  = false;
            _dirLocked = null;
        }, { passive: true });
    });
})();

function mobRender() {
    if (!mobProject) return;
    const p     = mobProject;
    const total = p.images.length;

    /* ── Counter ── */
    const elCur = document.getElementById('mobCurrent');
    const elTot = document.getElementById('mobTotal');
    if (elCur) elCur.textContent = mobImgIndex + 1;
    if (elTot) elTot.textContent = total;

    /* ── Hero image — fade swap with picture fallback ── */
    const heroDiv = document.getElementById('mobHero');
    const img = document.getElementById('mobPhotoImg');
    if (img) {
        img.classList.add('mob-fading');
        setTimeout(() => {
            const heroSrc = p.images[mobImgIndex];
            const ext = heroSrc.split('.').pop().toLowerCase();
            let webpSrc, fallbackSrc;
            if (ext === 'webp') { webpSrc = heroSrc; fallbackSrc = toJpg(heroSrc); }
            else { webpSrc = toWebp(heroSrc); fallbackSrc = heroSrc; }

            // If wrapped in <picture>, update source too
            const picture = img.closest ? img.closest('picture') : null;
            if (picture) {
                const source = picture.querySelector('source[type="image/webp"]');
                if (source) source.setAttribute('srcset', webpSrc);
            }

            // Set onerror fallback BEFORE setting src
            img.onerror = function() {
                this.onerror = null;
                // fallback: untuk .webp coba .jpg, untuk .png tetap pakai src asli
                if (ext === 'webp') {
                    this.src = fallbackSrc; // .jpg
                } else {
                    this.src = heroSrc; // tetap src asli (.png)
                }
            };

            // Always try the original src first (webp, jpg, or png as-is)
            img.src = heroSrc;
            img.alt = `${p.title} — foto ${mobImgIndex + 1}`;
            img.classList.remove('mob-fading');
        }, 160);
    }

    /* ── Topbar title + category ── */
    const topCat  = document.getElementById('mobTopCat');
    const topName = document.getElementById('mobTopName');
    if (topCat)  topCat.textContent  = p.category;
    if (topName) topName.textContent = p.title;

    /* ── Info card: tag + title + desc ── */
    const cat   = document.getElementById('mobCat');
    const title = document.getElementById('mobTitle');
    const desc  = document.getElementById('mobDesc');
    if (cat)   cat.textContent   = p.category;
    if (title) title.textContent = p.title;
    if (desc)  desc.textContent  = p.description;

    /* ── Specs (location / year / photos) ── */
    const metaLocation = document.getElementById('mobMetaLocation');
    const metaYear     = document.getElementById('mobMetaYear');
    const metaPhotos   = document.getElementById('mobMetaPhotos');
    if (metaLocation) metaLocation.textContent = p.location;
    if (metaYear)     metaYear.textContent     = p.year;
    if (metaPhotos)   metaPhotos.textContent   = `${total}`;

    /* ── Tabstrip — rebuild thumbnail tabs, no lazy loading ── */
    const strip = document.getElementById('mobTabstrip');
    if (strip) {
        strip.innerHTML = '';
        p.images.forEach((src, i) => {
            const tab = document.createElement('div');
            tab.className = 'mob-tab' + (i === mobImgIndex ? ' mob-tab-active' : '');

            // Simple img — lebih reliable dari <picture> untuk thumbnail kecil
            const tImg = document.createElement('img');
            tImg.src = src;
            tImg.alt = `${p.title} ${i + 1}`;
            tImg.setAttribute('decoding', 'async');
            tImg.onerror = function() {
                this.onerror = null;
                // coba fallback jpg kalau webp gagal, atau png tetap asli
                const ext = src.split('.').pop().toLowerCase();
                if (ext === 'webp') this.src = toJpg(src);
            };
            tab.appendChild(tImg);
            tab.addEventListener('click', () => mobGoTo(i));
            strip.appendChild(tab);
        });
    }

    /* ── Dots (hidden, kept for compat) ── */
    const dotsEl = document.getElementById('mobDots');
    if (dotsEl) dotsEl.innerHTML = '';

    /* ── Reset info scroll to top ── */
    const info = document.getElementById('mobInfo');
    if (info) info.scrollTop = 0;
}

function mobGoTo(idx) {
    if (!mobProject) return;
    mobImgIndex = (idx + mobProject.images.length) % mobProject.images.length;
    mobRender();
    // Scroll active tab into view in tabstrip
    const strip = document.getElementById('mobTabstrip');
    if (strip && strip.children[mobImgIndex]) {
        strip.children[mobImgIndex].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
}

// Swipe gesture
document.addEventListener('DOMContentLoaded', () => {
    const photoLayer = document.querySelector('.mob-hero');
    if (!photoLayer) return;

    photoLayer.addEventListener('touchstart', (e) => {
        mobTouchX    = e.touches[0].clientX;
        mobTouchY    = e.touches[0].clientY;
        mobDirLocked = null;
    }, { passive: true });

    // passive: false agar bisa preventDefault() untuk cegah browser back/forward gesture
    photoLayer.addEventListener('touchmove', (e) => {
        const dx = e.touches[0].clientX - mobTouchX;
        const dy = e.touches[0].clientY - mobTouchY;

        // Tentukan arah satu kali saat threshold 8px tercapai
        if (!mobDirLocked && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
            mobDirLocked = Math.abs(dx) > Math.abs(dy) ? 'h' : 'v';
        }

        if (mobDirLocked === 'h') {
            // Blokir browser navigation gesture (swipe back/forward)
            e.preventDefault();
            const img = document.getElementById('mobPhotoImg');
            if (img) img.style.transform = `translateX(${dx * 0.18}px)`;
        }
    }, { passive: false });

    photoLayer.addEventListener('touchend', (e) => {
        const img = document.getElementById('mobPhotoImg');
        if (img) img.style.transform = '';
        const dx = e.changedTouches[0].clientX - mobTouchX;
        if (mobDirLocked === 'h' && Math.abs(dx) > 45) {
            dx < 0 ? mobGoTo(mobImgIndex + 1) : mobGoTo(mobImgIndex - 1);
        }
        mobDirLocked = null;
    }, { passive: true });

    // Close button
    const closeBtn = document.getElementById('mobClose');
    if (closeBtn) closeBtn.addEventListener('click', closeMobPanel);

    // Share button
    const shareBtn = document.getElementById('mobShareBtn');
    if (shareBtn) {
        shareBtn.addEventListener('click', () => {
            const title = document.getElementById('mobTitle');
            if (navigator.share) {
                navigator.share({ title: title ? title.textContent : 'SEGARIZ ARCH', url: window.location.href });
            }
        });
    }
});

// Keyboard
document.addEventListener('keydown', (e) => {
    const panel = document.getElementById('mobPanel');
    if (!panel || !panel.classList.contains('mob-active')) return;
    if (e.key === 'Escape')     closeMobPanel();
    if (e.key === 'ArrowRight') mobGoTo(mobImgIndex + 1);
    if (e.key === 'ArrowLeft')  mobGoTo(mobImgIndex - 1);
});
// ============================================
// STATS BAR — Animated Counter
// ============================================
function animateCounter(el, target, duration = 1600) {
    const startTime = performance.now();
    const startVal = 0;

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(startVal + (target - startVal) * eased);
        el.textContent = current;
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = target;
    }
    requestAnimationFrame(update);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNums = entry.target.querySelectorAll('.stat-number[data-target]');
            statNums.forEach(el => {
                const target = parseInt(el.getAttribute('data-target'));
                animateCounter(el, target);
                el.removeAttribute('data-target');
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const statsBar = document.querySelector('.stats-bar');
if (statsBar) statsObserver.observe(statsBar);


// ============================================
// CASE STUDY FILTER TAGS
// ============================================
const filterTags = document.querySelectorAll('.filter-tag');

filterTags.forEach(btn => {
    btn.addEventListener('click', () => {
        filterTags.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        const cards = document.querySelectorAll('#portfolioIndependentGrid .portfolio-horizontal-card');

        cards.forEach(card => {
            const category = card.getAttribute('data-category') || '';
            const show = filter === 'all' || category === filter;
            if (show) {
                card.style.display = '';
                // Animate in
                requestAnimationFrame(() => {
                    card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                    card.style.pointerEvents = 'auto';
                });
            } else {
                card.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
                card.style.opacity = '0';
                card.style.transform = 'scale(0.96)';
                card.style.pointerEvents = 'none';
                setTimeout(() => {
                    if (card.style.opacity === '0') card.style.display = 'none';
                }, 260);
            }
        });
    });
});

// ============================================
// TAG DATA ATTRIBUTE on portfolio cards
// (patch generatePortfolioHorizontal to add data-category)
// ============================================
const _origGenerate = generatePortfolioHorizontal;
// Override: add data-category to each card after generation
function generatePortfolioHorizontalWithCategory(projects, gridId, portfolioType) {
    _origGenerate(projects, gridId, portfolioType);
    const grid = document.getElementById(gridId);
    if (!grid) return;
    const cards = grid.querySelectorAll('.portfolio-horizontal-card');
    cards.forEach((card, i) => {
        if (projects[i]) {
            card.setAttribute('data-category', projects[i].category);
        }
    });
}