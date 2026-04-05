## ADDED Requirements

### Requirement: 技能分类展示
系统 SHALL 支持将技能按类别分组展示，默认包含"前端核心"、"AI/ML"、"工具/其他"三个类别。

#### Scenario: 默认类别显示
- **WHEN** 用户访问首页技能展示区域
- **THEN** 系统 SHALL 显示三个技能类别，每个类别有清晰的标题和边框分隔

### Requirement: 技能熟练度可视化
系统 SHALL 使用进度条形式展示每个技能的熟练度，熟练度范围为 0-100%。

#### Scenario: 进度条动画
- **WHEN** 技能组件进入视口
- **THEN** 进度条 SHALL 从 0% 动画增长到目标百分比，动画持续时间 800ms

### Requirement: 技能数据配置
系统 SHALL 支持通过 TypeScript 对象配置技能列表，包括技能名称、类别、熟练度、图标。

#### Scenario: 添加新技能
- **WHEN** 开发者在配置数组中添加新技能对象
- **THEN** 系统 SHALL 自动在新技能所属类别下显示该技能，无需修改组件逻辑

### Requirement: 响应式布局
系统 SHALL 在移动端单列显示技能类别，在桌面端三列并排显示。

#### Scenario: 移动端适配
- **WHEN** 视口宽度小于 768px
- **THEN** 技能类别 SHALL 垂直堆叠，每个类别占满整行

#### Scenario: 桌面端适配
- **WHEN** 视口宽度大于等于 1024px
- **THEN** 三个技能类别 SHALL 以三列网格并排显示，间距均匀
