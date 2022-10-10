import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, updateAnswer] = useState<string>("");

    function setAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        updateAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formAnswer">
                <Form.Label> Check Answer: </Form.Label>
                <Form.Control value={answer} onChange={setAnswer} />
            </Form.Group>
            <div>{answer == expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
