# 聂久翔 · AI 应用开发工程师 — 个人作品集网站

基于 [magicuidesign/portfolio](https://github.com/magicuidesign/portfolio)（MIT License）二次开发的中文个人作品集，定位 **AI 应用开发工程师**，首屏集成 Three.js 实时 3D 车模展示。

- 在线演示：<https://112-njx.github.io/Collections_Web/>
- 作者：聂久翔（NJX）· 河南大学 · 软件工程
- GitHub：<https://github.com/112-njx>

## ✨ 功能特性

- **单文件配置**：全站内容集中在 `src/data/resume.tsx`，改内容无需翻找组件
- **Three.js 3D 车模**：React Three Fiber 实时渲染，自动旋转 + 鼠标拖拽观察，明暗主题自适应；支持两步接入真实 GLB 模型
- **完整个人展示**：Hero、关于我、实习经历、教育背景、专业技能、项目经历、荣誉奖项、联系方式
- **两个 Agent 项目重点包装**：量化指标卡（命中率 / token 上限 / 相关率提升）、技术亮点、GitHub / 演示链接
- **MDX 技术博客**：content-collections 驱动，9 篇中文技术文章
- **工程能力**：响应式布局（手机 / 桌面）、明暗主题切换、SEO 元信息与 OpenGraph 自动生成

## 🧱 技术栈

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui · Magic UI (motion) · Three.js / React Three Fiber · content-collections (MDX)

## 🚀 本地运行

```bash
npm install        # 安装依赖（本项目使用 npm）
npm run dev        # 开发模式 → http://localhost:3000
npm run build      # 生产构建
npm run start      # 生产模式运行
npm run lint       # ESLint 检查
```

要求 Node.js 20+（开发环境为 Node 22）。

## 📁 目录结构

```
.
├─ src/
│  ├─ app/                    # 页面路由（首页 / 博客 / OpenGraph）
│  ├─ components/
│  │  ├─ section/             # 各页面区块（关于我 / 实习 / 项目 / 奖项 / 联系 …）
│  │  ├─ three/               # Three.js 3D 车模组件
│  │  └─ ui/                  # shadcn/ui 基础组件
│  └─ data/resume.tsx         # ⭐ 全站内容单配置文件
├─ content/                   # MDX 博客文章
└─ public/                    # 静态资源（logo / 项目图片 / 模型）
```

## 🛠 自定义指南

| 想改什么 | 去哪里 |
|---|---|
| 姓名、简介、技能、项目、奖项、联系方式 | `src/data/resume.tsx` |
| 首页区块顺序与布局 | `src/app/page.tsx` |
| 3D 车模与场景 | `src/components/three/car-showcase.tsx` |
| 博客文章 | `content/*.mdx` |

### 接入真实车模模型（两步）

1. 将 GLB 车模放入 `public/models/car.glb`（若为 .gltf + 贴图，请一并放入同目录）
2. 打开 `src/components/three/car-showcase.tsx`，把 `USE_GLTF_MODEL` 改为 `true`，按需调整 `GLTF_SCALE` / `GLTF_POSITION`

接入前页面自动展示程序化占位车模，保证 3D 展示始终可见。

## ☁️ 部署

- **Vercel**（推荐）：`vercel --prod`，Next.js 原生托管，自动 HTTPS / CDN
- **GitHub Pages**：构建产物发布到 `gh-pages`
- **自有服务器**：`npm run build && npm run start`，配合 Nginx 反向代理与进程守护

## 📄 License

本项目基于 [magicuidesign/portfolio](https://github.com/magicuidesign/portfolio) 的 MIT 许可二次开发，原作者版权与本项目版权均保留于 [LICENSE](./LICENSE)。
