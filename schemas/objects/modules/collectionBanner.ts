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
      type: 'linkExternal',
      fieldset: 'content',
      validation: (Rule) => Rule.required(),
    }),
    // Content
    defineField({
			name:'desktopImage',
			title:'Desktop Image',
			type: 'shopify.asset',
			fieldset: 'media',
      options: {
        shopifyDomain: 'sanity-poc.myshopify.com'
      }
    }),
    defineField({
      name: 'desktopImageUrl',
      title: 'Desktop Image Url',
      type: 'string',
      validation: (Rule) => Rule.required(),
      fieldset: 'media',
    }),
    defineField({
			name:'mobileImage',
			title:'Mobile Image',
      type: 'shopify.asset',
			fieldset: 'media',
      options: {
        shopifyDomain: 'sanity-poc.myshopify.com'
      }
    }),
    defineField({
      name: 'mobileImageUrl',
      title: 'Mobile Image Url',
      type: 'string',
      validation: (Rule) => Rule.required(),
      fieldset: 'media',
    }),
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
        media: 'desktopImage',
      }
    },
  },
})