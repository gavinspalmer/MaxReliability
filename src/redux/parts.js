import * as ActionTypes from './ActionTypes';

export const Parts = (state = {
        isLoading: true,
        errorMessage: null,
        parts: [],
        editParts: [],
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_PARTS:
            return {...state, isLoading: false, errorMessage: null, parts: action.payload, editParts: action.payload};

        case ActionTypes.PARTS_LOADING:
            return {...state, isLoading: true, errorMessage: null, parts: [], editParts: []};

        case ActionTypes.PARTS_FAILED:
            return {...state, isLoading: false, errorMessage: action.payload, parts: [], editParts: []};

        /*case ActionTypes.UPDATE_PART_CONDITION:
            return update(state, {
                parts:{
                    [action.id]: {
                        condition: action.payload
                    }
                }
            });*/
        
        default:
            return state;
    }
}