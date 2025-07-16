// Windsor Essex Swim Team - Main JavaScript

// Google Tag Manager Integration
(function() {
    // Load Google Tag Manager script
    const gtmScript = document.createElement('script');
    gtmScript.async = true;
    gtmScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-17239822947";
    document.head.appendChild(gtmScript);
    
    // Initialize dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-17239822947');
    
    // Make gtag available globally
    window.gtag = gtag;
    
    console.log("Google Tag Manager initialized with ID: AW-17239822947");
})(); 

// Import responsive CSS helper
(function() {
    const script = document.createElement('script');
    script.src = 'js/add-responsive-css.js';
    document.head.appendChild(script);
})();

// Import Google Tag Manager
(function() {
    const script = document.createElement('script');
    script.src = 'js/google-tag.js';
    document.head.appendChild(script);
})();

// Global function to apply solid-to-glass navbar effect across all pages
function setupNavbarEffect() {
    // Get navbar element
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    // Apply navbar styling - always transparent
    function applyNavbarStyle() {
        // Always apply glass effect
        navbar.style.background = 'rgba(0, 0, 0, 0.45)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.WebkitBackdropFilter = 'blur(20px)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.2)';
    }
    
    // Apply immediately
    applyNavbarStyle();
    
    // Force reapply after a short delay to ensure it takes effect
    setTimeout(applyNavbarStyle, 500);
}

// Fix navbar dropdown alignment
function fixNavbarDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    if (!dropdowns.length) return;
    
    // For each dropdown in the navbar
    dropdowns.forEach(dropdown => {
        const menu = dropdown.querySelector('.dropdown-menu');
        const toggle = dropdown.querySelector('.dropdown-toggle');
        if (!menu || !toggle) return;
        
        // Ensure dropdown is aligned with its parent
        menu.style.minWidth = `${dropdown.offsetWidth}px`;
        
        // Handle hover events with correct positioning
        dropdown.addEventListener('mouseenter', function() {
            // Position the menu relative to the toggle button
            const rect = toggle.getBoundingClientRect();
            menu.style.left = '0';
            menu.style.top = '100%';
            
            // Make visible with CSS
            menu.style.display = 'block';
            menu.style.opacity = '1';
            menu.style.visibility = 'visible';
        });
        
        dropdown.addEventListener('mouseleave', function() {
            // Hide menu
            menu.style.opacity = '0';
            menu.style.visibility = 'hidden';
        });
    });
}

// Auto-initialize navbar effect
(function() {
    // Run immediately
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setupNavbarEffect();
            fixNavbarDropdowns();
        });
    } else {
        setupNavbarEffect();
        fixNavbarDropdowns();
    }
    
    // Re-run after a delay to handle any race conditions
    setTimeout(function() {
        setupNavbarEffect();
        fixNavbarDropdowns();
    }, 500);
})();

// Immediately create back to top button
(function() {
    console.log("Creating initial back to top button");
    
    // Only create if it doesn't exist
    if (!document.querySelector('.scroll-top-btn')) {
        const button = document.createElement('div');
        button.className = 'scroll-top-btn';
        button.style.position = 'fixed';
        button.style.bottom = '30px';
        button.style.right = '30px';
        button.style.width = '50px';
        button.style.height = '50px';
        button.style.backgroundColor = '#fd0000';
        button.style.borderRadius = '50%';
        button.style.display = 'flex';
        button.style.alignItems = 'center';
        button.style.justifyContent = 'center';
        button.style.color = 'white';
        button.style.cursor = 'pointer';
        button.style.boxShadow = '0 3px 15px rgba(0, 0, 0, 0.4)';
        button.style.zIndex = '9999';
        button.style.fontSize = '20px';
        button.style.border = '2px solid rgba(255, 255, 255, 0.4)';
        button.innerHTML = '<i class="fas fa-arrow-up"></i>';
        
        // Add click handler
        button.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Append to body
        document.body.appendChild(button);
    }
})();

// Seamless navigation and interactive features

class WESTWebsite {
    constructor() {
        // Bind events first to ensure modal transfer happens before initialization
        this.bindEvents();
        this.init();
        this.initAnimations();
    }

    init() {
        // Initialize page transition overlay
        this.createPageTransition();
        
        // Fix modal backdrops immediately
        this.fixModalBackdrops();
        
        // Ensure Bootstrap is loaded before initializing features that depend on it
        this.ensureBootstrapLoaded(() => {
            // Initialize dropdown functionality (must be first for navigation)
            this.initDropdowns();
        
        // Set active navigation
        this.setActiveNavigation();
        
        // Initialize smooth scrolling
        this.initSmoothScrolling();
        
        // Initialize navbar scroll effect
        this.initNavbarScroll();
        
        // Initialize lazy loading for images
        this.initLazyLoading();
        
        // Initialize intersection observer for animations
        this.initIntersectionObserver();
        
        // Initialize mobile menu for webflow style
        this.initMobileMenu();
        
        // Initialize side navigation dots
        this.initSideNavigation();
        
        // Initialize navigation cards
        this.initNavigationCards();
        
        // Initialize popup modals
        this.initPopupModals();
        
        // Initialize enhanced carousel
        this.initEnhancedCarousel();
            
            // Initialize modal links
            this.initModalLinks();
        });
    }

    // Helper method to ensure Bootstrap is loaded
    ensureBootstrapLoaded(callback) {
        const checkBootstrap = () => {
            if (typeof bootstrap !== 'undefined') {
                callback();
                return true;
            }
            return false;
        };
        
        // Check if Bootstrap is already loaded
        if (checkBootstrap()) return;
        
        // If not, try loading it
        console.log("Attempting to load Bootstrap...");
        
        // Check if the script tag exists
        const existingScript = document.querySelector('script[src*="bootstrap"]');
        
        if (!existingScript) {
            // If not, create and append it
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
            script.integrity = 'sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz';
            script.crossOrigin = 'anonymous';
            
            script.onload = () => {
                console.log("Bootstrap loaded successfully");
                callback();
            };
            
            script.onerror = () => {
                console.error("Failed to load Bootstrap");
            };
            
            document.head.appendChild(script);
        } else {
            // If the script exists but Bootstrap is not defined yet, wait for it
            const maxAttempts = 10;
            let attempts = 0;
            
            const checkInterval = setInterval(() => {
                attempts++;
                if (checkBootstrap() || attempts >= maxAttempts) {
                    clearInterval(checkInterval);
                    if (attempts >= maxAttempts) {
                        console.error("Bootstrap did not initialize after multiple attempts");
                    }
                }
            }, 200);
        }
    }

    createPageTransition() {
        if (!document.querySelector('.page-transition')) {
            // Create the transition element
            const transition = document.createElement('div');
            transition.className = 'page-transition';
            
            // Create the loader element
            const loader = document.createElement('div');
            loader.className = 'loader';
            transition.appendChild(loader);
            
            // Add to the document
            document.body.appendChild(transition);
            
            // Add CSS styles if not present
            if (!document.getElementById('page-transition-styles')) {
                const style = document.createElement('style');
                style.id = 'page-transition-styles';
                style.textContent = `
                    .page-transition {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(0, 0, 0, 0.85);
                        z-index: 9999;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        opacity: 0;
                        visibility: hidden;
                        transition: opacity 0.3s ease, visibility 0.3s ease;
                    }
                    
                    .page-transition.active {
                        opacity: 1;
                        visibility: visible;
                    }
                    
                    .loader {
                        width: 50px;
                        height: 50px;
                        border: 5px solid rgba(255, 255, 255, 0.3);
                        border-top: 5px solid #fd0000;
                        border-radius: 50%;
                        animation: spin 1s linear infinite;
                    }
                    
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `;
                document.head.appendChild(style);
            }
            
            // Safety cleanup for page transition
            document.addEventListener('DOMContentLoaded', this.cleanupPageTransition);
            window.addEventListener('load', this.cleanupPageTransition);
            document.addEventListener('click', this.cleanupPageTransition);
        }
    }
    
    // Safety function to ensure page transition is removed
    cleanupPageTransition() {
        const transition = document.querySelector('.page-transition');
        if (transition && transition.classList.contains('active')) {
            // Check if we've been stuck for too long (over 3 seconds)
            const now = new Date().getTime();
            const transitionStart = parseInt(transition.getAttribute('data-start-time') || '0');
            
            if (transitionStart && (now - transitionStart > 3000)) {
                console.log('Cleaning up stuck page transition');
                transition.classList.remove('active');
                transition.removeAttribute('data-start-time');
            }
        }
    }

    setActiveNavigation() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        // Reset all active states
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Set active state based on current page
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (!href) return;
            
            // Handle lowercase and uppercase matching
            const currentPageLower = currentPage.toLowerCase();
            const hrefLower = href.toLowerCase();
            
