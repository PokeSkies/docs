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
					},
					{
						label: 'SkiesCrates',
						link: '/skiescrates/getting_started/introduction',
						icon: 'seti:folder',
						items: [
							{
								label: "Getting Started",
								items: [
									'skiescrates/getting_started/introduction',
									'skiescrates/getting_started/installation',
									'skiescrates/getting_started/commands_permissions',
									'skiescrates/getting_started/economies',
									'skiescrates/getting_started/placeholders',
									'skiescrates/getting_started/gui_types',
									'skiescrates/getting_started/faqs'
								]
							},
							{
								label: "Main Config",
								items: [
									'skiescrates/config/config',
									'skiescrates/config/keys_options',
									'skiescrates/config/storage_options',
									'skiescrates/config/migration_options',
									'skiescrates/config/webhook_options',
								]
							},
							{
								label: "Crates",
								items: [
									'skiescrates/crates/crates',
									'skiescrates/crates/cost_options',
									'skiescrates/crates/failure_options',
									'skiescrates/crates/block_options',
									'skiescrates/crates/hologram_options',
									'skiescrates/crates/examples'
								]
							},
							{
								label: "Rewards",
								items: [
									'skiescrates/rewards/rewards',
									'skiescrates/rewards/limit_options',
									{
										label: "Types",
										items: [
											'skiescrates/rewards/types/command_console',
											'skiescrates/rewards/types/command_player',
											'skiescrates/rewards/types/item',
											'skiescrates/rewards/types/pokemon',
										]
									}
								]
							},
							{
								label: "Keys",
								items: [
									'skiescrates/keys/keys',
									'skiescrates/keys/keys_menu',
								]
							},
							{
								label: "Previews",
								items: [
									'skiescrates/previews/previews',
									'skiescrates/previews/preview_settings',
									'skiescrates/previews/preview_buttons'
								]
							},
							{
								label: "Opening Animations",
								items: [
									'skiescrates/openings/opening_animations',
									{
										label: "Inventory",
										items: [
											'skiescrates/openings/inventory/inventory_opening',
											'skiescrates/openings/inventory/animation_settings',
											'skiescrates/openings/inventory/spinning_items',
											'skiescrates/openings/inventory/presets'
										]
									},
									{
										label: "World",
										items: [
											'skiescrates/openings/world/world_opening',
											{
												label: "Types",
												items: [
													'skiescrates/openings/world/types/simple_roll',
												]
											}
										]
									}
								]
							},
							{
								label: "Particles",
								items: [
									'skiescrates/particles/particle_animations',
									'skiescrates/particles/particle_effects',
									{
										label: "Types",
										items: [
											'skiescrates/particles/types/circle',
											'skiescrates/particles/types/spiral',
											'skiescrates/particles/types/pulse',
											'skiescrates/particles/types/beam'
										]
									}
								]
							},
							{
								label: "Items",
								items: [
									'skiescrates/items/item_options',
									'skiescrates/items/components',
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
