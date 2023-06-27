import {defineConfig, isDev} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {shopifyDocumentActions} from './plugins/shopifyDocumentActions'
import {schemaTypes} from './schemas'
import {structure} from './desk'
import {SHOPIFY_STORE_ID} from './constants'
import {shopifyAssets} from 'sanity-plugin-shopify-assets'

const devOnlyPlugins = [visionTool()]

export default defineConfig({
  name: 'default',
  title: 'B-Dev',

  projectId: 'q20jqljm',
  dataset: 'production',

  plugins: [
    deskTool({structure}),
    shopifyDocumentActions(),
    shopifyAssets({
      shopifyDomain: SHOPIFY_STORE_ID,
    }),
    ...(isDev ? devOnlyPlugins : []),
  ],

  schema: {
    types: schemaTypes,
  },
})
