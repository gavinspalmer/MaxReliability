import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

//EQUIPMENT
export const fetchEquipment = () => (dispatch) => {

    dispatch(equipmentLoading(true));

    return fetch(baseUrl + 'equipment')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => { 
            var errorMessage = new Error(error.message);
            throw errorMessage;
        })
        .then(response => response.json())
        .then(equipment => dispatch(addEquipment(equipment)))
        .catch(error => dispatch(equipmentFailed(error.message)));
};

export const equipmentLoading = () => ({
    type: ActionTypes.EQUIPMENT_LOADING
});

export const equipmentFailed = (errorMessage) => ({
    type: ActionTypes.EQUIPMENT_FAILED,
    payload: errorMessage
});

export const addEquipment = (equipment) => ({
    type: ActionTypes.ADD_EQUIPMENT,
    payload: equipment
});

export const selectEquipment = (equipment) => ({
    type: ActionTypes.SELECT_EQUIPMENT,
    payload: equipment
});

//PARTS
export const fetchParts = () => (dispatch) => {

    dispatch(partsLoading(true));

    return fetch(baseUrl + 'parts')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => { 
            var errorMessage = new Error(error.message);
            throw errorMessage;
        })
        .then(response => response.json())
        .then(parts => dispatch(addParts(parts)))
        .catch(error => dispatch(partsFailed(error.message)));
};

export const partsLoading = () => ({
    type: ActionTypes.PARTS_LOADING
});

export const partsFailed = (errorMessage) => ({
    type: ActionTypes.PARTS_FAILED,
    payload: errorMessage
});

export const addParts = (parts) => ({
    type: ActionTypes.ADD_PARTS,
    payload: parts
});