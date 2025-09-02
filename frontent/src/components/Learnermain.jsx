import { createContext } from "react"
import { Learnsub } from "./Learnsub";
export const Create = createContext();
export const Learnermain = () => {
  return (
    <>
    <Create.Provider value="Adias">
    <Learnsub />
    </Create.Provider>
    
    </>
  )
}
