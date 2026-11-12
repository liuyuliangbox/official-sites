/**
 * Cross-shell helper: SITE_LINE=<game|paint> then npm run <script>
 * Usage: node scripts/run-with-line.mjs paint dev
 */
import { spawn } from 'node:child_process'

const line = String(process.argv[2] || 'game').toLowerCase()
const script = String(process.argv[3] || 'dev')
const siteLine = line === 'paint' ? 'paint' : 'game'

const env = {
	...process.env,
	SITE_LINE: siteLine,
	PUBLIC_SITE_LINE: siteLine,
}

const child = spawn('npm', ['run', script], {
	env,
	stdio: 'inherit',
	shell: true,
})

child.on('exit', (code) => {
	process.exit(code ?? 1)
})
