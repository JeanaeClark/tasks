import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import photo from "./images/IMG_4031.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Jeanae says welcome UD CISC275 with React Hooks and TypeScript!
                Hello World
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
