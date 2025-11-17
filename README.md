# stratos lab

A multilingual investment learning platform built with Eleventy, containing learning content for Unit 0 and Unit 1.

使用 Eleventy 构建的多语言投资学习平台，包含 Unit 0 和 Unit 1 的学习内容。

## Features

- Multilingual support (Chinese/English) / 多语言支持（中文/英文）
- Responsive design / 响应式设计
- Glossary system / 术语词汇表系统
- Chapter navigation / 章节导航
- Content interlinking / 内容互联
- Image support / 图片支持
- Global search / 全局搜索

## Project Structure

```
.
├── _data/              # Data files
│   ├── units.js       # Units and chapters definition
│   ├── site.js        # Site configuration
│   ├── glossary.js    # Glossary terms
│   └── glossaryByTopic.js  # Glossary organized by topic
├── _includes/          # Templates
│   └── layouts/       # Layout templates
│       └── base.njk   # Base layout
├── zh/                 # Chinese content
│   ├── unit0/         # Unit 0 Chinese
│   ├── unit1/         # Unit 1 Chinese
│   ├── glossary.njk   # Glossary page
│   └── search.njk     # Search page
├── en/                 # English content
│   ├── unit0/         # Unit 0 English
│   ├── unit1/         # Unit 1 English
│   ├── glossary.njk   # Glossary page
│   └── search.njk     # Search page
├── images/             # Images
└── .eleventy.js       # Eleventy configuration
```

## Installation and Running

```bash
# Install dependencies
npm install

# Development mode (with hot reload)
npm run serve

# Build for production
npm run build
```

Built files will be in the `_site` directory.

## Adding New Content

### Adding a New Chapter

1. Add chapter definition in `_data/units.js`
2. Create chapter page files:
   - `zh/unit1/chapter-slug.njk` (Chinese)
   - `en/unit1/chapter-slug.njk` (English)
3. Use the following front matter:
   ```yaml
   ---
   layout: base.njk
   title: 
   lang: zh
   permalink: /zh/unit1/chapter-slug/
   unit: unit1
   chapter: chapterX
   ---
   ```

### Adding Images

Place images in the `images/unit1/` directory, then reference them:

```markdown
![Description](images/unit1/image.png)
```

### Adding Glossary Terms

Add terms to `_data/glossary.js` with the following structure:

```javascript
{
  id: 'term-id',
  en: 'English Term',
  zh: '中文术语',
  topic: 'topic-name',
  description: {
    en: 'English description',
    zh: '中文描述'
  }
}
```

Terms will be automatically marked in content with dashed underlines and links to the glossary.

## 许可证 License

ISC

