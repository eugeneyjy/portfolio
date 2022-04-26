export function getProjectNum(state) {
    console.log("getting")
    if(state.project_num !== null && state.project_num !== undefined) {
        console.log(state.project_num)
        return state.project_num;
    } else {
        console.log("0")
        return 0;
    }
}