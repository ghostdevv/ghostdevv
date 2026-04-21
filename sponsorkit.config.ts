import { defineConfig, tierPresets } from 'sponsorkit';

export default defineConfig({
	providers: ['patreon', 'opencollective', 'github'],
	opencollective: { slug: 'willow-ghost' },
	github: { type: 'user', login: 'ghostdevv' },

	width: 800,
	formats: ['png', 'svg'],
	outputDir: '.',

	tiers: [
		{
			title: 'Past Sponsors',
			monthlyDollars: -1,
			preset: tierPresets.xs,
		},
		{
			title: 'Backers',
			preset: tierPresets.small,
		},
		{
			title: 'Sponsors',
			monthlyDollars: 5,
			preset: tierPresets.base,
		},
		{
			title: 'Special Sponsors',
			preset: tierPresets.medium,
			monthlyDollars: 200,
		},
	],
});
