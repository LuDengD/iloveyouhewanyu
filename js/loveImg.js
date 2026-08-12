// ============================================
// 📸 照片数据配置区（在这里修改）
// ============================================

// 照片数据配置
const PHOTOS_DATA = [
     {
        url: 'https://ludeng-huihua.pages.dev/file/lianai/1786548881167_3.jpg',
        date: '2026-07-14',
        description: '老婆写的手写信好温暖，真的好感动，我爱你老婆❤️'
    },
    {
        url: 'https://ludeng-huihua.pages.dev/file/lianai/1786548884161_2.jpg',
        date: '2026-07-14',
        description: '真的好美丽呀老婆，我姐也说有夫妻相呢狠狠沾老婆光了哈哈哈'
    },
    {
        url: 'https://ludeng-huihua.pages.dev/file/lianai/1786530944687_1.jpg',
        date: '2026-06-27',
        description: '第一次约会，第一次来到小鱼家中，第一次合照，还有两只这么可爱的宝宝，真的真的真的好开心！'
    },
    {
        url: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800',
        date: '2026-07-12',
        description: '想和你一起旅行'
    },
    {
        url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800',
        date: '2026-07-12',
        description: '想和你一起看日落'
    },
    {
        url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800',
        date: '2026-06-24',
        description: '那一天'
    },
    // 👇 在下方添加更多照片
    // {
    //     url: '图片URL地址',
    //     date: '2026-08-10',
    //     description: '描述文字'
    // },
];

// ============================================
// 照片展示核心功能
// ============================================

let currentPhotoIndex = 0;
let lightbox = null;

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    renderPhotos();
    createLightbox();
});

// 渲染照片
function renderPhotos() {
    const grid = document.getElementById('photoGrid');
    
    if (PHOTOS_DATA.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <h3>还没有照片</h3>
                <p>在 js/loveImg.js 中添加照片数据</p>
                <p>期待你们的美好瞬间 ✨</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = PHOTOS_DATA.map((photo, index) => `
        <div class="img_card" onclick="openLightbox(${index})">
            <div class="love_img">
                <img src="${photo.url}" alt="${photo.description}">
                <div class="words">
                    <i>Date：${photo.date}</i>
                    <span>${photo.description}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// 创建 Lightbox
function createLightbox() {
    lightbox = document.createElement('div');
    lightbox.className = 'photo-lightbox';
    lightbox.innerHTML = `
        <!-- 顶部工具栏 -->
        <div class="lightbox-header">
            <div class="lightbox-counter" id="lightboxCounter">1 / 3</div>
            <div class="lightbox-tools">
                <button class="lightbox-tool-btn" onclick="zoomIn()" title="放大">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>
                    </svg>
                </button>
                <button class="lightbox-tool-btn" onclick="zoomOut()" title="缩小">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        <path d="M7 9h5v1H7z"/>
                    </svg>
                </button>
                <button class="lightbox-tool-btn" onclick="toggleFullscreen()" title="全屏">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                    </svg>
                </button>
                <button class="lightbox-tool-btn" onclick="closeLightbox()" title="关闭">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                </button>
            </div>
        </div>
        
        <!-- 图片容器 -->
        <div class="lightbox-image-container">
            <img id="lightboxImage" src="" alt="">
        </div>
        
        <!-- 左右导航 -->
        <button class="lightbox-nav prev" onclick="prevPhoto()">‹</button>
        <button class="lightbox-nav next" onclick="nextPhoto()">›</button>
        
        <!-- 底部信息 -->
        <div class="lightbox-footer">
            <div class="lightbox-info">
                <p class="lightbox-title" id="lightboxTitle"></p>
                <p class="lightbox-date" id="lightboxDate"></p>
            </div>
        </div>
    `;
    document.body.appendChild(lightbox);
    
    // 点击背景关闭
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox || e.target.className === 'lightbox-image-container') {
            closeLightbox();
        }
    });
    
    // ESC 键关闭
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('show')) return;
        
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            prevPhoto();
        } else if (e.key === 'ArrowRight') {
            nextPhoto();
        }
    });
}

// 打开 Lightbox
function openLightbox(index) {
    currentPhotoIndex = index;
    updateLightboxContent();
    lightbox.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// 更新 Lightbox 内容
function updateLightboxContent() {
    const photo = PHOTOS_DATA[currentPhotoIndex];
    const img = document.getElementById('lightboxImage');
    const counter = document.getElementById('lightboxCounter');
    const title = document.getElementById('lightboxTitle');
    const date = document.getElementById('lightboxDate');
    
    img.src = photo.url;
    img.alt = photo.description;
    counter.textContent = `${currentPhotoIndex + 1} / ${PHOTOS_DATA.length}`;
    title.textContent = photo.description;
    date.textContent = photo.date;
    
    // 重置缩放
    img.style.transform = 'scale(1)';
}

// 上一张
function prevPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + PHOTOS_DATA.length) % PHOTOS_DATA.length;
    updateLightboxContent();
}

// 下一张
function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % PHOTOS_DATA.length;
    updateLightboxContent();
}

// 放大
let currentScale = 1;
function zoomIn() {
    const img = document.getElementById('lightboxImage');
    currentScale = Math.min(currentScale + 0.2, 3);
    img.style.transform = `scale(${currentScale})`;
}

// 缩小
function zoomOut() {
    const img = document.getElementById('lightboxImage');
    currentScale = Math.max(currentScale - 0.2, 0.5);
    img.style.transform = `scale(${currentScale})`;
}

// 全屏
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        lightbox.requestFullscreen().catch(err => {
            console.log('无法进入全屏模式');
        });
    } else {
        document.exitFullscreen();
    }
}

// 关闭 Lightbox
function closeLightbox() {
    lightbox.classList.remove('show');
    document.body.style.overflow = '';
    currentScale = 1;
}

// ============================================
// 📝 使用说明
// ============================================
/*

## 如何添加照片？

在文件顶部找到 PHOTOS_DATA，添加：

{
    url: '图片URL地址',
    date: '2026-08-10',
    description: '这是一张美好的照片'
},

## 图片URL获取方式：

1. 使用图床服务（推荐）：
   - 路过图床：https://imgse.com/
   - SM.MS：https://sm.ms/
   - ImgURL：https://imgurl.org/

2. 使用对象存储：
   - 阿里云 OSS
   - 腾讯云 COS
   - 七牛云

3. 使用本地图片：
   - 将图片放到项目文件夹（如 images/）
   - URL 写为：'images/photo1.jpg'

## 注意事项：

- 建议使用外链图床，速度更快
- 图片URL必须可公开访问
- 日期格式：YYYY-MM-DD
- 描述文字不要太长，建议一句话

*/
