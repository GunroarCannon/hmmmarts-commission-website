/*
    Play your voice;
    people come to you of value;
    just start working;
    you can't be doing what everyone else is doing;
    learn from all the failures you've made;
    don't be arrogant, don't be lazy;
    you've got to do it different;
    you can get money with more money or with your time;
    time is more valuable, gaurd and use it wisely;

 */


// Configuration
const config = {
    slotsOpen: true,
    nextAvailableDate: "2023-12-01",
    showWalletPublicly: false,
    socialLinks: {
        x: "https://twitter.com/therealgunroar",
        itch: "https://hmmmgames.itch.io",
        buymeacoffee: "https://buymeacoffee.com/gunroar"
    }
};


// Tiers Data
const tiers = [
    {
        id: "doodle-dash",
        name: "Sketch Pulse",
        price: "$5",
        features: [
            "smaller dimension comic/picture",
            "Simple sketch style",
            "Basic shading",
            "Simple backgrounds",
        ],
        deliveryTime: "24 hours",
        exampleThumbnail: "https://via.placeholder.com/200x150?text=Sketch+Example"
    },
    {
        id: "brush-wave",
        name: "Brush Wave",
        price: "$10-20",
        features: [
            "1000px X 1000px average",
            "Cleaner inked lines",
            "Screen tone effects",
            "Detailed backgrounds",
            "More pazazz"
        ],
        deliveryTime: "36 hours",
        exampleThumbnail: "https://via.placeholder.com/200x150?text=Ink+Example"
    },
    {
        id: "canvas-burst",
        name: "Canvas Burst",
        price: "$100",
        features: [
            "2000px+",
            "Full color artwork",
            "More complex expressions",
            "Fancy effects",
            "Plus I do my utmost best"
        ],
        deliveryTime: "42 hours",
        exampleThumbnail: "https://via.placeholder.com/200x150?text=Color+Example"
    },
    {
        id: "custom",
        name: "Custom Project",
        price: ">$100",
        features: [
            //"Multi-page comics",
            "Complex narratives",
            "Character designs",
            "Full illustration",
            "Consultation included"
        ],
        deliveryTime: "Discuss timeline",
        exampleThumbnail: "https://via.placeholder.com/200x150?text=Custom+Example"
    }
];
// Tier names
const tierList = ["Doodle Dash", "Brush Wave", "Canvas Burst"];

