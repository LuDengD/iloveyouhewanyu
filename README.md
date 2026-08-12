# Like_Girl v5.2.0 - 纯前端版

> 基于原版 Like_Girl 项目改造的纯前端版本，无需 PHP 和数据库，开箱即用！

## ✨ 特性

- 🎨 **完全复刻**原版 Like_Girl 的设计风格
- ⚡ **纯前端**实现，无需后端和数据库
- 📱 **响应式设计**，完美适配手机和电脑
- 🚀 **一键部署**到 GitHub Pages、Vercel、Netlify
- 💾 **本地存储**，数据保存在浏览器
- 🎭 **流畅动画**，提升用户体验

## 📋 功能列表

- ⏰ 恋爱计时器（实时显示天/时/分/秒）
- 👫 双人头像展示
- 📝 点点滴滴（时间轴）
- 💬 留言板
- 📷 Love Photo（相册）
- 📋 Love List（愿望清单）
- ℹ️ 关于我们

## 🚀 快速开始

### 方式 1：本地使用

1. **直接打开**
   - 双击 `index.html` 文件即可在浏览器中查看

2. **自定义配置**
   - 打开 `js/script.js`
   - 修改 `CONFIG` 对象中的配置：
     ```javascript
     const CONFIG = {
         startDate: '2024-05-20 00:00:00',  // 修改恋爱开始日期
         male: {
             name: 'Ki',                      // 修改男生名字
             avatar: '头像链接'                // 修改男生头像
         },
         female: {
             name: 'Li',                      // 修改女生名字
             avatar: '头像链接'                // 修改女生头像
         }
     };
     ```

### 方式 2：部署到 GitHub Pages（推荐）

1. **创建 GitHub 仓库**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/你的用户名/仓库名.git
   git push -u origin main
   ```

2. **启用 GitHub Pages**
   - 进入仓库 Settings
   - 找到 Pages 选项
   - Source 选择 `main` 分支
   - 点击 Save

3. **访问网站**
   - https://你的用户名.github.io/仓库名/

### 方式 3：部署到 Vercel

1. 访问 [vercel.com](https://vercel.com)
2. 导入你的 GitHub 仓库
3. 点击 Deploy
4. 获得免费域名

## 📁 项目结构

```
like-girl-frontend/
├── index.html              # 主页
├── little.html             # 点点滴滴页面
├── leaving.html            # 留言板页面
├── loveImg.html            # 相册页面
├── list.html               # 愿望清单页面
├── about.html              # 关于我们页面
├── css/
│   └── style.css           # 主样式文件
├── js/
│   └── script.js           # 主脚本文件
├── favicon.ico             # 网站图标
└── README.md               # 说明文档
```

## ⚙️ 配置说明

### 修改恋爱纪念日

编辑 `js/script.js` 文件：

```javascript
startDate: '2024-05-20 00:00:00',  // 改成你们的纪念日
```

### 修改头像

有两种方式：

**方式 1：使用在线图片**
```javascript
male: {
    avatar: 'https://你的图片链接.jpg'
},
```

**方式 2：使用本地图片**
1. 创建 `images` 文件夹
2. 放入头像图片（如 `male.jpg`、`female.jpg`）
3. 修改配置：
   ```javascript
   male: {
       avatar: 'images/male.jpg'
   },
   ```

### 修改文案

在 `js/script.js` 中修改：

```javascript
headerText: '你的专属文案...',
timeTitle: '自定义时间标题',
```

## 🎨 自定义样式

### 修改主题色

编辑 `css/style.css` 文件，搜索颜色值并替换：

```css
/* 主色调 */
#667eea  → 你的颜色
#764ba2  → 你的颜色

/* 渐变色 */
linear-gradient(135deg, #667eea, #764ba2)  → 你的渐变
```

### 修改背景图

```css
.bg-img {
    background: url('你的背景图.jpg') no-repeat center;
    background-size: cover;
}
```

## 💡 功能说明

### 1. 恋爱计时器

自动计算并实时显示在一起的时间，精确到秒。

### 2. 点点滴滴（时间轴）

记录重要的纪念时刻，按时间顺序展示。

### 3. 留言板

支持发表留言，数据保存在浏览器本地存储。

### 4. Love Photo（相册）

展示你们的甜蜜照片，支持点击放大查看。

### 5. Love List（愿望清单）

记录你们想一起完成的事情。

### 6. 关于我们

展示两人的详细信息。

## 🔧 高级功能

### 添加背景音乐

在 `index.html` 的 `<body>` 标签后添加：

```html
<audio id="bgMusic" loop autoplay>
    <source src="你的音乐.mp3" type="audio/mpeg">
</audio>
```

### 添加访问统计

可以集成：
- Google Analytics
- 百度统计
- 友盟统计

### 添加评论系统

可以集成第三方评论系统：
- Gitalk
- Disqus
- Valine

## 📱 浏览器兼容性

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ⚠️ IE 不支持

## 🐛 常见问题

### Q: 留言会丢失吗？

A: 留言保存在浏览器本地存储（localStorage），清除浏览器缓存会丢失。建议定期导出备份。

### Q: 如何修改纪念日？

A: 编辑 `js/script.js` 文件中的 `startDate` 配置项。

### Q: 可以添加更多页面吗？

A: 可以，参考现有页面的结构创建新页面即可。

### Q: 如何更换背景图？

A: 修改 `css/style.css` 中 `.bg-img` 的 background 属性。

### Q: 支持多人访问吗？

A: 支持。但每个访客的数据（如留言）是独立的，不会同步。

## 📄 开源协议

本项目基于原版 [Like_Girl](https://gitee.com/kiCode111/like-girl-v5.2.0) 改造

原项目协议：GNU AGPL v3  
本项目协议：MIT License

## 💖 致谢

- 感谢原作者 [kiCode111](https://gitee.com/kiCode111) 的开源项目
- 感谢所有为开源社区做出贡献的开发者

## 🔗 相关链接

- 原版项目：https://gitee.com/kiCode111/like-girl-v5.2.0
- 问题反馈：GitHub Issues
- 在线演示：（部署后填写）

## 💕 寄语

> 愿得一人心，白首不相离  
> 愿这个小小的网站，记录你们的每一个美好瞬间

---

**Made with 💕 | © 2022 - 2026**

*如果这个项目对你有帮助，请给一个 Star ⭐️*
