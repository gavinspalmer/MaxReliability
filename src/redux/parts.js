import * as ActionTypes from './ActionTypes';

export const Parts = (state = {
        isLoading: true,
        errorMessage: null,
        parts: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_PARTS:
            return {...state, isLoading: false, errorMessage: null, parts: action.payload};

        case ActionTypes.PARTS_LOADING:
            return {...state, isLoading: true, errorMessage: null, parts: []};

        case ActionTypes.PARTS_FAILED:
            return {...state, isLoading: false, errorMessage: action.payload, parts: []};

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