// Gallery Data
const works = [
  {
    id: 1,
    title: "Sketch Dragon",
    thumbnailUrl: "./assets/sketch_dragon.png",
    description: "Loose pencil sketch of a dragon, showing rough motion and flow lines.",
    tags: ["Sketch", "WIP"],
    tier: 0
  },
  {
    id: 2,
    title: "Ad Comic",
    thumbnailUrl: "./assets/ad_comic.png",
    description: "Mini comic styled like an ad — bold composition and expressive characters.",
    tags: ["Comic"],
    tier: 1
  },
  {
    id: 3,
    title: "Animation Panel",
    thumbnailUrl: "./assets/animation.png",
    description: "Frame-by-frame sequence experiment exploring smooth gesture animation.",
    tags: ["Animation", "Experimental", "Complex"],
    tier: 2
  },
  {
    id: 4,
    title: "Dogo Stonks",
    thumbnailUrl: "./assets/avatar.png",
    description: "Only here for business and gentle head pats.",
    tags: ["Portrait"],
    tier: 1
  },
  {
    id: 5,
    title: "Bluey Comic",
    thumbnailUrl: "./assets/bluey_comic.png",
    description: "A comedic short comic inspired by one of the best kids shows.",
    tags: ["Comic"],
    tier: 1
  },
  {
    id: 6,
    title: "Cabin PNG",
    thumbnailUrl: "./assets/cabin.png",
    description: "A cozy cabin illustration, warm tones and autumn mood.",
    tags: ["Environment", "Digital Painting"],
    tier: 2
  },
  {
    id: 7,
    title: "Coooool dude",
    thumbnailUrl: "./assets/commission_to_be.png",
    description: "Art showing color layout and sketch planning.",
    tags: ["WIP", "Character Design"],
    tier: 2
  },
  {
    id: 8,
    title: "Frog Samurai",
    thumbnailUrl: "./assets/complex-art.jpg",
    description: "Full blown comic page",
    tags: ["Illustration", "Complex", "Comic", "Action"],
    tier: 2
  },
  {
    id: 9,
    title: "Dust: Battle Beneath",
    thumbnailUrl: "./assets/custom.png",
    description: "Art done for an old game of mine.",
    tags: ["Illustration", "Complex", "Action"],
    tier: 2
  },
  {
    id: 10,
    title: "The Defect STS",
    thumbnailUrl: "./assets/defect_sts.png",
    description: "Fanart for a character from famous indie game, Slay the Spire.",
    tags: ["Experimental","Character Design", "Action"],
    tier: 1
  },
  {
    id: 11,
    title: "Dust Simple Art",
    thumbnailUrl: "./assets/dust_simple_art.png",
    description: "Minimalist warm-tone illustration — dust particles and light reflections.",
    tags: ["Experimental", "Stylized"],
    tier: 1
  },
  {
    id: 12,
    title: "Elk Hunt",
    thumbnailUrl: "./assets/elkhunt.png",
    description: "Dynamic hunter scene. Or hunted scene more like.",
    tags: ["Action", "Illustration", "Comic"],
    tier: 0
  },
  {
    id: 13,
    title: "For Someone",
    thumbnailUrl: "./assets/for_someone.png",
    description: "Chill character portrait — gift art showing introspective mood.",
    tags: ["Portrait"],
    tier: 2
  },
  {
    id: 14,
    title: "Goat PNG",
    thumbnailUrl: "./assets/goat.png",
    description: "Stylized anthropomorphic goat with cool color tones and strong silhouette.",
    tags: ["Character Design"],
    tier: 1
  },
  {
    id: 15,
    title: "Hand Drawn JPG",
    thumbnailUrl: "./assets/handdrawn.jpg",
    description: "Purely traditional pencil sketch showing raw line quality.",
    tags: ["Sketch", "Traditional", "Complex"],
    tier: 1
  },
  {
    id: 16,
    title: "Lion Art",
    thumbnailUrl: "./assets/lion_art.png",
    description: "Majestic lion portrait with bold brushstrokes and fiery mane.",
    tags: ["Animal", "Digital Painting", "Character Design", "Complex"],
    tier: 2
  },
  {
    id: 17,
    title: "Manga PNG",
    thumbnailUrl: "./assets/manga.png",
    description: "Short manga scene, yo! strong tones, impactful framing.",
    tags: ["Manga", "Comic", "Complex"],
    tier: 1
  },
  {
    id: 18,
    title: "Manga In Progress",
    thumbnailUrl: "./assets/manga_in_progress.png",
    description: "Work-in-progress manga panel layout with early linework.",
    tags: ["Manga", "WIP"],
    tier: 1
  },
  {
    id: 19,
    title: "Medium Art",
    thumbnailUrl: "./assets/medium-art.png",
    description: "Stylized portrait experiment blending digital and traditional feels.",
    tags: ["Portrait", "Stylized"],
    tier: 1
  },
  {
    id: 20,
    title: "Megalovania Moonlight",
    thumbnailUrl: "./assets/megalovania_moonlight.png",
    description: "Art inspired by Megalovania — moonlit colors, bold energy.",
    tags: ["Stylized"],
    tier: 2
  },
  {
    id: 21,
    title: "Monke",
    thumbnailUrl: "./assets/monke.png",
    description: "Comedic monkey character study, heavy line art style.",
    tags: ["Character Design"],
    tier: 1
  },
  {
    id: 22,
    title: "President Comic",
    thumbnailUrl: "./assets/president_comic.png",
    description: "Short political comic with satirical overtones.",
    tags: ["Comic"],
    tier: 0
  },
  {
    id: 23,
    title: "Ragdollman Girl",
    thumbnailUrl: "./assets/ragdollman_girl.png",
    description: "Comic page featuring a villain from my comic Ragdollman, expressive story tone.",
    tags: ["Comic", "Digital Painting"],
    tier: 1
  },
  {
    id: 24,
    title: "Ragdollman Stones",
    thumbnailUrl: "./assets/ragdollman_stones.png",
    description: "Comic about power and burden.",
    tags: ["Manga"],
    tier: 0
  },
  {
    id: 25,
    title: "Ragdollman Train",
    thumbnailUrl: "./assets/ragdollman_train.png",
    description: "Fast-paced action comic panel — motion blur and tension.",
    tags: ["Action", "Comic"],
    tier: 0
  },
  {
    id: 26,
    title: "Rem Psycho",
    thumbnailUrl: "./assets/rem_psycho.png",
    description: "Surreal portrait with psychedelic energy — dreamlike patterns.",
    tags: ["Experimental", "Portrait"],
    tier: 1
  },
  {
    id: 27,
    title: "Spheron Girl",
    thumbnailUrl: "./assets/spheron_girl.png",
    description: "Soft portrait with curved perspective and saturated tones.",
    tags: ["Portrait"],
    tier: 1
  },
  {
    id: 28,
    title: "Staking Comic",
    thumbnailUrl: "./assets/staking_comic.png",
    description: "Short comic about staking and patience — witty and expressive.",
    tags: ["Comic"],
    tier: 1
  },
  {
    id: 29,
    title: "Trad Art",
    thumbnailUrl: "./assets/trad_art.png",
    description: "Traditional drawing scanned — visible pencil texture and tones.",
    tags: ["Traditional", "Sketch", "Action"],
    tier: 0
  },
  {
    id: 30,
    title: "Work In Progress",
    thumbnailUrl: "./assets/work_in_progress.png",
    description: "Digital Frog Samurai comic still in progress — visible layers and linework.",
    tags: ["WIP"],
    tier: 2
  },
  {
    id: 31,
    title: "Work In Progress 2",
    thumbnailUrl: "./assets/work_in_progress_2.png",
    description: "Alternate stage of same comic, showing refinement.",
    tags: ["WIP"],
    tier: 1
  }
];

