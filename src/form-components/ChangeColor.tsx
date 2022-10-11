import React, { useState } from "react";
import { Form } from "react-bootstrap";

//const Colors = ["red","orange","yellow","green","blue","indigo","violet"<]
export function ChangeColor(): JSX.Element {
    const [chosenColor, changeColor] = useState<string>("");

    // This is the Control
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        changeColor(event.target.value);
    }

    // This is the View
    return (
        <div>
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="emotion-check-red"
                label="Red"
                value="red"
                style={{
                    backgroundColor: "red"
                }}
                checked={chosenColor === "red"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="emotion-check-orange"
                label="Orange"
                value="orange"
                style={{
                    backgroundColor: "orange"
                }}
                checked={chosenColor === "orange"}
            />
            <Form.Check
                inline
                type="radio"
                name="yellow"
                onChange={updateColor}
                id="emotion-check-yellow"
                label="Yellow"
                value="yellow"
                style={{
                    backgroundColor: "yellow"
                }}
                checked={chosenColor === "yellow"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="emotion-check-green"
                label="Green"
                value="green"
                style={{
                    backgroundColor: "green"
                }}
                checked={chosenColor === "green"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="emotion-check-blue"
                label="Blue"
                value="blue"
                style={{
                    backgroundColor: "blue"
                }}
                checked={chosenColor === "blue"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="emotion-check-indigo"
                label="Indigo"
                value="indigo"
                style={{
                    backgroundColor: "indigo"
                }}
                checked={chosenColor === "indigo"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="emotion-check-violet"
                label="Violet"
                value="violet"
                style={{
                    backgroundColor: "violet"
                }}
                checked={chosenColor === "violet"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="emotion-check-pink"
                label="Pink"
                value="pink"
                style={{
                    backgroundColor: "pink"
                }}
                checked={chosenColor === "pink"}
            />
            <div
                style={{
                    backgroundColor: chosenColor
                }}
                data-testid="colored-box"
            >
                You have chosen {chosenColor}.
            </div>
        </div>
    );
}
