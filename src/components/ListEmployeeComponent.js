import React,{Component} from "react";
import EmployeeService from "../services/EmployeeService";



class ListEmployeeComponent extends Component{
    constructor(props){
  super(props)

  this.state={
  employees:[]
  }

  this.addEmployee=this.addEmployee.bind(this);
  this.editEmployee=this.editEmployee.bind(this);
    }

editEmployee(employeId){
    this.props.history.push(`/updateEmployee/${employeId}`);
}



componentDidMount(){

    EmployeeService.getEmployees()
    .then((response)=>response.json())
    .then((response)=>{
        this.setState({employees:response})
    }
    
    )
}

addEmployee(){
    this.props.history.push("/addEmployee");
    
}

    render(){
        return(
            <div>
       <h2 className="text-center"> Employee List</h2>
                    <div className="row"> 
                       <a href="/addEmployee" className="text-left btn btn-primary ">Add Employee</a>
                    </div>
       <div className="row">
      <table className="table table-striped table-bordered">
      <thead>
          <tr>
             <th> Employee Id</th>
              <th> Employee First Name</th>
              <th> Employee Last Name</th>
              <th> Employee Email</th>
              <th> Actions</th>

          </tr>
      </thead>
      <tbody>
          {
              this.state.employees.map(
                          employee=>
             <tr key={employee.employeeId}>
            <td>  {employee.employeeId}</td>
           <td>  {employee.firstName}</td>
           <td>   {employee.lastName}</td>
           <td>  {employee.email } </td>
           <td>  <button onClick={()=>this.editEmployee(employee.employeeId)} className="btn btn-info"> Update</button></td>

             </tr>

              )
          } 
      </tbody>
      </table>
       </div>
            </div>
        )
    }
}


export default ListEmployeeComponent;