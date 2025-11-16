# GitHub Pages 部署说明

## 启用 GitHub Pages

1. 访问仓库设置页面：
   https://github.com/JiamingW-Official/2.eleventy/settings/pages

2. 在 "Source" 部分：
   - 选择 "GitHub Actions" 作为部署源
   - 保存设置

3. 等待首次部署：
   - 访问 Actions 页面查看部署状态：
     https://github.com/JiamingW-Official/2.eleventy/actions
   - 部署完成后，网站将在以下地址可用：
     https://jiamingw-official.github.io/2.eleventy/

## 自动部署

每次推送到 `main` 分支时，GitHub Actions 会自动：
1. 安装依赖
2. 构建网站
3. 部署到 GitHub Pages

## 本地测试

```bash
# 安装依赖
npm install

# 本地构建
npm run build

# 本地预览（带热重载）
npm run serve
```

## 注意事项

- 首次部署可能需要几分钟
- 如果遇到问题，检查 Actions 日志
- 确保所有图片和资源文件都已提交到仓库

