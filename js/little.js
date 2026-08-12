// ============================================
// 📅 重要日期和笔记配置区（在这里修改）
// ============================================

// 重要日期配置
const IMPORTANT_DATES = {
    // 纪念日（粉色标记）
    // 格式：{ date: 'MM-DD' 或 'YYYY-MM-DD', title: '标题', repeat: true/false }
    anniversary: [
        { date: '2026-07-24', title: '相识满月', repeat: false },
        { date: '07-12', title: '恋爱纪念日', repeat: true },
        { date: '03-21', title: '最可爱之人诞生的日子💕', repeat: true },
        { date: '2026-08-12', title: '相恋满月', repeat: false },
        { date: '2026-06-24', title: '第一次相遇', repeat: false },
        // 👇 在下方添加更多纪念日
        // { date: '06-01', title: '第一次牵手', repeat: true },
    ],
    
    // 节日（蓝色标记）
    festival: [
        { date: '01-01', title: '元旦', repeat: true },
        { date: '02-14', title: '情人节', repeat: true },
        { date: '05-20', title: '520', repeat: true },
        { date: '12-24', title: '平安夜', repeat: true },
        { date: '12-25', title: '圣诞节', repeat: true },
        // 👇 在下方添加更多节日
    ]
};

// 笔记配置（在这里添加笔记内容）
// 格式：'YYYY-MM-DD': { title: '标题', content: '内容' }
const NOTES_DATA = {
    '2026-06-24': {
        title: '第一次相遇 💕',
        content: '故事的开篇。'
    },
    '2026-06-27': {
        title: '与小鱼的第一次约会',
        content: '第一次和小鱼约会，带着宝宝们逛了水街，一起吃了烤肉，最后还在小鱼家做了客，真的好开心，我想我会永远记得这天的。'
    },
    '2026-07-12': {
        title: '我们在一起啦 ❤️',
        content: '今天是个特别的日子，虽然阴差阳错，但这就是缘分，我们正式在一起了！\n你答应了我的表白，成为了我的女朋友。\n希望未来的每一天都能和你一起度过，\n一起看日出日落，一起经历人生的酸甜苦辣。'
    },
    '2026-06-29': {
        title: '互加了抖音🎶',
        content: '从此我们的聊天场被分为了两处哈哈哈。\n因为你习惯了使用抖音，\n与你在抖音的聊天真的非常愉快哦，\n就是老婆记得经常去喂一下我们的小火人就好了嘿嘿，\n对了，老婆分享我的第一个视频是大衣哥，没想到他真的陪我们走过了一整个暑假呢。'
    },
    '2026-07-03': {
        title: '今天我们聊了好多',
        content: '聊了狗狗，\n聊了搬家，\n聊了工作，\n聊了蹦极，\聊了我们对相亲，缘分以及未来另一半的看法。'
    },
    '2026-07-06': {
        title: '老婆沉迷短剧哈哈哈哈',
        content: '老婆跟我聊了一下做的梦哈哈哈哈真的很有意思，\n和老婆聊天真的很开心哦，\n老婆今天给我们的电子宠物换了衣服一直用到现在，真的很可爱呢。'
    },
    '2026-07-07': {
        title: '聊了一天的仔仔',
        content: '仔仔真是太太太可爱了!'
    },
    '2026-07-09': {
        title: '爷爷突然去世',
        content: '真的非常突然凌晨接到消息就赶回去了，\n本来不想跟小鱼说的因为也并不是什么好的事情，\n不过这确实也是大事因为已经将小鱼当自己人了所以最后还是跟小鱼说了这件事，\n真的非常庆幸当时跟小鱼说了，不然我们之间不会有那么快的发展，这可能真的是冥冥之中自有天意吧。\n为爷爷办理丧葬的这段时间小鱼真的给了我巨大的力量何莫大的鼓励，谢谢你小鱼'
    },
    '2026-07-13': {
        title: '好梦幻的昨天，今天空气都是甜的',
        content: '这两天发生的事真是千言万语都说不完...\n我爱你老婆❤️。'
    },
    '2026-07-14': {
        title: '出发返程，有亲爱的老婆送站真的好幸福',
        content: '今天又是可以记忆一生的日子，好多的第一次，最印象深刻的还是和老婆的亲亲\n还有老婆给买的坚果和手写信，真的好温暖💕。'
    },
    '2026-07-16': {
        title: '直球小鱼太可爱了',
        content: '小鱼突然问想不想结婚，\n哈哈哈，非常想哦老婆，求之不得呢😘。'
    },
    '2026-07-25': {
        title: '迟到一天的祝福哈哈哈（这袋猪猪零食真的好可爱看到就直接给老婆买了哈哈哈）',
        content: '祝老婆猪(诸)事顺利，快快乐乐，平平安安的度过每一天。'
    },
    '2026-08-12': {
        title: '❤️',
        content: '未来的路很远，很曲折，会伴随着失落和悲伤，但也充满了希望和幸福，希望我们可以互相搀扶着一直走下去。\n\n\n\n今天贺卡字数有限完整版写到这了哈哈哈\n一晃在一起满一个月了，因为异地，没法当面给你庆祝，只能送一束花表达心意。这段时间虽然只能线上聊天，但每天和你说话，都是我一天里最放松开心的时刻。我一直在期待见面的那天，这束花替我先奔向你，代替我给你一个拥抱。不管距离多远时间多长我都会一直爱你。满月快乐，我超超超可爱的小鱼。'
    },
    // 👇 在下方添加更多笔记
    // '2024-07-15': {
    //     title: '一起做饭',
    //     content: '第一次一起做饭，虽然把厨房搞得一团糟...'
    // },
};

