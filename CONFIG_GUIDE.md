# 📅 日历配置指南

## 如何添加重要日期和笔记

所有配置都在 `js/little.js` 文件的顶部。

---

## 1️⃣ 添加重要日期（带彩色标签）

找到 `IMPORTANT_DATES` 配置对象：

### 添加纪念日（粉色标记 💗）

```javascript
const IMPORTANT_DATES = {
    anniversary: [
        { date: '05-20', title: '恋爱纪念日', repeat: true },        // ✅ 每年5月20日
        { date: '2024-02-14', title: '第一次相遇', repeat: false },   // ✅ 仅2024年2月14日
        
        // 👇 在这里添加更多纪念日
        { date: '06-01', title: '第一次牵手', repeat: true },
        { date: '2024-03-15', title: '第一次旅行', repeat: false },
    ],
    // ...
}
```

### 添加节日（蓝色标记 💙）

```javascript
const IMPORTANT_DATES = {
    // ...
    festival: [
        { date: '01-01', title: '元旦', repeat: true },
        { date: '02-14', title: '情人节', repeat: true },
        { date: '12-25', title: '圣诞节', repeat: true },
        
        // 👇 在这里添加更多节日
        { date: '11-11', title: '双十一', repeat: true },
        { date: '05-04', title: '青年节', repeat: true },
    ]
}
```

### 📝 日期格式说明

| 类型 | 格式 | 示例 | 说明 |
|------|------|------|------|
| 每年重复 | `'MM-DD'` | `'01-01'`, `'05-20'` | 每年的这一天都会显示 |
| 特定年份 | `'YYYY-MM-DD'` | `'2024-02-14'` | 只在指定年份显示 |

⚠️ **注意**：月份和日期必须是两位数（例如：`'01-09'` 而不是 `'1-9'`）

---

## 2️⃣ 添加预设笔记

找到 `PRESET_NOTES` 配置对象：

```javascript
const PRESET_NOTES = {
    '2024-05-20': {
        title: '我们在一起啦',
        content: '今天是个特别的日子，我们正式在一起了！\n希望未来的每一天都能和你一起度过。\n❤️',
        specialType: 'anniversary'  // 可选：标记类型
    },
    
    '2024-06-01': {
        title: '第一次去海边',
        content: '和你一起看日出日落，超级浪漫！',
        specialType: ''  // 不标记特殊类型
    },
    
    // 👇 在这里添加更多预设笔记
    '2024-07-15': {
        title: '一起做饭',
        content: '第一次一起做饭，虽然厨房有点乱，但很开心~',
        specialType: ''
    },
};
```

### 📝 笔记格式说明

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `title` | 字符串 | 是 | 笔记标题 |
| `content` | 字符串 | 是 | 笔记内容（支持换行 `\n`） |
| `specialType` | 字符串 | 否 | `'anniversary'` / `'festival'` / `''` |

**specialType 说明：**
- `'anniversary'` - 纪念日（粉色标记）
- `'festival'` - 节日（蓝色标记）
- `''` - 普通笔记（无特殊标记）

⚠️ **注意**：
- 日期格式必须是 `'YYYY-MM-DD'`（例如：`'2024-02-14'`）
- 内容支持换行，使用 `\n` 表示换行
- 可以使用 emoji 表情符号 ❤️ 💕 ✨

---

## 3️⃣ 完整示例

```javascript
// ============ 重要日期配置 ============
const IMPORTANT_DATES = {
    // 纪念日（粉色）
    anniversary: [
        { date: '05-20', title: '恋爱纪念日', repeat: true },
        { date: '06-01', title: '第一次牵手', repeat: true },
        { date: '08-15', title: '她的生日', repeat: true },
        { date: '2024-02-14', title: '第一次相遇', repeat: false },
        { date: '2024-03-15', title: '第一次旅行', repeat: false },
    ],
    
    // 节日（蓝色）
    festival: [
        { date: '01-01', title: '元旦', repeat: true },
        { date: '02-14', title: '情人节', repeat: true },
        { date: '05-20', title: '520', repeat: true },
        { date: '07-07', title: '七夕', repeat: true },
        { date: '12-24', title: '平安夜', repeat: true },
        { date: '12-25', title: '圣诞节', repeat: true },
    ]
};

// ============ 预设笔记配置 ============
const PRESET_NOTES = {
    '2024-02-14': {
        title: '第一次相遇',
        content: '那个春天的午后，在咖啡馆第一次见到你。\n你的笑容像阳光一样温暖。',
        specialType: 'anniversary'
    },
    
    '2024-05-20': {
        title: '我们在一起啦',
        content: '今天正式确定关系！❤️\n希望未来的每一天都能和你一起度过。',
        specialType: 'anniversary'
    },
    
    '2024-06-01': {
        title: '第一次去海边',
        content: '和你一起看海，吹海风，超级浪漫！\n你说要和我走遍世界的每一个角落。',
        specialType: ''
    },
    
    '2024-07-15': {
        title: '一起做饭',
        content: '第一次一起做饭，虽然把厨房搞得一团糟，但很开心~\n你做的番茄炒蛋超好吃！',
        specialType: ''
    },
    
    '2024-08-08': {
        title: '爬山看日出',
        content: '凌晨4点起床去爬山看日出。\n虽然很累，但和你在一起就很值得。',
        specialType: ''
    },
};
```

---

## 4️⃣ 常见问题

### Q: 修改后为什么没有生效？

A: 请确保：
1. 保存了 `js/little.js` 文件
2. 刷新了浏览器（按 `Ctrl + F5` 强制刷新）
3. 日期格式正确（月份和日期要用两位数）

### Q: 可以删除预设笔记吗？

A: 可以，用户在页面上点击"删除"按钮即可删除。删除后不会再显示，除非清除浏览器缓存。

### Q: 预设笔记会覆盖我手动添加的笔记吗？

A: 不会。预设笔记只在用户没有修改过该日期时显示。一旦用户编辑或删除了某个日期的笔记，预设内容就不会再覆盖。

### Q: 七夕节的日期为什么不准确？

A: 七夕节是农历节日，公历日期每年不同。需要手动查询当年的公历日期并修改配置。

### Q: 可以添加图片吗？

A: 当前版本不支持图片上传。如需添加图片功能，需要结合云存储服务（如腾讯云COS、阿里云OSS）。

---

## 5️⃣ 快速模板

复制以下模板直接使用：

```javascript
// 添加一个纪念日
{ date: 'MM-DD', title: '标题', repeat: true },

// 添加一个特定年份的纪念日
{ date: 'YYYY-MM-DD', title: '标题', repeat: false },

// 添加一个节日
{ date: 'MM-DD', title: '标题', repeat: true },

// 添加一条笔记
'YYYY-MM-DD': {
    title: '标题',
    content: '内容\n可以换行',
    specialType: 'anniversary'  // 或 'festival' 或 ''
},
```

---

## 📌 提示

1. **备份配置**：修改前建议先复制一份原始配置，以便出错时恢复
2. **日期有效性**：确保日期是有效的（例如：不存在 `02-30`）
3. **emoji 使用**：可以在标题和内容中使用 emoji 让笔记更生动 ❤️ 💕 ✨ 🎂 🎁
4. **内容格式**：内容中使用 `\n` 表示换行，让笔记更易读

---

修改完成后，**保存文件并刷新页面**即可看到效果！ 🎉
