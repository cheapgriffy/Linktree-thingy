/**
 * give random number between two inputs.
 * @min
 * @max
 * @returns a random int between the two values 
 */
export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}