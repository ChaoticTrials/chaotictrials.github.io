import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import * as process from "node:process";

const isDev = process.env.NODE_ENV === 'development';

const config: Config = {
    title: 'Chaotic Trials',
    tagline: 'Minecraft Mods created for Forge and NeoForge',
    favicon: 'img/favicon.ico',

    url: 'https://wiki.chaotictrials.de/',
    baseUrl: '/',

    organizationName: 'ChaoticTrials',
    projectName: 'chaotictrials.github.io',

    onBrokenLinks: 'throw',

    markdown: {
        hooks: {
            onBrokenMarkdownLinks: 'warn',
        }
    },

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    plugins: [
        require.resolve('docusaurus-lunr-search'),
        async function simpleWikiLink(context, options) {
            return {
                name: "simple-wiki-link-plugin",
                async contentLoaded({actions}) {
                    const {addRoute} = actions;
                    addRoute({
                        path: "/swl/:slug",
                        component: "@site/src/components/SimpleWikiLink",
                        exact: true,
                    });
                },
            };
        },
    ],

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    editUrl: 'https://github.com/ChaoticTrials/chaotictrials.github.io/tree/main/',
                    includeCurrentVersion: isDev,
                    versions: {
                        '1.16.x': {
                            banner: 'none'
                        },
                        '1.17.x': {
                            banner: 'none'
                        },
                        '1.18.x': {
                            banner: 'none'
                        },
                        '1.19.x': {
                            banner: 'none'
                        },
                        '1.20.x': {
                            banner: 'none'
                        },
                        '1.21.x': {
                            banner: 'none'
                        },
                        '26.1': {
                            banner: 'none'
                        },
                    }
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                        language: 'en',
                        title: 'Chaotic Trials Blog',
                        description: 'The official Chaotic Trials Blog'
                    },
                    editUrl: 'https://github.com/ChaoticTrials/chaotictrials.github.io/tree/main/',
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        image: 'img/social-card.png',
        docs: {
            sidebar: {
                hideable: true,
                autoCollapseCategories: true
            }
        },
        colorMode: {
            respectPrefersColorScheme: true
        },
        announcementBar: {
            backgroundColor: 'rgba(0,196,96,0.73)',
            content: `🚀 <b><a target="_blank" href="/porting/version/26.1">26.1</a> Porting Information</b> 🌟`,
        },
        navbar: {
            title: 'Chaotic Trials',
            logo: {
                alt: 'Chaotic Trials Logo',
                src: 'img/logoDark.svg',
                srcDark: 'img/logoLight.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'wiki',
                    position: 'left',
                    label: 'Wiki',
                },
                {
                    to: '/porting',
                    position: 'left',
                    label: 'Porting Information',
                },
                {to: '/blog', label: 'Blog', position: 'left'},
                {
                    type: 'docsVersionDropdown',
                    position: 'right',
                    // dropdownItemsAfter: [{to: '/wiki', label: 'All versions'}],
                    dropdownActiveClassDisabled: true,
                },
                {
                    href: 'https://github.com/ChaoticTrials/chaotictrials.github.io',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Wiki',
                            to: '/docs/wiki',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://discord.chaotictrials.de',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Modrinth',
                            href: 'https://modrinth.com/user/MelanX',
                        },
                        {
                            label: 'CurseForge',
                            href: 'https://www.curseforge.com/members/melanx',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/ChaoticTrials',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Chaotic Trials, Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.nightOwl,
            additionalLanguages: ['json', 'json5', 'groovy', 'properties', 'bash', 'diff']
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
