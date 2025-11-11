// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'SkiesDev Docs',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/pokeskies' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/cgBww275Fg' },
				{ icon: 'heart', label: 'Ko-Fi', href: 'https://ko-fi.com/stampede2011' }
			],
			plugins: [
				starlightSidebarTopics([
					{
						label: 'Guides',
						link: '/guides/',
						icon: 'open-book',
						items: ['guides/example'],
					},
					{
						label: 'Reference',
						link: '/reference/',
						icon: 'information',
						items: ['reference/example'],
					},
				]),
			],
			components: {
				// Override the default `Sidebar` component with a custom one.
				Sidebar: './src/components/Sidebar.astro',
			},
		}),
	],
});
