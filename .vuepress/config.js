module.exports = {
    title: 'Starter nest 😄🎉😄',
    description: `Starter project written in typescript`,
    base: process.env.DEPLOY_ENV === 'gh-pages' ? '/awesome-nest-boilerplate/' : '/',
    themeConfig: {
        sidebar:
         [
            ['/', 'Introduction'],
            ['/docs/docker', 'Docker'],
            ['/docs/circleci', 'circleci'],
            ['/docs/sentry', 'Sentry'],
            // '/docs/state',
            // '/docs/linting',
            // '/docs/editors',
            // '/docs/production',
            // '/docs/troubleshooting',
        ],
    },
};