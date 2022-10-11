import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [inEditMode, toggleEditMode] = useState<boolean>(false);
    const [userName, changeUserName] = useState<string>("Your Name");
    const [isStudent, changeStatus] = useState<boolean>(true);

    function toggleEdit(event: React.ChangeEvent<HTMLInputElement>) {
        toggleEditMode(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        changeUserName(event.target.value);
    }

    function changeStudentStatus(event: React.ChangeEvent<HTMLInputElement>) {
        changeStatus(event.target.checked);
    }

    // This is the View
    return (
        <div>
            <Form.Check
                type="switch"
                id="is-happy-check"
                checked={inEditMode}
                onChange={toggleEdit}
                label={
                    (!inEditMode
                        ? isStudent
                            ? userName + " is a student"
                            : userName + " is not a student"
                        : "") + "\n"
                }
            />
            {!inEditMode ? (
                " "
            ) : (
                <div>
                    <div>
                        <Form.Group controlId="formMovieName">
                            <Form.Label>Enter Name: </Form.Label>
                            <Form.Control
                                value={userName}
                                onChange={updateName}
                            />
                        </Form.Group>
                    </div>
                    <div>
                        <Form.Check
                            type="checkbox"
                            id="studentcheck"
                            label="Are you a student?"
                            checked={isStudent}
                            onChange={changeStudentStatus}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
