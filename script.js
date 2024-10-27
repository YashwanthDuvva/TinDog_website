// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Form validation
const validateForm = (formId) => {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', (e) => {
            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    }
};

// Initialize form validation for search and profile forms
validateForm('searchForm');
validateForm('profileForm');

// Quiz functionality
const initializeQuiz = () => {
    const quizContainer = document.getElementById('quizContainer');
    if (quizContainer) {
        const options = quizContainer.querySelectorAll('.quiz-option');
        options.forEach(option => {
            option.addEventListener('click', () => {
                options.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
            });
        });

        const submitQuiz = document.getElementById('submitQuiz');
        submitQuiz.addEventListener('click', () => {
            const selected = quizContainer.querySelector('.selected');
            if (selected) {
                alert(`You selected: ${selected.textContent}`);
            } else {
                alert('Please select an option before submitting.');
            }
        });
    }
};

// Initialize quiz on page load
document.addEventListener('DOMContentLoaded', initializeQuiz);