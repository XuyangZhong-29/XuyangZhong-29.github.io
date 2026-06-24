# 个人学术主页

一个简洁、低饱和度色块风格的个人学术主页，支持浅色/深色模式自动切换，纯静态实现，可无缝部署到 GitHub Pages。

## ✨ 特性

- **简洁设计**，低饱和度色块点缀（鼠尾草绿 / 雾蓝 / 陶土 / 沙 / 淡紫）
- **浅色 / 深色双主题**：自动跟随系统 `prefers-color-scheme`，并支持右上角手动切换（记忆选择）
- **可交互**：滚动导航高亮、论文按类型筛选、平滑滚动、进场动画、移动端菜单、回到顶部
- **内容区块**：个人简介、最新消息、发表论文、经历与教育、授课、联系方式
- **零依赖**：纯 HTML/CSS/JS，无需构建，无需框架
- **易维护**：所有内容集中在 `data.js`，改一个文件即可更新全站

## 📁 文件结构

```
academic-homepage/
├── index.html        # 页面结构
├── styles.css        # 样式与主题
├── script.js         # 交互逻辑与渲染
├── data.js           # ★ 你的内容（只改这里）
├── assets/
│   └── avatar.svg    # 头像（可替换为你的照片，改 data.js 中 avatar 路径）
├── .nojekyll         # 让 GitHub Pages 跳过 Jekyll 处理
└── README.md
```

## ✏️ 修改内容

打开 `data.js`，按注释修改即可：

- `profile`：姓名、职称、单位、邮箱、简介、社交链接
- `interests`：研究兴趣标签
- `news`：最新消息（按时间倒序）
- `publications`：论文清单（`type` 用于筛选，`highlight: true` 为精选）
- `timeline` / `teaching`：经历与授课

**替换头像**：把你的照片放进 `assets/`（如 `avatar.jpg`），再把 `data.js` 里的 `avatar` 改成 `"assets/avatar.jpg"`。

## 🚀 部署到 GitHub Pages

### 方式一：用户主页（`你的用户名.github.io`）

1. 新建仓库，命名为 **`你的用户名.github.io`**
2. 把本目录下所有文件推送到仓库的 `main` 分支根目录：
   ```bash
   git init
   git add .
   git commit -m "init academic homepage"
   git branch -M main
   git remote add origin https://github.com/你的用户名/你的用户名.github.io.git
   git push -u origin main
   ```
3. 打开仓库 **Settings → Pages**，Source 选择 `main` 分支 `/ (root)`，保存
4. 稍等一分钟，访问 `https://你的用户名.github.io` 即可

### 方式二：项目页（`你的用户名.github.io/仓库名`）

1. 新建任意名字的仓库（如 `homepage`），推送本目录文件
2. **Settings → Pages** 选择 `main` 分支 `/ (root)`
3. 访问 `https://你的用户名.github.io/homepage`

> 由于使用了相对路径，两种方式都能直接工作，无需修改任何配置。

## 🧪 本地预览

直接双击 `index.html` 即可，或启动本地服务器：

```bash
python3 -m http.server 8080
# 然后浏览器打开 http://localhost:8080
```

## 📄 许可

可自由用于个人学术主页用途。
