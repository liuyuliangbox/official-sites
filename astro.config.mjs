// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const siteLine = (process.env.SITE_LINE || 'game').toLowerCase();
const isPaint = siteLine === 'paint';

const site =
	process.env.SITE_URL ||
	(isPaint
		? 'https://site-paint-board.aridjaya.eu.org'
		: 'https://site-game.aridjaya.eu.org');

const bbsUrl =
	process.env.BBS_URL ||
	(isPaint
		? 'https://bbs-paint-board.aridjaya.eu.org'
		: 'https://bbs-game.aridjaya.eu.org');

const forumApi =
	process.env.FORUM_API_BASE || bbsUrl;

// https://astro.build/config
export default defineConfig({
	site,
	integrations: [mdx(), sitemap()],
	vite: {
		define: {
			'import.meta.env.PUBLIC_SITE_LINE': JSON.stringify(siteLine),
			'import.meta.env.PUBLIC_BBS_URL': JSON.stringify(bbsUrl),
			'import.meta.env.PUBLIC_FORUM_API_BASE': JSON.stringify(forumApi),
		},
	},
});
