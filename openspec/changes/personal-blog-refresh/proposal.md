## Why

当前个人博客首页主要展示通用博主形象，未能突出你作为前端工程师向 AI 工程师转型的独特定位。在技术竞争激烈的环境中，需要在 3 秒内让访问者理解你的专业身份和技术优势，留下深刻印象。

## What Changes

- **首页布局重构**: 从传统博客布局转变为更具视觉冲击力的单页式介绍布局
- **内容定位调整**: 突出"前端工程师 → AI 工程师"的转型故事，而非通用博主形象
- **增加技能展示区**: 直观展示技术栈，包括前端核心技能和 AI 相关技能
- **增加项目亮点区**: 展示代表性项目，体现技术深度和实战能力
- **视觉风格升级**: 采用更具科技感的渐变配色和动态效果
- **增加互动元素**: 添加悬停动效、滚动动画等微交互提升用户体验
- **优化响应式**: 确保移动端和桌面端都有良好体验

## Capabilities

### New Capabilities

- `skill-showcase`: 技能展示组件，支持分类展示技术栈（前端/AI/其他），带熟练度可视化
- `project-highlight`: 项目亮点组件，展示代表性项目卡片，支持特性标签和链接
- `timeline-section`: 时间线组件，展示职业转型历程和关键节点
- `animated-hero`: 动态 Hero 区域，替代现有 HomeHero，增加粒子背景和打字机效果

### Modified Capabilities

- `homepage-layout`: 首页整体布局从两栏式改为多段落单页式设计

## Impact

- **修改文件**: `src/app/page.tsx`, `src/components/home/home-hero.tsx`
- **新增组件**: `src/components/home/animated-hero.tsx`, `src/components/home/skill-showcase.tsx`, `src/components/home/project-highlight.tsx`, `src/components/home/timeline-section.tsx`
- **依赖**: lucide-react (已有), 可能需要 framer-motion 用于动画
- **样式**: 需要更新全局 CSS 以支持新的渐变和动画效果
