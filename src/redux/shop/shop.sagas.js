import { takeLatest, call, put, all } from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import {
    fecthCollectionsSuccess,
    fecthCollectionsFailure
} from './shop.actions'

import ShopActionTypes from './shop.types';

export function* fetchCollectionAsync() {
    yield console.log('its firing');
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionMap = yield call(
            convertCollectionsSnapshotToMap,
            snapshot
        );
        yield put(fecthCollectionsSuccess(collectionMap));
    }catch (error) {
        yield put(fecthCollectionsFailure(error.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionAsync
    );
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)])
}