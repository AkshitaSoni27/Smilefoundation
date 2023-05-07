import { useEffect,useState } from "react"
import RoutrPage from "./RouterPage/RouterPage"
import Loader from "./view/screen/Loader"
export default function App(){
  const[isvisiable1,setVisible]=useState(true)
useEffect(()=>{

  setTimeout(()=>{
    setVisible(false);
  },2000)
})

  return(
    <>
    {/* {isvisiable1?<Loader/>:
    <RoutrPage />} */}
    <RoutrPage />
    </>
  )
}