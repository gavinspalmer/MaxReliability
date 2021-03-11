import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createForms } from 'react-redux-form';
import { Equipment } from './equipment';
import { Parts } from './parts';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            equipment: Equipment,
            parts: Parts
        }),
        applyMiddleware(thunk, logger)
    );
    
    return store;
};