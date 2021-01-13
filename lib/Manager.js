
const Employee = require("../lib/Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    constructor(name, id , email, officeNumber){
      super(name, id, email)
      this.officeNumber = officeNumber

    
     
 } 
 getRole(){
    return "Manager";
    // const 
    
    // console.log()
    // console.log(newE)
}
getOffice(){
    return "1";
    // const 
    
    // console.log()
    // console.log(newE)
}




};

//  const newManager = new Manager()
 module.exports = Manager;