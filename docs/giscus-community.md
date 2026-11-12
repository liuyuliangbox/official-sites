# Giscus + 工作室 Discussions 规划

## 双通道

| 通道 | 仓库 / 站点 | 受众 |
|---|---|---|
| 主社区 | `bbs-game` / `bbs-paint-board` | 国内用户、账号、官网 CMS、精选 |
| GitHub | [`liuyuliangbox/community`](https://github.com/liuyuliangbox/community) | 海外、习惯 GitHub 的访客；官网页评（Giscus） |

官网代码仓已改名为 **`official-sites`**（本仓）。评论**不**再挂在本仓 Discussions。

## 配置位置

- [`src/lines/game.ts`](../src/lines/game.ts) / [`paint.ts`](../src/lines/paint.ts) → `giscus` + `discussionsUrl`
- 组件：[`src/components/Giscus.astro`](../src/components/Giscus.astro)

共用：

- `repo`: `liuyuliangbox/community`
- `repoId`: `R_kgDOVrvV3g`
- `mapping`: `url`（含域名，避免两线 `/logs/…` 撞同一条 Discussion）

当前页评 category（GitHub 默认名，可在 UI 里改名，**改名后 ID 不变**）：

| 产品线 | 现用 category | categoryId | 建议改名为 |
|---|---|---|---|
| game | Announcements | `DIC_kwDOVrvV3s4DK9OY` | Site · Project Turn |
| paint | Show and tell | `DIC_kwDOVrvV3s4DK9Oc` | Site · Paint Board |

自由讨论（非页评）可继续用 / 改名：

| 默认名 | 建议改名 | 用途 |
|---|---|---|
| General | Studio | 跨项目、自我介绍 |
| Ideas | Project Turn | 游戏向海外讨论 |
| Q&A / Polls | Paint Board 或按需 | 画板 / 投票 |

## 一次性人工步骤

1. 打开 https://github.com/apps/giscus → Install → 勾选组织仓 **`community`**（仅此仓即可）。
2. 在 https://github.com/liuyuliangbox/community/discussions 把上表分类改成建议名（可选，ID 不用改）。
3. 重建并部署两线官网后，打开一篇日志页确认 Giscus 加载。
4. （可选）在 `community` 发一条 Studio 置顶：指向两个 bbs 与两个 site 域名。

API 无法创建/重命名 Discussions 分类时，只能用网页 Settings / Discussions 分类管理。
