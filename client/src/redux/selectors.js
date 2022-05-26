export function getProjectNum(state) {
    if(state.project_num !== null && state.project_num !== undefined) {
        return state.project_num;
    } else {
        return 0;
    }
}

export function getTypeWriterInfo(state) {
    if(state.typewriter_info !== null && state.typewriter_info !== undefined) {
        return state.typewriter_info;
    } else {
        return {
            text: '',
            textLength: 0,
            lineCount: 0
        };
    }
}