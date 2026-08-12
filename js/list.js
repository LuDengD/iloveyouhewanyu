// ============================================
// 📋 Love List 数据配置（在这里编辑）
// ============================================

const LIST_DATA = [
    // ✅ 已完成的约定（completed: true）
    { title: '第一次到小鱼家做客', description: '开心，开心，好开心_2026.06.27', category: 'life', completed: true },
    { title: '老婆第一次送站', description: '老婆送站很快，零食很好吃，手写信很温暖，嘴唇很甜💕_2026.07.14.19:00', category: 'life', completed: true },
    
    
    // 💭 想要一起做的事（completed: false）
     { title: '和老婆一起出去野餐', description: '支两个躺椅，吹着微风，带着美味零食，慢悠悠的度过闲暇时间', category: 'life', completed: false },
    { title: '两家人第一次一起吃饭', description: '我想应该是订婚宴吧，期待', category: 'other', completed: false },
    { title: '一起做一顿晚餐', description: '虽然现在的我们都不会做饭，但很期待以后一起共事的场景', category: 'life', completed: false },
    { title: '领结婚证', description: '最最最重要的日子💕', category: 'other', completed: false },
    { title: '去日本看樱花', description: '在樱花树下拍照', category: 'travel', completed: false },
    { title: '一起去尝试人生的各种体验', description: '首当其冲的就是蹦极和滑翔伞了嘿嘿', category: 'travel', completed: false },
    { title: '学会做小鱼喜欢的菜', description: '努力学习，争取能做满一桌老婆爱吃的美食', category: 'life', completed: false },
    { title: '训练旺仔牛奶', description: '训练一下宝宝们，变成两只听话的乖宝宝', category: 'life', completed: false },
    { title: '给宝宝们做清洁和修剪', description: '以后宝宝们的养护就交给他爸我吧💪', category: 'life', completed: false },
    { title: '共同收养一只狗狗（可卡布或者黑色西高地？）', description: '为我们的家庭再添一员，希望可以和旺仔牛奶成为好朋友哈哈哈', category: 'life', completed: false },
    { title: '一起去迪士尼', description: '期待和小鱼一起坐过山车，看烟花的场景', category: 'travel', completed: false },
    { title: '小鱼之前提到的天津糍粑', description: '有时间优先和老婆去吃', category: 'food', completed: false },
    { title: '拍一套写真', description: '等我身体健身小成后和老婆美美的拍照片', category: 'life', completed: false },
    { title: '环游世界', description: '遥远但可及的梦想，努力赚钱，牵着你的手，走遍世界每个角落', category: 'dream', completed: false },
    { title: '未完待续...', description: '会和老婆一起经历许许多多的第一次，这个列表会不断的添加和完成，期待和老婆在一起的每一天~', category: 'other', completed: false },
    
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
