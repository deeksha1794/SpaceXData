import {
    put,
    all,
    fork,
    takeLatest
} from 'redux-saga/effects';
import {
    getSpaceX
} from '../action';

function* fetchSpaceX(
    spaceXdata
) {
    try {
        let json;
        let serviceUrl = encodeURI(`https://api.spaceXdata.com/v3/launches?limit=100`);
        if (spaceXdata.payload.spaceXData) {
            switch(spaceXdata.payload.spaceXData.key){
                case "year":
                    serviceUrl = serviceUrl + encodeURI(`&launch_year=${spaceXdata.payload.spaceXData.filter}`);
                    break;
                case "landing":
                    serviceUrl = serviceUrl + encodeURI(`&land_success=${spaceXdata.payload.spaceXData.filter}`);
                    break;
                case "launch":
                    serviceUrl = serviceUrl + encodeURI(`&launch_success=${spaceXdata.payload.spaceXData.filter}`);
                    break;
                default:
                    break;
            }
        }
        json = yield fetch(serviceUrl)
        .then(response => response.json());

        console.log(json)
        yield put(getSpaceX.success(json));
    } catch (err) {
        yield put(getSpaceX.failure(err));
    }
}

function* actionWatcher() {
    yield takeLatest('GET_SPACEX.REQUEST', fetchSpaceX);
}
export default function* rootSaga() {
    yield all([
        fork(actionWatcher),
    ]);
}