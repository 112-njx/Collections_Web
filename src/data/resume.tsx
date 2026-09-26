import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { Java } from "@/components/ui/svgs/java";
import { Python } from "@/components/ui/svgs/python";
import { Docker } from "@/components/ui/svgs/docker";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Typescript } from "@/components/ui/svgs/typescript";
import {
  Bot,
  Box,
  Boxes,
  Braces,
  Component,
  Database,
  Flame,
  Layers,
  Leaf,
  Link2,
  MessageSquareText,
  Palette,
  PlugZap,
  Rocket,
  Search,
  Server,
  Timer,
  Workflow,
  Zap,
} from "lucide-react";

export const DATA = {
  name: "聂久翔",
  initials: "NJX",
  url: "https://112-njx.github.io",
  location: "河南 · 开封",
  locationLink:
    "https://www.google.com/maps/place/Kaifeng",
  description:
    "AI 应用开发工程师（校招方向）｜专注 Agent 工程化：LangGraph 多智能体编排、RAG 记忆系统、上下文压缩与长期记忆治理",
  summary:
    "河南大学（双一流）软件工程专业在读，GPA 3.6/4.0，求职方向 **AI 应用开发工程师**。\n\n我热衷于把大模型工程化落地为真实可用的产品：独立开发了基于 **LangGraph 多智能体**的 A 股策略回测平台（持续迭代中），参与校企合作项目完成 **AgentScope 多智能体**商品全网比价系统。在**华杉科技**实习期间，主导老 OA 系统模块升级并参与 Spring Boot 3 监控系统安全加固。\n\n熟悉 ReAct / PAE 推理范式与 Multi-Agent 架构选型，具备 RAG 全链路与 Agent 工程化治理的实践经验；获蓝桥杯 C/C++ 省级一等奖、嵌入式芯片与系统设计竞赛中部赛区二等奖等奖项。",
  avatarUrl: "",
  skillGroups: [
    {
      title: "后端工程化",
      skills: [
        { name: "Java", icon: Java },
        { name: "Spring Boot", icon: Leaf },
        { name: "MyBatisPlus", icon: Layers },
        { name: "Python", icon: Python },
        { name: "FastAPI", icon: Zap },
        { name: "MySQL", icon: Database },
        { name: "Redis", icon: Flame },
        { name: "Kafka", icon: Boxes },
        { name: "Celery", icon: Timer },
        { name: "Docker", icon: Docker },
        { name: "Nginx", icon: Server },
      ],
    },
    {
      title: "Agent 与 AI 工程",
      skills: [
        { name: "LangChain", icon: Link2 },
        { name: "LangGraph", icon: Workflow },
        { name: "AgentScope", icon: Bot },
        { name: "RAG", icon: Search },
        { name: "MCP", icon: PlugZap },
        { name: "Function Calling", icon: Braces },
        { name: "DeepSeek API", icon: Rocket },
        { name: "Prompt 工程", icon: MessageSquareText },
      ],
    },
    {
      title: "前端与可视化",
      skills: [
        { name: "Vue3", icon: Component },
        { name: "TypeScript", icon: Typescript },
        { name: "PostgreSQL", icon: Postgresql },
        { name: "Three.js", icon: Box },
        { name: "Tailwind CSS", icon: Palette },
      ],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "首页" },
    { href: "/blog", icon: NotebookIcon, label: "博客" },
  ],
  contact: {
    email: "1323407968@qq.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/112-njx",
        icon: Icons.github,
        navbar: true,
      },
      email: {
        name: "邮箱",
        url: "mailto:1323407968@qq.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "华杉科技有限公司",
      href: "",
      badges: ["实习"],
      location: "AI 应用开发（Java 方向）",
      title: "AI 应用开发实习生",
      logoUrl: "/logos/huashan.png",
      start: "2026.07",
      end: "2026.08",
      description: `响应公司降本增效策略，在导师与 AI 辅助下完成公司自研 OA 系统的模块升级，并参与监控系统安全加固：

- **合同批量导入**：独立交付合同模块的批量导入功能；
- **销售拜访 AI 匹配闭环**：实现 LLM 三态匹配 + 人工反馈自学习 + 定位异常检测，打通拜访记录与销售线索的智能匹配链路；
- **客服问题-工单自动联动**：完成客服问题与工单自动联动的模块初步代码；
- **安全加固与质量补强**：参与 Spring Boot 3 PIM 监控系统安全加固，修复 SSO 密钥缺失导致的认证绕过问题、避免审计日志越权风险；为跨仓库签名契约功能完成 31 条单测 + 19 条 E2E 测试。`,
    },
  ],
  education: [
    {
      school: "河南大学（双一流）",
      href: "https://www.henu.edu.cn",
      degree: "软件工程 · 本科 ｜ GPA 3.6/4.0",
      logoUrl: "/logos/henu.png",
      start: "2024.09",
      end: "2028.06",
    },
  ],
  projects: [
    {
      title: "AI Agent 股票策略平台",
      href: "https://github.com/112-njx/stock-invest-system",
      dates: "个人项目 · 全栈 · 持续迭代",
      active: true,
      description: `探索 A 股股民自然语言与量化代码边界的 **ToC Agent 金融策略回测平台**：基于 LangGraph 多智能体将交易员主观经验转化为可验证的量化代码与交易策略，支持记忆保存与修改的定制交易 Agent、一键回测并产出生产级代码。目前处于开发收尾阶段，即将进入专项测试与部署运维。

**技术亮点**

- **五节点多智能体编排**：技术分析 → 多空辩论 → 风控 → 交易决策的智能体链路，节点状态与耗时流式推送、异常节点自动降级；RAG 记忆系统以 ONNX 向量模型量化语义向量 + pgvector 检索，让 Agent 持续沉淀用户交易体系；
- **多数据源防 IP 限流**：东方财富 / 新浪 / 同花顺多源切换 + Redis 多级缓存 + WebSocket 心跳检测，断线增量拉取，实现行情毫秒级响应；
- **策略安全执行**：Python 沙箱执行策略代码；回测在独立子进程运行，配合 CPU/内存资源限制实现进程隔离，经异步 Celery 队列控制并发，输出胜率、盈亏比、夏普比率、最大回撤等核心指标；
- **部署与运维**：Docker Compose 编排 + Nginx 反向代理，接入 Prometheus/Grafana 监控告警，Alembic 统一管理数据库迁移。`,
      technologies: [
        "LangGraph",
        "LangChain",
        "FastAPI",
        "PostgreSQL",
        "pgvector",
        "Redis",
        "Celery",
        "Vue3",
        "Docker",
        "Nginx",
        "DeepSeek API",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/112-njx/stock-invest-system",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "商品全网比价 Agent",
      href: "",
      dates: "校企合作 · 2026.03 - 2026.06",
      active: true,
      description: `校企合作项目，面向跨境电商企业实现买家全网比价。基于 **AgentScope** 构建多智能体商品比价系统，支持自然语言购物意图理解、多平台商品检索比价与到手价（含运费、关税等）实时计算等核心功能。个人负责比价主 Agent 与检索/交易子 Agent 的编排协作、工具链路与评测调优。

**技术亮点**

- **Supervisor-Workers 多智能体架构**：按读写属性切分检索 / 交易子 Agent，解决单 Agent 上下文爆炸问题，跨平台并行比价延迟较传统架构大幅降低；
- **上下文压缩**：缓存断点压缩策略 + 边界压缩策略，控制 10+ 轮对话 token 不超过 30k，Prompt Cache 命中率保持 80% 以上；
- **长期记忆**：记忆检索 + 删除机制实现买家偏好 / 黑名单的跨会话复用，命中率 72%；
- **混合召回**：Query/Item 编码 + 混合召回机制，Top-100 商品召回相关率较单塔提升 22%。`,
      technologies: [
        "AgentScope",
        "Python",
        "上下文压缩",
        "Prompt Cache",
        "长期记忆",
        "混合召回",
        "向量检索",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Three.js 汽车模型 3D 展示（快速vibe coding）",
      href: "https://112-njx.github.io/car-model-display/",
      dates: "Web 3D 可视化",
      active: true,
      description: `基于 **Three.js** 构建的高保真汽车模型 3D 交互展示（本站首屏视觉核心）：GLTF 模型加载、PBR 材质与多光源环境、自动旋转 + 鼠标拖拽观察、明暗主题自适应。用于展示 WebGL 图形学与 3D 渲染工程的实践能力。`,
      technologies: ["Three.js", "WebGL", "R3F", "GLTF", "PBR"],
      links: [
        {
          type: "3D 演示",
          href: "https://112-njx.github.io/car-model-display/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/car-model.png",
      video: "",
    },
  ],
  awards: [
    {
      title: "“蓝桥杯”全国软件和信息技术专业人才大赛",
      dates: "软件赛 C/C++ 程序设计",
      location: "省级一等奖",
      description:
        "全国性程序设计竞赛，在 C/C++ 软件赛省级选拔中获一等奖。",
      image: "",
      links: [],
    },
    {
      title: "全国大学生嵌入式芯片与系统设计竞赛",
      dates: "芯片应用赛道",
      location: "中部赛区二等奖",
      description:
        "面向嵌入式系统设计的高水平学科竞赛，芯片应用赛道获中部赛区二等奖。",
      image: "",
      links: [],
    },
    {
      title: "“挑战杯”科技学术竞赛",
      dates: "校内科创竞赛",
      location: "院级金奖",
      description:
        "科技学术竞赛院级金奖，参赛作品围绕软件工程方向开展创新实践。",
      image: "",
      links: [],
    },
    {
      title: "工信部工业互联网平台开发工程师",
      dates: "职业技能认证",
      location: "初级证书",
      description:
        "通过工业和信息化部教育与考试中心认证，具备工业互联网平台开发工程师（初级）职业能力。",
      image: "",
      links: [],
    },
  ],
  stats: [
    { value: "5", label: "LangGraph 智能体节点" },
    { value: "30k", label: "10+ 轮对话 token 上限" },
    { value: "80%+", label: "Prompt Cache 命中率" },
    { value: "72%", label: "长期记忆复用命中率" },
    { value: "22%", label: "混合召回相关率提升" },
  ],
} as const;
