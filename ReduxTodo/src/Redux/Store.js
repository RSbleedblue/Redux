import { configureStore } from '@reduxjs/toolkit';
import TodoReducer from './Slices/TodoSlice';

const Store = configureStore({
    reducer: {
        Todo: TodoReducer,    
    }
});

export default Store;
