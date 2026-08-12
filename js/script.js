// 配置区域 - 修改这里的信息
const CONFIG = {
    // 恋爱开始日期 (格式: YYYY-MM-DD HH:MM:SS)
    startDate: '2026-07-12 22:38:00',
    
    // 男生信息
    male: {
        name: '李炎',
        avatar: 'https://ludeng-huihua.pages.dev/file/lianai/1786529375227_男头像.png?v=2'
    },
    
    // 女生信息
    female: {
        name: '何婉瑜',
        avatar: 'https://ludeng-huihua.pages.dev/file/lianai/1786529382217_女头像.jpg?v=2'
    },
    
    // 顶部文案
    headerText: '相伴人间烟火，共守岁月清欢',
    
    // 时间标题
    timeTitle: '这是我们一起走过的'
};

// 初始化配置
function initConfig() {
    // 设置头像
    const maleAvatar = document.getElementById('maleAvatar');
    const femaleAvatar = document.getElementById('femaleAvatar');
    if (maleAvatar) maleAvatar.src = CONFIG.male.avatar;
    if (femaleAvatar) femaleAvatar.src = CONFIG.female.avatar;
    
    // 设置名字
    const maleName = document.getElementById('maleName');
    const femaleName = document.getElementById('femaleName');
    if (maleName) maleName.textContent = CONFIG.male.name;
    if (femaleName) femaleName.textContent = CONFIG.female.name;
    
    // 设置顶部文案
    const wordEl = document.querySelector('.header-wrap .word');
    if (wordEl) wordEl.textContent = CONFIG.headerText;
    
    // 设置时间标题
    const timeTitleEl = document.getElementById('span_dt_dt');
    if (timeTitleEl) timeTitleEl.textContent = CONFIG.timeTitle;
}

// 计算时间差
function updateTimer() {
    const startDate = new Date(CONFIG.startDate);
    const now = new Date();
    
    // 计算时间差（毫秒）
    const diff = now - startDate;
    
    // 转换为天、时、分、秒
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // 更新页面显示
    const tianEl = document.getElementById('tian');
    const shiEl = document.getElementById('shi');
    const fenEl = document.getElementById('fen');
    const miaoEl = document.getElementById('miao');
    
    if (tianEl) tianEl.textContent = days;
    if (shiEl) shiEl.textContent = hours;
    if (fenEl) fenEl.textContent = minutes;
    if (miaoEl) miaoEl.textContent = seconds;
}

// 返回顶部
function scrollToTop(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 平滑滚动
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 导航栏滚动效果
function handleNavScroll() {
    const header = document.querySelector('.header-wrap');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 15px 0 rgb(115 111 111 / 10%)';
        }
        
        lastScroll = currentScroll;
    });
}

// 卡片点击效果
function initCardEffects() {
    const cards = document.querySelectorAll('.card, .card-b');
    
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            // 如果点击的是链接，不阻止默认行为
            if (e.target.tagName === 'A') return;
            
            // 添加点击动画
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
}

// 滚动动画
function initScrollAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated', 'fadeInUp');
            }
        });
    }, observerOptions);
    
    // 观察所有卡片
    document.querySelectorAll('.card, .card-b').forEach(card => {
        observer.observe(card);
    });
}

// 检测页面切换（用于子页面）
function checkPageTransition() {
    // 如果是从其他页面跳转过来的，添加淡入效果
    if (document.referrer && document.referrer.includes(window.location.hostname)) {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    }
}

// 控制台彩蛋
function consoleEasterEgg() {
    const styles = [
        'color: #ff6b9d; font-size: 20px; font-weight: bold;',
        'color: #667eea; font-size: 14px;'
    ];
    
    console.log('%c💕 欢迎来到我们的小世界 💕', styles[0]);
    console.log('%c愿得一人心，白首不相离', styles[1]);
    console.log('%c基于 Like_Girl v5.2.0 纯前端版', 'color: #999; font-size: 12px;');
}

// 初始化所有功能
function init() {
    // 初始化配置
    initConfig();
    
    // 启动计时器，每秒更新一次
    updateTimer();
    setInterval(updateTimer, 1000);
    
    // 初始化其他功能
    smoothScroll();
    handleNavScroll();
    initCardEffects();
    initScrollAnimation();
    checkPageTransition();
    consoleEasterEgg();
}

// 页面加载完成后执行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// 导出函数供 HTML 使用
window.scrollToTop = scrollToTop;
