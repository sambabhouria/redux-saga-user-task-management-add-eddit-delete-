import { createStore, applyMiddleware , compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
// import logger from 'redux-logger'

import rootReducer from './reducers/rootReducer'
import rootSaga from './sagas/rootSaga'

import { checkUser } from './services/UserService'
import { userLoggedIn } from './actions/userActions'

const sagaMiddleware = createSagaMiddleware()

// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__
        ? compose(
              applyMiddleware(sagaMiddleware),
              window.__REDUX_DEVTOOLS_EXTENSION__(),
          )
        : applyMiddleware(sagaMiddleware),
);

const user = checkUser();
if (user) {
    store.dispatch(userLoggedIn(user))
}

sagaMiddleware.run(rootSaga)

export default store