            // Check if the current page matches the link
            if (hrefLower === currentPageLower || 
                (currentPageLower === 'index.html' && hrefLower === '#') ||
                (currentPageLower === '' && hrefLower === '#') ||
                (hrefLower === 'index.html' && (currentPageLower === 'index.html' || currentPageLower === '')) ||
                // For dropdown parent links
                (link.classList.contains('dropdown-toggle') && currentPageLower.includes(hrefLower.split('.')[0]))) {
                link.classList.add('active');
            }
            
            // Check if the current page is a child page of a section
            if (href && href.includes('#') && currentPageLower.includes(hrefLower.split('#')[0])) {
                link.classList.add('active');
            }
            
            // Map old filenames to new filenames for backwards compatibility
            const oldToNewMapping = {
                // Standard pages
                'programs.html': 'Programs.html',
                'about.html': 'About.html',
                'coaches.html': 'Coaches.html',
                'contact.html': 'Contact.html',
                'registration.html': 'Registration.html',
                
                // Competition pages
                'meets.html': 'WEST Meets.html',
                'records.html': 'Record West.html',
                'officials.html': 'official.html',
                'general-info.html': 'Genral info.html',
                'results.html': 'news.html',
                
                // Facility page
                'facility.html': 'Facility.html',
                
                // Hall of Fame and records
                'hall-of-fame.html': 'hall of fame intro.html',
                'club-records.html': 'hall of fame (Club).html',
                'provincial-records.html': 'Hall of Fame (Provincial).html',
                'age-group-records.html': 'age-group-records.html',
                'alumni.html': 'hall2.html',
                
                // Resources
                'resources.html': 'Resource.html',
                'updates.html': 'update-pages.html',
                
                // Merchandise and sponsors
                'sponsors.html': 'SPonserr.html',
                'merchandise.html': 'Merch.html'
            };
            
