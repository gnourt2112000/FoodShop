import {createStore, combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './form';
import { createForms} from 'react-redux-form';

export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers ({
            ...createForms({                        //feedback: modelReducer('feedback',InitialFeedback),
                feedback:InitialFeedback            // forms:formReducer('')
            })
        }),
        applyMiddleware(thunk,logger)
    )
    return store;
}