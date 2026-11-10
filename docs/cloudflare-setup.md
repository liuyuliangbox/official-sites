# Cloudflare 部署对照（官网 + 社区）

## 官网（本仓库 Gaming-Community）

| 产品线 | Worker | 自定义域 |
|---|---|---|
| 游戏 | `site-game` | https://site-game.aridjaya.eu.org |
| 画板 | `site-paint-board` | https://site-paint-board.aridjaya.eu.org |

配置：`wrangler.jsonc` / `wrangler.site-paint-board.jsonc`（`routes[].custom_domain`）。

```bash
npm run build && npm run deploy:game
npm run build && npm run deploy:paint
```

旧 Worker `gaming-community`（曾绑 `game.aridjaya.eu.org`）切流后可删。

## 社区（CForum）

| 产品线 | Pages 项目 | 自定义域 |
|---|---|---|
| 游戏 | `bbs-game` | https://bbs-game.aridjaya.eu.org |
| 画板 | `bbs-paint-board` | https://bbs-paint-board.aridjaya.eu.org |

## 画板应用（paint-board）

| Pages 项目 | 自定义域 |
|---|---|
| `paint-board-563021874` | https://paint-board.aridjaya.eu.org |

（`paint-board` 在 Pages 全局命名冲突时用账号后缀。）

## 验收

- https://site-game.aridjaya.eu.org/
- https://site-paint-board.aridjaya.eu.org/
- https://bbs-game.aridjaya.eu.org/
- https://bbs-paint-board.aridjaya.eu.org/
- https://paint-board.aridjaya.eu.org/
