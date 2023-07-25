// reducer import
import { combineReducers } from '@reduxjs/toolkit';
import { userAPI } from '../reducer/UserSlice';

// ==============================|| COMBINE REDUCER ||============================== //
const rootReducer = combineReducers({
  [userAPI.reducerPath]: userAPI.reducer,
});

export default rootReducer;
