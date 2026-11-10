# Gaming-Community

liuyuliangbox 双产品线**官网**仓库（Astro → Cloudflare Workers + Assets）。

| 产品线 | Worker 名 | 自定义域 | 社区 |
|---|---|---|---|
| 游戏 | `site-game` | `site-game.aridjaya.eu.org` | `bbs-game.aridjaya.eu.org` |
| 画板 | `site-paint-board` | `site-paint-board.aridjaya.eu.org` | `bbs-paint-board.aridjaya.eu.org` |

画板**应用**（编辑器）在仓库 `paint-board`，Pages `paint-board-563021874` → `paint-board.aridjaya.eu.org`。

开发日志：构建期从社区「官网展示」栏目同步为静态页（`/logs/`）。

## 本地开发

```bash
npm install
# 无网或跳过同步时：
# set SKIP_FORUM_SYNC=1
npm run dev
```

构建（会先 `sync:forum` 拉取 bbs 公开导出接口；失败则中断构建）：

```bash
# 游戏官网
set SITE_LINE=game
set SITE_URL=https://site-game.aridjaya.eu.org
set BBS_URL=https://bbs-game.aridjaya.eu.org
npm run build

# 画板官网
set SITE_LINE=paint
set SITE_URL=https://site-paint-board.aridjaya.eu.org
set BBS_URL=https://bbs-paint-board.aridjaya.eu.org
npm run build
```

离线构建（使用已缓存的 `src/data/forum`）：

```bash
set SKIP_FORUM_SYNC=1
npm run build
```

## Cloudflare（Workers + Assets）

Worker 名即官网身份：`site-game` / `site-paint-board`（控制台里会看到 `ASSETS`，属于 Workers 静态资源，不是 Pages）。

```bash
npm run build
npm run deploy:game    # wrangler.jsonc → site-game
npm run deploy:paint   # wrangler.site-paint-board.jsonc → site-paint-board
```

每日 / 手动重建：

- CForum Actions：**Rebuild Official Sites**（已配置 CF secrets）
- 或本仓库 Actions：**Build and Deploy Sites**（需 `CF_API_TOKEN` + `CF_ACCOUNT_ID`）

官网导航与 `/logs/c/:id/` 栏目页均在构建期从社区「官网展示」分类同步。未勾选「社区展示」的栏目在详情页不展示社区精选评论与讨论入口（Giscus 仍保留）。

## 内容来源

- 社区管理后台为栏目打开「官网展示」后，下次官网构建会同步到 `/logs/`
- 页面运行时不直连 bbs；仅构建阶段请求 `{BBS_URL}/api/export/...`
