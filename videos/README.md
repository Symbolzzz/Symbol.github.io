# 项目视频文件夹

请将你的项目演示视频放在这个文件夹中。

## 文件命名建议

- `project1.mp4` - 第一个项目的视频
- `project2.mp4` - 第二个项目的视频  
- `project3.mp4` - 第三个项目的视频

## 视频要求

- **格式**: MP4 (H.264 编码推荐)
- **分辨率**: 建议 1920x1080 或 1280x720
- **文件大小**: 建议每个视频不超过 50MB (GitHub Pages 限制)
- **时长**: 建议 30秒 - 2分钟

## 视频压缩建议

如果视频文件过大，可以使用以下工具压缩：

1. **FFmpeg** (命令行):
   ```bash
   ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k output.mp4
   ```

2. **HandBrake** (图形界面)
3. **在线工具**: CloudConvert, Compress Video Online

## 使用说明

1. 将视频文件复制到这个文件夹
2. 在 `index.html` 中更新对应的视频路径
3. 如果需要封面图，添加 `poster` 属性指向封面图片路径

## 示例

```html
<video controls poster="videos/project1-poster.jpg">
    <source src="videos/project1.mp4" type="video/mp4">
    您的浏览器不支持视频播放。
</video>
```
