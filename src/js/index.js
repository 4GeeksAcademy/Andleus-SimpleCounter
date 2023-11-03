//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Counter from "./component/ShowCounter.jsx";

function App(){
    return(
        <div>
            <Counter/>
        </div>
    )
}


window.onload = () => {
    //render your react application
    ReactDOM.render(<App />, document.querySelector("#app"));
}
