import {configureStore} from '@reduxjs/toolkit';
import CalculatorReducer from './Slices/CalculatorSlice';
const Store = configureStore({
    reducer: {
        calculator : CalculatorReducer,
    }
})
export default Store;