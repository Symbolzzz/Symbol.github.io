// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 20;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// 高亮当前导航项
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.content-section');

function highlightNav() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.style.backgroundColor = 'var(--accent-color)';
            item.style.color = 'white';
        } else {
            item.style.backgroundColor = '';
            item.style.color = '';
        }
    });
}

// 监听滚动
window.addEventListener('scroll', highlightNav);

// 页面加载时执行一次
window.addEventListener('load', highlightNav);

// 项目卡片渐入效果
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 为所有内容区块添加观察
document.querySelectorAll('.content-section').forEach(section => {
    observer.observe(section);
});

