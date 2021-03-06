import React from 'react'

function NavigationBar (props) {
  return(
    <div>
    <nav className = "navbar navbar-expand-lg navbar-light bg-black" >
    <div className = "container-fluid" >
    <a className = "navbar-brand"
    href = {props.link} > < p className = "login" > {props.name} ? SignIn < /p>< /a > <
    button className = "navbar-toggler"
    type = "button"
    data-bs-toggle = "collapse"
    data-bs-target = "#navbarNavDropdown"
    aria-controls = "navbarNavDropdown"
    aria-expanded = "false"
    aria-label = "Toggle navigation" >
    <span className = "navbar-toggler-icon" > </span>
    </button >
    <div className = "collapse navbar-collapse"
    id = "navbarNavDropdown" >
    <ul className = "navbar-nav" >
    <li className = "nav-item" >
    <a className = "nav-link active"
    aria-current = "page"
    href = "http://13.56.184.154:3000/" style={{color:"white"}}> Home </a> </li >
    <li className = "nav-item" >
    <a className = "nav-link"
    href = "http://13.56.184.154:3000/CustomerSignup" style={{color:"white"}}> Customer SignUp < /a>
    </li>
    <li className = "nav-item">
    <a className = "nav-link"
    href = "http://13.56.184.154:3000/RestaurantSignup" style={{color:"white"}}> Restaurant SignUp < /a>
    </li>
    <li className = "nav-item dropdown" >
    </li>
    </ul>
    </div>
    </div>
    </nav>
    </div>
  );
}

export default NavigationBar;
