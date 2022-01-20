import React from "react";
import EmployeeService from "../services/EmployeeService";

class UpdateEmployeeComponent extends React.Component{
constructor(props){
    super(props)
  this.state={
    employeeId:this.props.match.params.employeeId,
        firstName:'',
        lastName:'',
        email:''
  }

  this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
  this.changeEmailHandler=this.changeEmailHandler.bind(this);
  this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
  this.updateEmployee=this.updateEmployee.bind(this);
}


componentDidMount(){
    EmployeeService.getEmployeeById(this.state.employeeId)
    .then((response)=>response.json())
    .then((response)=>{
        let  employee=response;
        this.setState({firstName:employee.firstName,
            lastName: employee.lastName,
            email:employee.email
        
        })
    })
}

 updateEmployee=(e)=>{
     e.preventDefault();
     let employee={
         employeeId:this.state.employeeId,
         firstName: this.state.firstName,
         lastName:this.state.lastName,
         email:this.state.email
     }

 EmployeeService.updateEmployee(employee,this.state.employeeId)
 .then((response)=>response.json())
 .then((response)=>{
     this.props.history.push('/employees');
 })
}


changeFirstNameHandler=(event)=>{
this.setState({firstName:event.target.value})
}
changeLastNameHandler=(event)=>{
    this.setState({lastName:event.target.value})
    }
    changeEmailHandler=(event)=>{
        this.setState({email:event.target.value})
        }


cancel=()=>{
    this.props.history.push("/employees");
        }


render(){
    return(
        <div>
<div className="container">
<div className="row"> 
<div className="card col-md-6 offset-md-3 offset-md-3">
<h3 className="text-center"> Update Employee</h3>
<div className="card-body">

    <form>
        <div className="form-group">
            <label > First Name</label>
            <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.changeFirstNameHandler} ></input>
         
        </div>
        <div className="form-group">
            <label > Last Name</label>
            <input placeholder="Last Name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.changeLastNameHandler}></input>
            
        </div>
        <div className="form-group">
            <label > Email Address</label>
            <input placeholder="Email Address"   name="email" className="form-control" value={this.state.email} onChange={this.changeEmailHandler} ></input>
        </div>

        <button className="btn btn-success" onClick={this.updateEmployee}> Update</button>
        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:'10px'}}> Cancel</button>
    </form>
</div>
</div>
</div>
</div>
     
        </div>
    )
}
}

export default UpdateEmployeeComponent;