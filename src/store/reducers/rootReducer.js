import employesReducer from './employesReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth = employesReducer,
    project = projectReducer
});

export default rootReducer