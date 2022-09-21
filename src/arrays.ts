import { ElementFlags } from "typescript";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const isBookEnd = (element: number): boolean =>
        numbers.findIndex((a: number): boolean => a === element) == 0 ||
        numbers.findIndex((a: number): boolean => a === element) ==
            numbers.length - 1;
    // const isBookEnd = (element: number): boolean => element > 0;
    const numbersclone = numbers.filter(isBookEnd);
    if (numbers.length == 1) {
        numbersclone.splice(1, 0, numbers[0]);
    }
    return numbersclone;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const numbersclone = numbers.map((element: number): number => element * 3);
    return numbersclone;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const numbersclone = numbers.map((element: string): number =>
        Number(element) ? Number(element) : Number("0")
    );
    return numbersclone;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const numbersclone = amounts
        .map((element: string): string =>
            element[0] == "$" ? element.slice(1) : element
        )
        .map((element: string): number =>
            Number(element) ? Number(element) : Number("0")
        );
    return numbersclone;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const f = messages
        .map((message: string): string =>
            message[message.length - 1] == "!" ? message.toUpperCase() : message
        )
        .filter(
            (message: string): boolean => message[message.length - 1] != "?"
        );
    return f;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return 0;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return false;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    return "";
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    return [];
}