// ============================================
// 日历核心功能
// ============================================

// 设置日历起始日期（从这个日期开始显示，不包括这天之前的）
const CALENDAR_START_DATE = new Date('2026-06-24');
const MIN_YEAR = 2026;
const MIN_MONTH = 5; // 6月（月份从0开始）

let currentYear = 2026;
let currentMonth = 5; // 从2026年6月开始
let selectedDate = null;

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    renderCalendar(currentYear, currentMonth);
});

// 格式化年份显示
function formatYear(year) {
    return year.toString();
}

// 渲染日历
function renderCalendar(year, month) {
    const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月', 
                       '七月', '八月', '九月', '十月', '十一月', '十二月'];
    
    // 使用格式化后的年份显示
    document.getElementById('currentMonth').textContent = `${formatYear(year)}年${monthNames[month]}`;
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);
    
    const firstDayWeek = firstDay.getDay();
    const lastDate = lastDay.getDate();
    const prevLastDate = prevLastDay.getDate();
    
    const daysContainer = document.getElementById('calendarDays');
    daysContainer.innerHTML = '';
    
    const today = new Date();
    const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;
    const todayDate = today.getDate();
    
    // 上个月的日期
    for (let i = firstDayWeek - 1; i >= 0; i--) {
        const day = prevLastDate - i;
        const dayEl = createDayElement(year, month - 1, day, true);
        daysContainer.appendChild(dayEl);
    }
    
    // 当前月的日期
    for (let day = 1; day <= lastDate; day++) {
        const isToday = isCurrentMonth && day === todayDate;
        const dayEl = createDayElement(year, month, day, false, isToday);
        daysContainer.appendChild(dayEl);
    }
    
    // 下个月的日期（补齐7的倍数）
    const totalCells = daysContainer.children.length;
    const remainingCells = 7 - (totalCells % 7);
    if (remainingCells < 7) {
        for (let day = 1; day <= remainingCells; day++) {
            const dayEl = createDayElement(year, month + 1, day, true);
            daysContainer.appendChild(dayEl);
        }
    }
}

// 创建日期元素
function createDayElement(year, month, day, isOtherMonth, isToday = false) {
    const dayEl = document.createElement('div');
    dayEl.className = 'calendar-day';
    
    if (isOtherMonth) {
        dayEl.classList.add('other-month');
    }
    
    if (isToday) {
        dayEl.classList.add('today');
    }
    
    // 格式化日期字符串
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    dayEl.dataset.date = dateStr;
    
    // 检查是否在起始日期之前（显示为灰色，不可点击）- 不包括24日当天
    const currentDate = new Date(year, month, day);
    const startDate = new Date('2026-06-24');
    startDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);
    const isBeforeStart = currentDate < startDate;
    
    if (isBeforeStart) {
        dayEl.classList.add('disabled');
        dayEl.style.cursor = 'not-allowed';
    }
    
    // 日期数字
    const dayNumber = document.createElement('div');
    dayNumber.className = 'day-number';
    dayNumber.textContent = day;
    dayEl.appendChild(dayNumber);
    
    // 只有在起始日期之后（包括当天）才显示特殊标记和笔记
    if (!isBeforeStart) {
        // 检查是否有特殊标记
        const specialInfo = getSpecialDateInfo(year, month, day);
        if (specialInfo) {
            if (specialInfo.type === 'anniversary') {
                dayEl.classList.add('anniversary');
            } else if (specialInfo.type === 'festival') {
                dayEl.classList.add('festival');
            }
            
            const label = document.createElement('div');
            label.className = 'day-label';
            label.textContent = specialInfo.title;
            dayEl.appendChild(label);
        }
        
        // 检查是否有笔记
        if (NOTES_DATA[dateStr]) {
            dayEl.classList.add('has-note');
        }
        
        // 点击事件（只有可点击的日期才添加）
        dayEl.addEventListener('click', () => openNoteModal(dateStr));
    }
    
    return dayEl;
}

