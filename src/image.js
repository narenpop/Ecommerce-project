import React from "react"
function Image({className},img){
    return(
       <div className={{className}}>
        <img src={img.url}/>
        </div>
    )
}
export default Image