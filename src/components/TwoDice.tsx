import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftdie, rollLeftDie] = useState<number>(1);
    const [rightdie, rollRightDie] = useState<number>(0);
    return (
        <div>
            <div>
                <Button onClick={() => rollLeftDie(d6)}> Roll Left </Button>
            </div>
            <div>
                <Button onClick={() => rollRightDie(d6)}> Roll Right </Button>
            </div>
            <div>
                <span data-testid="left-die"> {leftdie} </span>
            </div>
            <div>
                <span data-testid="right-die"> {rightdie} </span>
            </div>
            <div>
                <span>
                    {leftdie == rightdie
                        ? leftdie == 1
                            ? "You Lose"
                            : "You Win"
                        : ""}
                </span>
            </div>
        </div>
    );
}
