const re1 = /a+(?<Z>z)?/d;

// indices are relative to start of the input string:
const s1 = "xaaaz";
const m1 = re1.exec(s1);
m1.indices[0][0] === 1;
m1.indices[0][1] === 5;
console.log(s1.slice(...m1.indices[0]) === "aaaz");

m1.indices[1][0] === 4;
m1.indices[1][1] === 5;
console.log(s1.slice(...m1.indices[1]) === "z");

m1.indices.groups["Z"][0] === 4;
m1.indices.groups["Z"][1] === 5;
console.log(s1.slice(...m1.indices.groups["Z"]) === "z");

// capture groups that are not matched return `undefined`:
const m2 = re1.exec("xaaay");
console.log(m2.indices[1] === undefined);
console.log(m2.indices.groups["Z"] === undefined);
