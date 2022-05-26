export const CHANGE_PROJECT = 'CHANGE_PROJECT';
export const STORE_TYPE_WRITER_INFO = 'STORE_TYPE_WRITER_INFO';

export function changeProject(project_num) {
    return {
        type: CHANGE_PROJECT,
        project_num: project_num
    };
};

export function storeTypeWriterInfo(typewriter_info) {
    return {
        type: STORE_TYPE_WRITER_INFO,
        info: typewriter_info
    }
}