works.forEach(work => work.tags.push(tierList[work.tier]));

// Testimonials Data
const testimonials = [
    {
        text: "Amazing work! Delivered faster than promised and the communication was excellent throughout the process.",
        author: "Sarah M."
    },
    {
        text: "The artist perfectly captured the emotion I wanted in my comic. Will definitely commission again!",
        author: "Alex T."
    },
    {
        text: "Professional, talented, and great to work with. The final piece exceeded my expectations.",
        author: "Jamie L."
    }
];

// Selar Configuration
const selarLinks = {
    "doodle-dash": "https://selar.com/p6y66f066b",
    "brush-wave": "https://selar.com/2068220cm2", 
    "canvas-burst": "https://selar.com/kp2q82o027",
    "custom": "#contact",
    "all": "#tiers"
};

// Redirect to Selar function
function redirectToSelar(tier) {
    const link = selarLinks[tier];
    if (link && link !== '#contact' && link !== '#tiers') {
        window.open(link, '_blank');
    } else if (tier === 'custom') {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        document.getElementById('tier').value = 'custom';
        updatePaymentOptions();
    } else {
        document.getElementById('tiers').scrollIntoView({ behavior: 'smooth' });
    }
}

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.nav-links');
const tiersContainer = document.getElementById('tiersContainer');
const galleryFilters = document.getElementById('galleryFilters');
const galleryGrid = document.getElementById('galleryGrid');
const testimonialsContainer = document.getElementById('testimonialsContainer');
const lightbox = document.getElementById('lightbox');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDescription = document.getElementById('lightboxDescription');
const lightboxTier = document.getElementById('lightboxTier');
const lightboxTags = document.getElementById('lightboxTags');
const commissionForm = document.getElementById('commissionForm');
const solanaModal = document.getElementById('solanaModal');
const solanaModalClose = document.getElementById('solanaModalClose');
const showSolanaModal = document.getElementById('showSolanaModal');
const requestBankDetails = document.getElementById('requestBankDetails');

// Initialize the site
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    renderTiers();
    renderGalleryFilters();
    renderGallery();
    renderTestimonials();
    initializeHeroAnimation();
    setupEventListeners();
});

// Theme Toggle
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeToggleText(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeToggleText(newTheme);
}

