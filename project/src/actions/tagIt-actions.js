export const getAllDriveFiles = 'getAllDriveFiles';
export const deleteDuplicates = 'deleteDuplicates';
export const getSingleFile = 'getSingleFile';
export const saveTagData = 'saveTagData';
export const updateTagData = 'updateTagData'
export const deleteTagData = 'deleteTagData'

export function getAllDriveFiles(AllFiles) {
	return {type: getAllDriveFiles}
}

export function deleteDuplicates(AllFiles) {
	return {type: deleteDuplicates}
}

export function getSingleFile(id) {
	return {type: getSingleFile, id}
}

export function saveTagData(id) {
    return {type: saveTagData, id}
    
}export function updateTagData(id) {
	return {type: updateTagData, id}
}

export function deleteTagData(id) {
	return {type: deleteTagData, id}
}