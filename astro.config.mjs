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
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/pokeskies/docs' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/cgBww275Fg' },
				{ icon: 'heart', label: 'Ko-Fi', href: 'https://ko-fi.com/stampede2011' }
			],
			plugins: [
				starlightSidebarTopics([
					{
						label: 'SkiesGUIs',
						link: '/skiesguis/getting_started/introduction',
						icon: 'open-book',
						items: [
							{
								label: "Getting Started",
								items: [
									'skiesguis/getting_started/introduction',
									'skiesguis/getting_started/installation',
									'skiesguis/getting_started/commands_permissions',
									'skiesguis/getting_started/economies',
									'skiesguis/getting_started/placeholders',
									'skiesguis/getting_started/faqs'
								]
							},
							"skiesguis/main_config",
							{
								label: "GUIs",
								items: [
									'skiesguis/guis/base',
									'skiesguis/guis/items',
									'skiesguis/guis/actions',
									'skiesguis/guis/requirements',
									'skiesguis/guis/components',
									'skiesguis/guis/examples'
								]
							}
						],
					}
				]),
			],
			components: {
				// Override the default `Sidebar` component with a custom one.
				Sidebar: './src/components/Sidebar.astro',
			},
		}),
	],
});
