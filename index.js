// Write your solution in this file!
const employee={
    name:"Trevor",
    streetAddress:"Jamu"
}
const updateEmployeeWithKeyAndValue=function(employee,key,value){
    const newObj={...employee}
    newObj[key]=value;
    return newObj
}
const destructivelyUpdateEmployeeWithKeyAndValue=function(employee,key,value){
    employee[key]=value
    return employee
}
const deleteFromEmployeeByKey=function(employee, key){
    const deleted={...employee}
    delete deleted[key]
    return deleted
}
const destructivelyDeleteFromEmployeeByKey=function(employee, key){
    delete employee[key]
    return employee
}