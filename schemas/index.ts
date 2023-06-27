// document types
import collection from './documents/collection'
import product from './documents/product'
import productVariant from './documents/productVariant'

// objects
import accordion from './objects/accordion'
import accordionGroup from './objects/accordionGroup'
import callout from './objects/callout'
import inventory from './objects/inventory'
import option from './objects/option'
import priceRange from './objects/priceRange'
import proxyString from './objects/proxyString'
import shopifyCollection from './objects/shopifyCollection'
import shopifyCollectionRule from './objects/shopifyCollectionRule'
import shopifyProduct from './objects/shopifyProduct'
import shopifyProductVariant from './objects/shopifyProductVariant'
import faq from './objects/faq'
import linkExternal from './objects/linkExternal'
import collectionBanner from './objects/modules/collectionBanner'
// block content
import blockContent from './blocks/blockContent'
import callToAction from './objects/modules/callToAction'
import textImage from './objects/modules/textImage'
import threeColumn from './objects/modules/threeColumn'

export const schemaTypes = [
  // document types
  collection,
  product,
  productVariant,

  // modules
  callToAction,
  collectionBanner,
  textImage,
  threeColumn,

  // objects
  accordion,
  accordionGroup,
  callout,
  inventory,
  option,
  priceRange,
  proxyString,
  shopifyCollection,
  shopifyCollectionRule,
  shopifyProduct,
  shopifyProductVariant,
  faq,
  linkExternal,

  // block content
  blockContent,
]
