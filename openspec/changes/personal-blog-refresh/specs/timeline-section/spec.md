## ADDED Requirements

### Requirement: 时间线节点展示
系统 SHALL 以垂直时间线形式展示职业发展关键节点，每个节点包含时间、标题、描述。

#### Scenario: 时间线渲染
- **WHEN** 用户访问时间线区域
- **THEN** 系统 SHALL 显示垂直时间线，节点按时间顺序从上到下排列

### Requirement: 时间节点连接线
系统 SHALL 在节点之间绘制垂直连接线，形成连续的时间流逝感。

#### Scenario: 连接线显示
- **WHEN** 时间线包含多个节点
- **THEN** 节点之间 SHALL 有连续的垂直线连接，线条颜色与主题一致

### Requirement: 节点图标标识
系统 SHALL 为每个时间节点显示左侧图标，图标代表该节点的类型（工作、学习、项目）。

#### Scenario: 图标分类
- **WHEN** 节点类型为"工作"
- **THEN** 图标 SHALL 显示公文包图标
- **WHEN** 节点类型为"学习"
- **THEN** 图标 SHALL 显示书本图标
- **WHEN** 节点类型为"项目"
- **THEN** 图标 SHALL 显示代码图标

### Requirement: 时间标签样式
系统 SHALL 在每个节点显示时间标签，采用胶囊样式突出显示。

#### Scenario: 时间标签格式
- **WHEN** 节点时间为"2024-01"
- **THEN** 时间标签 SHALL 显示为"2024.01"或"Jan 2024"格式

### Requirement: 响应式适配
系统 SHALL 在移动端简化时间线布局，在桌面端显示完整的左右布局。

#### Scenario: 移动端适配
- **WHEN** 视口宽度小于 768px
- **THEN** 时间线和节点内容 SHALL 垂直排列，图标和连接线位于左侧

#### Scenario: 桌面端适配
- **WHEN** 视口宽度大于等于 768px
- **THEN** 时间线 SHALL 居中，节点内容交替显示在左右两侧
