// TODO: Write code to define and export the Employee class
class Employee {
   constructor(name, id , email){
    
    this.name= name;
    this.id = id;
    this.email = email;

};
// method which prints all of the stats for a character
printStats(){
    console.log(`${this.name}`)

    console.log(`${this.id}`)

    console.log(`${this.email}`)

    }
getName(){
    return this.name;
    // const 
    
    // console.log()
    // console.log(newE)
}
getId(){
    return this.id;
    // const 
    
    // console.log()
    // console.log(newE)
}
getEmail(){
    return this.email;
    // const 
    
    // console.log()
    // console.log(newE)
}
getRole(){
    return "Employee";
    // const 
    
    // console.log()
    // console.log(newE)
}


}


module.exports = Employee;



