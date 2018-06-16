import {
    getAllDriveFiles,
    deleteDuplicates,
    getSingleFile,
    saveTagData,
    updateTagData,
    deleteTagData,
  } from '../actions/tagIt-actions';
  
  const initialState = {
    appName: 'Tag-It',
    allDriveFiles: allDriveFiles,
    file:singleFile,
    comments: comments,
    tags: [],
    selectedTags: [],
   };
  
  export default function counterReducer(state, action) {
    if (state === undefined) {
      return initialState;
    }
  
    let newState = {};
    switch(action.type) {
      case getAllDriveFiles:
        return Object.assign(newState, state, {data: allDriveFiles});
      case deleteDuplicates:
        return Object.assign(newState, state, {data: deleteDuplicates});
      case saveTagData:
        return Object.assign(newState, state, {data: selectedTags});
      case updateTagData:
        return Object.assign(newState, state, {data: selectedTags});
        case deleteTagData:
        return Object.assign(newState, state, {data: singleFile});
      default: return state;
    }
  }