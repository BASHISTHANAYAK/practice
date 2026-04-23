//Day 1 — Variables, Functions, Arrays
let studentArry = [{ name: "r1", marks: 16 }, { name: "r2", marks: 46 }, { name: "r3", marks: 26 }, { name: "r4", marks: 56 }, { name: "r5", marks: 96 }];


//print all name

studentArry.map((names) => console.log(names.name));

//who passed (marks > 40)
let res = studentArry.filter((ele) => ele.marks > 40);

console.log(res)

//get total marks

let totalsum = studentArry.reduce((acc, data) => {
    let mrk = data.marks;
    return mrk + acc

}, 0);
console.log(totalsum)
