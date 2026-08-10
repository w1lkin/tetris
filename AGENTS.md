# 俄罗斯方块（Tetris）

## 项目概览

基于 Vue 2 + Vuex 的俄罗斯方块（fork 自 Binaryify/vue-tetris），仓库中**唯一需要构建的 Web 游戏**之一。

- **栈**：Vue 2.3.3 + Vuex 2.3.1 + Webpack 2 + Babel + Less
- **音频**：Web Audio API，单音效文件多源播放
- **i18n**：见 `src/i18n.json`
- **数据本地**：通过 `store.subscribe` 持久化所有 state 到 `localStorage`，断电/刷新可继续
- **当前分支**：`release/1.0.0`（暂未发布到 Cloudflare Pages）

## 本地开发

```sh
cd tetris
npm install
npm run dev        # 开发服务器
```

## 构建

```sh
npm run build      # 输出到 dist/
```

## 操作

- **键盘**：方向键控制，空格硬降，硬降 / 软降 / 移动 / 旋转音效
- **响应式**：PC 用键盘、移动用触屏
- **Vue DevTools**：Vuex store 可视化

## 文件结构

```
tetris/
├── index.html                   # 页面入口
├── package.json                 # Vue 2 + Vuex + Webpack 2
└── src/
    ├── main.js                  # 入口
    ├── App.vue                  # 根组件
    ├── app.js / app.less        # 应用入口（JS + 样式）
    ├── components/              # 10 个组件子目录
    │   ├── decorate/  guide/  keyboard/  logo/  matrix/
    │   ├── music/     next/    number/    pause/ point/
    │   # 每个子目录含 .vue + .js + .less 三件套
    ├── control/                 # 游戏控制（状态机 + 操作指令）
    ├── vuex/                    # Vuex store（store.js + mutations.js）
    ├── unit/                    # 工具模块（block.js, const.js, music.js 等）
    └── i18n.json                # 多语言配置
```

## 约定

- 组件目录命名：**功能名** 单数（如 `decorate`、`music`），目录下三个文件同名不同后缀
- 操作指令集中在 `src/control/`，不在组件内修改全局状态
- 文档：`release.md`（中文，含 Vue/React 架构对比）+ `README-EN.md`
