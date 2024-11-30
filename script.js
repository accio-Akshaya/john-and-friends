/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    employees.Map((employee) => {
        if(employee.profession === "developer"){
        console.log(employee);
    }
  });
}
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    employees.forEach((employee) => {
        if(employee.profession === "developer"){
        console.log(employee);
    }
  });
  }
  
  function addData() {
    //Write your code here, just console.log
    const newEmployee = {id:4, name:"susan", age:"20", profession:"intern"} ;
    employees.push(newEmployee);
    console.log(employees);

  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    employees = employees.filter((employee) => employee.profesion !== "admin" );
    console.log(employees);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const newEmployees =[
        {id: 5, name: "Alice", age: 23, profession: "designer" },
        { id: 6, name: "Bob", age: 30, profession: "manager" },
        { id: 7, name: "Charlie", age: 27, profession: "developer"}
    ];
    const concatenateArray = newEmployees.concat(newEmployees);
    console.log(concatenateArray);
  }