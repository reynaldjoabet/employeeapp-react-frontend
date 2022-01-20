import React from "react";
class FooterComponent extends React.Component{
constructor(props){
    super(props)
  this.state={

  }
}



render(){
    return(
        <div>
<footer className="footer">
<span className="text-muted"> All Rights Reserved {new Date().getFullYear()}</span>
</footer>

        </div>
    )
}
}

export default FooterComponent;