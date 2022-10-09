import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    // function Doubler(): JSX.Element {
    //     return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
    // }

    // function Halve(): JSX.Element {
    //     return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
    // }

    return (
        <div>
            <span>
                <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
            </span>
            <span>
                <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>
            </span>
            <h3>DoubleHalf</h3>
            The current value is: <span>{dhValue}</span>
        </div>
    );
}
