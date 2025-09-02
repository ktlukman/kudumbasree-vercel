import { useEffect, useState } from 'react';
import { Headerml } from "./Header"
import axios from "axios"
import { useNavigate, useParams, Link } from 'react-router-dom';
export const Editdetailsml = () => {
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
      navigate('/userslistml');
    }).catch(err => console.log(err));
  }
  const addressdata = "IpSpw_{io kwKaw, Hcp tIcf kÀ¡mÀ Øm]\w , XncpthK¸pd";
  const kdbdet = "IpSpw_{io se hnhc§Ä";
  return (
    <>
    <Headerml />



    <div className="container-fluid">
    <div className="contact__wrapper shadow-lg mt-n9">
        <div className="row no-gutters">
            <div className="col-lg-5 contact-info__wrapper gradient-brand-color p-5 order-lg-2">
                <h3 className="color--white mb-5 ml-normal">R§fpambn _Ôs¸SpI</h3>
    
                <ul className="contact-info__list list-style--none position-relative z-index-101">
                    <li className="mb-4 pl-4">
                        <span className="position-absolute"><i className="bi bi-envelope"></i></span> support@kudumbasree.com
                    </li>
                    <li className="mb-4 pl-4">
                        <span className="position-absolute"><i className="bi bi-telephone"></i></span> (0091)-9036021500
                    </li>
                    <li className="mb-4 pl-4 ml-normal">
                        <span className="position-absolute"><i className="bi bi-geo-alt"></i></span> 
                         {addressdata} 679304
    
                        <div className="mt-3">
                            <a href="https://www.google.com/maps" target="_blank" className="text-link link--right-icon text-white ml-normal">R§fnteIv F¯m³ <i className="link__icon bi bi-sign-turn-right-fill"></i></a>
                        </div>
                    </li>
                </ul>
    
              
            </div>
    
            <div className="col-lg-7 contact-form__wrapper p-5 order-lg-1">
                <form onSubmit={submitHandler}>
        <div className="row">
        <div className="col-12 ml-normal">
          <h6>shàn hnhc§Ä</h6>
        </div>
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label className="form-label ml-normal">BZy t]cv</label>
            <input value={firstname} onChange={(e)=>setFirstname(e.target.value)} type="text" className="form-control" placeholder="First Name" />
            </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label className="form-label ml-normal">Ahkm\ t]cv </label>
            <input value={lastname} onChange={(e)=>setLastname(e.target.value)} type="text" className="form-control" placeholder="First Name" />
            </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label className="form-label ml-normal">samss_Â</label>
            <input value={mobile} onChange={(e)=>setMobile(e.target.value)} type="text" className="form-control" placeholder="First Name" />
            </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label className="form-label ml-normal">P\\ Xn¿Xn</label>
            <input value={dateofbirth} onChange={(e)=>setDateofbirth(e.target.value)} type="date" className="form-control" placeholder="First Name" />
            </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label className="form-label ml-normal">tPmen</label>
            <input value={proffession} onChange={(e)=>setProffession(e.target.value)} type="text" className="form-control" placeholder="First Name" />
            </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label className="form-label ml-normal">hnemkw</label>
            <textarea value={address} onChange={(e)=>setAddress(e.target.value)} className="form-control" placeholder="Permenent Address"></textarea>
            </div>
        </div>
        <h6 className="ml-normal">{kdbdet}</h6>
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label className="form-label ml-normal">tNÀ¶ Znhkw</label>
            <input value={dateofjoin} onChange={(e)=>setDateOfJoin(e.target.value)} type="date" className="form-control" placeholder="First Name" />
            </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label className="form-label ml-normal">Øm\w</label>
            <input value={position} onChange={(e)=>setPosition(e.target.value)} type="text" className="form-control" placeholder="First Name" />
            </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label className="form-label ml-normal">BgvN hcnkwJy</label>
            <input value={weeklyfee} onChange={(e)=>setWeeklyfee(e.target.value)} type="text" className="form-control" placeholder="First Name" />
            </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label className="form-label ml-normal">lmPcmb Znhkw</label>
            <input value={attendence} onChange={(e)=>setattendence(e.target.value)} type="text" className="form-control" placeholder="First Name" />
            </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="mb-3">
            <label className="form-label ml-normal">Ct¸mgs¯ \ne</label>
            <select value={status} onChange={(e)=>setStatus(e.target.value)} className="form-select">
              <option value="Active">Active</option>
              <option value="In Active">In Active</option>
            </select>
            </div>
        </div>
        <div className="col-12 text-end">
          <div className="mb-3">
            <button type="submit" className="btn btn-primary ml-normal">kaÀ¸n¡pI</button>
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
