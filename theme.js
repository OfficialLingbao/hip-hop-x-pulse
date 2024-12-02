// Theme management
(function() {
    // Check if theme toggle is already initialized
    if (window.themeToggleInitialized) return;
    
    // Prevent multiple initializations
    window.themeToggleInitialized = true;

    // Wrap initialization in a function
    function initializeThemeToggle() {
        const themeToggleElement = document.getElementById('themeToggle');
        if (!themeToggleElement) {
            console.error('Theme toggle element not found');
            return;
        }

        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        const currentPage = window.location.pathname.split('/').pop();

        function setTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            
            // Page-specific theme persistence
            if (currentPage === 'latest.html') {
                localStorage.setItem('latestPageTheme', theme);
            } else {
                localStorage.setItem('theme', theme);
            }
            
            const icon = themeToggleElement.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-moon', theme === 'light');
                icon.classList.toggle('fa-sun', theme === 'dark');
            }
        }

        function initTheme() {
            let theme;
            
            // Check for page-specific theme first
            if (currentPage === 'latest.html') {
                theme = localStorage.getItem('latestPageTheme') || 
                    (prefersDarkScheme.matches ? 'dark' : 'light');
            } else {
                theme = localStorage.getItem('theme') || 
                    (prefersDarkScheme.matches ? 'dark' : 'light');
            }
            
            setTheme(theme);
        }

        themeToggleElement.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });

        prefersDarkScheme.addEventListener('change', (e) => {
            setTheme(e.matches ? 'dark' : 'light');
        });

        initTheme();
    }

    // Ensure DOM is loaded before initializing
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeThemeToggle);
    } else {
        initializeThemeToggle();
    }
})();
