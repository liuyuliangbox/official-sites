/** Build-time product line: game official site or paint-board official site. */
export const SITE_LINE = (
	import.meta.env.PUBLIC_SITE_LINE || 'game'
).toLowerCase() as 'game' | 'paint';

const isPaint = SITE_LINE === 'paint';

export const STUDIO_NAME = 'liuyuliangbox';

export const PROJECT_CODENAME = isPaint ? 'Paint Board' : 'Project Turn';

export const SITE_TITLE = isPaint ? 'Paint Board' : 'liuyuliangbox';

export const SITE_DESCRIPTION = isPaint
	? '创作画板与社区。同步云端作品、分享灵感，账号由社区统一管理。'
	: '单人优先的回合制 RPG。开发日志、社区反馈与内测资讯。正式名称待定。';

export const SITE_TAGLINE = isPaint
	? '创作画板 · 云端同步 · 社区共创'
	: '单人优先的回合制 RPG，开发日志与社区反馈进行中';

export const WORKING_TITLE_NOTE = isPaint
	? '画板产品线官网'
	: '正式名称待定 / Working Title';

/** Primary product app (paint board opens the editor; game line has no app yet). */
export const APP_URL = isPaint
	? 'https://paint-board.aridjaya.eu.org'
	: '';

/** GitHub Discussions 备用讨论区 */
export const DISCUSSIONS_URL = isPaint
	? 'https://github.com/liuyuliangbox/paint-board/discussions'
	: 'https://github.com/liuyuliangbox/Gaming-Community/discussions';

/** 社区短链 / CForum Pages */
export const BBS_URL =
	import.meta.env.PUBLIC_BBS_URL ||
	(isPaint
		? 'https://bbs-paint-board.aridjaya.eu.org'
		: 'https://bbs-game.aridjaya.eu.org');

/** 社区 API（构建期 sync 使用，页面运行时不直连） */
export const FORUM_API_BASE =
	import.meta.env.PUBLIC_FORUM_API_BASE || BBS_URL;

/**
 * Giscus 配置：在 https://giscus.app/zh-CN 按仓库生成后填入。
 * 需先在仓库 Settings → Features 启用 Discussions，并创建「评论」分类。
 */
export const GISCUS = {
	repo: isPaint ? 'liuyuliangbox/paint-board' : 'liuyuliangbox/Gaming-Community',
	repoId: isPaint ? '' : 'R_kgDOVg4cNg',
	category: isPaint ? 'General' : '闲聊/General',
	categoryId: isPaint ? '' : 'DIC_kwDOVg4cNs4DKRAY',
	mapping: 'pathname',
	strict: '0',
	reactionsEnabled: '1',
	emitMetadata: '0',
	inputPosition: 'top',
	theme: 'light',
	lang: 'zh-CN',
} as const;
