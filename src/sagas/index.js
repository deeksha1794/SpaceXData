import {
    put,
    all,
    fork,
    takeLatest
} from 'redux-saga/effects';
import {
    getSpaceX
} from '../action';

export function* fetchSpaceX (
    spaceXdata
) {
    try {
        let json;
        let serviceUrl = encodeURI(`https://api.spaceXdata.com/v3/launches?limit=100&`);
        if (spaceXdata.payload.spaceXData && spaceXdata.payload.spaceXData.length) {
            const filterValues = [];
            spaceXdata.payload.spaceXData.forEach((filter) => {
                filterValues.push("&" + filter.id + "=" + filter.value);
            });
            serviceUrl = serviceUrl + encodeURI(filterValues.join("&"));
        }
        json = yield fetch(serviceUrl)
            .then(response => response.json());

        yield put(getSpaceX.success(json));
    } catch (err) {
        yield put(getSpaceX.failure(err));
    }
}

function* actionWatcher () {
    yield takeLatest('GET_SPACEX.REQUEST', fetchSpaceX);
}
export default function* rootSaga () {
    yield all([
        fork(actionWatcher)
    ]);
}
