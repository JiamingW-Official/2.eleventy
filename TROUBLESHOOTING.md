# GitHub Pages 故障排除

## 问题：显示 "There isn't a GitHub Pages site here"

### 解决步骤：

#### 1. 确认 GitHub Pages 已启用

访问：https://github.com/JiamingW-Official/2.eleventy/settings/pages

确保：
- **Source** 选择为 **"GitHub Actions"**（不是 "Deploy from a branch"）
- 如果看到 "Deploy from a branch"，请改为 "GitHub Actions"

#### 2. 检查部署状态

访问：https://github.com/JiamingW-Official/2.eleventy/actions

查看最新的 workflow 运行：
- ✅ 绿色勾号 = 部署成功
- ❌ 红色叉号 = 部署失败（点击查看错误日志）
- 🟡 黄色圆圈 = 正在部署中

#### 3. 确认正确的 URL

由于仓库名是 `2.eleventy`，正确的网站 URL 是：

**https://jiamingw-official.github.io/2.eleventy/**

**不是** `https://jiamingw-official.github.io/`（这是用户主页）

#### 4. 手动触发部署

如果部署没有自动运行：

1. 访问：https://github.com/JiamingW-Official/2.eleventy/actions
2. 点击左侧的 "Deploy to GitHub Pages"
3. 点击 "Run workflow" 按钮
4. 选择 "main" 分支
5. 点击 "Run workflow"

#### 5. 等待部署完成

- 首次部署通常需要 2-5 分钟
- 后续部署通常需要 1-3 分钟
- 部署完成后，等待 1-2 分钟让 DNS 更新

#### 6. 清除浏览器缓存

如果部署成功但仍看不到更新：
- 按 `Ctrl+Shift+R` (Windows/Linux) 或 `Cmd+Shift+R` (Mac) 强制刷新
- 或使用无痕模式访问

## 常见错误

### 错误：Build failed

检查：
1. Actions 日志中的错误信息
2. 确保 `package.json` 中有正确的依赖
3. 确保所有文件都已提交到仓库

### 错误：404 Not Found

检查：
1. 是否使用了正确的 URL（包含仓库名）
2. 是否等待了足够的时间让部署完成
3. 检查 Actions 是否成功完成

### 错误：Assets not loading

检查：
1. 图片路径是否正确
2. 是否使用了相对路径（不是绝对路径）
3. 检查 `pathPrefix` 配置是否正确

## 需要帮助？

如果以上步骤都无法解决问题，请：
1. 查看 Actions 日志：https://github.com/JiamingW-Official/2.eleventy/actions
2. 截图错误信息
3. 检查 Pages 设置：https://github.com/JiamingW-Official/2.eleventy/settings/pages

