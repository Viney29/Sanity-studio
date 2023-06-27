import {ImageIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'faq',
    type: 'object',
    icon: ImageIcon,
    title: 'Frequently asked question',
    fields: [
        defineField({
            name: 'question',
            type: 'string',
            title: 'Question'
        }),
        defineField({
            name: 'answer',
            type: 'text',
            title: 'Answer'
        })
    ]
})
