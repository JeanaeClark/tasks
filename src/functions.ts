// import { toASCII } from "punycode";
// import { isUnparsedPrepend } from "typescript";

/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    const tempInCelsius: number = (temperature - 32) * (5 / 9);
    return tempInCelsius;
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    let sum: number;
    if (first > 0 && second > 0 && third > 0) {
        sum = first + second + third;
    } else if (first > 0 && second > 0) {
        sum = first + second;
    } else if (first > 0 && third > 0) {
        sum = first + third;
    } else if (second > 0 && third > 0) {
        sum = second + third;
    } else if (first > 0) {
        sum = first;
    } else if (second > 0) {
        sum = second;
    } else if (third > 0) {
        sum = third;
    } else {
        sum = 0;
    }
    return sum;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    const upper: string = message.toUpperCase() + "!";
    return upper;
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    const contains: boolean = message.endsWith("?");
    return contains;
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    if (word.localeCompare("no") === 0 || word.localeCompare("NO") === 0) {
        return false;
    } else if (
        word.localeCompare("yes") === 0 ||
        word.localeCompare("YES") === 0
    ) {
        return true;
    } else {
        return null;
    }
}
