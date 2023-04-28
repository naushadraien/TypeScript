type Employee ={
    birthDay?: Date, //also used here optinal for bithday type
};

function getEmployee(id: number) : Employee | null | undefined{
    return id === 0 ? null : {birthDay: new Date()};
}

let employee = getEmployee(0);


// if(employee !== null && employee !== undefined){

// console.log(employee.birthDay);
// }

//the commented code can also be written with optinal property access operator as ?. where ? is for optinal and . for chaining
console.log(employee?.birthDay?.getFullYear()); //this is the optinal chaining i.e ?.


//optinal array element access operator
//employee?.[0];

//optinal function call operator
 let log: any = null;
 log?.('hello'); //if null then use the optinal chaining operator

