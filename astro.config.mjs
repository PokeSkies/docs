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
									'skiesguis/getting_started/main_config',
									'skiesguis/getting_started/economies',
									'skiesguis/getting_started/placeholders',
									'skiesguis/getting_started/faqs'
								]
							},
							{
								label: "GUI Configuration",
								items: [
									'skiesguis/gui_config/base',
									'skiesguis/gui_config/items',
									'skiesguis/gui_config/actions',
									'skiesguis/gui_config/requirements',
									'skiesguis/gui_config/examples',
									'skiesguis/gui_config/components'
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
