// ============================================
// EMAIL CONFIGURATION - EMAILJS
// ============================================
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
        thumbnail: 'sampulacademic/1.jpg',
        images: ['academicimages/academicprojectbeespace1.png', 'academicimages/academicprojectbeespace2.png'],
        location: 'Jakarta, Indonesia',
        year: '2022'
    },
    {
        id: 2,
        title: 'Sunhap',
        category: 'Design Landscape',
        description: 'Sustainable landscape architecture that harmonizes natural elements with modern design principles. This project demonstrates environmental sensitivity while creating functional outdoor spaces that enhance community well-being.',
        thumbnail: 'sampulacademic/2.jpg',
        images: ['academicimages/academicprojectsunhap3.png', 'academicimages/academicprojectsunhap4.png'],
        location: 'Jakarta, Indonesia',
        year: '2023'
    },
    {
        id: 3,
        title: 'Sport Hall',
        category: 'Design Construction',
        description: 'Multi-functional sports facility designed with advanced structural systems and sustainable construction methods. This project showcases technical excellence in creating large-span spaces that support diverse athletic activities.',
        thumbnail: 'sampulacademic/3.jpg',
        images: ['academicimages/academicprojectsporthall5.png', 'academicimages/academicprojectsporthall6.png'],
        location: 'Jakarta, Indonesia',
        year: '2023'
    },
    {
        id: 4,
        title: 'Betang Global Academy',
        category: 'Design Vernacular',
        description: 'Educational facility that reinterprets traditional Dayak Betang architecture through contemporary lens. This project celebrates cultural heritage while meeting modern educational requirements, creating a bridge between past and present.',
        thumbnail: 'sampulacademic/4.jpg',
        images: ['academicimages/academicprojectbetangglobalacademy7.png', 'academicimages/academicprojectbetangglobalacademy8.png'],
        location: 'Jakarta, Indonesia',
        year: '2023'
    },
    {
        id: 5,
        title: 'Yukata Hotel',
        category: 'Design Sustainable',
        description: 'Eco-friendly hospitality design incorporating passive cooling strategies and renewable energy systems. This project demonstrates how luxury and sustainability can coexist, creating comfortable spaces with minimal environmental impact.',
        thumbnail: 'sampulacademic/5.jpg',
        images: ['academicimages/academicprojectyukatahotel9.png', 'academicimages/academicprojectyukatahotel10.png', 'academicimages/academicprojectyukatahotel11.png', 'academicimages/academicprojectyukatahotel12.png'],
        location: 'Jakarta, Indonesia',
        year: '2024'
    },
    {
        id: 6,
        title: 'Golden Serenity',
        category: 'Design Sustainable',
        description: 'Luxury residential development that prioritizes environmental responsibility without compromising on elegance. Features include green roofs, rainwater harvesting, and natural ventilation systems that reduce energy consumption.',
        thumbnail: 'sampulacademic/6.jpg',
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
        description: 'Comprehensive architectural study showcasing innovative design solutions and spatial planning. This project explores the intersection of form and function, creating dynamic spaces that respond to user needs while maintaining aesthetic integrity.',
        thumbnail: 'sampulprojects/7.jpg',
        images: ['projectsimages/MAINTENANCERUMAHTINGGAL1.png', 'projectsimages/MAINTENANCERUMAHTINGGAL2.png'],
        location: 'Jakarta, Indonesia',
        year: '2022'
    },
    {
        id: 2,
        title: 'Rehabilitas Plafon',
        category: 'Maintenance',
        description: 'Comprehensive architectural study showcasing innovative design solutions and spatial planning. This project explores the intersection of form and function, creating dynamic spaces that respond to user needs while maintaining aesthetic integrity.',
        thumbnail: 'sampulprojects/8.jpg',
        images: ['projectsimages/REHABILITASPLAFON1.png', 'projectsimages/REHABILITASPLAFON2.png'],
        location: 'Jakarta, Indonesia',
        year: '2022'
    },
    {
        id: 3,
        title: 'Up House',
        category: 'Design and Build',
        description: 'Comprehensive architectural study showcasing innovative design solutions and spatial planning. This project explores the intersection of form and function, creating dynamic spaces that respond to user needs while maintaining aesthetic integrity.',
        thumbnail: 'sampulprojects/9.jpg',
        images: ['projectsimages/UPHOUSE1.png', 'projectsimages/UPHOUSE2.png'],
        location: 'Jakarta, Indonesia',
        year: '2022'
    },
    {
        id: 4,
        title: 'Design Interior',
        category: 'Design Interior',
        description: 'Comprehensive architectural study showcasing innovative design solutions and spatial planning. This project explores the intersection of form and function, creating dynamic spaces that respond to user needs while maintaining aesthetic integrity.',
        thumbnail: 'sampulprojects/10.jpg',
        images: ['projectsimages/DESIGNINTERIOR1.png', 'projectsimages/DESIGNINTERIOR2.png'],
        location: 'Jakarta, Indonesia',
        year: '2022'
    },
    {
        id: 5,
        title: 'Kubika Classic House',
        category: 'Design and Build',
        description: 'Comprehensive architectural study showcasing innovative design solutions and spatial planning. This project explores the intersection of form and function, creating dynamic spaces that respond to user needs while maintaining aesthetic integrity.',
        thumbnail: 'sampulprojects/11.jpg',
        images: ['projectsimages/KUBIKACLASSICHOUSE1.png', 'projectsimages/KUBIKACLASSICHOUSE2.png'],
        location: 'Jakarta, Indonesia',
        year: '2022'
    },
    {
        id: 6,
        title: 'Revive With Melamic',
        category: 'Maintenance',
        description: 'Comprehensive architectural study showcasing innovative design solutions and spatial planning. This project explores the intersection of form and function, creating dynamic spaces that respond to user needs while maintaining aesthetic integrity.',
        thumbnail: 'sampulprojects/12.jpg',
        images: ['projectsimages/REVIVEMELAMIC1.png', 'projectsimages/REVIVEMELAMIC2.png'],
        location: 'Jakarta, Indonesia',
        year: '2022'
    },
    {
        id: 7,
        title: 'Subang House',
        category: 'Design and Build',
        description: 'Comprehensive architectural study showcasing innovative design solutions and spatial planning. This project explores the intersection of form and function, creating dynamic spaces that respond to user needs while maintaining aesthetic integrity.',
        thumbnail: 'sampulprojects/13.jpg',
        images: ['projectsimages/REVIVEMELAMIC1.png', 'projectsimages/REVIVEMELAMIC2.png'],
        location: 'Jakarta, Indonesia',
        year: '2022'
    },
];

