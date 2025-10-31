// 极简平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// 高亮当前导航 - 极简样式
const navLinks = document.querySelectorAll('.nav a');
const sections = document.querySelectorAll('.section');

function updateNav() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = '#000';
            link.style.borderLeftColor = '#000';
        } else {
            link.style.color = '#666';
            link.style.borderLeftColor = 'transparent';
        }
    });
}

window.addEventListener('scroll', updateNav);
window.addEventListener('load', updateNav);

