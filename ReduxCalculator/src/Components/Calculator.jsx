import { useSelector } from "react-redux";
import Numpad from "./Sub-Component/Numpad";

const Calculator = () => {
    const expression = useSelector((state) => state.calculator.expression);
    const result = useSelector((state) => state.calculator.result);

    const expressionData = [
        "+", "-", "*", "/",  "1", "2", "3","sqrt", "4", "5", "6","%", "7", "8", "9", "+/-","0", "=", "Clear", "Del", 
    ];

    return (
        <div className="text-3xl text-black w-full flex items-center justify-center p-4 mt-10">
            {/* Calculator Body */}
            <div className="w-[25%] h-[600px] max-h-[600px] rounded-lg shadow-xl p-4 flex flex-col items-center gap-4">
                <p className="text-xl text-slate-900 font-semibold">Redux Calculator</p>
                <div className="w-[90%] p-2 bg-slate-800 rounded-lg h-24 max-h-24">
                    <p className="text-lg text-slate-400">{expression}</p>
                    {
                        result === 0 ? "":
                        <p className="text-2xl text-white">{result}</p>
                    }
                </div>
                <div className="flex w-[90%] gap-4 flex-wrap items-center justify-center">
                    {expressionData.map((item, index) => (
                        <Numpad key={index} value={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calculator;
