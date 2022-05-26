import {
    CHANGE_PROJECT,
    STORE_TYPE_WRITER_INFO
} from './actions';

function projectsReducer(state={}, action) {
    switch(action.type) {
        case CHANGE_PROJECT:
            return {
                ...state,
                project_num: action.project_num
            };
        case STORE_TYPE_WRITER_INFO:
            return {
                ...state,
                typewriter_info: action.info
            };
        default:
            return state;
    }
}

export default projectsReducer;