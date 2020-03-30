import ShopActionTypes from './shop.types';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fecthCollectionsSuccess = collectionMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
});

export const fecthCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    errorMessaage: errorMessage
});

export const fectchCollectionsStartAsyn = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        console.log('collectionRef', collectionRef);
        dispatch(fetchCollectionsStart());
        collectionRef
        .get()
        .then(
            snapshot => {
                const collectionMap = convertCollectionsSnapshotToMap(snapshot);
                dispatch(fecthCollectionsSuccess(collectionMap));
        })
        .catch(error => dispatch(fecthCollectionsFailure(error.message)))
    }   
}