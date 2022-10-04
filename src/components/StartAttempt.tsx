import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numberOfAttempts, updateAttempts] = useState<number>(4);
    const [inProgress, updateProgress] = useState<boolean>(false);

    function startQuiz(): void {
        if (numberOfAttempts != 0) {
            updateProgress(true);
            updateAttempts(numberOfAttempts - 1);
        }
    }

    function stopQuiz(): void {
        updateProgress(false);
    }

    return (
        <div>
            <div>
                <Button
                    onClick={startQuiz}
                    disabled={numberOfAttempts === 0 || inProgress}
                >
                    Start Quiz {numberOfAttempts}
                </Button>
            </div>
            <div>
                <Button onClick={stopQuiz} disabled={!inProgress}>
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => updateAttempts(numberOfAttempts + 1)}
                    disabled={inProgress}
                >
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
