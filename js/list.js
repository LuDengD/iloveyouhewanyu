// ============================================
// 📋 Love List 数据配置（在这里编辑）
// ============================================

const LIST_DATA = [
    // ✅ 已完成的约定（completed: true）
    { title: '第一次一起看电影', description: '在电影院里牵着你的手', category: 'life', completed: true },
    { title: '一起去海边看日出', description: '清晨的海风，等待太阳升起', category: 'travel', completed: true },
    { title: '一起做一顿晚餐', description: '虽然厨房很乱，但很开心', category: 'food', completed: true },
    
    // 💭 想要一起做的事（completed: false）
    { title: '去日本看樱花', description: '在樱花树下拍照', category: 'travel', completed: false },
    { title: '学会做对方喜欢的菜', description: '用心学习，给你做美味晚餐', category: 'food', completed: false },
    { title: '一起养一只小猫', description: '取个可爱的名字，陪伴它成长', category: 'life', completed: false },
    { title: '去游乐园玩一整天', description: '坐摩天轮、过山车', category: 'life', completed: false },
    { title: '拍一套情侣写真', description: '记录下最美好的样子', category: 'dream', completed: false },
    { title: '环游世界', description: '牵着你的手，走遍每个角落', category: 'dream', completed: false },
    
    // 👇 在这里添加更多约定
    // { title: '标题', description: '描述', category: 'travel', completed: false },
];

// 分类信息
const CATEGORIES = {
    travel: { name: '旅行', icon: '✈️' },
    food: { name: '美食', icon: '🍰' },
    life: { name: '生活', icon: '🏠' },
    dream: { name: '梦想', icon: '🌟' },
    other: { name: '其他', icon: '💫' }
};

// ============================================
// 功能实现
// ============================================

let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', function() {
    initTabs();
    renderList();
});

// 初始化标签
function initTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.category;
            renderList();
        });
    });
}

// 渲染列表
function renderList() {
    const container = document.getElementById('listContent');
    
    // 筛选数据
    let items = LIST_DATA;
    if (currentFilter !== 'all') {
        items = LIST_DATA.filter(item => item.category === currentFilter);
    }
    
    if (items.length === 0) {
        container.innerHTML = '<div class="empty-state"><h3>这个分类还没有约定哦</h3></div>';
        return;
    }
    
    // 生成列表
    container.innerHTML = items.map(item => {
        const categoryInfo = CATEGORIES[item.category];
        const completedClass = item.completed ? 'completed' : '';
        const statusIcon = item.completed ? '✅' : '💭';
        
        return `
            <div class="list-item ${completedClass}">
                <div class="item-status">${statusIcon}</div>
                <div class="item-content">
                    <div class="item-header">
                        <h3 class="item-title">${item.title}</h3>
                        <span class="item-category category-${item.category}">${categoryInfo.icon} ${categoryInfo.name}</span>
                    </div>
                    <p class="item-description">${item.description}</p>
                </div>
            </div>
        `;
    }).join('');
}

// ============================================
// 📝 使用说明
// ============================================
/*

## 添加新约定：

{ 
    title: '一起去爬山', 
    description: '挑战高峰，看最美风景', 
    category: 'travel',  // travel/food/life/dream
    completed: false 
},

## 标记为已完成：

把 completed 改成 true

{ 
    title: '一起去爬山', 
    description: '挑战高峰，看最美风景', 
    category: 'travel', 
    completed: true 
},

## 分类说明：
- travel: 旅行
- food: 美食
- life: 生活
- dream: 梦想
- other: 其他

*/
