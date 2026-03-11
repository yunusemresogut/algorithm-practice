/**
 * Problem:
 * https://leetcode.com/problems/complement-of-base-10-integer/
 *
 * Difficulty: Easy
 */

function bitwiseComplement(n: number): number {
    const binary = n.toString(2);
    let flipped = "";
    for (const bit of binary) {
        flipped += bit === "0" ? "1" : "0";
    }

    return parseInt(flipped, 2);
};
