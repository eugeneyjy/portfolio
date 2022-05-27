import { createStore } from 'redux'

import projectsReducer from './reducer';

const store = createStore(projectsReducer);

store.subscribe(() => {
    // console.log(store.getState());
});

export default store;