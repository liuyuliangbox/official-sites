# official-sites（原 Gaming-Community）

liuyuliangbox 双产品线**官网**（Astro → Cloudflare Workers + Assets）。GitHub 仓名：`liuyuliangbox/official-sites`。

**一仓一分支**：`main` 同时服务游戏与画板；用 `SITE_LINE` + [`src/lines/`](src/lines/) 配置区分主题、纹理、动效与默认文案，不按产品线长期分叉。

**评论 / 海外讨论**：共用 [`liuyuliangbox/community`](https://github.com/liuyuliangbox/community) Discussions + Giscus（见 [docs/giscus-community.md](docs/giscus-community.md)）。中文主社区仍是对应 `bbs-*`。

| 产品线 | `SITE_LINE` | Worker | 自定义域 | 社区 |
|---|---|---|---|---|
| 游戏 | `game` | `site-game` | `site-game.aridjaya.eu.org` | `bbs-game.aridjaya.eu.org` |
| 画板 | `paint` | `site-paint-board` | `site-paint-board.aridjaya.eu.org` | `bbs-paint-board.aridjaya.eu.org` |

画板**应用**（编辑器）在仓库 `paint-board`，Pages `paint-board-563021874` → `paint-board.aridjaya.eu.org`。

## 内容 / CMS（留在社区）

官网展示配置**不在 Ops**，继续用对应产品线的**社区管理后台**：

- 文案：品牌、代号、标语、描述、页脚、友链、社区入口 URL（「官网展示」）
- 栏目：勾选「官网展示」→ 构建进导航与 `/logs/`
- 帖子：标「官网精选」→ 首页精选列表

改完后需**重建官网**才生效（构建期 `sync:forum` 拉 `{BBS_URL}/api/export/...`）。页面运行时不直连 bbs。

## 分线配置

| 文件 | 作用 |
|---|---|
| `src/lines/game.ts` / `paint.ts` | 纹理、动效、字体、CTA、默认文案、Giscus |
| `src/lines/index.ts` | `getLineConfig()` 读 `PUBLIC_SITE_LINE` |
| `astro.config.mjs` | 注入 `PUBLIC_SITE_LINE` / `BBS_URL` / `FORUM_API_BASE` |
| `data-site-line` / `data-texture` / `data-motion` | Layout 写到 `<html>`，CSS 换皮 |

- game：雾面噪点 + 铜青、偏 cinematic 入场  
- paint：纸面网格 + 工具青绿、偏 crisp；主 CTA「打开画板」

## 本地开发

```bash
npm install

# 默认 game
npm run dev

# 画板皮（无需切分支）
npm run dev:paint

# 无网跳过论坛同步时：
# set SKIP_FORUM_SYNC=1
```

离线构建两套皮（用已缓存的 `src/data/forum`）：

```bash
npm run build:game
npm run build:paint
```

完整构建（会先 sync）：

```bash
set SITE_LINE=game
set SITE_URL=https://site-game.aridjaya.eu.org
set BBS_URL=https://bbs-game.aridjaya.eu.org
npm run build

set SITE_LINE=paint
set SITE_URL=https://site-paint-board.aridjaya.eu.org
set BBS_URL=https://bbs-paint-board.aridjaya.eu.org
npm run build
```

## 部署

```bash
npm run build          # 当前环境的 SITE_LINE
npm run deploy:game    # wrangler.jsonc → site-game
npm run deploy:paint   # wrangler.site-paint-board.jsonc → site-paint-board
```

每日 / 手动重建：

- CForum Actions：**Rebuild Official Sites**
- 或本仓库 Actions：**Build and Deploy Sites**（需 `CF_API_TOKEN` + `CF_ACCOUNT_ID`）

未勾选「社区展示」的栏目在详情页不展示社区精选评论与讨论入口（Giscus 仍可保留）。
