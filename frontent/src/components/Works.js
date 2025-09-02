import { Projectinfo } from './Projectinfo';
export const Works = ({addRef}) => {
    return (
    <>
    <div className="container" ref={addRef}>
        <div className="row">
            <div className="col-12">
            <h3 className="banner">Selected <span>Works</span></h3>
            </div>
        </div>

{Projectinfo.map((data)=>{
    return (
        <div className="card mb-5 card-custom" key={data.id}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={data.projectTumb} className="img-fluid rounded-start" alt={data.projectTumb} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-white">{data.projectName}</h5>
              <p className="card-text">{data.projectDesc}</p>
              <h6 className="text-white">Brand Explanation</h6>
              <p>{data.brandExplanation}</p>
            </div>
          </div>
        </div>
      </div>
    )
})}


    </div>
    </>
  )
}
