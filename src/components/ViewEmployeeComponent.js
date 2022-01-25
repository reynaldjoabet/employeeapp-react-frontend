import React from "react";
import EmployeeService from "../services/EmployeeService";

class ViewEmployeeComponent extends React.Component{
constructor(props){
    super(props)
  this.state={
    employeeId:this.props.match.params.employeeId,
    employee: {}
  }

 EmployeeService.getEmployeeById(this.state.employeeId)
 .then(response=>response.json())
 .then(json=>{
     this.setState({employee:json})
 }) 
}


componentDidMount(){

}

render(){
    return(
        <div>
<div className="card col-md-6 offset-md-3">
    <h3 className="text-center">
View Employee Details
    </h3>
<div className="row">
<label> Employee First Name</label>
<div>{this.state.employee.firstName}</div>
<label> Employee Last Name</label>
<div>{this.state.employee.lastName}</div>
<label> Employee Email Address</label>
<div>{this.state.employee.email}</div>
</div>
</div>
        </div>
    )
}
}

export default ViewEmployeeComponent;