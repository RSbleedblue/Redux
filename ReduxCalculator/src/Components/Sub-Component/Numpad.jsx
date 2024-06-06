import React from 'react';
import { useDispatch } from 'react-redux';
import { expressionAdd, handleClear, handleExpression, handlePlusMinus, handleDelete, handleSquareRoot } from '../../Redux/Slices/CalculatorSlice';

const Numpad = React.memo(({ value }) => {
    const isOperator = ["*", "+", "-", "/", "Del", "Clear", "=", "%", "+/-", "sqrt"].includes(value);
    const dispatch = useDispatch();
    
    const handleClick = () => {
        if (value === "=") {
            dispatch(handleExpression());
            return;
        }
        if (value === "Clear") {
            dispatch(handleClear());
            return;
        }
        if (value === "+/-") {
            dispatch(handlePlusMinus());
            return;
        }
        if (value === "Del") {
            dispatch(handleDelete());
            return;
        }
        if (value === "sqrt") {
            dispatch(handleSquareRoot());
            return;
        }
        dispatch(expressionAdd(value));
    };

    return (
        <div
            className={`rounded-lg shadow-lg p-6 w-[20%] flex items-center justify-center text-sm hover:cursor-pointer hover:scale-105 transition-all ${isOperator ? "bg-rose-600 text-gray-100" : ""}`}
            onClick={handleClick}
        >
            {value}
        </div>
    );
});

export default Numpad;
