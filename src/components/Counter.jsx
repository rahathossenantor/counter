import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { increment, decrement } from "../redux/features/counter/counterSlice";

const Counter = () => {
    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div className="border border-[#38BDF8] mx-auto mt-40 p-5 w-[450px] flex justify-center">
            <div>
                <h2 className="text-[70px] text-center">{count}</h2>
                <div className="flex gap-3">
                    <Button name="Decrement" action={() => dispatch(decrement())} />
                    <Button name="Increment" action={() => dispatch(increment())} />
                </div>
            </div>
        </div>
    );
};

export default Counter;
