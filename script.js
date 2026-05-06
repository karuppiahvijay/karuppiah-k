// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reveal elements on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Score Checker Logic
const checkBtn = document.getElementById('check-score-btn');
const progressValue = document.querySelector('.progress-value');
const circularProgress = document.querySelector('.circular-progress');
const scoreMessage = document.getElementById('score-message');

checkBtn.addEventListener('click', () => {
    checkBtn.disabled = true;
    checkBtn.textContent = 'Analyzing...';
    
    let progressStartValue = 0;
    let progressEndValue = 85; // Karuppiah's profile is strong!
    let speed = 20;
    
    let progress = setInterval(() => {
        progressStartValue++;
        
        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#0070f3 ${progressStartValue * 3.6}deg, #333333 0deg)`;
        
        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
            checkBtn.textContent = 'Check Complete';
            displayScoreFeedback(progressEndValue);
        }
    }, speed);
});

function displayScoreFeedback(score) {
    if (score >= 80) {
        scoreMessage.innerHTML = `<span style="color: #00dfd8; font-weight: bold;">Excellent!</span> Your profile is highly competitive for **Full Stack** roles. With your AWS certification and diverse internships, you are ready to handle end-to-end development.`;
    }
}

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.padding = '15px 0';
        header.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        header.style.padding = '20px 0';
        header.style.background = 'rgba(10, 10, 10, 0.8)';
    }
});
