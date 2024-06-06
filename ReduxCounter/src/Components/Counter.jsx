import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeStep, decrement, increment } from '../redux/Slices/IncDecSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => {
    console.log("hi");
    return state.counter.value;
  });
  const step = useSelector((state) => state.counter.step);

  return (
    <>
      <div>
        <h1>Counter: {value}</h1>
        <h2>Step: {step}</h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(changeStep())}>Change Step</button>
      </div>
    </>
  );
};

export default Counter;
