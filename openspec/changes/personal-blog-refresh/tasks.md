## 1. 项目准备

- [x] 1.1 安装 framer-motion 依赖（用于动画效果）
- [x] 1.2 更新全局 CSS 变量，添加新的渐变配色方案
- [x] 1.3 创建动画相关的 CSS 工具类

## 2. AnimatedHero 组件实现

- [x] 2.1 创建 `src/components/home/animated-hero.tsx` 组件框架
- [x] 2.2 实现粒子背景动画组件
- [x] 2.3 实现打字机效果标题
- [x] 2.4 实现渐变文字效果
- [x] 2.5 实现 CTA 按钮组及滚动交互
- [x] 2.6 实现社交链接图标组件
- [x] 2.7 添加响应式布局样式

## 3. SkillShowcase 组件实现

- [x] 3.1 创建技能数据类型定义（TypeScript interfaces）
- [x] 3.2 创建 `src/components/home/skill-showcase.tsx` 组件框架
- [x] 3.3 实现技能类别容器组件
- [x] 3.4 实现技能条目及进度条组件
- [x] 3.5 实现进度条入场动画（使用 IntersectionObserver）
- [x] 3.6 添加默认技能数据配置（前端/AI/工具三类）
- [x] 3.7 添加响应式样式（移动端单列/桌面端三列）

## 4. ProjectHighlight 组件实现

- [x] 4.1 创建项目数据类型定义
- [x] 4.2 创建 `src/components/home/project-highlight.tsx` 组件框架
- [x] 4.3 实现项目卡片组件
- [x] 4.4 实现技术标签胶囊组件
- [x] 4.5 实现卡片悬停交互效果
- [x] 4.6 添加默认项目数据配置
- [x] 4.7 添加响应式网格布局样式

## 5. TimelineSection 组件实现

- [x] 5.1 创建时间节点数据类型定义
- [x] 5.2 创建 `src/components/home/timeline-section.tsx` 组件框架
- [x] 5.3 实现时间线容器及连接线样式
- [x] 5.4 实现时间节点组件（含图标）
- [x] 5.5 实现响应式布局（移动端垂直/桌面端交替）
- [x] 5.6 添加默认时间线数据（职业转型历程）

## 6. 首页集成

- [x] 6.1 更新 `src/app/page.tsx`，引入新组件
- [x] 6.2 替换 HomeHero 为 AnimatedHero
- [x] 6.3 添加 SkillShowcase 到首页
- [x] 6.4 添加 ProjectHighlight 到首页
- [x] 6.5 添加 TimelineSection 到首页
- [x] 6.6 调整组件间距和视觉层次

## 7. 测试与优化

- [x] 7.1 测试移动端响应式布局（<640px, <768px, <1024px）
- [x] 7.2 测试桌面端布局（>=1024px）
- [x] 7.3 测试动画性能和流畅度
- [x] 7.4 运行 Lighthouse 性能测试，确保分数不下降
- [x] 7.5 测试多浏览器兼容性（Chrome, Safari, Firefox）
- [x] 7.6 修复发现的视觉和交互问题

## 8. 收尾工作

- [x] 8.1 移除或归档旧的 HomeHero 组件（保留备份）
- [x] 8.2 清理未使用的导入和代码
- [x] 8.3 更新 README 或文档说明新增的组件
- [x] 8.4 提交 git commit
