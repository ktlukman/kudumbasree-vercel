import { useEffect, useState } from 'react';
import { Headerml } from "./Header"
import axios from "axios"
import { useNavigate, useParams, Link } from 'react-router-dom';
import plogo from '../../../assets/img/sports/logo.svg';
export const Viewdetailsml = () => {
    const {id} = useParams();
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
    const serverUrl = import.meta.env.VITE_SERVER_URL;
useEffect(()=>{
    axios.get(`${serverUrl}/lister/`+id)
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
const addressdata = "IpSpw_{io kwKaw, Hcp tIcf kÀ¡mÀ Øm]\w , XncpthK¸pd";
  const kdbdet = "IpSpw_{io se hnhc§Ä";
  return (
    <>
    <Headerml />



<div className="container emp-profile">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={plogo} alt=""/>
                            {/* <div className="file btn btn-lg btn-primary">
                                Change Photo
                            </div> */}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h5>
                                        {firstname} {lastname}
                                    </h5>
                                    <h6>
                                        {mobile}
                                    </h6>
                                    <p className="proile-rating"><span className="ml-normal">P\\ Xn¿Xn :</span> <span>{dateofbirth.split("-").reverse().join("-")}</span></p>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active ml-normal">shàn hnhc§Ä</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <Link to={`/userslistml/edit/${id}`} className='profile-edit-btn ml-normal'>hnhc§Ä amämw</Link>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-4"></div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6 ml-normal">
                                                <label>\n§fpsS sFUn</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{id}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 ml-normal">
                                                <label>t]cv</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{firstname} {lastname}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 ml-normal">
                                                <label>CusabnÂ</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Nil</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 ml-normal">
                                                <label>samss_Â</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{mobile}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 ml-normal">
                                                <label>tPmen</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{proffession}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 ml-normal">
                                                <label>hnemkw</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{address}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 ml-normal">
                                                <h6><b>{kdbdet}</b></h6>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 ml-normal">
                                                <label>tNÀ¶ Znhkw</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{dateofjoin.split("-").reverse().join("-")}</p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 ml-normal">
                                                <label>Øm\w</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{position}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 ml-normal">
                                                <label>BgvN hcnkwJy</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{weeklyfee}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 ml-normal">
                                                <label>lmPcmb Znhkw</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{attendence}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 ml-normal">
                                                <label>Ct¸mgs¯ \ne</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{status}</p>
                                            </div>
                                        </div>
                            </div>
                            
                        </div>
                    </div>
                </div>          
        </div>

    </>
  )
}