// ============================================
// PORTFOLIO NAVIGATION ARROWS
// ============================================
function setupPortfolioNavigation(scrollId, prevId, nextId) {
    const scroll = document.getElementById(scrollId);
    const prevBtn = document.getElementById(prevId);
    const nextBtn = document.getElementById(nextId);
    
    if (!scroll || !prevBtn || !nextBtn) return;
    
    prevBtn.addEventListener('click', () => {
        scroll.scrollBy({
            left: -450,
            behavior: 'smooth'
        });
    });
    
    nextBtn.addEventListener('click', () => {
        scroll.scrollBy({
            left: 450,
            behavior: 'smooth'
        });
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
window.addEventListener('load', () => {
    setTimeout(() => {
        if (elements.preloader) {
            elements.preloader.classList.add('hidden');
            document.body.style.overflow = 'visible';
        }
    }, 500);
});

// ============================================
// NAVIGATION
// ============================================
let lastScroll = 0;

window.addEventListener('scroll', () => {
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
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
if (elements.menuToggle && elements.navMenu) {
    elements.menuToggle.addEventListener('click', () => {
        elements.navMenu.classList.toggle('active');
        
        const spans = elements.menuToggle.querySelectorAll('span');
        if (elements.navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(10px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Close menu when clicking nav link
elements.navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Close mobile menu
        if (elements.navMenu) {
            elements.navMenu.classList.remove('active');
            const spans = elements.menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
        
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
        elements.navMenu.classList.contains('active')) {
        elements.navMenu.classList.remove('active');
        const spans = elements.menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// ============================================
// LAZY IMAGE LOADING
// ============================================
const lazyImageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute('data-src');
            if (src) {
                img.src = src;
                img.removeAttribute('data-src');
                img.classList.remove('lazy-img');
            }
            lazyImageObserver.unobserve(img);
        }
    });
}, {
    rootMargin: '200px 0px', // start loading 200px before entering viewport
    threshold: 0.01
});

function observeLazyImages(container) {
    const lazyImgs = container ? container.querySelectorAll('img.lazy-img') : document.querySelectorAll('img.lazy-img');
    lazyImgs.forEach(img => lazyImageObserver.observe(img));
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

// ============================================
// PARALLAX EFFECT
// ============================================
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            
            if (hero && scrolled < window.innerHeight) {
                const shapes = document.querySelectorAll('.shape');
                shapes.forEach((shape, index) => {
                    const speed = 0.5 + (index * 0.2);
                    shape.style.transform = `translateY(${scrolled * speed}px) rotate(${45 + scrolled * 0.05}deg)`;
                });
            }
            
            ticking = false;
        });
        
        ticking = true;
    }
});

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
        
        portfolioCard.innerHTML = `
            <div class="portfolio-horizontal-image">
                <div class="portfolio-horizontal-overlay">
                    <div class="portfolio-horizontal-overlay-text">View Details</div>
                </div>
                <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" 
                     data-src="${project.thumbnail}" 
                     alt="${project.title}" 
                     loading="lazy"
                     class="lazy-img"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="portfolio-horizontal-image-placeholder" style="display: none;">
                    <div class="horizontal-placeholder-icon">${getCategoryIcon(project.category)}</div>
                </div>
            </div>
            <div class="portfolio-horizontal-info">
                <div class="portfolio-horizontal-category">${project.category}</div>
                <h3 class="portfolio-horizontal-title">${project.title}</h3>
                <p class="portfolio-horizontal-count">${project.images.length} ${project.images.length > 1 ? 'Images' : 'Image'}</p>
            </div>
        `;
        
        portfolioGrid.appendChild(portfolioCard);
        
        // Add click event — mobile-aware
        portfolioCard.addEventListener('click', () => {
            if (window.innerWidth <= 768 && typeof openMobPanel === 'function') {
                openMobPanel(portfolioType, projectIndex);
            } else {
                openProjectPanel(portfolioType, projectIndex);
            }
        });
    });
    
    // Re-observe new elements
    const newAnimateElements = portfolioGrid.querySelectorAll('[data-animate]');
    newAnimateElements.forEach(el => observer.observe(el));

    // Observe lazy images in newly generated cards
    observeLazyImages(portfolioGrid);
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
    
    // Update Main Image
    const panelMainImage = document.getElementById('panelMainImage');
    if (panelMainImage) {
        panelMainImage.src = project.images[currentImageIndex];
        panelMainImage.alt = `${project.title} - Image ${currentImageIndex + 1}`;
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
        // First thumbnail loads immediately (active), rest are lazy
        if (index === 0) {
            thumbnail.innerHTML = `<img src="${image}" alt="${project.title} ${index + 1}">`;
        } else {
            thumbnail.innerHTML = `<img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="${image}" alt="${project.title} ${index + 1}" class="lazy-img">`;
        }
        thumbnail.addEventListener('click', () => {
            currentImageIndex = index;
            updatePanelContent();
            scrollToActiveThumbnail();
        });
        thumbnailsContainer.appendChild(thumbnail);
    });

    observeLazyImages(thumbnailsContainer);
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
        elements.navMenu.classList.remove('active');
        const spans = elements.menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
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
    
    prevBtn.addEventListener('click', () => {
        scroll.scrollBy({
            left: -450,
            behavior: 'smooth'
        });
    });
    
    nextBtn.addEventListener('click', () => {
        scroll.scrollBy({
            left: 450,
            behavior: 'smooth'
        });
    });
}

