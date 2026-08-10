# CHANGELOG

## [2.0.0] - 2026-08-10

### Docs
- 新建 `AGENTS.md`（项目架构与 AI 协作指南）
- 精简 `README.md`（原 9.99 KB 详细版保留为参考）

---

## [1.0.0] - 2026-07

### Added
- 俄罗斯方块初始版本（fork 自 Binaryify/vue-tetris）
- Vue 2.3.3 + Vuex 2.3.1 + Webpack 2 + Babel + Less
- Web Audio API 音效
- 10 级初始棋盘 + 6 级速度
- PC 键盘 + 移动端触屏响应式操作
- Vuex `store.subscribe` → localStorage 数据持久化
- 多语言支持（`src/i18n.json`）
- Vue DevTools 可视化

### Changed
- 接入 GamePlatform 登录门 + 天梯榜分数提交
- 最高分从云端 `getMyScores` 获取
- 移除 GitHub Actions，改用 Cloudflare Dashboard Git 集成
- 暂未部署到 Cloudflare Pages
