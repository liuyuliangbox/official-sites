import type { SiteLineConfig } from './types'

/** Project Turn / game marketing site. */
export const gameLine: SiteLineConfig = {
	id: 'game',
	texture: 'mist-grain',
	motion: 'cinematic',
	heroPrimary: 'site_brand',
	heroSecondary: 'project_codename',
	fontDisplay: 'Syne:wght@600;700;800',
	fontBody: 'Noto+Sans+SC:wght@400;500;600;700',
	primaryCtaLabel: '最新社区精选',
	primaryCtaKind: 'featured',
	secondaryCtaLabel: '进入社区',
	appUrl: '',
	/** Studio hub — overseas / GitHub users. Primary community stays on bbs-game. */
	discussionsUrl:
		'https://github.com/liuyuliangbox/community/discussions/categories/project-turn',
	defaults: {
		studioName: 'liuyuliangbox',
		projectCodename: 'Project Turn',
		siteTitle: 'liuyuliangbox',
		siteDescription:
			'单人优先的回合制 RPG。开发日志、社区反馈与内测资讯。正式名称待定。',
		siteTagline: '单人优先的回合制 RPG，开发日志与社区反馈进行中',
		workingTitleNote: '正式名称待定 / Working Title',
	},
	giscus: {
		repo: 'liuyuliangbox/community',
		repoId: 'R_kgDOVrvV3g',
		category: 'Project Turn',
		categoryId: 'DIC_kwDOVrvV3s4DLBKc',
		/** Full URL avoids colliding with paint on the same pathname. */
		mapping: 'url',
		strict: '0',
		reactionsEnabled: '1',
		emitMetadata: '0',
		inputPosition: 'top',
		theme: 'light',
		lang: 'zh-CN',
	},
}
