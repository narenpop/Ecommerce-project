import React,{useState, useEffect} from "react"
const Context=React.createContext()

export function ContextJava(props){
const [allPhotos,setPhotos]= useState([])

const url="https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

useEffect(()=>{
fetch(url).then(res=>res.json()).then(data=>setPhotos(data))
},[])
   return(
       <Context.Provider value={{allPhotos}}>
          {props.children}
       </Context.Provider>
   )
}
export default Context