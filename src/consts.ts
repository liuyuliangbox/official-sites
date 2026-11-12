import { getLineConfig } from './lines'

const line = getLineConfig()

/** Build-time product line: game official site or paint-board official site. */
export const SITE_LINE = line.id

export const STUDIO_NAME = line.defaults.studioName

export const PROJECT_CODENAME = line.defaults.projectCodename

export const SITE_TITLE = line.defaults.siteTitle

export const SITE_DESCRIPTION = line.defaults.siteDescription

export const SITE_TAGLINE = line.defaults.siteTagline

export const WORKING_TITLE_NOTE = line.defaults.workingTitleNote

/** Primary product app (paint board opens the editor; game line has no app yet). */
export const APP_URL = line.appUrl

/** GitHub Discussions 备用讨论区 */
export const DISCUSSIONS_URL = line.discussionsUrl

/** 社区短链 / CForum Pages */
export const BBS_URL =
	import.meta.env.PUBLIC_BBS_URL ||
	(line.id === 'paint'
		? 'https://bbs-paint-board.aridjaya.eu.org'
		: 'https://bbs-game.aridjaya.eu.org')

/** 社区 API（构建期 sync 使用，页面运行时不直连） */
export const FORUM_API_BASE =
	import.meta.env.PUBLIC_FORUM_API_BASE || BBS_URL

/**
 * Giscus 配置：在 https://giscus.app/zh-CN 按仓库生成后填入。
 * 需先在仓库 Settings → Features 启用 Discussions，并创建「评论」分类。
 */
export const GISCUS = line.giscus

export { getLineConfig }
