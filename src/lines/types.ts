export type SiteLineId = 'game' | 'paint';

/** CSS `data-texture` — selects grain / paper overlays. */
export type TextureMode = 'mist-grain' | 'paper-grid';

/** CSS `data-motion` — timing + atmosphere drift. */
export type MotionMode = 'cinematic' | 'crisp';

export type HeroPrimaryField = 'site_brand' | 'project_codename';

export type SiteLineConfig = {
	id: SiteLineId
	texture: TextureMode
	motion: MotionMode
	/** Giant hero text comes from site-meta field. */
	heroPrimary: HeroPrimaryField
	heroSecondary: HeroPrimaryField
	/** Google Fonts family query segment (already URL-encoded pairs ok as plain). */
	fontDisplay: string
	fontBody: string
	primaryCtaLabel: string
	/** `app` → APP_URL; `featured` → #featured */
	primaryCtaKind: 'app' | 'featured'
	secondaryCtaLabel: string
	appUrl: string
	discussionsUrl: string
	/** Fallback copy when site-meta export is empty */
	defaults: {
		studioName: string
		projectCodename: string
		siteTitle: string
		siteDescription: string
		siteTagline: string
		workingTitleNote: string
	}
	giscus: {
		repo: string
		repoId: string
		category: string
		categoryId: string
		mapping: string
		strict: string
		reactionsEnabled: string
		emitMetadata: string
		inputPosition: string
		theme: string
		lang: string
	}
}
