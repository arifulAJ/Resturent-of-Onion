import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"

const useAught=()=>{
    return useContext(AuthContext)
}
export default useAught;