// Touch/Swipe Support untuk Services
function setupServicesSwipe() {
    const servicesScroll = document.getElementById('servicesScroll');
    if (!servicesScroll) return;

    let touchStartX = 0;
    let touchEndX = 0;
    let scrollLeft = 0;

    servicesScroll.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        scrollLeft = servicesScroll.scrollLeft;
    }, { passive: true });

    servicesScroll.addEventListener('touchmove', (e) => {
        if (!touchStartX) return;
        
        const touchCurrentX = e.touches[0].clientX;
        const diff = touchStartX - touchCurrentX;
        servicesScroll.scrollLeft = scrollLeft + diff;
    }, { passive: true });

    servicesScroll.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        handleServicesSwipeGesture();
        touchStartX = 0;
    });

    function handleServicesSwipeGesture() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                servicesScroll.scrollBy({
                    left: 350,
                    behavior: 'smooth'
                });
            } else {
                servicesScroll.scrollBy({
                    left: -350,
                    behavior: 'smooth'
                });
            }
        }
    }
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Generate portfolio horizontal grids
    generatePortfolioHorizontal(portfolioAcademicProjects, 'portfolioAcademicGrid', 'academic');
    generatePortfolioHorizontal(portfolioIndependentProjects, 'portfolioIndependentGrid', 'independent');

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
    }
}

function closeMobPanel() {
    const panel = document.getElementById('mobPanel');
    if (panel) panel.classList.remove('mob-active');
    document.body.style.overflow = '';
}

function mobRender() {
    if (!mobProject) return;
    const p     = mobProject;
    const total = p.images.length;

    /* ── Counter ── */
    const elCur = document.getElementById('mobCurrent');
    const elTot = document.getElementById('mobTotal');
    if (elCur) elCur.textContent = mobImgIndex + 1;
    if (elTot) elTot.textContent = total;

    /* ── Hero image — fade swap ── */
    const img = document.getElementById('mobPhotoImg');
    if (img) {
        img.classList.add('mob-fading');
        setTimeout(() => {
            img.src = p.images[mobImgIndex];
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

    /* ── Tabstrip — rebuild thumbnail tabs ── */
    const strip = document.getElementById('mobTabstrip');
    if (strip) {
        strip.innerHTML = '';
        p.images.forEach((src, i) => {
            const tab = document.createElement('div');
            tab.className = 'mob-tab' + (i === mobImgIndex ? ' mob-tab-active' : '');
            const im = document.createElement('img');
            im.src     = src;
            im.alt     = `${p.title} ${i + 1}`;
            im.loading = i === 0 ? 'eager' : 'lazy';
            tab.appendChild(im);
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

    photoLayer.addEventListener('touchmove', (e) => {
        const dx = e.touches[0].clientX - mobTouchX;
        const dy = e.touches[0].clientY - mobTouchY;
        if (!mobDirLocked) mobDirLocked = Math.abs(dx) > Math.abs(dy) ? 'h' : 'v';
        if (mobDirLocked === 'h') {
            const img = document.getElementById('mobPhotoImg');
            if (img) img.style.transform = `translateX(${dx * 0.06}px)`;
        }
    }, { passive: true });

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