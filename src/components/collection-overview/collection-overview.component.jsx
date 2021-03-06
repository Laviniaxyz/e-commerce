import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCollectionsforPreview } from '../../redux/shop/shop.selectors'


import './collection-overview.styles.scss'

import CollectionPreview from '../../components/collection-preview/collection-preview';

const CollectionOverview = ({collections}) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
  </div>
)




const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsforPreview 
})

export default connect(mapStateToProps)(CollectionOverview)