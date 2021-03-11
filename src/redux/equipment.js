import * as ActionTypes from './ActionTypes';

export const Equipment = (state = {
        isLoading: true,
        errorMessage: null,
        equipment: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_EQUIPMENT:
            return {...state, isLoading: false, errorMessage: null, equipment: action.payload};

        case ActionTypes.EQUIPMENT_LOADING:
            return {...state, isLoading: true, errorMessage: null, equipment: []};

        case ActionTypes.EQUIPMENT_FAILED:
            return {...state, isLoading: false, errorMessage: action.payload, equipment: []};
        
            default:
            return state;
    }
}
