import React, { useState, useEffect } from "react";

const SimpleCounter = () => {

    const [counter, setCounter] = useState(
        parseInt(localStorage.getItem('counter')) || 1000000
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevCounter => {
                const newCounter = prevCounter + 1;
                localStorage.setItem('counter', newCounter);
                return newCounter;
            });
        }, 10);

        return () => clearInterval(interval);
    }, []);

    const six = Math.floor(counter / 1000000) % 10;
    const five = Math.floor(counter / 100000) % 10;
    const four = Math.floor(counter / 10000) % 10;
    const three = Math.floor(counter / 1000) % 10;
    const two = Math.floor(counter / 100) % 10;
    const one = Math.floor(counter / 10) % 10;

    return (
        <div className="container">
            <div className="counterComponent">
                <div className="placeHolder"><i class="fa-solid fa-clock"></i></div>
                <div className="placeHolder"><p>{six}</p></div>
                <div className="placeHolder"><p>{five}</p></div>
                <div className="placeHolder"><p>{four}</p></div>
                <div className="placeHolder"><p>{three}</p></div>
                <div className="placeHolder"><p>{two}</p></div>
                <div className="placeHolder"><p>{one}</p></div>
            </div>
        </div>
    )
}

export default SimpleCounter;