// 获取特殊日期信息
function getSpecialDateInfo(year, month, day) {
    const monthStr = String(month + 1).padStart(2, '0');
    const dayStr = String(day).padStart(2, '0');
    const dateStr = `${monthStr}-${dayStr}`;
    const fullDateStr = `${year}-${dateStr}`;
    
    // 检查纪念日
    for (const item of IMPORTANT_DATES.anniversary) {
        if (item.repeat && item.date === dateStr) {
            return { type: 'anniversary', title: item.title };
        }
        if (!item.repeat && item.date === fullDateStr) {
            return { type: 'anniversary', title: item.title };
        }
    }
    
    // 检查节日
    for (const item of IMPORTANT_DATES.festival) {
        if (item.repeat && item.date === dateStr) {
            return { type: 'festival', title: item.title };
        }
        if (!item.repeat && item.date === fullDateStr) {
            return { type: 'festival', title: item.title };
        }
    }
    
    return null;
}

// 上一月
function previousMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    
    // 不允许回到2026年6月之前
    if (currentYear < MIN_YEAR || (currentYear === MIN_YEAR && currentMonth < MIN_MONTH)) {
        currentYear = MIN_YEAR;
        currentMonth = MIN_MONTH;
        showToast('已经是最早的月份了');
        return;
    }
    
    renderCalendar(currentYear, currentMonth);
}

// 下一月
function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentYear, currentMonth);
}

// 回到缘始曰（2026年6月24日）
function goToOrigin() {
    currentYear = 2026;
    currentMonth = 5; // 6月
    renderCalendar(currentYear, currentMonth);
    
    // 滚动到页面顶部，让用户能看到6月24日
    setTimeout(() => {
        // 高亮显示6月24日
        const originDay = document.querySelector('[data-date="2026-06-24"]');
        if (originDay) {
            originDay.style.animation = 'pulse 0.6s ease 2';
        }
    }, 100);
}

// 回到今天
function goToday() {
    const today = new Date();
    currentYear = today.getFullYear();
    currentMonth = today.getMonth();
    
    // 如果今天在2026年6月之前，则回到起始月
    if (currentYear < MIN_YEAR || (currentYear === MIN_YEAR && currentMonth < MIN_MONTH)) {
        currentYear = MIN_YEAR;
        currentMonth = MIN_MONTH;
    }
    
    renderCalendar(currentYear, currentMonth);
}

// ============================================
// 笔记展示功能
// ============================================

// 打开笔记弹窗
function openNoteModal(dateStr) {
    selectedDate = dateStr;
    const modal = document.getElementById('noteModal');
    const modalDate = document.getElementById('modalDate');
    
    // 格式化日期显示
    const [year, month, day] = dateStr.split('-');
    const displayYear = formatYear(parseInt(year));
    modalDate.textContent = `${displayYear}年${parseInt(month)}月${parseInt(day)}日`;
    
    // 显示笔记内容
    const noteData = NOTES_DATA[dateStr];
    const noteDisplay = document.querySelector('.note-display');
    const noNote = document.getElementById('noNote');
    const displayTitle = document.getElementById('displayTitle');
    const displayContent = document.getElementById('displayContent');
    
    if (noteData) {
        // 显示笔记
        displayTitle.textContent = noteData.title;
        displayContent.textContent = noteData.content;
        noteDisplay.style.display = 'block';
        noNote.style.display = 'none';
    } else {
        // 显示无笔记提示
        noteDisplay.style.display = 'none';
        noNote.style.display = 'block';
    }
    
    modal.classList.add('show');
}

// 关闭笔记弹窗
function closeNoteModal() {
    const modal = document.getElementById('noteModal');
    modal.classList.remove('show');
    selectedDate = null;
}

// 点击弹窗外部关闭
document.getElementById('noteModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeNoteModal();
    }
});

// ESC 键关闭弹窗
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeNoteModal();
    }
});

// 显示提示消息
function showToast(message) {
    // 移除已存在的提示
    const existingToast = document.querySelector('.toast-message');
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 2000);
}

// ============================================
// 📝 使用说明
// ============================================
/*

## 如何添加重要日期？

在文件顶部找到 IMPORTANT_DATES，添加：

// 纪念日（粉色）
{ date: '05-20', title: '恋爱纪念日', repeat: true },

// 节日（蓝色）
{ date: '02-14', title: '情人节', repeat: true },


## 如何添加笔记？

在文件顶部找到 NOTES_DATA，添加：

'2024-06-01': {
    title: '第一次旅行',
    content: '和你一起去海边看日出...'
},

日期格式：'YYYY-MM-DD'（例如：'2024-02-14'）

*/
