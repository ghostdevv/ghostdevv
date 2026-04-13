import { defineConfig, tierPresets } from 'sponsorkit';

export default defineConfig({
	providers: ['patreon'],
	outputDir: '.',

	width: 800,
	formats: ['png', 'svg'],

	tiers: [
		{
			title: 'Backer',
			preset: tierPresets.small,
		},
		{
			title: 'Supporter',
			monthlyDollars: 5,
			preset: tierPresets.base,
		},
		{
			title: 'Legend',
			monthlyDollars: 10,
			preset: tierPresets.medium,
		},
		{
			title: 'Amazing',
			monthlyDollars: 20,
			preset: tierPresets.large,
		},
		{
			title: 'God',
			monthlyDollars: 35,
			preset: tierPresets.xl,
		},
	],
});
