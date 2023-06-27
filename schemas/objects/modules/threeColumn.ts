import { defineField , defineArrayMember} from "sanity";
import {BlockElementIcon} from '@sanity/icons'


export default defineField({
    name:'threeColumn',
    title: 'Three Column Section',
    type: 'object',
    icon: BlockElementIcon,
	fieldsets: [
		{
			name: 'repeatable',
			title: 'Repeatable Items',
		},
		{
			name: 'title',
			title: 'Title',
		},
	],
    fields:[
        defineField({
            name:'heading',
            title:'Section Heading',
            type:'string',
            fieldset: 'title',
        }),
        defineField({
            name:'items',
            title:'Block Items',
            type: 'array',
            of: [{
                    name: 'item',
                    type: 'object',
                    title: 'Item',
                    fields: [
                      {
                      name:'iconUrl',
                      title:'Icon Url',
                      type:'string',
                      },
                        {
                            name:'content',
                            title:'content',
                            type: 'text',
                            rows:2,
                        }
                    ]
                },
            ],
        })
    ],
    preview: {
        select: {
          title: 'heading',
        },
        prepare(selection) {
          const {title} = selection
          return {
            subtitle: 'content',
            title,
            media: BlockElementIcon,
          }
        },
      },
})

