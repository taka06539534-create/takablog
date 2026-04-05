## ADDED Requirements

### Requirement: 动态粒子背景
系统 SHALL 在 Hero 区域显示动态粒子背景，粒子缓慢漂浮并随鼠标轻微移动。

#### Scenario: 粒子动画
- **WHEN** Hero 区域加载完成
- **THEN** 粒子 SHALL 开始缓慢漂浮动画，速度为每秒 10-20 像素

#### Scenario: 鼠标交互
- **WHEN** 用户在 Hero 区域移动鼠标
- **THEN** 粒子 SHALL 向鼠标反方向轻微移动，产生视差效果

### Requirement: 打字机效果标题
系统 SHALL 为 Hero 区域的主标题应用打字机效果，逐个字符显示。

#### Scenario: 标题动画
- **WHEN** 页面加载完成
- **THEN** 主标题 SHALL 以打字机效果逐个字符显示，每个字符间隔 50ms

### Requirement: 渐变文字效果
系统 SHALL 为关键文字应用渐变色效果，增强视觉吸引力。

#### Scenario: 渐变渲染
- **WHEN** 文字包含 gradient 类名
- **THEN** 文字 SHALL 显示从左到右的蓝紫渐变色

### Requirement: CTA 按钮组
系统 SHALL 显示两个行动号召按钮，一个主要按钮（实心）和一个次要按钮（描边）。

#### Scenario: 按钮点击
- **WHEN** 用户点击主要按钮
- **THEN** 页面 SHALL 平滑滚动到项目亮点区域

#### Scenario: 按钮悬停
- **WHEN** 用户鼠标悬停在按钮上
- **THEN** 按钮 SHALL 上移 2px，阴影增强

### Requirement: 社交链接图标
系统 SHALL 在 Hero 区域底部显示社交链接图标，支持 GitHub、LinkedIn、Twitter、Email。

#### Scenario: 图标渲染
- **WHEN** 配置了社交链接
- **THEN** 系统 SHALL 显示对应的社交图标，点击在新标签页打开

### Requirement: 响应式布局
系统 SHALL 在移动端单栏显示 Hero 内容，在桌面端双栏（文字 + 头像）显示。

#### Scenario: 移动端适配
- **WHEN** 视口宽度小于 1024px
- **THEN** Hero 区域 SHALL 以单栏垂直布局显示，头像位于文字下方

#### Scenario: 桌面端适配
- **WHEN** 视口宽度大于等于 1024px
- **THEN** Hero 区域 SHALL 以双栏布局显示，左侧文字右侧头像
