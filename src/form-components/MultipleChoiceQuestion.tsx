import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [option, setChoice] = useState<string>("");

    // This is the Control
    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }

    // This is the View
    return (
        <div>
            <Form.Group controlId="chooseOption">
                <Form.Label>What is the correct answer?</Form.Label>
                <Form.Select value={option} onChange={updateChoice}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {option == expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
