import { Headerml } from "./Header"
import { Link } from "react-router-dom";


export const Homeml = () => {
  return (
    <>
    <section className="bg-white home">

<Headerml />
<br/>

 



    <div className="py-lg-14 pt-8 pb-10">
                    

                      <div className="container">
                        <div className="row">
                    

                          <div className="col-md-12 col-12">

             
                            <div className="row gy-4">
                              <Link to='/userslistml' className="text-decoration-none col-xl-3 col-lg-6 col-md-6 col-12">
                          

                                <div className="card  border-top border-muted border-4  card-hover-with-icon">
                         

                                  <div className="card-body">
                              

                                    <div className="icon-shape icon-lg rounded-circle bg-light text-muted mb-3  card-icon"><i className="bi bi-card-checklist"></i></div>
                                    <div className="d-flex align-items-center justify-content-between">
                                      <div>
                                   

                                        <h4 className="mb-0 ml-normal">shàn hnhc§Ä</h4>
                                      

                                        <p className="mb-0 text-muted ml-normal">15 F®w</p>
                                      </div>
                                 

                                      <a href="/#" className="text-inherit">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                                        </svg>
                                      </a>
                                    </div>
                                  </div>

                                </div>

                              </Link>


                              <Link to='/addusersml' className="text-decoration-none col-xl-3 col-lg-6 col-md-6 col-12">
                          

                                <div className="card  border-top border-muted border-4  card-hover-with-icon">
                         

                                  <div className="card-body">
                              

                                    <div className="icon-shape icon-lg rounded-circle bg-light text-muted mb-3  card-icon"><i className="bi bi-person-add"></i></div>
                                    <div className="d-flex align-items-center justify-content-between">
                                      <div>
                                   

                                        <h4 className="mb-0 ml-normal">]pXnbXv tNÀ¡pI</h4>
                                      

                                        <p className="mb-0 text-muted ml-normal">t^mw ]qcn¸n¡pI</p>
                                      </div>
                                 
                                      <a href="/#" className="text-inherit">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                                        </svg>
                                      </a>
                                    </div>
                                  </div>

                                </div>

                              </Link>
                        
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>






    </section>




     </>
  )
}
