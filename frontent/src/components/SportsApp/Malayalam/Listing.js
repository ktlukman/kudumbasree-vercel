import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from 'react-router-dom';
import { Filtering } from "./Filtering";
import { Headerml } from "./Header";
export const Listingml = () => {
const [list, setList] = useState([]);
const [search, setSearch] = useState('');
const [orderCH, setOrderCH] = useState('');
const [datecontrol, setDatecontrol] = useState('');

useEffect(()=>{
  axios.get('http://localhost:8081/')
  .then(res=>setList(res.data))
  .catch(err => console.log(err))
},[])

const searchHandler = (e) =>{
  setSearch(e.target.value)
}
const changeOrder = (e) => {
  setOrderCH(e.target.value);
}
const datePicker = (e) =>{
  setDatecontrol(e.target.value)
}
let filteredList = list.filter(item => item.FirstName.toLowerCase().includes(search.toLowerCase()) && (datecontrol === '' || item.DOB === datecontrol.split("-").reverse().join("-")));

if(orderCH === 'Descending'){
  filteredList.sort((a,b)=>b.FirstName.localeCompare(a.FirstName))
}else{
  filteredList.sort((a,b)=>a.FirstName.localeCompare(b.FirstName))
}

/* const deletHandler = (e) =>{
  //filteredList.filter(del => e.ID !== del.ID);
  //console.log(filteredList.sort().find(del => e.ID !== del.ID));
  setList(Dellist => Dellist.filter(del=>del.ID !== e));
} */
const deletHandler = async (id) => {
  console.log(id)
  try {
  await axios.delete('http://localhost:8081/users/' + id)
    .then(() => {
      setList(prevList => prevList.filter(item => item.ID !== id));
    })
    .catch(err => console.log(err));
  }catch (err){
    console.log(err)
  }
};



  return (
    <>
    <Headerml />
    <Filtering dateVal={datecontrol} searchVal={search} orderChange={changeOrder} calendarPicker={datePicker} searchfromList={searchHandler} />

    <div className="container mt-5">
      {
        filteredList.map((list)=>{
          return (
            <div className="row mb-3 hr-cards" key={list.ID}>
        <div className="col-4 col-md-8">
          {list.FirstName}
        </div>
        <div className="col-8 col-md-4 text-end">
          <Link to={`/userslistml/${list.ID}`} className="btn btn-primary me-2 ml-normal">ImWpI</Link>

          {/* <button className="btn btn-danger" onClick={()=>deletHandler(list.ID)}>Delete</button> */}
          {/* <button className="btn btn-danger" onClick={deletHandler}>Delete</button> */}

          {/* <Errorpopup errorTrigger={()=>deletHandler(list.ID)} /> */}
          <button className="btn btn-danger ml-normal" data-bs-toggle="modal" data-bs-target={`#statusErrorsModal${list.ID}`}>IfbpI</button>
		<div className="modal fade" id={`statusErrorsModal${list.ID}`} role="dialog" data-bs-backdrop="static" data-bs-keyboard="false"> 
			<div className="modal-dialog modal-dialog-centered modal-sm" role="document"> 
				<div className="modal-content"> 
					<div className="modal-body text-center p-lg-4"> 
                    <i className="bi bi-x-circle text-danger fs-lg"></i>
						<h4 className="text-danger mt-3"><span className="ml-normal">Dd¸mtWm?</span> {list.FirstName}</h4> 
						<button type="button" className="btn btn-sm mt-3 btn-danger ml-normal" onClick={()=>deletHandler(list.ID)} data-bs-dismiss="modal">IfbpI</button>
                        <button type="button" className="btn btn-sm mt-3 btn-secondary ms-2 ml-normal" data-bs-dismiss="modal">CÃ­</button> 
					</div> 
				</div> 
			</div> 
		</div>

        </div>
      </div>
          )
        })
      }
    </div>
    </>
  )
}
