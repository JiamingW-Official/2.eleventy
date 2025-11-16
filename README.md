# 投资学习平台 - Investment Learning Platform

这是一个使用 Eleventy 构建的多语言投资学习平台，包含 Unit 0 和 Unit 1 的学习内容。

This is a multilingual investment learning platform built with Eleventy, containing learning content for Unit 0 and Unit 1.

## 功能特点 Features

- ✅ 多语言支持（中文/英文）Multilingual support (Chinese/English)
- ✅ 响应式设计 Responsive design
- ✅ 标签系统 Tag system
- ✅ 章节导航 Chapter navigation
- ✅ 内容互联 Content interlinking
- ✅ 图片支持 Image support

## 项目结构 Project Structure

```
.
├── _data/              # 数据文件 Data files
│   ├── units.js       # Units 和章节定义 Units and chapters definition
│   └── site.js        # 网站配置 Site configuration
├── _includes/          # 模板文件 Templates
│   └── layouts/       # 布局模板 Layout templates
│       └── base.njk   # 基础布局 Base layout
├── zh/                 # 中文内容 Chinese content
│   ├── unit0/         # Unit 0 中文版
│   └── unit1/         # Unit 1 中文版
├── en/                 # 英文内容 English content
│   ├── unit0/         # Unit 0 English version
│   └── unit1/         # Unit 1 English version
├── images/             # 图片资源 Images
└── .eleventy.js       # Eleventy 配置 Configuration
```

## 安装和运行 Installation and Running

```bash
# 安装依赖 Install dependencies
npm install

# 开发模式（带热重载）Development mode (with hot reload)
npm run serve

# 构建生产版本 Build for production
npm run build
```

构建后的文件会在 `_site` 目录中。

Built files will be in the `_site` directory.

## 添加新内容 Adding New Content

### 添加新章节 Adding a New Chapter

1. 在 `_data/units.js` 中添加章节定义
   Add chapter definition in `_data/units.js`

2. 创建章节页面文件：
   Create chapter page files:
   - `zh/unit1/chapter-slug.njk` (中文版)
   - `en/unit1/chapter-slug.njk` (英文版)

3. 使用以下 front matter：
   Use the following front matter:
   ```yaml
   ---
   layout: layouts/base.njk
   title: 
   lang: zh
   permalink: /{{ lang }}/unit1/chapter-slug/
   unit: unit1
   chapter: chapterX
   ---
   ```

### 添加图片 Adding Images

将图片放在 `images/unit1/` 目录下，然后在 Markdown 或 Nunjucks 文件中引用：
Place images in the `images/unit1/` directory, then reference them in Markdown or Nunjucks files:

```markdown
![描述](images/unit1/image.png)
```

## 内容来源 Content Source

原始 HTML 内容来自 `Chinese_Unit` 文件夹，已转换为 Markdown/Nunjucks 格式。

Original HTML content comes from the `Chinese_Unit` folder, converted to Markdown/Nunjucks format.

## 待完成事项 TODO

- [ ] 提取所有 HTML 内容并转换为 Markdown
- [ ] 完成所有章节的英文翻译
- [ ] 添加更多标签和内容互联
- [ ] 优化图片加载
- [ ] 添加搜索功能

## 许可证 License

ISC

