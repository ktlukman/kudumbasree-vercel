import "./sports.css";
import MainLogo from "../../assets/img/sports/logo.svg"
import { useState } from "react";
import { Link } from "react-router-dom";
export const Startup = () => {
  return (
    <>
    <section className="bg-white home">
    <div className="container-fluid h-100">
        <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 text-center">
                <img src={MainLogo} alt={MainLogo} className="img-fluid logo mb-3" />
                <h6 className="text-h6">Please Choose Your Preffered Language <br/><span className="ml-bold1">\n§fpsS `mj XncsªSp¡pI</span></h6>
                <p className="text-p">You can Choose Your Prefered Language as Malayalam or English<br/><span className="ml-normal">\n§fpsS `mjbmbn aebmftam Cw¥otjm XncsªSp¡mw </span></p>
                <Link to="/enhome" className="btn btn-success btn-sm button-sports me-2">English</Link>
                <Link to="/mlhome" className="btn btn-success btn-sm button-sports ml-btn ml-bold1">aebmfw</Link>
                </div>
            
        </div>
    </div>
    </section>




     </>
  )
}
