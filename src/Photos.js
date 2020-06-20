import React,{useContext} from "react"
import Image from "./image"
import ContextJava from "./Context"

function Photos(){
    const {allPhotos}= useContext(ContextJava)
    const PhotoElements=allPhotos.map((img)=>(
    <Image key={img.id} img={img}/>
    ))
    return(
       <div>
           {PhotoElements}
       </div>
    )
}
export default Photos