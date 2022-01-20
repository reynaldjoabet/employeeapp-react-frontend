import React from "react";
class HeaderComponent extends React.Component{
constructor(props){
    super(props)
  this.state={

  }
}



render(){
    return(
        <div>
<nav className="navbar navbar-expand-md navbar-dark bg-dark"> 

<div>
    <a href="http://localhost:3000/" className="navbar-brand"> Employee Management App</a>
</div>
</nav>

        </div>
    )
}
}

export default HeaderComponent;