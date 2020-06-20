import React from "react"
import {BrowserRouter as Router,Switch,Link,Route} from "react-router-dom"
import Products from "./Products"
import Photos from "./Photos"

function App(){
		
    return(
		<Router>
		
		<div>
		<nav className="navbar">
		<Link id="link1" to="/">Home</Link>
		<Link id="link2" to="/Products">Products</Link>
		</nav>
		<Switch>
			<Route exact path="/" component={Photos}></Route>
			<Route path="/Products" component={Products}></Route>
		</Switch>
		</div>
		</Router>
	)
}
export default App