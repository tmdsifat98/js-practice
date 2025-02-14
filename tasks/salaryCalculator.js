// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

//  const employees = [
//             { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//             { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//             { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//             { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
//         ];

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

// let  salaryChart=[];//!array object er jonno
let salaryChart = {};
for (let employee of employees) {
  let addingFunction = employee.experience * employee.increment;
  let currentSalary = employee.starting + addingFunction;
//   salaryChart.push({ name: employee.name, salary: currentSalary }); //!array te object hisabe dekhabe..
  salaryChart[employee.name] = currentSalary;
}
console.log(salaryChart);
