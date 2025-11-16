# 图片使用说明 Image Usage Guide

## 图片路径 Image Paths

所有图片都存储在 `images/unit1/` 目录下，构建后会被复制到 `_site/images/unit1/`。

All images are stored in the `images/unit1/` directory and will be copied to `_site/images/unit1/` after build.

## 如何在页面中引用图片 How to Reference Images in Pages

在 Nunjucks 模板或 Markdown 文件中，使用绝对路径引用图片：

In Nunjucks templates or Markdown files, use absolute paths to reference images:

### Markdown 格式 Markdown Format

```markdown
![图片描述](images/unit1/valuation/image.png)
```

### HTML 格式 HTML Format

```html
<img src="images/unit1/valuation/image.png" alt="图片描述">
```

### Nunjucks 模板格式 Nunjucks Template Format

```njk
<img src="images/unit1/valuation/image.png" alt="图片描述">
```

## 可用的图片目录 Available Image Directories

- `images/unit1/valuation/` - 估值方法相关图片
- `images/unit1/financial-statements/` - 财务报表相关图片
- `images/unit1/investment-methodology/` - 投资方法论相关图片

## 注意事项 Notes

1. 图片文件名中可能包含空格，在引用时请确保路径正确
2. 图片路径是相对于网站根目录的，所以使用 `images/...` 而不是 `/images/...`
3. 如果图片无法显示，请检查：
   - 图片文件是否存在
   - 路径是否正确
   - 文件名中的空格是否正确处理

