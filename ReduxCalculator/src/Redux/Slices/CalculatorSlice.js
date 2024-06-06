import { createSlice } from "@reduxjs/toolkit";

const CalculatorSlice = createSlice({
    name: "calculator",
    initialState: {
        expression: "-",
        result: 0,
    },
    reducers: {
        addition: (state, action) => {
            state.result += action.payload;
        },
        expressionAdd: (state, action) => {
            if (state.expression === "-") {
                state.expression = action.payload;
                return;
            }
            state.expression += action.payload;
        },
        handleExpression: (state) => {
            try {
                state.result = eval(state.expression);
            } catch (error) {
                state.result = "Error";
            }
        },
        handleClear: (state) => {
            state.expression = "-";
            state.result = 0;
        },
        handlePlusMinus: (state) => {
            if (state.expression.startsWith("-")) {
                state.expression = state.expression.slice(1);
            } else {
                state.expression = "-" + state.expression;
            }
        },
        handleDelete: (state) => {
            if (state.expression.length > 1) {
                state.expression = state.expression.slice(0, -1);
            } else {
                state.expression = "-";
            }
        },
        handleSquareRoot: (state) => {
            try {
                state.result = Math.sqrt(eval(state.expression));
                state.expression = state.result.toString();
            } catch (error) {
                state.result = "Error";
            }
        }
    }
});

export const { addition, expressionAdd, handleExpression, handleClear, handlePlusMinus, handleDelete, handleSquareRoot } = CalculatorSlice.actions;
export default CalculatorSlice.reducer;
