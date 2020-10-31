import {createSelector} from 'reselect'
import memoize from 'lodash.memoize'

const stock = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
}

const selectShop = state => state.shop 

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollectionsforPreview = createSelector(
  [selectShopCollections],
  collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = memoize((collectionUrlParam) =>
 createSelector(
  [selectShopCollections],
  collections => collections[collectionUrlParam]
))