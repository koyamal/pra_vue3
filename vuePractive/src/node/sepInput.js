const result = [["A", "B"], ["C", "D"], ["E", "F"], ["GH"]];

const [ab, cd, ef] = result;

console.log("ab", ab);
console.log("cd", cd);
console.log("ef", ef);

console.log(...result);

const output = {...result, 'C': 'D', "E": 'F'}

console.log(output);
