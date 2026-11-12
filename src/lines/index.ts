import { gameLine } from './game'
import { paintLine } from './paint'
import type { SiteLineConfig, SiteLineId } from './types'

export type { SiteLineConfig, SiteLineId, TextureMode, MotionMode } from './types'

const LINES: Record<SiteLineId, SiteLineConfig> = {
	game: gameLine,
	paint: paintLine,
}

export const resolveSiteLineId = (raw?: string | null): SiteLineId => {
	const id = String(raw || 'game').toLowerCase()
	return id === 'paint' ? 'paint' : 'game'
}

/** Current build line from Vite-injected PUBLIC_SITE_LINE. */
export const getLineConfig = (): SiteLineConfig => {
	const id = resolveSiteLineId(import.meta.env.PUBLIC_SITE_LINE)
	return LINES[id]
}