            // Check if old filename mapping exists
            for (const [newFile, oldFile] of Object.entries(oldToNewMapping)) {
                if (hrefLower === newFile && currentPageLower === oldFile.toLowerCase()) {
                    link.classList.add('active');
                }
            }
        });
        
        // For specific dropdown sections
        const pageCategories = {
            'programs': ['programs.html', 'Programs.html', 'schedule.html', 'training-schedule.html'],
            'team': ['about.html', 'About.html', 'team.html', 'coaches.html', 'Coaches.html', 'facility.html', 'Facility.html', 'Registration.html', 'registration.html'],
            'competitions': ['meets.html', 'Meets.html', 'WEST Meets.html', 'official.html', 'general-info.html', 'Genral info.html'],
            'achievements': ['records.html', 'Records.html', 'Record West.html', 'hall-of-fame.html', 'hall of fame intro.html', 'club-records.html', 'Club-records.html', 'hall of fame (Club).html', 'provincial-records.html', 'Provincial-records.html', 'Hall of Fame (Provincial).html', '10 & Under.html', '11-12 Yrs.html', '13 - 14 Yrs.html', '15 Yrs & Over.html', 'hall2.html'],
            'resources': ['resources.html', 'Resources.html', 'Resource.html', 'updates.html', 'update-pages.html', 'official.html']
        };
        
        // Check if current page belongs to a category and highlight the dropdown parent
        for (const [category, pages] of Object.entries(pageCategories)) {
            if (pages.some(page => currentPageLower === page.toLowerCase())) {
                const dropdownToggle = document.querySelector(`.${category}-link`);
                if (dropdownToggle) {
                    dropdownToggle.classList.add('active');
                }
            }
        }
    }

    initSmoothScrolling() {
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 100; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    initNavbarScroll() {
        // Get navbar element
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;
        
        // Apply navbar styling - always transparent
        function applyNavbarStyle() {
            // Always apply glass effect
            navbar.style.background = 'rgba(0, 0, 0, 0.45)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.WebkitBackdropFilter = 'blur(20px)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.2)';
        }
        
        // Apply immediately
        applyNavbarStyle();
        
        // Force reapply after a short delay to ensure it takes effect
        setTimeout(applyNavbarStyle, 500);
    }
    
    initDropdowns() {
        // Create dropdown structure for main navigation
        const navbarNav = document.querySelector('.navbar-nav');
        
        if (navbarNav) {
            // Clear existing dropdown implementation
            const existingDropdowns = document.querySelectorAll('.dropdown-item, .dropdown-menu, .dropdown-toggle');
            existingDropdowns.forEach(item => {
                if (item.classList.contains('dropdown-item')) {
                    const href = item.getAttribute('href');
                    const text = item.textContent;
                    item.parentNode.replaceWith(document.createTextNode(''));
                }
            });
                
            // Reorganize navbar into logical sections
            this.createMainNavDropdowns(navbarNav);
                
            // Handle dropdown toggles on mobile
            const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
            dropdownToggles.forEach(toggle => {
                toggle.addEventListener('click', (e) => {
                    if (window.innerWidth < 1050) {
                        e.preventDefault();
                        const dropdownMenu = toggle.nextElementSibling;
                        if (dropdownMenu && dropdownMenu.classList.contains('dropdown-menu')) {
                            dropdownMenu.classList.toggle('show');
                        }
                    }
                });
            });
                
            // Hover effect for desktop only
            const dropdowns = document.querySelectorAll('.dropdown');
            dropdowns.forEach(dropdown => {
                dropdown.addEventListener('mouseenter', function() {
                    if (window.innerWidth >= 1050) {
                        const dropdownMenu = this.querySelector('.dropdown-menu');
                        dropdownMenu.classList.add('show');
                    }
                });
                
                dropdown.addEventListener('mouseleave', function() {
                    if (window.innerWidth >= 1050) {
                        const dropdownMenu = this.querySelector('.dropdown-menu');
                        dropdownMenu.classList.remove('show');
                    }
                });
            });
        }
    }
    
    createMainNavDropdowns(navbarNav) {
        // Get all existing nav items to reorganize
        const navItems = Array.from(navbarNav.querySelectorAll('.nav-item'));
        
        // Clear navbar
        navbarNav.innerHTML = '';
        
        // 1. Add Home link
        const homeItem = document.createElement('li');
        homeItem.className = 'nav-item';
        homeItem.innerHTML = `<a class="nav-link" href="index.html">HOME</a>`;
        navbarNav.appendChild(homeItem);
        
        // 2. Add Team & Club dropdown
        const teamItem = document.createElement('li');
        teamItem.className = 'nav-item dropdown';
        teamItem.innerHTML = `
            <a class="nav-link dropdown-toggle team-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                TEAM & CLUB
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="About.html">About Us</a></li>
                <li><a class="dropdown-item" href="Coaches.html">Coaches</a></li>
                <li><a class="dropdown-item" href="team.html">Team Structure</a></li>
                <li><a class="dropdown-item" href="Facility.html">Facilities</a></li>
                <li><a class="dropdown-item" href="Registration.html">Registration</a></li>
            </ul>
        `;
        navbarNav.appendChild(teamItem);
        
        // 3. Add Competitions dropdown
        const competitionsItem = document.createElement('li');
        competitionsItem.className = 'nav-item dropdown';
        competitionsItem.innerHTML = `
            <a class="nav-link dropdown-toggle competitions-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                COMPETITIONS
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="Meets.html">All Meets</a></li>
                <li><a class="dropdown-item" href="Meets.html#heat-sheets">Heat Sheets</a></li>
                <li><a class="dropdown-item" href="Meets.html#psych-sheets">Psych Sheets</a></li>
                <li><a class="dropdown-item" href="Meets.html#registration">Meet Registration</a></li>
            </ul>
        `;
        navbarNav.appendChild(competitionsItem);
        
        // 4. Add Programs dropdown
        const programsItem = document.createElement('li');
        programsItem.className = 'nav-item dropdown';
        programsItem.innerHTML = `
            <a class="nav-link dropdown-toggle programs-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                PROGRAMS
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="Programs.html#barracudas">Barracudas</a></li>
                <li><a class="dropdown-item" href="Programs.html#otters">Otters</a></li>
                <li><a class="dropdown-item" href="Programs.html#stroke">Learn to Swim</a></li>
                <li><a class="dropdown-item" href="Programs.html#performance">Competitive</a></li>
                <li><a class="dropdown-item" href="Programs.html#additional">Masters</a></li>
                <li><a class="dropdown-item" href="Programs.html#private-lessons">Private Lessons</a></li>
                <li><a class="dropdown-item" href="Programs.html">All Programs</a></li>
            </ul>
        `;
        navbarNav.appendChild(programsItem);
        
        // 5. Add Achievements dropdown
        const achievementsItem = document.createElement('li');
        achievementsItem.className = 'nav-item dropdown';
        achievementsItem.innerHTML = `
            <a class="nav-link dropdown-toggle achievements-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                ACHIEVEMENTS
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="Club-records.html">Club Records</a></li>
                <li><a class="dropdown-item" href="Provincial-records.html">Provincial Qualifiers</a></li>
                <li><a class="dropdown-item" href="Records.html">Records</a></li>
                <li><a class="dropdown-item" href="hall-of-fame.html">Hall of Fame</a></li>
            </ul>
        `;
        navbarNav.appendChild(achievementsItem);
        
        // 6. Add Resources dropdown
        const resourcesItem = document.createElement('li');
        resourcesItem.className = 'nav-item dropdown';
        resourcesItem.innerHTML = `
            <a class="nav-link dropdown-toggle resources-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                RESOURCES
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="Resources.html#documents">Documents</a></li>
                <li><a class="dropdown-item" href="official.html">Officials</a></li>
                <li><a class="dropdown-item" href="Cancellations.html">Pool Cancellations</a></li>
                <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#merchandiseModal">Merchandise</a></li>
                <li><a class="dropdown-item" href="Resources.html">All Resources</a></li>
            </ul>
        `;
        navbarNav.appendChild(resourcesItem);
        
        // 7. Add Contact link
        const contactItem = document.createElement('li');
        contactItem.className = 'nav-item';
        contactItem.innerHTML = `<a class="nav-link" href="Contact.html">CONTACT</a>`;
        navbarNav.appendChild(contactItem);
    }
    
    initPopupModals() {
        // Create modal container if it doesn't exist
        if (!document.getElementById('pageModal')) {
            const modalHTML = `
            <div class="modal fade" id="pageModal" tabindex="-1" aria-labelledby="pageModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content bg-dark">
                        <div class="modal-header">
                            <h5 class="modal-title" id="pageModalLabel">Page Title</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="spinner-border text-primary" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
            
            const modalElement = document.createRange().createContextualFragment(modalHTML);
            document.body.appendChild(modalElement);
        }
        
        // Add event listeners to popup links
        document.querySelectorAll('.popup-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const pagePath = link.getAttribute('data-page');
                const pageTitle = link.textContent.trim();
                
                // Update modal title
                document.getElementById('pageModalLabel').textContent = pageTitle;
                
                // Show modal with loading spinner
                const modal = new bootstrap.Modal(document.getElementById('pageModal'));
                modal.show();
                
                // Fetch page content
                fetch(pagePath)
                    .then(response => response.text())
                    .then(html => {
                        const parser = new DOMParser();
                        const doc = parser.parseFromString(html, 'text/html');
                        
                        // Extract main content (adjust selector based on your page structure)
                        let content = doc.querySelector('main') || 
                                     doc.querySelector('.container:not(nav .container)') ||
                                     doc.querySelector('section:not(#hero)');
                        
                        if (!content) {
                            // Fallback: get everything after navbar and before footer
                            const body = doc.body;
                            const tempDiv = document.createElement('div');
                            let currentElement = body.querySelector('nav + *');
                            
                            while (currentElement && !currentElement.matches('footer')) {
                                tempDiv.appendChild(currentElement.cloneNode(true));
                                currentElement = currentElement.nextElementSibling;
                            }
                            
                            content = tempDiv;
                        }
                        
                        // Update modal content
                        document.querySelector('#pageModal .modal-body').innerHTML = '';
                        document.querySelector('#pageModal .modal-body').appendChild(content);
                        
                        // Initialize any scripts or functionality in the modal content
                        const scripts = Array.from(content.querySelectorAll('script'));
                        scripts.forEach(script => {
                            const newScript = document.createElement('script');
                            if (script.src) {
                                newScript.src = script.src;
                            } else {
                                newScript.textContent = script.textContent;
                            }
                            document.querySelector('#pageModal .modal-body').appendChild(newScript);
                        });
                    })
                    .catch(error => {
                        console.error('Error loading popup content:', error);
                        document.querySelector('#pageModal .modal-body').innerHTML = 
                            `<div class="alert alert-danger">Error loading content. Please try again.</div>`;
                    });
            });
        });
    }
    
    initMobileMenu() {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarNav = document.querySelector('.navbar-collapse');
        
        if (navbarToggler && navbarNav) {
            // Direct click handler for the burger menu
            navbarToggler.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // Toggle the collapse state
                if (navbarNav.classList.contains('show')) {
                    navbarNav.classList.remove('show');
                    navbarNav.style.height = '0';
                    
                    // Close all open dropdown menus when closing the mobile menu
                    const openDropdowns = document.querySelectorAll('.dropdown-menu.show');
                    openDropdowns.forEach(menu => {
                        menu.classList.remove('show');
                    });
                } else {
                    navbarNav.classList.add('show');
                    navbarNav.style.height = '100vh'; // Set to full height
                }
            });
            
            // Remove any existing click handlers from dropdown toggles
            const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
            dropdownToggles.forEach(toggle => {
                const newToggle = toggle.cloneNode(true);
                toggle.parentNode.replaceChild(newToggle, toggle);
            });
            
            // Add new click handlers to dropdown toggles
            document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
                toggle.addEventListener('click', (e) => {
                    if (window.innerWidth < 1050) {
                        e.preventDefault();
                        e.stopPropagation();
                        
                        const dropdownMenu = toggle.nextElementSibling;
                        if (dropdownMenu && dropdownMenu.classList.contains('dropdown-menu')) {
                            // Toggle this dropdown
                            dropdownMenu.classList.toggle('show');
                            
                            // Close all other dropdowns
                            document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                                if (menu !== dropdownMenu) {
                                    menu.classList.remove('show');
                                }
                            });
                        }
                    }
                });
            });
            
            // Close menu when clicking a non-dropdown link on mobile
            document.querySelectorAll('.nav-link:not(.dropdown-toggle)').forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth < 1050) {
                        navbarNav.classList.remove('show');
                        navbarNav.style.height = '0';
                        
                        // Close all open dropdown menus
                        document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                            menu.classList.remove('show');
                        });
                    }
                });
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (window.innerWidth < 1050) {
                    const isNavbar = e.target.closest('.navbar');
                    if (!isNavbar && navbarNav.classList.contains('show')) {
                        navbarNav.classList.remove('show');
                        navbarNav.style.height = '0';
                        
                        // Close all open dropdown menus
                        document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                            menu.classList.remove('show');
                        });
                    }
                }
            });
            
            // Handle window resize events
            window.addEventListener('resize', () => {
                if (window.innerWidth >= 1050) {
                    // Reset navbar for desktop view
                    navbarNav.style.height = 'auto';
                    
                    // Close any open dropdowns on resize to desktop
                    document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                        menu.classList.remove('show');
                    });
                } else if (!navbarNav.classList.contains('show')) {
                    // Ensure collapsed state on mobile
                    navbarNav.style.height = '0';
                }
            });
        }
    }

    initLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('loading');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    initIntersectionObserver() {
        const animatedElements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) translateX(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(el => {
            el.style.opacity = '0';
            if (el.classList.contains('fade-in-up')) {
                el.style.transform = 'translateY(30px)';
            } else if (el.classList.contains('slide-in-left')) {
                el.style.transform = 'translateX(-50px)';
            } else if (el.classList.contains('slide-in-right')) {
                el.style.transform = 'translateX(50px)';
            }
            el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            observer.observe(el);
        });
    }

    bindEvents() {
        // Add event listener for internal link clicks, excluding footer links
        document.querySelectorAll('a:not([target="_blank"]):not(.popup-link):not([href^="#"]):not(.footer-links a):not(.footer a)').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                // Direct navigation for external links or non-HTML links
                if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || !href.endsWith('.html')) {
                    return; // Let the browser handle these links
                }
                
                // Direct navigation for home page
                if (href === 'index.html' || href === './index.html' || href === '/' || href === './') {
                    e.preventDefault();
                    window.location.href = 'index.html';
                    return;
                }
                
                // Use direct navigation for buttons on index page
                if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
                    e.preventDefault();
                    window.location.href = href;
                    return;
                }
                
                // For internal links, use our custom navigation
                e.preventDefault();
                
                // Transfer modals before navigation
                this.transferModals();
                
                this.navigateToPage(href);
            });
        });
        
        // Ensure footer links use direct navigation
        document.querySelectorAll('.footer-links a, .footer a').forEach(link => {
            link.addEventListener('click', (e) => {
                // Let the default browser navigation handle these
                const href = link.getAttribute('href');
                if (!href || href.startsWith('#')) return;
                
                // Prevent any custom handling
                e.stopPropagation();
                // Allow normal navigation to proceed
            });
        });
        
        // Transfer modals on page load
        this.restoreModals();
    }

    initPageNavigation() {
        const links = document.querySelectorAll('a[href$=".html"]:not(.footer-links a):not(.footer a), a[href="index.html"]:not(.footer-links a):not(.footer a), a[href="/"]:not(.footer-links a):not(.footer a)');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                // Skip external links, anchors, and special links
                if (href.startsWith('http') || 
                    href.startsWith('#') || 
                    href.startsWith('mailto:') || 
                    href.startsWith('tel:') ||
                    link.hasAttribute('target')) {
                    return;
                }
                
                // Skip dropdown toggles
                if (link.classList.contains('dropdown-toggle')) {
                    e.preventDefault();
                    return;
                }
                
                e.preventDefault();
                this.navigateToPage(href);
            });
        });
    }

    navigateToPage(href) {
        const transition = document.querySelector('.page-transition');
        
        // Special case for home page or index page to avoid loader issues
        if (href === 'index.html' || href === './index.html' || href === '/' || href === './') {
            window.location.href = 'index.html';
            return;
        }
        
        // Check if href is a file that actually exists before using custom navigation
        if (!href.endsWith('.html')) {
            window.location.href = href;
            return;
        }
        
        // Map old filenames to new ones if needed
        const oldToNewPageMapping = {
            'Programs.html': 'programs.html',
            'About.html': 'about.html',
            'Coaches.html': 'coaches.html',
            'WEST Meets.html': 'meets.html',
            'Record West.html': 'records.html',
            'hall of fame intro.html': 'hall-of-fame.html',
            'news.html': 'results.html',
            'SPonserr.html': 'sponsors.html',
            'Contact.html': 'contact.html',
            'official.html': 'official.html',
            'Merch.html': 'merchandise.html',
            'Private lessons.html': 'Programs.html#private-lessons',
            'Resource.html': 'resources.html', 
            'Genral info.html': 'general-info.html',
            'update-pages.html': 'updates.html',
            'training-schedule.html': 'schedule.html',
            'Facility.html': 'facility.html',
            'club-records.html': 'hall of fame (Club).html',
            'Hall of Fame (Provincial).html': 'provincial-records.html',
            '10-under yrs.html': 'age-group-records.html',
            'alumni.html': 'hall2.html'
        };
        
        // Check if we need to use a new filename
        const newPageMapping = {
            'programs.html': 'Programs.html',
            'about.html': 'About.html',
            'coaches.html': 'Coaches.html',
            'meets.html': 'WEST Meets.html',
            'records.html': 'Record West.html',
            'hall-of-fame.html': 'hall of fame intro.html',
            'results.html': 'news.html',
            'sponsors.html': 'SPonserr.html',
            'contact.html': 'Contact.html',
            'officials.html': 'official.html',
            'merchandise.html': 'Merch.html',
            'private-lessons.html': 'Programs.html#private-lessons',
            'resources.html': 'Resource.html',
            'general-info.html': 'Genral info.html',
            'updates.html': 'update-pages.html',
            'schedule.html': 'training-schedule.html',
            'facility.html': 'Facility.html',
            'club-records.html': 'hall of fame (Club).html',
            'provincial-records.html': 'Hall of Fame (Provincial).html',
            'age-group-records.html': '10-under yrs.html',
            'alumni.html': 'hall2.html'
        };
        
        // Use direct navigation for certain pages to avoid issues
        const directNavigationPages = [
            'Programs.html', 'About.html', 'Coaches.html', 'Resources.html', 
            'Registration.html', 'team.html', 'Records.html', 'hall-of-fame.html',
            'Meets.html', 'official.html', 'Facility.html'
        ];
        
        if (directNavigationPages.includes(href)) {
            // Use direct navigation instead of custom page transition
            window.location.href = href;
            return;
        }
        
        // Try the optimized URL first, fallback to old name if needed
        const navigateToHref = oldToNewPageMapping[href] || newPageMapping[href] || href;
        
        // Save any modal content we need to transfer
        const sponsorsModal = document.getElementById('sponsorsModal');
        const merchandiseModal = document.getElementById('merchandiseModal');
        const modalsToTransfer = [];
        
        if (sponsorsModal) modalsToTransfer.push(sponsorsModal.outerHTML);
        if (merchandiseModal) modalsToTransfer.push(merchandiseModal.outerHTML);
        
        // Show transition
        transition.classList.add('active');
        
        // Set timestamp to track when transition started
        transition.setAttribute('data-start-time', new Date().getTime().toString());
        
        // Add to browser history
        history.pushState({ page: navigateToHref }, '', navigateToHref);
        
        // Load new page after transition
        setTimeout(() => {
            this.loadPage(navigateToHref);
            
            // Ensure navigation elements are recreated
            setTimeout(() => {
                if (typeof createSimpleSideNavigation === 'function') {
                    createSimpleSideNavigation();
                }
                if (typeof createBackToTopButton === 'function') {
                    createBackToTopButton();
                }
                
                // Re-add modals if they aren't already present
                if (modalsToTransfer.length > 0) {
                    const currentSponsorsModal = document.getElementById('sponsorsModal');
                    const currentMerchandiseModal = document.getElementById('merchandiseModal');
                    
                    if (!currentSponsorsModal && modalsToTransfer[0]) {
                        document.body.insertAdjacentHTML('beforeend', modalsToTransfer[0]);
                    }
                    
                    if (!currentMerchandiseModal && modalsToTransfer[1]) {
                        document.body.insertAdjacentHTML('beforeend', modalsToTransfer[1]);
                    }
                    
                    // Initialize the modal links
                    this.initModalLinks();
                }
            }, 500);
        }, 300);
    }

    loadPage(href, hideTransition = true) {
        // Add a safety timeout to ensure the loader is removed after a maximum time
        const safetyTimeout = setTimeout(() => {
            const transition = document.querySelector('.page-transition');
            if (transition) {
                transition.classList.remove('active');
                console.log('Safety timeout triggered to remove page transition');
                // Redirect to the page directly as a fallback
                window.location.href = href;
            }
        }, 2000); // 2 seconds max loading time (reduced from 3)

        // Special case for index.html - handle it directly to avoid issues
        if (href === 'index.html' || href === './index.html' || href === '/' || href === './') {
            clearTimeout(safetyTimeout);
            window.location.href = 'index.html';
            return;
        }

        fetch(href)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                // Clear the safety timeout since we got a response
                clearTimeout(safetyTimeout);
                
                // Parse the new page
                const parser = new DOMParser();
                const newDoc = parser.parseFromString(html, 'text/html');
                
                // Update page content
                document.title = newDoc.title;
                document.body.innerHTML = newDoc.body.innerHTML;
                
                // Reinitialize everything
                this.init();
                this.bindEvents();
                
                // Hide transition
                if (hideTransition) {
                    setTimeout(() => {
                        const transition = document.querySelector('.page-transition');
                        if (transition) {
                            transition.classList.remove('active');
                        }
                    }, 100);
                }
                
                // Scroll to top
                window.scrollTo(0, 0);
                
                // Ensure navigation elements are created after page change
                setTimeout(() => {
                    if (typeof createSimpleSideNavigation === 'function') {
                        createSimpleSideNavigation();
                    }
                    if (typeof createBackToTopButton === 'function') {
                        createBackToTopButton();
                    }
                    
                    // Reapply navbar effect after page change
                    if (typeof setupNavbarEffect === 'function') {
                        setupNavbarEffect();
                    }
                    if (typeof fixNavbarDropdowns === 'function') {
                        fixNavbarDropdowns();
                    }
                    
                    // Initialize modal links
                    this.initModalLinks();
                }, 200);
            })
            .catch(error => {
                // Clear the safety timeout since we're handling the error
                clearTimeout(safetyTimeout);
                
                console.error('Error loading page:', error);
                
                // Ensure the transition is removed even on error
                const transition = document.querySelector('.page-transition');
                if (transition) {
                    transition.classList.remove('active');
                }
                
                // Fallback to normal navigation
                window.location.href = href;
            });
    }

    initForms() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Add loading state
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                // Simulate form submission (replace with actual form handling)
                setTimeout(() => {
                    submitBtn.textContent = 'Sent!';
                    submitBtn.classList.add('btn-success');
                    
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                        submitBtn.classList.remove('btn-success');
                        form.reset();
                    }, 2000);
                }, 1000);
            });
        });
    }

    initBackToTop() {
        // Do nothing - the standalone back to top button handles this functionality
        console.log("Original back to top initialized - using standalone version instead");
        
        // Remove any original back to top button
        const oldBackToTop = document.querySelector('.back-to-top');
        if (oldBackToTop) oldBackToTop.remove();

        // Create our standalone back to top button
        createBackToTopButton();
    }

    initAnimations() {
        // Parallax effect for hero sections
        const heroSections = document.querySelectorAll('.hero-section');
        
        heroSections.forEach(hero => {
            const heroImage = hero.querySelector('.hero-bg');
            if (heroImage) {
                window.addEventListener('scroll', () => {
                    const scrolled = window.pageYOffset;
                    const rate = scrolled * -0.5;
                    heroImage.style.transform = `translateY(${rate}px)`;
                });
            }
        });

        // Stagger animations for cards
        const cards = document.querySelectorAll('.card, .program-card, .news-card');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });
    }

    initSideNavigation() {
        // Completely disable side navigation
        return; // Skip creating side navigation
        
        // The code below won't execute
        // Create side navigation container if it doesn't exist
        let sideNav = document.querySelector('.side-nav');
        if (!sideNav) {
            sideNav = document.createElement('div');
            sideNav.className = 'side-nav';
            document.body.appendChild(sideNav);
        }

        // Make sure side-nav is visible with proper styles
        sideNav.style.position = 'fixed';
        sideNav.style.top = '50%';
        sideNav.style.right = '20px';
        sideNav.style.transform = 'translateY(-50%)';
        sideNav.style.zIndex = '900';
        sideNav.style.display = 'block';

        // Clear existing items
        sideNav.innerHTML = '';
        
        // Rest of the function...
    }
    
    getPageSpecificNavigation(pageName, sideNav) {
        // Convert input page name to lowercase for more reliable matching
        const pageNameLower = pageName.toLowerCase();
        
        // Define page-specific navigation structures
        const pageNavigations = {
            'about.html': [
                { id: 'top', title: 'Top', icon: 'fa-arrow-up' },
                { id: 'about', title: 'About', icon: 'fa-info-circle' },
                { id: 'mission', title: 'Mission', icon: 'fa-bullseye' },
                { id: 'history', title: 'History', icon: 'fa-history' },
                { id: 'values', title: 'Values', icon: 'fa-heart' },
                { id: 'facilities', title: 'Facilities', icon: 'fa-building' }
            ],
            'coaches.html': [
                { id: 'top', title: 'Top', icon: 'fa-arrow-up' },
                { id: 'coaches', title: 'Coaches', icon: 'fa-users' },
                { id: 'head-coach', title: 'Head Coach', icon: 'fa-user-tie' },
                { id: 'assistant-coaches', title: 'Assistant Coaches', icon: 'fa-user-friends' },
                { id: 'qualifications', title: 'Qualifications', icon: 'fa-certificate' }
            ],
            'programs.html': [
                { id: 'top', title: 'Top', icon: 'fa-arrow-up' },
                { id: 'programs', title: 'Programs', icon: 'fa-graduation-cap' },
                { id: 'performance', title: 'Performance', icon: 'fa-trophy' },
                { id: 'stroke', title: 'Learn to Swim', icon: 'fa-swimmer' },
                { id: 'additional', title: 'Masters', icon: 'fa-users' }
            ],
            'meets.html': [
                { id: 'top', title: 'Top', icon: 'fa-arrow-up' },
                { id: 'meets', title: 'Meets', icon: 'fa-calendar-alt' },
                { id: 'upcoming', title: 'Upcoming', icon: 'fa-calendar-plus' },
                { id: 'past', title: 'Past Results', icon: 'fa-calendar-check' },
                { id: 'qualifying', title: 'Qualifying Times', icon: 'fa-stopwatch' }
            ],
            'contact.html': [
                { id: 'top', title: 'Top', icon: 'fa-arrow-up' },
                { id: 'contact', title: 'Contact', icon: 'fa-envelope' },
                { id: 'form', title: 'Contact Form', icon: 'fa-paper-plane' },
                { id: 'location', title: 'Location', icon: 'fa-map-marker-alt' },
                { id: 'social', title: 'Social Media', icon: 'fa-share-alt' }
            ],
            'results.html': [
                { id: 'top', title: 'Top', icon: 'fa-arrow-up' },
                { id: 'news', title: 'News', icon: 'fa-newspaper' },
                { id: 'latest', title: 'Latest', icon: 'fa-bell' },
                { id: 'archives', title: 'Archives', icon: 'fa-archive' }
            ],
            'hall-of-fame.html': [
                { id: 'top', title: 'Top', icon: 'fa-arrow-up' },
                { id: 'hall-of-fame', title: 'Hall of Fame', icon: 'fa-medal' },
                { id: 'inductees', title: 'Inductees', icon: 'fa-user-friends' },
                { id: 'achievements', title: 'Achievements', icon: 'fa-trophy' },
                { id: 'records', title: 'Records', icon: 'fa-stopwatch' }
            ]
        };
        
        // Legacy file name mapping for backward compatibility
        const legacyPageNames = {
            'about.html': 'About.html',
            'coaches.html': 'Coaches.html',
            'programs.html': 'Programs.html',
            'meets.html': 'WEST Meets.html',
            'contact.html': 'Contact.html',
            'results.html': 'news.html',
            'hall-of-fame.html': 'hall of fame intro.html'
        };
            
        // Get the navigation for this page if it exists
        let pageNav = pageNavigations[pageNameLower];
        
        // If not found with new naming, try legacy naming
        if (!pageNav) {
            for (const [newName, oldName] of Object.entries(legacyPageNames)) {
                if (pageNameLower === oldName.toLowerCase()) {
                    pageNav = pageNavigations[newName];
                    break;
                }
            }
        }
        
        if (pageNav) {
            // Create navigation items for this specific page
            pageNav.forEach((item, index) => {
                this.createSideNavItem(sideNav, item.id, item.title, item.icon, index);
            });
            return true;
        }
        
        return false;
    }
    
    getSectionIcon(id, title) {
        // Default icon
        let icon = 'fa-circle';
        
        // Match section to appropriate icon
        const lowerTitle = title.toLowerCase();
        const lowerId = id.toLowerCase();
        
        // Common section patterns
        if (lowerId.includes('hero') || lowerId === 'top' || lowerId.includes('home') || lowerTitle.includes('home')) {
            icon = 'fa-home';
        } else if (lowerId.includes('program') || lowerTitle.includes('program') || lowerTitle.includes('learn')) {
            icon = 'fa-graduation-cap';
        } else if (lowerId.includes('coach') || lowerId.includes('team') || lowerTitle.includes('coach') || lowerTitle.includes('team')) {
            icon = 'fa-users';
        } else if (lowerId.includes('achiev') || lowerId.includes('award') || lowerId.includes('record') || lowerTitle.includes('champion')) {
            icon = 'fa-trophy';
        } else if (lowerId.includes('gallery') || lowerId.includes('image') || lowerTitle.includes('gallery') || lowerTitle.includes('highlights')) {
            icon = 'fa-images';
        } else if (lowerId.includes('sponsor') || lowerTitle.includes('sponsor')) {
            icon = 'fa-handshake';
        } else if (lowerId.includes('news') || lowerTitle.includes('news')) {
            icon = 'fa-newspaper';
        } else if (lowerId.includes('contact') || lowerTitle.includes('contact')) {
            icon = 'fa-envelope';
        } else if (lowerId.includes('about') || lowerTitle.includes('about') || lowerTitle.includes('mission')) {
            icon = 'fa-info-circle';
        } else if (lowerId.includes('event') || lowerId.includes('meet') || lowerTitle.includes('event') || lowerTitle.includes('meet')) {
            icon = 'fa-calendar';
        } else if (lowerId.includes('lesson') || lowerTitle.includes('lesson')) {
            icon = 'fa-chalkboard-teacher';
        } else if (lowerId.includes('facility') || lowerTitle.includes('facility')) {
            icon = 'fa-building';
        } else if (lowerId.includes('private') || lowerTitle.includes('private')) {
            icon = 'fa-user-graduate';
        } else if (lowerId.includes('registration') || lowerTitle.includes('register') || lowerTitle.includes('sign up')) {
            icon = 'fa-clipboard-list';
        } else if (lowerId.includes('schedule') || lowerTitle.includes('schedule') || lowerTitle.includes('timetable')) {
            icon = 'fa-clock';
        } else if (lowerId.includes('map') || lowerId.includes('location') || lowerTitle.includes('where')) {
            icon = 'fa-map-marker-alt';
        } else if (lowerId.includes('faq') || lowerTitle.includes('faq') || lowerTitle.includes('question')) {
            icon = 'fa-question-circle';
        } else if (lowerId.includes('merch') || lowerTitle.includes('shop') || lowerTitle.includes('store')) {
            icon = 'fa-shopping-cart';
        } else if (lowerId.includes('hall') || lowerTitle.includes('hall of fame')) {
            icon = 'fa-medal';
        } else if (lowerId.includes('official') || lowerTitle.includes('official')) {
            icon = 'fa-flag';
        } else if (lowerId.includes('history') || lowerTitle.includes('history')) {
            icon = 'fa-history';
        } else if (lowerId.includes('mission') || lowerTitle.includes('mission')) {
            icon = 'fa-bullseye';
        } else if (lowerId.includes('values') || lowerTitle.includes('values')) {
            icon = 'fa-heart';
        } else if (lowerId.includes('stroke') || lowerTitle.includes('stroke') || lowerTitle.includes('swimming')) {
            icon = 'fa-swimmer';
        } else if (lowerId.includes('performance') || lowerTitle.includes('performance')) {
            icon = 'fa-tachometer-alt';
        } else if (lowerId.includes('masters') || lowerTitle.includes('masters')) {
            icon = 'fa-user-graduate';
        }
        
        return icon;
    }
    
    createSideNavItem(sideNav, id, title, icon, index) {
        const navItem = document.createElement('div');
        navItem.className = 'side-nav-item';
        navItem.setAttribute('data-target', id);
        navItem.setAttribute('data-tooltip', title);
        navItem.style.transitionDelay = `${index * 0.05}s`;
        
        // Ensure proper styling
        navItem.style.width = '40px';
        navItem.style.height = '40px';
        navItem.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
        navItem.style.borderRadius = '50%';
        navItem.style.margin = '15px 0';
        navItem.style.position = 'relative';
        navItem.style.cursor = 'pointer';
        navItem.style.transition = 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        navItem.style.display = 'flex';
        navItem.style.alignItems = 'center';
        navItem.style.justifyContent = 'center';
        navItem.style.color = 'rgba(255, 255, 255, 0.6)';
        navItem.style.fontSize = '16px';
        navItem.style.border = '2px solid transparent';
        
        // Add icon
        const iconElement = document.createElement('i');
        iconElement.className = `fas ${icon}`;
        navItem.appendChild(iconElement);
        
        // Add click handler to scroll to section if it exists or navigate to relevant page
        navItem.addEventListener('click', () => {
            const target = document.getElementById(id);
            if (target) {
                const offsetTop = target.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            } else if (id === 'top') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                // Navigate to specific pages based on section id
                this.handleNavigationItemClick(id);
            }
        });
        
        // Add hover effects
        navItem.addEventListener('mouseenter', () => {
            navItem.style.backgroundColor = 'rgba(253, 0, 0, 0.8)';
            navItem.style.color = 'white';
            navItem.style.transform = 'scale(1.1)';
            navItem.style.boxShadow = '0 0 15px rgba(253, 0, 0, 0.4)';
            navItem.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            
            const tooltipElement = document.createElement('span');
            tooltipElement.className = 'side-nav-tooltip';
            tooltipElement.textContent = title;
            tooltipElement.style.position = 'absolute';
            tooltipElement.style.right = '45px';
            tooltipElement.style.top = '50%';
            tooltipElement.style.transform = 'translateY(-50%)';
            tooltipElement.style.backgroundColor = '#000';
            tooltipElement.style.color = '#fff';
            tooltipElement.style.padding = '6px 12px';
            tooltipElement.style.borderRadius = '4px';
            tooltipElement.style.fontSize = '0.85rem';
            tooltipElement.style.whiteSpace = 'nowrap';
            tooltipElement.style.opacity = '1';
            tooltipElement.style.borderLeft = '2px solid #fd0000';
            tooltipElement.style.zIndex = '901';
            
            // Remove any existing tooltip
            const existingTooltip = navItem.querySelector('.side-nav-tooltip');
            if (existingTooltip) {
                navItem.removeChild(existingTooltip);
            }
            
            navItem.appendChild(tooltipElement);
        });
        
        navItem.addEventListener('mouseleave', () => {
            navItem.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
            navItem.style.color = 'rgba(255, 255, 255, 0.6)';
            navItem.style.transform = '';
            navItem.style.boxShadow = '';
            navItem.style.borderColor = 'transparent';
            
            // Remove tooltip
            const tooltip = navItem.querySelector('.side-nav-tooltip');
            if (tooltip) {
                navItem.removeChild(tooltip);
            }
        });
        
        sideNav.appendChild(navItem);
    }
    
    handleNavigationItemClick(id) {
        // Map of section ids to pages
        const sectionToPage = {
            'home': 'index.html',
            'programs': 'programs.html',
            'team': 'team.html',
            'coaches': 'coaches.html',
            'events': 'meets.html',
            'meets': 'meets.html',
            'achievements': 'hall-of-fame.html',
            'hall-of-fame': 'hall-of-fame.html',
            'contact': 'contact.html',
            'about': 'about.html',
            'news': 'results.html',
            'officials': 'official.html',
            'merch': 'merchandise.html',
            'registration': 'registration.html',
            'records': 'records.html',
            'sponsors': 'sponsors.html',
            'resources': 'resources.html'
        };
        
        // Legacy mapping for backwards compatibility
        const legacyMapping = {
            'programs.html': 'Programs.html',
            'about.html': 'About.html',
            'coaches.html': 'Coaches.html',
            'meets.html': 'WEST Meets.html',
            'hall-of-fame.html': 'hall of fame intro.html',
            'results.html': 'news.html',
            'records.html': 'Record West.html',
            'official.html': 'official.html',
            'merchandise.html': 'Merch.html',
            'sponsors.html': 'SPonserr.html',
            'contact.html': 'Contact.html',
            'resources.html': 'Resource.html'
        };
        
        let page = sectionToPage[id];
        
        // Check if the page exists, if not use the legacy mapping
        if (page) {
            // If it's a normal page transition, use the navigate method if available
            if (typeof this.navigateToPage === 'function') {
                // If the current page doesn't exist yet, use the legacy mapping 
                const fileExists = this.fileExists(page);
                if (!fileExists && legacyMapping[page]) {
                    page = legacyMapping[page];
                }
                this.navigateToPage(page);
            } else {
                // Fallback to direct navigation
                window.location.href = page;
            }
        }
    }
    
    // Helper method to check if a file exists
    fileExists(url) {
        // Simplified function to prevent navigation issues
        // We're going to assume files exist and handle navigation errors differently
        return true;
    }

    updateSideNavigation() {
        const sections = document.querySelectorAll('section[id], .section, main > div[id]');
        const navItems = document.querySelectorAll('.side-nav-item');
        
        if (sections.length === 0 || navItems.length === 0) return;
        
        // Get current scroll position with some offset
        const scrollPosition = window.scrollY + 150;
        
        // Find the current section
        let currentSectionIndex = -1;
        
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                currentSectionIndex = index;
            }
        });
        
        // If we found a current section, update the active dot
        if (currentSectionIndex >= 0 && currentSectionIndex < navItems.length) {
            navItems.forEach((item, index) => {
                item.classList.remove('active');
                // Reset any custom styles from the animation
                item.style.transform = '';
                item.style.boxShadow = '';
                
                // Dim all icons
                const icon = item.querySelector('i');
                if (icon) {
                    icon.style.transform = '';
                    icon.style.textShadow = '';
                }
            });
            
            // Add active class and enhance the effect
            navItems[currentSectionIndex].classList.add('active');
            
            // Enhance the active icon
            const activeIcon = navItems[currentSectionIndex].querySelector('i');
            if (activeIcon) {
                activeIcon.style.transform = 'scale(1.15)';
                activeIcon.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.7)';
            }
            
            // Create a ripple effect with adjacent items
            [-2, -1, 1, 2].forEach(offset => {
                const adjIndex = currentSectionIndex + offset;
                if (adjIndex >= 0 && adjIndex < navItems.length) {
                    const scale = offset === -1 || offset === 1 ? 'scale(1.05)' : 'scale(1.02)';
                    const opacity = offset === -1 || offset === 1 ? '0.2' : '0.1';
                    navItems[adjIndex].style.transform = scale;
                    navItems[adjIndex].style.boxShadow = `0 0 10px rgba(253, 0, 0, ${opacity})`;
                }
            });
        }
    }

    initNavigationCards() {
        // Set up hover and click effects for navigation cards
        const navCards = document.querySelectorAll('.nav-card');
        
        navCards.forEach(card => {
            // Handle click event
            card.addEventListener('click', () => {
                const link = card.querySelector('.nav-card-link');
                if (link) {
                    // Trigger the link's click event
                    link.click();
                }
            });
            
            // Parallax effect on mouse move
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const xPercent = x / rect.width;
                const yPercent = y / rect.height;
                
                const img = card.querySelector('.nav-card-img');
                if (img) {
                    img.style.transform = `scale(1.1) translate(${(xPercent - 0.5) * -10}px, ${(yPercent - 0.5) * -10}px)`;
                }
            });
            
            // Reset transform on mouse leave
            card.addEventListener('mouseleave', () => {
                const img = card.querySelector('.nav-card-img');
                if (img) {
                    img.style.transform = 'scale(1.1)';
                }
            });
        });
    }

    // Utility methods
    static debounce(func, wait, immediate) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                timeout = null;
                if (!immediate) func(...args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func(...args);
        };
    }

    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
    
    initEnhancedCarousel() {
        // Check if carousel exists
        const carousel = document.getElementById('imageCarousel');
        if (!carousel) return;
        
        // Initialize Bootstrap carousel if not already initialized
        if (!carousel.classList.contains('initialized')) {
            // Mark as initialized to avoid duplicate initialization
            carousel.classList.add('initialized');
            
            // Pre-load images for smoother transitions
            const preloadImages = () => {
                const slides = carousel.querySelectorAll('.carousel-item img');
                slides.forEach(img => {
                    if (img.src) {
                        const image = new Image();
                        image.src = img.src;
                    }
                });
            };
            
            // Preload images
            preloadImages();
            
            // Simple animation for captions
            const animateCaptions = (captionElement) => {
                if (!captionElement) return;
                
                const heading = captionElement.querySelector('h3');
                const paragraph = captionElement.querySelector('p');
                
                if (heading) {
                    heading.style.opacity = '0';
                    heading.style.transform = 'translateY(20px)';
                    
                    // Delay to allow DOM to update
                    setTimeout(() => {
                        heading.style.opacity = '1';
                        heading.style.transform = 'translateY(0)';
                    }, 50);
                }
                
                if (paragraph) {
                    paragraph.style.opacity = '0';
                    paragraph.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        paragraph.style.opacity = '1';
                        paragraph.style.transform = 'translateY(0)';
                    }, 150);
                }
            };
            
            // Initialize all captions
            carousel.querySelectorAll('.carousel-item').forEach((item, index) => {
                const caption = item.querySelector('.carousel-caption');
                if (caption && index === 0) {
                    // Animate first slide caption immediately
                    animateCaptions(caption);
                }
            });
            
            // Listen for slide event
            carousel.addEventListener('slid.bs.carousel', () => {
                const activeSlide = carousel.querySelector('.carousel-item.active');
                if (activeSlide) {
                    const caption = activeSlide.querySelector('.carousel-caption');
                    animateCaptions(caption);
                }
            });
            
            // Reduce animation jank by temporarily disabling transitions during window resize
            let resizeTimer;
            window.addEventListener('resize', () => {
                document.body.classList.add('resize-animation-stopper');
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(() => {
                    document.body.classList.remove('resize-animation-stopper');
                }, 400);
            });
            
            // Add style for resize animation stopper
            if (!document.getElementById('resize-stopper-style')) {
                const style = document.createElement('style');
                style.id = 'resize-stopper-style';
                style.textContent = `.resize-animation-stopper * { 
                    transition: none !important; 
                    animation: none !important; 
                }`;
                document.head.appendChild(style);
            }
            
            // Wait for load to ensure proper rendering
            window.addEventListener('load', () => {
                // Force a reflow
                carousel.offsetHeight;
                
                // Add a class to indicate everything is loaded
                carousel.classList.add('carousel-loaded');
            });
        }
    }

    // Create separate back to top button
    createBackToTopButton() {
        console.log("Creating back to top button");
        
        // Remove any existing button
        const existingButton = document.querySelector('.scroll-top-btn');
        if (existingButton) existingButton.remove();
        
        // Remove any original back to top button
        const oldBackToTop = document.querySelector('.back-to-top');
        if (oldBackToTop) oldBackToTop.remove();
        
        // Create button
        const button = document.createElement('div');
        button.className = 'scroll-top-btn';
        button.innerHTML = '<i class="fas fa-arrow-up"></i>';
        button.setAttribute('title', 'Back to Top');
        
        // Scroll to top on click
        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Append to body
        document.body.appendChild(button);
    }

    // Add modal links initialization
    initModalLinks() {
        const modalLinks = document.querySelectorAll('.modal-link');
        modalLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Get target modal
                const target = link.getAttribute('data-bs-target');
                const modalElement = document.querySelector(target);
                
                if (!modalElement) {
                    console.error(`Modal element not found: ${target}`);
                    return;
                }
                
                // Ensure Bootstrap is available
                if (typeof bootstrap !== 'undefined') {
                    // Create and show the modal
                    const modal = new bootstrap.Modal(modalElement);
                    
                    // First ensure existing instance is disposed to prevent conflicts
                    const existingModal = bootstrap.Modal.getInstance(modalElement);
                    if (existingModal) existingModal.dispose();
                    
                    // Show new modal instance
                    modal.show();
                    
                    // Ensure close buttons work
                    modalElement.querySelectorAll('.btn-close, [data-bs-dismiss="modal"]').forEach(button => {
                        // Remove old event listeners to prevent duplicates
                        button.replaceWith(button.cloneNode(true));
                        
                        // Get the refreshed element
                        const newButton = modalElement.querySelector(button.tagName + (button.className ? '.' + button.className.split(' ').join('.') : ''));
                        
                        // Add event listener to close modal
                        if (newButton) {
                            newButton.addEventListener('click', () => {
                                modal.hide();
                                
                                // Ensure modal and backdrop are completely removed
                                setTimeout(() => {
                                    document.body.classList.remove('modal-open');
                                    const backdrops = document.querySelectorAll('.modal-backdrop');
                                    backdrops.forEach(backdrop => backdrop.remove());
                                }, 300);
                            });
                        }
                    });
                    
                    // Enable closing modal when clicking outside content area
                    modalElement.addEventListener('click', (event) => {
                        if (event.target === modalElement) {
                            modal.hide();
                        }
                    });
                } else {
                    console.error('Bootstrap is not loaded. Unable to show modal.');
                    // Fallback - try to show the modal directly
                    modalElement.style.display = 'block';
                    modalElement.classList.add('show');
                    
                    // Add manual close handling for fallback mode
                    const closeButtons = modalElement.querySelectorAll('.btn-close, [data-bs-dismiss="modal"]');
                    closeButtons.forEach(button => {
                        button.addEventListener('click', () => {
                            modalElement.style.display = 'none';
                            modalElement.classList.remove('show');
                            document.body.classList.remove('modal-open');
                            document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
                        });
                    });
                }
            });
        });
        
        // Initialize modals on page load
        const initializeModalsOnLoad = () => {
            // Get all modals
            const modals = document.querySelectorAll('.modal');
            
            // Ensure Bootstrap is loaded
            if (typeof bootstrap !== 'undefined') {
                modals.forEach(modalElement => {
                    // Initialize the modal
                    try {
                        new bootstrap.Modal(modalElement);
                        
                        // Add extra close functionality
                        const closeButtons = modalElement.querySelectorAll('.btn-close, [data-bs-dismiss="modal"]');
                        closeButtons.forEach(button => {
                            button.addEventListener('click', () => {
                                const modalInstance = bootstrap.Modal.getInstance(modalElement);
                                if (modalInstance) modalInstance.hide();
                                
                                // Ensure modal and backdrop are completely removed
                                setTimeout(() => {
                                    document.body.classList.remove('modal-open');
                                    const backdrops = document.querySelectorAll('.modal-backdrop');
                                    backdrops.forEach(backdrop => backdrop.remove());
                                }, 300);
                            });
                        });
                        
                        // Enable closing modal when clicking outside content area
                        modalElement.addEventListener('click', (event) => {
                            if (event.target === modalElement) {
                                const modalInstance = bootstrap.Modal.getInstance(modalElement);
                                if (modalInstance) modalInstance.hide();
                            }
                        });
                    } catch (error) {
                        console.error('Error initializing modal:', error);
                    }
                });
                
                // Add keyboard event listener to close active modals with ESC key
                document.addEventListener('keydown', (event) => {
                    if (event.key === 'Escape') {
                        document.querySelectorAll('.modal.show').forEach(modal => {
                            const modalInstance = bootstrap.Modal.getInstance(modal);
                            if (modalInstance) modalInstance.hide();
                            
                            // Additional cleanup
                            document.body.classList.remove('modal-open');
                            document.querySelectorAll('.modal-backdrop').forEach(backdrop => backdrop.remove());
                        });
                    }
                });
            }
        };
        
        // Initialize immediately or wait for DOM content loaded
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            initializeModalsOnLoad();
        } else {
            document.addEventListener('DOMContentLoaded', initializeModalsOnLoad);
        }
    }

    // Helper function to ensure modals are transferred between pages
    transferModals() {
        // Store modals to transfer
        const modalsToTransfer = [];
        
        // Get all modal elements
        const modals = document.querySelectorAll('.modal');
        
        // Specifically check for sponsors and merchandise modals
        const sponsorsModal = document.getElementById('sponsorsModal');
        const merchandiseModal = document.getElementById('merchandiseModal');
        
        // Add these modals to the transfer list if found
        if (sponsorsModal) modalsToTransfer.push(sponsorsModal.outerHTML);
        if (merchandiseModal) modalsToTransfer.push(merchandiseModal.outerHTML);
        
        // Store in session storage for access on other pages
        if (modalsToTransfer.length) {
            sessionStorage.setItem('transferredModals', JSON.stringify(modalsToTransfer));
        }
    }
    
    // Function to restore modals on page load
    restoreModals() {
        // Check if we have modals to restore
        const savedModals = sessionStorage.getItem('transferredModals');
        
        if (!savedModals) return;
        
        const modalsToTransfer = JSON.parse(savedModals);
        
        // Check if current page already has these modals
        const currentSponsorsModal = document.getElementById('sponsorsModal');
        const currentMerchandiseModal = document.getElementById('merchandiseModal');
        
        // Only add modals if they don't exist on the current page
        if (!currentSponsorsModal && modalsToTransfer[0]) {
            document.body.insertAdjacentHTML('beforeend', modalsToTransfer[0]);
        }
        
        if (!currentMerchandiseModal && modalsToTransfer[1]) {
            document.body.insertAdjacentHTML('beforeend', modalsToTransfer[1]);
        }
        
        // Initialize the modals if Bootstrap is available
        if (typeof bootstrap !== 'undefined') {
            setTimeout(() => {
                document.querySelectorAll('.modal').forEach(modal => {
                    new bootstrap.Modal(modal);
                });
                
                // Add event listeners to modal links
                this.initModalLinks();
            }, 500);
        }
    }
    
    // Update bindEvents to include modal transfer
    bindEvents() {
        // Add event listener for internal link clicks, excluding footer links
        document.querySelectorAll('a:not([target="_blank"]):not(.popup-link):not([href^="#"]):not(.footer-links a):not(.footer a)').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                // Direct navigation for external links or non-HTML links
                if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || !href.endsWith('.html')) {
                    return; // Let the browser handle these links
                }
                
                // Direct navigation for home page
                if (href === 'index.html' || href === './index.html' || href === '/' || href === './') {
                    e.preventDefault();
                    window.location.href = 'index.html';
                    return;
                }
                
                // Use direct navigation for buttons on index page
                if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
                    e.preventDefault();
                    window.location.href = href;
                    return;
                }
                
                // For internal links, use our custom navigation
                e.preventDefault();
                
                // Transfer modals before navigation
                this.transferModals();
                
                this.navigateToPage(href);
            });
        });
        
        // Ensure footer links use direct navigation
        document.querySelectorAll('.footer-links a, .footer a').forEach(link => {
            link.addEventListener('click', (e) => {
                // Let the default browser navigation handle these
                const href = link.getAttribute('href');
                if (!href || href.startsWith('#')) return;
                
                // Prevent any custom handling
                e.stopPropagation();
                // Allow normal navigation to proceed
            });
        });
        
        // Transfer modals on page load
        this.restoreModals();
    }

    // Helper method to fix modal backdrop issues
    fixModalBackdrops() {
        // Function to clean up stuck modals and backdrops
        const cleanupModals = () => {
            // Remove leftover backdrops
            document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
                if (!document.querySelector('.modal.show')) {
                    backdrop.remove();
                }
            });
            
            // Remove modal-open class if no visible modals
            if (!document.querySelector('.modal.show') && document.body.classList.contains('modal-open')) {
                document.body.classList.remove('modal-open');
                document.body.style.removeProperty('padding-right');
                document.body.style.removeProperty('overflow');
            }
        };
        
        // Run cleanup on various events
        ['load', 'click', 'keydown'].forEach(eventType => {
            window.addEventListener(eventType, () => {
                setTimeout(cleanupModals, 300);
            });
        });
        
        // Also run periodically
        setInterval(cleanupModals, 2000);
        
        // Run immediately
        cleanupModals();
    }
}

// Create side navigation immediately on script load
(function() {
    // Add required styles for side navigation
    const styleEl = document.createElement('style');
    styleEl.textContent = `
        /* Side Navigation Container */
        .simple-side-nav {
            position: fixed;
            top: 50%;
            right: 20px;
            transform: translateY(-50%);
            z-index: 9999;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        /* Navigation Dots */
        .side-dot {
            width: 40px;
            height: 40px;
            background-color: rgba(0, 0, 0, 0.7);
            border-radius: 50%;
            margin: 8px 0;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            border: 2px solid rgba(255, 255, 255, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            color: rgba(255, 255, 255, 0.7);
            font-size: 16px;
        }
        
        .side-dot:hover {
            background-color: #fd0000;
            transform: scale(1.1);
            color: white;
        }
        
        .side-dot.active {
            background-color: #fd0000;
            transform: scale(1.15);
            box-shadow: 0 0 10px #fd0000;
            color: white;
        }
        
        /* Tooltip */
        .side-dot:hover::before {
            content: attr(data-tooltip);
            position: absolute;
            right: 50px;
            top: 50%;
            transform: translateY(-50%);
            background-color: #000;
            color: #fff;
            padding: 5px 15px;
            border-radius: 4px;
            font-size: 14px;
            white-space: nowrap;
            opacity: 1;
            pointer-events: none;
            font-family: 'Sen', sans-serif;
            border-left: 2px solid #fd0000;
        }
        
        /* Back To Top Button - Separate at bottom right */
        .scroll-top-btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background-color: #fd0000;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            cursor: pointer;
            box-shadow: 0 3px 15px rgba(0, 0, 0, 0.4);
            transition: all 0.3s ease;
            z-index: 9999;
            font-size: 20px;
            opacity: 1 !important; /* Always visible */
            pointer-events: all !important; /* Always interactive */
            border: 2px solid rgba(255, 255, 255, 0.4);
        }
        
        .scroll-top-btn:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 20px rgba(253, 0, 0, 0.6);
            background-color: #ff2a2a;
        }
        
        /* Hide the original side-nav */
        .side-nav {
            display: none !important;
        }
        
        /* Hide the original back-to-top button */
        .back-to-top {
            display: none !important;
        }
    `;
    document.head.appendChild(styleEl);
    
    // Create navigation immediately
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
        createSimpleSideNavigation();
        createBackToTopButton();
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            createSimpleSideNavigation();
            createBackToTopButton();
        });
    }
})();

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the website
    new WESTWebsite();
});

// Create simple side navigation
function createSimpleSideNavigation() {
    // Completely disable simple side navigation
    return; // Skip creating simple side navigation
    
    // The code below won't execute
    const existingNav = document.querySelector('.simple-side-nav');
    if (existingNav) {
        existingNav.remove();
    }
    
    const sideNav = document.createElement('div');
    sideNav.className = 'simple-side-nav';
    document.body.appendChild(sideNav);
    
    // Rest of the function...
}

// Get appropriate icon class based on section id and title
function getSectionIconClass(id, title) {
    id = id.toLowerCase();
    title = title.toLowerCase();
    
    // Check for Instagram section specifically
    if ((id.includes('insta') || title.includes('insta') || title.includes('instagram')) && 
        (id.includes('coach') || title.includes('coach'))) {
        return 'fa-brands fa-instagram';
    }
    
    // Check for any Instagram sections
    if (id.includes('insta') || title.includes('insta') || title.includes('instagram')) {
        return 'fa-brands fa-instagram';
    }
    
    // Map of common section types to FontAwesome icons
    const iconMap = {
        'hero': 'fa-home',
        'home': 'fa-home',
        'mission': 'fa-bullseye',
        'about': 'fa-info-circle',
        'programs': 'fa-graduation-cap',
        'coaches': 'fa-users',
        'team': 'fa-users',
        'private': 'fa-user-graduate',
        'lessons': 'fa-chalkboard-teacher',
        'achievements': 'fa-trophy',
        'records': 'fa-medal',
        'awards': 'fa-award',
        'news': 'fa-newspaper',
        'updates': 'fa-bell',
        'gallery': 'fa-images',
        'photos': 'fa-camera',
        'sponsors': 'fa-handshake',
        'partners': 'fa-handshake',
        'contact': 'fa-envelope',
        'facility': 'fa-building',
        'schedule': 'fa-calendar-alt',
        'events': 'fa-calendar',
        'meets': 'fa-flag-checkered',
        'registration': 'fa-clipboard-list',
        'history': 'fa-history',
        'values': 'fa-heart',
    };
    
    // Check if id or title contains any of the keywords
    for (const [keyword, icon] of Object.entries(iconMap)) {
        if (id.includes(keyword) || title.includes(keyword)) {
            return icon;
        }
    }
    
    // Default icon if no match found
    return 'fa-circle';
}

// Update which dot is active based on scroll position
function updateActiveDot() {
    const sections = document.querySelectorAll('section[id], .section, main > div[id]');
    const dots = document.querySelectorAll('.side-dot');
    
    // Get current scroll position with offset
    const scrollPosition = window.scrollY + 300;
    
    // Find the current section
    let currentSection = null;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section;
        }
    });
    
    // Update dot classes
    if (currentSection) {
        const currentId = currentSection.id;
        dots.forEach(dot => {
            if (dot.getAttribute('data-target') === currentId) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
}

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        // Refresh any time-sensitive content
        console.log('Page is now visible');
        // Ensure side navigation is visible when tab becomes active
        setTimeout(createSimpleSideNavigation, 500);
        // Ensure back to top button is visible
        setTimeout(createBackToTopButton, 500);
    }
});

// Service Worker registration for offline functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Handle page transition when leaving the page
window.addEventListener('beforeunload', () => {
    document.querySelector('.page-transition').classList.add('active');
});
