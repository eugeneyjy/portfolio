import {
    CHANGE_PROJECT
} from './actions';

function projectsReducer(state={project_num: 0}, action) {
    switch(action.type) {
        case CHANGE_PROJECT:
            return {
                project_num: action.project_num
            };
        default:
            return state;
    }
}

export default projectsReducer;