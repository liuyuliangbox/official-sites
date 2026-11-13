# Giscus + 工作室 Discussions 规划

## 双通道

| 通道 | 仓库 / 站点 | 受众 |
|---|---|---|
| 主社区 | `bbs-game` / `bbs-paint-board` | 国内用户、账号、官网 CMS、精选 |
| GitHub | [`liuyuliangbox/community`](https://github.com/liuyuliangbox/community) | 海外、习惯 GitHub 的访客；官网页评（Giscus） |

官网代码仓：**`official-sites`**。评论挂在 **`community`**，不挂官网代码仓。

## 配置位置

- [`src/lines/game.ts`](../src/lines/game.ts) / [`paint.ts`](../src/lines/paint.ts) → `giscus` + `discussionsUrl`
- 组件：[`src/components/Giscus.astro`](../src/components/Giscus.astro)

共用：

- `repo`: `liuyuliangbox/community`
- `repoId`: `R_kgDOVrvV3g`
- `mapping`: `url`（含域名，避免两线路径撞车）

## 分类（当前）

| Category | categoryId | 用途 |
|---|---|---|
| **Project Turn** | `DIC_kwDOVrvV3s4DLBKc` | game 官网 Giscus + 游戏向海外讨论 |
| **Paint Board** | `DIC_kwDOVrvV3s4DLBKV` | paint 官网 Giscus + 画板向海外讨论 |
| General | `DIC_kwDOVrvV3s4DK9OZ` | 跨项目 / 自我介绍（可改名为 Studio） |
| Announcements / Show and tell / … | 默认残留 | 可不用；页评已迁到产品线分类 |

页评 Discussion 标题会带完整页面 URL，与同分类下的自由帖可区分。

`discussionsUrl`：

- game → `/discussions/categories/project-turn`
- paint → `/discussions/categories/paint-board`

## 一次性人工步骤

1. 打开 https://github.com/apps/giscus → Install → 仅勾选组织仓 **`community`**。
2. 重建并部署两线官网后，打开一篇日志页确认 Giscus 加载。
3. （可选）在 General 发一条置顶：指向两个 bbs 与两个 site 域名。
