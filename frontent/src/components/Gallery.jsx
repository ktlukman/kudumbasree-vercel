import glr1 from '../assets/img/4.jpg';
import glr2 from '../assets/img/5.jpg';
import glr3 from '../assets/img/6.jpg';
import glr4 from '../assets/img/7.jpg';
import glr5 from '../assets/img/8.jpg';
import glr6 from '../assets/img/9.jpg';
import glr7 from '../assets/img/10.png';


export const Gallery = () => {
  return (
    <>
    <div className="container">
        <div className="row mt-3">
            <div className="col-6">
                <img src={glr1} alt={glr1} className="img-fluid" />
            </div>
            <div className="col-6">
                <img src={glr2} alt={glr2} className="img-fluid" />
            </div>
            <div className="col-6">
                <img src={glr3} alt={glr3} className="img-fluid" />
            </div>
            <div className="col-6">
                <img src={glr4} alt={glr4} className="img-fluid" />
            </div>
            <div className="col-6">
                <img src={glr5} alt={glr5} className="img-fluid" />
            </div>
            <div className="col-6">
                <img src={glr6} alt={glr6} className="img-fluid" />
            </div>
            <div className="col-12">
                <img src={glr7} alt={glr7} className="img-fluid" />
            </div>
        </div>
    </div>
    </>
  )
}
