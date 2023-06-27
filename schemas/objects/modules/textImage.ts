import { ImageIcon } from '@sanity/icons'
import { defineField } from 'sanity'

export default defineField({
	name: 'textImage',
	title: 'Text With Image',
	type: 'object',
	icon: ImageIcon,
	fieldsets: [
		{
			name: 'content',
			title: 'Content',
		},
		{
			name: 'media',
			title: 'Media',
		},
	],
	fields: [
		// Layout
		defineField({
			name: 'layout',
			title: 'Media Position',
			type: 'string',
			initialValue: 'left',
			fieldset: 'media',
			options: {
				direction: 'horizontal',
				layout: 'radio',
				list: [
					{
						title: 'Left',
						value: 'left',
					},
					{
						title: 'Right',
						value: 'right',
					},
				],
			},
			validation: (Rule) => Rule.required(),
		}),
		// Title
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required(),
			fieldset: 'content',
		}),
		// Body
		defineField({
			name: 'body',
			title: 'Body',
			type: 'array',
			of: [
				{
					type: 'block',
					styles: [
						{title: 'Normal', value: 'normal'},
						{title: 'Title', value: 'title'},
						{title: 'H1', value: 'h1'},
						{title: 'H2', value: 'h2'},
						{title: 'H3', value: 'h3'},
						{title: 'Quote', value: 'blockquote'},
					]
				}
			]
		}),
		// Link
		defineField({
			name: 'link',
			title: 'Link',
			type: 'linkExternal',
			fieldset: 'content',
		}),
		// Content
		defineField({
			name: 'desktopImage',
			title: 'Desktop Image',
			type: 'image',
			fieldset: 'media',
			fields: [
				{
					name: 'caption',
					type: 'string',
					title: 'Caption',
				},
				{
					name: 'alt',
					type: 'string',
					title: 'Alt Text',
				}
			]
		}),
		defineField({
			name: 'desktopImageUrl',
			title: 'Desktop Image Url',
			type: 'string',
			validation: (Rule) => Rule.required(),
			fieldset: 'media',
		  }),
		defineField({
			name: 'mobileImage',
			title: 'Mobile Image',
			type: 'image',
			fieldset: 'media',
			fields: [
				{
					name: 'caption',
					type: 'string',
					title: 'Caption',
				},
				{
					name: 'alt',
					type: 'string',
					title: 'Alt Text',
				}
			]
		})
	],
	preview: {
		select: {
			title: 'title',
			image: 'desktopImage',
		},
		prepare(selection) {
			const { title } = selection
			return {
				subtitle: 'Text With Image',
				title,
				media: ImageIcon,
			}
		},
	},
})