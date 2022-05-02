import { defineConfig, presets } from 'sponsorkit'

export default defineConfig({
    providers: ['patreon'],
    outputDir: '.',

    width: 800,
    formats: ['png', 'svg'],

    tiers: [
        {
            title: 'Backer',
            preset: presets.small,
        },
        {
            title: 'Supporter',
            monthlyDollars: 5,
            preset: presets.base,
        },
        {
            title: 'Legend',
            monthlyDollars: 10,
            preset: presets.medium,
        },
        {
            title: 'Amazing',
            monthlyDollars: 20,
            preset: presets.large,
        },
        {
            title: 'God',
            monthlyDollars: 35,
            preset: presets.xl,
        }
    ]
})