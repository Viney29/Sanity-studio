import { ImageIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'collectionBanner',
  title: 'Collection Banner',
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
      title: 'Content Position',
      type: 'string',
      initialValue: 'left',
      options: {
        direction: 'horizontal',
        layout: 'radio',
        list: [
          {
            title: 'Left',
            value: 'left',
          },
          {
            title: 'Center',
            value: 'center',
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
      type: 'text',
      rows: 2,
      fieldset: 'content',
    }),
    // Link
    defineField({
      name: 'links',
      title: 'Link',
      type: 'array',
      of: [{type: 'linkExternal'}],
      validation: (Rule) => Rule.max(1),
      fieldset: 'content',
    }),
    // Content
    defineField({
			name:'desktopImage',
			title:'Desktop Image',
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
			name:'mobileImage',
			title:'Mobile Image',
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
    },
    prepare(selection) {
      const {title} = selection
      return {
        subtitle: 'Collection Banner',
        title,
        media: ImageIcon,
      }
    },
  },
})