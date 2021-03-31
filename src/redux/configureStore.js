import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools} from 'redux-devtools-extension';
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
        composeWithDevTools(applyMiddleware(thunk, logger))
    );
    
    return store;
};