

class EmployeeService{
 getEmployees(){
     return fetch('http://localhost:8080/api/v1/employees')
     

 }

 deleteEmployee(employeeId){
    const requestOptions={
        method:'DELETE'
    }
    return fetch(`http://localhost:8080/api/v1/employee/${employeeId}`,requestOptions)
    

}

 addEmployee(employee){
     const requestOptions={
         method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(employee)
     }
     
     return fetch("http://localhost:8080/api/v1/addEmployee",requestOptions)
 }

 getEmployeeById(employeeId){
    
    const url=`http://localhost:8080/api/v1/employee/${employeeId}`
   
    return fetch(url)
}

updateEmployee(employee,employeeId){
    const requestOptions={
        method:'PUT',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify(employee)
    }


    return fetch(`http://localhost:8080/api/v1/employee/${employeeId}`,requestOptions)
}
}


export default new EmployeeService(); // export object of class