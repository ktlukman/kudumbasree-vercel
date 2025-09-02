
import { useContext } from "react"
import {Create} from './Learnermain';
export const Learnsub = () => {
    const propData = useContext(Create);
  return (
    <div>{propData}</div>
  )
}
