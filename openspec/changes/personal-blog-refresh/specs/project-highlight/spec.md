## ADDED Requirements

### Requirement: 项目卡片展示
系统 SHALL 以卡片形式展示代表性项目，每个卡片包含项目名称、描述、技术标签、链接。

#### Scenario: 项目卡片渲染
- **WHEN** 用户访问项目亮点区域
- **THEN** 系统 SHALL 显示项目卡片网格，每个卡片包含完整的项目信息

### Requirement: 技术标签显示
系统 SHALL 为每个项目显示相关联的技术栈标签，标签采用胶囊样式。

#### Scenario: 标签样式
- **WHEN** 项目包含多个技术标签
- **THEN** 标签 SHALL 以水平排列的胶囊形式显示，最多显示 4 个，超出显示"+N"

### Requirement: 项目链接跳转
系统 SHALL 为每个项目提供外部链接（GitHub、在线演示、案例研究），链接在新标签页打开。

#### Scenario: 外部链接打开
- **WHEN** 用户点击项目的 GitHub 链接
- **THEN** 系统 SHALL 在新标签页打开对应的 GitHub 仓库

### Requirement: 悬停交互效果
系统 SHALL 在用户悬停项目卡片时显示上移效果和阴影增强。

#### Scenario: 卡片悬停
- **WHEN** 用户鼠标悬停在项目卡片上
- **THEN** 卡片 SHALL 上移 4px，阴影深度增加，过渡时间 200ms

### Requirement: 响应式网格布局
系统 SHALL 根据视口宽度自适应调整项目卡片网格列数。

#### Scenario: 移动端单列
- **WHEN** 视口宽度小于 640px
- **THEN** 项目卡片 SHALL 以单列垂直排列

#### Scenario: 桌面端三列
- **WHEN** 视口宽度大于等于 1024px
- **THEN** 项目卡片 SHALL 以三列网格显示，最多每行 3 个
