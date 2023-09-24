import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRouter = () => {

const trainer = useSelector(store => store.trainer)

 if(trainer.length > 2){
  return <Outlet />
 }else {
  return <Navigate to='/' />
 }

}

export default ProtectedRouter