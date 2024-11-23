// 4. Find the Average Salary of Employees
// const employees = [
//     { name: "A", salary: 5000 },
//     { name: "B", salary: 7000 },
//     { name: "C", salary: 6000 },
// ];

 const employees =[
    {
        name: "A", 
        salary: 5000 
    }, 
    { 
        name: "B", 
        salary: 7000 
    },
    { 
        name: "C", 
        salary: 6000 
    }
    
 ]
//  const totalSalary = employees .filter(employees => employees.salary)
// //  .map(employees => employees.salary)
//  .reduce((total,employee) => total + employee.salary,0);
// const averSalary = totalSalary / employees.length;
//  console.log(averSalary)


function checkAveSalary(employees) {
    let totalSalary =0;
    for(let i=0; i < employees.length; i++){
        totalSalary += employees[i].salary;
    }
    const averSalary=totalSalary/employees.length;
    return averSalary;

}
console.log(checkAveSalary(employees));
