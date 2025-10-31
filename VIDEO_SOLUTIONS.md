# 大视频文件解决方案

GitHub Pages 对单个文件大小有限制（通常 100MB，建议每个视频 < 50MB）。以下是几种处理大视频的方案：

## 📺 推荐方案

### 1. **Bilibili（B站）** - 最适合中国用户
**优点**: 
- 免费、稳定、国内访问速度快
- 支持高清视频
- 适合学术/技术视频

**步骤**:
1. 上传视频到 Bilibili
2. 获取视频的 BV 号（如 `BV1xx411c7mD`）
3. 在 HTML 中替换：
```html
<div class="project-video">
    <iframe src="//player.bilibili.com/player.html?bvid=BV1xx411c7mD&page=1" 
            scrolling="no" border="0" frameborder="no" framespacing="0" 
            allowfullscreen="true"></iframe>
</div>
```

### 2. **YouTube** - 国际用户友好
**步骤**:
1. 上传视频到 YouTube
2. 点击"分享" → "嵌入"，获取嵌入代码
3. 或使用视频 ID：
```html
<div class="project-video">
    <iframe src="https://www.youtube.com/embed/VIDEO_ID" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
</div>
```

### 3. **阿里云 OSS / 腾讯云 COS** - 专业方案
**优点**: 完全控制，CDN 加速
**缺点**: 需要付费（按流量计费）

**步骤**:
1. 开通对象存储服务
2. 上传视频文件
3. 获取公开访问链接
4. 使用视频标签：
```html
<video controls>
    <source src="https://your-bucket.oss-cn-shenzhen.aliyuncs.com/project1.mp4" type="video/mp4">
</video>
```

### 4. **GitHub Release** - 利用 GitHub 空间
**优点**: 免费，2GB 单文件限制
**步骤**:
1. 在仓库中创建一个 Release
2. 上传大视频作为 Release 附件
3. 获取下载链接
4. 使用 `<video>` 标签引用该链接

### 5. **视频封面 + 外链** - 最简方案
```html
<div class="project-video">
    <a href="https://www.bilibili.com/video/BV1xx411c7mD" target="_blank" class="video-placeholder">
        <img src="videos/project1-cover.jpg" alt="项目视频">
        <div class="play-button">▶ 观看视频</div>
    </a>
</div>
```

## 🛠️ 视频压缩技巧

如果想继续使用本地视频，可以压缩文件：

### FFmpeg 压缩命令
```bash
# 基础压缩（保持较好质量）
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 96k output.mp4

# 更激进的压缩（适合演示视频）
ffmpeg -i input.mp4 -vf "scale=1280:720" -c:v libx264 -crf 30 -preset slow -c:a aac -b:a 64k output.mp4

# 降低帧率（如果不需要高帧率）
ffmpeg -i input.mp4 -r 24 -c:v libx264 -crf 28 output.mp4
```

### 参数说明
- `-crf`: 质量控制（18=极高质量，28=适中，32=较低）
- `-preset`: 编码速度（slow=更小文件，fast=更快编码）
- `-vf "scale=1280:720"`: 降低分辨率
- `-r 24`: 设置帧率为 24fps

## 💡 我的建议

根据你的需求：

1. **学术展示** → 推荐 **Bilibili**
   - 上传到 B站（可以设置为"仅自己可见"或"公开"）
   - 嵌入到网页中
   - 稳定、快速、免费

2. **国际展示** → 推荐 **YouTube**
   - 适合海外访问
   - 搜索引擎友好

3. **完全控制** → 压缩后继续使用本地文件
   - 用 FFmpeg 压缩到 < 50MB
   - 适合简短的演示视频

## 📝 CSS 样式已支持

当前 CSS 已经支持 `<iframe>` 和 `<video>` 两种方式，可以直接替换使用！

需要我帮你修改现有的视频为 iframe 嵌入方式吗？
