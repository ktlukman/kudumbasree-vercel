import { useEffect, useState } from 'react';
import { Header } from "./Header"
import axios from "axios"
import { useNavigate, useParams} from 'react-router-dom';
export const Editdetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [mobile, setMobile] = useState('');
    const [dateofbirth, setDateofbirth] = useState('');
    const [proffession, setProffession] = useState('');
    const [address, setAddress] = useState('');
    const [dateofjoin, setDateOfJoin] = useState('');
    const [position, setPosition] = useState('');
    const [weeklyfee, setWeeklyfee] = useState('');
    const [attendence, setattendence] = useState('');
    const [status, setStatus] = useState('');
    const navgateto = useNavigate();
useEffect(()=>{
    axios.get('http://localhost:8081/lister/'+id)
            .then(res => {
                const studentData = res.data;
                console.log(id, studentData.ID);
                if(id != studentData.ID){
                    navgateto('/*');
                    //console.log("true");
                }else{
                    //console.log("false");
                    setFirstname(studentData.FirstName);
                    setLastname(studentData.LastName);
                    setMobile(studentData.Mobile);
                    setDateofbirth(studentData.DateOfBirth);
                    setProffession(studentData.Proffession);
                    setAddress(studentData.Address);
                    setDateOfJoin(studentData.DateOfJoin);
                    setPosition(studentData.Position);
                    setWeeklyfee(studentData.WeeklyFee);
                    setattendence(studentData.AttendenceDays);
                    setStatus(studentData.Status);
                }
                
            })
            .catch(err => console.log(err));
},[id]);

const submitHandler = (e) =>{
    e.preventDefault();
    axios.put('http://localhost:8081/update/'+id, {
      firstname,
      lastname,
      mobile,
      dateofbirth,
      proffession,
      address,
      dateofjoin,
      position,
      weeklyfee,
      attendence,
      status
    }).then(res => {
      console.log(res);
      navigate('/userslist');
    }).catch(err => console.log(err));
  }

  return (
    <>
    <Header />

    <div className="container-fluid">
    <div className="contact__wrapper shadow-lg mt-n9">
        <div className="row no-gutters">
            <div className="col-lg-5 contact-info__wrapper gradient-brand-color p-5 order-lg-2">
                <h3 className="color--white mb-5">Get in Touch</h3>
    
                <ul className="contact-info__list list-style--none position-relative z-index-101">
                    <li className="mb-4 pl-4">
                        <span className="position-absolute"><i className="bi bi-envelope"></i></span> support@kudumbasree.com
                    </li>
                    <li className="mb-4 pl-4">
                        <span className="position-absolute"><i className="bi bi-telephone"></i></span> (0091)-9036021500
                    </li>
                    <li className="mb-4 pl-4">
                        <span className="position-absolute"><i className="bi bi-geo-alt"></i></span> Kudumbasree Sangamam.
                        <br/> A Kerala Govt Initiative
                        <br/> Thiruvegappura 679304
    
                        <div className="mt-3">
                            <a href="https://www.google.com/maps" target="_blank" className="text-link link--right-icon text-white">Get directions <i className="link__icon bi bi-sign-turn-right-fill"></i></a>
                        </div>
                    </li>
                </ul>
    
              
            </div>
    
            <div className="col-lg-7 contact-form__wrapper p-5 order-lg-1">
                <form onSubmit={submitHandler}>
        <div className="row">
        <div className="col-12">
          <h6>Personal Details</h6>
        </div>
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input value={firstname} onChange={(e)=>setFirstname(e.target.value)} type="text" className="form-control" placeholder="First Name" />
            </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input value={lastname} onChange={(e)=>setLastname(e.target.value)} type="text" className="form-control" placeholder="First Name" />
            </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label className="form-label">Mobile</label>
            <input value={mobile} onChange={(e)=>setMobile(e.target.value)} type="text" className="form-control" placeholder="First Name" />
            </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label className="form-label">Date Of Birth</label>
            <input value={dateofbirth} onChange={(e)=>setDateofbirth(e.target.value)} type="date" className="form-control" placeholder="First Name" />
            </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label className="form-label">Proffession</label>
            <input value={proffession} onChange={(e)=>setProffession(e.target.value)} type="text" className="form-control" placeholder="First Name" />
            </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label className="form-label">Permenent Address</label>
            <textarea value={address} onChange={(e)=>setAddress(e.target.value)} className="form-control" placeholder="Permenent Address"></textarea>
            </div>
        </div>
        <h6>Kudumbasree Details</h6>
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label className="form-label">Date Of Join</label>
            <input value={dateofjoin} onChange={(e)=>setDateOfJoin(e.target.value)} type="date" className="form-control" placeholder="First Name" />
            </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label className="form-label">Position</label>
            <input value={position} onChange={(e)=>setPosition(e.target.value)} type="text" className="form-control" placeholder="First Name" />
            </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label className="form-label">Weekly Fee</label>
            <input value={weeklyfee} onChange={(e)=>setWeeklyfee(e.target.value)} type="text" className="form-control" placeholder="First Name" />
            </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label className="form-label">Attendence Days</label>
            <input value={attendence} onChange={(e)=>setattendence(e.target.value)} type="text" className="form-control" placeholder="First Name" />
            </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label className="form-label">Status</label>
            <select value={status} onChange={(e)=>setStatus(e.target.value)} className="form-select">
              <option value="Active">Active</option>
              <option value="In Active">In Active</option>
            </select>
            </div>
        </div>
        <div className="col-12 text-end">
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </div>

        </div>
    </form>
            </div>
    
        </div>
    </div>
</div>




    </>
  )
}
