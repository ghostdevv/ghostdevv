import { defineConfig, tierPresets } from 'sponsorkit';

export default defineConfig({
	providers: ['patreon', 'opencollective'],
	opencollective: { slug: 'willow-ghost' },
	github: { type: 'user', login: 'ghostdevv' },

	width: 800,
	formats: ['png', 'svg'],
	outputDir: '.',

	onSponsorsFetched(sponsors, provider) {
		if (provider === 'opencollective') {
			console.log(sponsors);
		}

		return sponsors;
	},

	tiers: [
		{
			title: 'Past Sponsors',
			monthlyDollars: -1,
			preset: tierPresets.xs,
		},
		{
			title: 'Backer',
			preset: tierPresets.small,
		},
		{
			title: 'Sponsors',
			monthlyDollars: 5,
			preset: tierPresets.base,
		},
	],
});
