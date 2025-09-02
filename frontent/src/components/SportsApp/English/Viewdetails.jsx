import { useEffect, useState } from 'react';
import { Header } from "./Header"
import axios from "axios"
import { useNavigate, useParams, Link } from 'react-router-dom';
import plogo from '../../../assets/img/sports/logo.svg';
export const Viewdetails = () => {
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

  return (
    <>
    <Header />


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
                                    <p className="proile-rating">DateOfBirth : <span>{dateofbirth.split("-").reverse().join("-")}</span></p>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active">About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <Link to={`/userslist/edit/${id}`} className='profile-edit-btn'>Edit Profile</Link>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-4"></div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>User Id</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{id}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{firstname} {lastname}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Nil</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{mobile}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{proffession}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Address</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{address}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h6><b>Kudumbasree Details</b></h6>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Date of Join</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{dateofjoin.split("-").reverse().join("-")}</p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Position</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{position}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Weekly Fee</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{weeklyfee}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Attendence</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{attendence}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Status</label>
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
