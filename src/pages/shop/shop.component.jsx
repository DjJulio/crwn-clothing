import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fectchCollectionsStartAsyn } from '../../redux/shop/shop.actions';

import CollectionsOverViewContainer from '../../components/collections-overview/collections-overview.component';
import CollectionPageContainer from '../../pages/collection/collection.container';

class ShopPage extends React.Component {
    componentDidMount() {
        const { fectchCollectionsStartAsyn } = this.props;
        fectchCollectionsStartAsyn();
    }

    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route
                    exact
                    path={`${match.path}`}
                    component={CollectionsOverViewContainer}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer}
                    />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fectchCollectionsStartAsyn: () =>dispatch(fectchCollectionsStartAsyn())
});

export default connect(null, mapDispatchToProps)(ShopPage);