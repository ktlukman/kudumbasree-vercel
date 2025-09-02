import { useState } from "react";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { Headerml } from "./Header";
export const Adduserml = () => {
  const [firstname, setFirstname] = useState('User 1');
  const [lastname, setLastname] = useState('UR');
  const [mobile, setMobile] = useState('9876546574');
  const [dateofbirth, setDateofbirth] = useState('');
  const [proffession, setProffession] = useState('No Job');
  const [address, setAddress] = useState('User 1, User Dist');
  const [dateofjoin, setDateofjoin] = useState('');
  const [position, setPosition] = useState('No Position');
  const [weeklyfee, setWeeklyfee] = useState('100');
  const [attendence, setattendence] = useState('105');
  const [status, setStatus] = useState('Active');
  const navigate = useNavigate();
  const submitHandler = (e) =>{
    e.preventDefault();

    axios.post('http://localhost:8081/create', {
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
            <input value={dateofjoin} onChange={(e)=>setDateofjoin(e.target.value)} type="date" className="form-control" placeholder="First Name" />
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
