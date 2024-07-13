import { useState } from "react";

const Counter = () => {
    let [number,setNumber] = useState(0);

    let increment = () => {
        setNumber(number+1);
    }

    let decrement = () => {
        setNumber(number-1);
    }
    return (
        <div className="box">
            <div className="all-items">
            <h1>{number}</h1>
            <section className="button">
                <main>
                <div className="btn">
                    <button onClick={increment}>Increment</button>
                </div>
                <div className="btn">
                    <button onClick={decrement}>Decrement</button>
                </div>
                <div className="btn">
                    <button onClick={()=>setNumber(0)}>Reset</button>
                </div>
                </main>
            </section>
            </div>
        </div>
    );
};

export default Counter;