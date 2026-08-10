# 俄罗斯方块（Tetris）

用 Vue 2 + Vuex 构建的俄罗斯方块游戏（fork 自 Binaryify/vue-tetris）。

在线试玩：[https://binaryify.github.io/vue-tetris/?lan=zh](https://binaryify.github.io/vue-tetris/?lan=zh)

## 特性

- **Vue 2 + Vuex**：组件化开发，Vuex 状态管理
- **Web Audio API**：毫秒级精确音效播放
- **数据持久化**：`store.subscribe` → `localStorage`，断电/刷新可继续
- **响应式操作**：PC 键盘 + 移动端触屏
- **多语言**：`src/i18n.json` 配置

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 生产构建
npm run build
```

## 游戏操作

- **键盘**：方向键控制，空格硬降
- **触屏**：屏幕虚拟按键
- **初始棋盘**：10 级可选；**速度**：6 级可选
- **消除得分**：1 行 100 分，2 行 300 分，3 行 700 分，4 行 1500 分
- **速度递增**：每消除 20 行速度 +1 级

## 文件结构

```
tetris/
├── index.html               # 页面入口
├── build/                   # Webpack 构建脚本
├── config/                  # 环境配置
├── static/                  # 静态资源
└── src/
    ├── main.js              # 入口
    ├── App.vue              # 根组件
    ├── components/          # 10 个组件子目录
    │   ├── decorate/  guide/  keyboard/  logo/  matrix/
    │   ├── music/     next/    number/    pause/ point/
    ├── control/             # 游戏控制（状态机 + 操作指令）
    ├── vuex/                # Vuex store
    ├── unit/                # 工具模块
    └── i18n.json            # 多语言配置
```

## 部署

已部署至 Cloudflare Pages：`tetris-t83.pages.dev`

