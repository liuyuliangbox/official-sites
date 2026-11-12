import type { SiteLineConfig } from './types'

/** Paint Board marketing site — tool/paper feel, not game mist. */
export const paintLine: SiteLineConfig = {
	id: 'paint',
	texture: 'paper-grid',
	motion: 'crisp',
	heroPrimary: 'project_codename',
	heroSecondary: 'site_brand',
	fontDisplay: 'DM+Sans:wght@600;700;800',
	fontBody: 'Noto+Sans+SC:wght@400;500;600;700',
	primaryCtaLabel: '打开画板',
	primaryCtaKind: 'app',
	secondaryCtaLabel: '进入社区',
	appUrl: 'https://paint-board.aridjaya.eu.org',
	discussionsUrl: 'https://github.com/liuyuliangbox/paint-board/discussions',
	defaults: {
		studioName: 'liuyuliangbox',
		projectCodename: 'Paint Board',
		siteTitle: 'Paint Board',
		siteDescription:
			'创作画板与社区。同步云端作品、分享灵感，账号由社区统一管理。',
		siteTagline: '创作画板 · 云端同步 · 社区共创',
		workingTitleNote: '画板产品线官网',
	},
	giscus: {
		repo: 'liuyuliangbox/paint-board',
		repoId: '',
		category: 'General',
		categoryId: '',
		mapping: 'pathname',
		strict: '0',
		reactionsEnabled: '1',
		emitMetadata: '0',
		inputPosition: 'top',
		theme: 'light',
		lang: 'zh-CN',
	},
}
