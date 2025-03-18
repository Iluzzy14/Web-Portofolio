const toggleSwitch = document.querySelector('#checkbox');
const themeIcon = document.querySelector('#theme-icon');
        
// Check for saved theme preference
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
        
// Update checkbox state based on current theme
if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    themeIcon.textContent = '🌙';
}
        
// Switch dark mode function
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeIcon.textContent = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeIcon.textContent = '☀️';
        }
    }
        
// Event listener untuk dark mode switch
toggleSwitch.addEventListener('change', switchTheme);

// Tunggu sampai DOM sepenuhnya dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Mengambil elemen hamburger dan navigasi
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-link');
    
    // Tambahkan event listener untuk toggle menu
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');

    });
    
    // Tutup menu ketika link diklik
    const navItems = document.querySelectorAll('.nav-link li a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Filter button
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portofolio-item');
    
    if (filterButtons.length > 0 && portfolioItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                filterButtons.forEach(btn => {
                    btn.classList.remove('active');
                });
                
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                // Filter portfolio items
                portfolioItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 100);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    };
});

 // Smooth scroll untuk navigasi links
document.querySelectorAll('.nav-link a, .footer a').forEach(link => {
    if (link.getAttribute('href') && link.getAttribute('href').startsWith('#')) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
                    
            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                        
                const targetElement = document.querySelector(href);
                        
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    }
});

// Animate sections when they come into view
const sections = document.querySelectorAll('.section');
const revealElements = document.querySelectorAll('.reveal');
const backToTop = document.querySelector('.back-to-top');

function checkSections() {
    const triggerBottom = window.innerHeight * 0.8;
            
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
                
        if (sectionTop < triggerBottom) {
            section.classList.add('show');
        }
    });
            
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
                
        if (elementTop < triggerBottom) {
            element.classList.add('active');
            console.log("Class 'active' ditambahkan ke:", element);
        }
    });

    // Show or hide back to top button
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
}

// Back to top button functionality
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Initial check and add scroll event listener
window.addEventListener('scroll', checkSections);
checkSections();