function updateThemeToggleText(theme) {
    themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

// Render Tiers
function renderTiers() {
    tiersContainer.innerHTML = '';
    
    tiers.forEach(tier => {
        const tierCard = document.createElement('div');
        tierCard.className = 'tier-card';
        
        const slotStatus = config.slotsOpen ? 
            '<span class="slot-indicator slot-open">Slots Open</span>' : 
            '<span class="slot-indicator slot-closed">Slots Closed</span>';
        
        // Simple purchase button that redirects to Selar
        const purchaseButton = tier.id !== "custom" ? 
            `<button class="btn" onclick="redirectToSelar('${tier.id}')" style="margin-top: 10px;">
                Purchase ${tier.name}
            </button>` :
            `<a href="#contact" class="btn" style="margin-top: 10px;">Discuss Custom Project</a>`;
        
        tierCard.innerHTML = `
            <h3>${tier.name}</h3>
            <div class="tier-price">${tier.price}</div>
            ${slotStatus}
            <span class="delivery-time">${tier.deliveryTime}</span>
            <ul class="tier-features">
                ${tier.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            ${purchaseButton}
        `;
        
        tiersContainer.appendChild(tierCard);
    });
}

// Render Gallery Filters
function renderGalleryFilters() {
    // Get all unique tags from works
    const allTags = [...new Set(works.flatMap(work => work.tags))];
    tierList.forEach(tier => allTags.push(tier));
    
    // Add "All" filter
    galleryFilters.innerHTML = '<button class="filter-btn active" data-filter="all">All</button>';
    
    // Add tag filters
    allTags.forEach(tag => {
        const filterBtn = document.createElement('button');
        filterBtn.className = 'filter-btn';
        filterBtn.textContent = tag;
        filterBtn.setAttribute('data-filter', tag);
        galleryFilters.appendChild(filterBtn);
    });
}

// Render Gallery
function renderGallery(filter = 'all') {
    galleryGrid.innerHTML = '';
    
    const filteredWorks = filter === 'all' ? 
        works : works.filter(work => work.tags.includes(filter));
    
    filteredWorks.forEach(work => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-id', work.id);
        
        galleryItem.innerHTML = `
            <img src="${work.thumbnailUrl}" alt="${work.title}">
            <div class="gallery-item-content">
                <h4>${work.title}</h4>
                <div class="gallery-item-tags">
                    ${work.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        galleryGrid.appendChild(galleryItem);
    });
}

// Render Testimonials
function renderTestimonials() {
    testimonialsContainer.innerHTML = '';
    
    testimonials.forEach(testimonial => {
        const testimonialEl = document.createElement('div');
        testimonialEl.className = 'testimonial';
        
        testimonialEl.innerHTML = `
            <p class="testimonial-text">"${testimonial.text}"</p>
            <p class="testimonial-author">- ${testimonial.author}</p>
        `;
        
        testimonialsContainer.appendChild(testimonialEl);
    });
}

// Hero Animation
function initializeHeroAnimation() {
    const frames = document.querySelectorAll('.animation-frame');
    let currentFrame = 0;
    
    setInterval(() => {
        frames[currentFrame].classList.remove('active');
        const old = frames[currentFrame];
        setTimeout(() => old.classList.remove('zoom-animate'), 1000);
        currentFrame = (currentFrame + 1) % frames.length;
        const cur = frames[currentFrame]
        cur.classList.add('active');
        cur.classList.add('zoom-animate');
    }, 2000);
}

// Lightbox Functions
function openLightbox(workId) {
    const work = works.find(w => w.id === workId);
    if (!work) return;
    
    lightboxImage.src = work.thumbnailUrl;
    lightboxImage.alt = work.title;
    lightboxTitle.textContent = work.title;
    lightboxDescription.textContent = work.description;
    lightboxTier.innerHTML = `<strong>Tier:</strong> ${tierList[work.tier]}`;
    
    lightboxTags.innerHTML = '';
    work.tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.className = 'tag';
        tagEl.textContent = tag;
        lightboxTags.appendChild(tagEl);
    });
    
    lightbox.classList.add('active');
}

function closeLightbox() {
    lightbox.classList.remove('active');
}

// Form Handling
function handleCommissionFormSubmit(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        contact: document.getElementById('contact').value,
        tier: document.getElementById('tier').value,
        description: document.getElementById('description').value
    };
    
    // In a real implementation, this would send to a server
    console.log('Commission request:', formData);
    alert('Thank you for your commission request! I will contact you shortly to discuss details and payment.');
    
    // Reset form
    commissionForm.reset();
}

// Setup Event Listeners
function setupEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Mobile menu
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Gallery filters
    galleryFilters.addEventListener('click', function(e) {
        if (e.target.classList.contains('filter-btn')) {
            // Update active filter
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');
            
            // Filter gallery
            const filter = e.target.getAttribute('data-filter');
            renderGallery(filter);
        }
    });
    
    // Gallery items (event delegation)
    galleryGrid.addEventListener('click', function(e) {
        const galleryItem = e.target.closest('.gallery-item');
        if (galleryItem) {
            const workId = parseInt(galleryItem.getAttribute('data-id'));
            openLightbox(workId);
        }
    });
    
    // Lightbox close
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Commission form
    if (commissionForm) commissionForm.addEventListener('submit', handleCommissionFormSubmit);
    
    // Solana modal
    showSolanaModal.addEventListener('click', function() {
        solanaModal.classList.add('active');
    });
    
    solanaModalClose.addEventListener('click', function() {
        solanaModal.classList.remove('active');
    });
    
    solanaModal.addEventListener('click', function(e) {
        if (e.target === solanaModal) {
            solanaModal.classList.remove('active');
        }
    });
    
    // // Bank details request
    // requestBankDetails.addEventListener('click', function() {
    //     alert('Please contact me directly for bank transfer details. This helps keep financial information secure.');
    // });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                }
            }
        });
    });
}
