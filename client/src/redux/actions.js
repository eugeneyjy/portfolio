export const CHANGE_PROJECT = 'CHANGE_PROJECT';

export function changeProject(project_num) {
    return {
        type: CHANGE_PROJECT,
        project_num: project_num
    };
};