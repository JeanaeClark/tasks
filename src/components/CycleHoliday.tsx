import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🦃" | "🎄" | "💝" | "👻" | "🌭";

function AdvanceByAlphabet(currentHoliday: Holiday): Holiday {
    if (currentHoliday == "🎄") {
        return "👻";
    } else if (currentHoliday == "👻") {
        return "🌭";
    } else if (currentHoliday == "🌭") {
        return "🦃";
    } else if (currentHoliday == "🦃") {
        return "💝";
    } else {
        return "🎄";
    }
}

function AdvanceByDate(currentHoliday: Holiday): Holiday {
    if (currentHoliday == "💝") {
        return "🌭";
    } else if (currentHoliday == "🌭") {
        return "👻";
    } else if (currentHoliday == "👻") {
        return "🦃";
    } else if (currentHoliday == "🦃") {
        return "🎄";
    } else {
        return "💝";
    }
}

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, changeHoliday] = useState<Holiday>("🎄");

    return (
        <div>
            <div>
                <Button onClick={() => changeHoliday(AdvanceByAlphabet)}>
                    Advance By Alphabet
                </Button>
            </div>
            <div>
                <Button onClick={() => changeHoliday(AdvanceByDate)}>
                    Advance By Year
                </Button>
            </div>
            <div>
                <span> Holiday: {currentHoliday} </span>
            </div>
        </div>
    );
}
