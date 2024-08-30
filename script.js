document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('splash-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 3000); // 3 seconds delay
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const rootElement = document.documentElement;

    function handleScroll() {
        // Show the button when the user scrolls down 100px from the top
        if (rootElement.scrollTop > 100) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    }

    function scrollToTop() {
        // Smooth scroll to the top
        rootElement.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    scrollToTopBtn.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', handleScroll);
});
